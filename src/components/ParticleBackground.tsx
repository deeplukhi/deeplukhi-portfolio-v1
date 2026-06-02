import { useEffect, useRef } from "react";

interface Point {
  ox: number;
  oy: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
}

const PADDING = 0.85;

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, vx: 0, vy: 0, px: -9999, py: -9999 });
  const timeRef = useRef(0);
  const gridRef = useRef<Point[][]>([]);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cols = 50;
    let rows = 30;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.max(30, Math.floor(canvas.width / 22));
      rows = Math.max(18, Math.floor(canvas.height / 22));
      initGrid();
    };

    const initGrid = () => {
      const spacingX = canvas.width / (cols - 1);
      const spacingY = canvas.height / (rows - 1);
      const ox = (canvas.width - canvas.width * PADDING) / 2;
      const oy = (canvas.height - canvas.height * PADDING) / 2;
      const grid: Point[][] = [];
      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          const px = ox + c * (canvas.width * PADDING) / (cols - 1);
          const py = oy + r * (canvas.height * PADDING) / (rows - 1);
          grid[r][c] = { ox: px, oy: py, x: px, y: py, z: 0, vx: 0, vy: 0 };
        }
      }
      gridRef.current = grid;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouse = (x: number, y: number) => {
      const m = mouseRef.current;
      m.px = m.x;
      m.py = m.y;
      m.x = x;
      m.y = y;
      m.vx = m.x - m.px;
      m.vy = m.y - m.py;
    };

    const handleMouseMove = (e: MouseEvent) => onMouse(e.clientX, e.clientY);
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, vx: 0, vy: 0, px: -9999, py: -9999 };
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      onMouse(t.clientX, t.clientY);
    };
    const handleTouchEnd = () => {
      mouseRef.current = { x: -9999, y: -9999, vx: 0, vy: 0, px: -9999, py: -9999 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    const animate = () => {
      const t = timeRef.current++;
      const mouse = mouseRef.current;
      const grid = gridRef.current;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = grid[r][c];
          const nx = c / (cols - 1);
          const ny = r / (rows - 1);

          const baseZ =
            Math.sin(nx * 4 + t * 0.012) * Math.cos(ny * 3 + t * 0.008) * 18 +
            Math.sin(nx * 7 + ny * 5 + t * 0.006) * 12 +
            Math.sin(nx * 12 + t * 0.015) * Math.cos(ny * 10 + t * 0.011) * 8;

          const dx = mouse.x - p.ox;
          const dy = mouse.y - p.oy;
          const dist2 = dx * dx + dy * dy;
          const radius = 220;
          const radius2 = radius * radius;

          let mousePush = 0;
          let mousePullX = 0;
          let mousePullY = 0;
          if (dist2 < radius2 && dist2 > 1) {
            const dist = Math.sqrt(dist2);
            const force = (1 - dist / radius);
            const smooth = Math.sin(force * Math.PI * 0.8);
            mousePush = smooth * 50;
            mousePullX = (dx / dist) * smooth * 6;
            mousePullY = (dy / dist) * smooth * 6;
          }

          const targetZ = baseZ + mousePush;
          p.z += (targetZ - p.z) * 0.08;
          p.vx += mousePullX * 0.06 + (p.ox - p.x) * 0.008;
          p.vy += mousePullY * 0.06 + (p.oy - p.y) * 0.008;
          p.vx *= 0.88;
          p.vy *= 0.88;
          p.x += p.vx;
          p.y += p.vy;
        }
      }

      const zMin = -30;
      const zMax = 70;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = grid[r][c];
          const zNorm = Math.max(0, Math.min(1, (p.z - zMin) / (zMax - zMin)));
          const size = 1.2 + zNorm * 2.8;
          const alpha = 0.15 + zNorm * 0.7;

          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,0,0,${alpha * 0.08})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,0,0,${alpha})`;
          ctx.fill();
        }
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = grid[r][c];
          const zNorm = Math.max(0, Math.min(1, (p.z - zMin) / (zMax - zMin)));

          if (c < cols - 1) {
            const q = grid[r][c + 1];
            const avgZ = ((p.z + q.z) / 2 - zMin) / (zMax - zMin);
            const a = Math.max(0, Math.min(1, 0.04 + avgZ * 0.4));
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,0,0,${a})`;
            ctx.lineWidth = 0.3 + avgZ * 1.2;
            ctx.stroke();
          }
          if (r < rows - 1) {
            const q = grid[r + 1][c];
            const avgZ = ((p.z + q.z) / 2 - zMin) / (zMax - zMin);
            const a = Math.max(0, Math.min(1, 0.04 + avgZ * 0.4));
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,0,0,${a})`;
            ctx.lineWidth = 0.3 + avgZ * 1.2;
            ctx.stroke();
          }
        }
      }

      const mDist = Math.sqrt(
        (mouse.x - mouse.px) ** 2 + (mouse.y - mouse.py) ** 2
      );
      if (mDist > 1 && mouse.x > -500) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        grad.addColorStop(0, "rgba(0,0,0,0.04)");
        grad.addColorStop(0.5, "rgba(0,0,0,0.02)");
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(mouse.x - 180, mouse.y - 180, 360, 360);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default ParticleBackground;
