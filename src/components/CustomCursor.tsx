import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      cursorRef.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;

      // UNIVERSAL CLICKABLE DETECTION
      const isClickable =
        target.matches("button, a, [role='button']") ||
        target.closest("button, a, [role='button']") ||
        getComputedStyle(target).cursor === "pointer";

      setIsHovering(Boolean(isClickable));

    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  // Smooth animation loop
  useEffect(() => {
    const animateCursor = () => {
      const { x: targetX, y: targetY } = cursorRef.current;

      setPosition((prev) => {
        const lerpFactor = 0.2; // smoothness
        const newX = prev.x + (targetX - prev.x) * lerpFactor;
        const newY = prev.y + (targetY - prev.y) * lerpFactor;
        return { x: newX, y: newY };
      });

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200 ease-out",
        isHovering ? "scale-[3.5]" : "scale-100"
      )}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
};

export default CustomCursor;
