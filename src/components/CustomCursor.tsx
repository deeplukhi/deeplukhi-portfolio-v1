import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(
    () => window.matchMedia("(pointer: coarse)").matches
  );

  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);

    // Enhanced function to detect interactive elements
    const isInteractiveElement = (element: HTMLElement): boolean => {
      if (!element) return false;

      // Check element itself
      const tagName = element.tagName.toLowerCase();
      const role = element.getAttribute('role');
      const cursorStyle = getComputedStyle(element).cursor;
      const hasPointerClass = element.classList?.contains('card') ||
        element.classList?.contains('btn-custom') ||
        element.classList?.contains('skill-tag') ||
        element.classList?.contains('project-card') ||
        element.classList?.contains('contact-link') ||
        element.classList?.contains('nav-link') ||
        element.classList?.contains('cursor-hover-element');

      // Direct element checks
      if (
        tagName === 'button' ||
        tagName === 'a' ||
        tagName === 'input' ||
        tagName === 'textarea' ||
        tagName === 'select' ||
        role === 'button' ||
        role === 'link' ||
        cursorStyle === 'pointer' ||
        cursorStyle === 'grab' ||
        cursorStyle === 'text' ||
        hasPointerClass
      ) {
        return true;
      }

      // Check if element has click handler
      const hasOnClick = element.hasAttribute('onclick') ||
        element.onclick !== null ||
        element.getAttribute('onmouseenter') !== null;

      // Check if element is inside an interactive container
      const closestInteractive = element.closest(
        'button, a, [role="button"], [role="link"], .card, .btn-custom, .skill-tag, .project-card, .nav-link, .contact-link, [onclick], [data-cursor="hover"]'
      );

      return Boolean(hasOnClick || closestInteractive);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      cursorRef.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const isClickable = isInteractiveElement(target);

      setIsHovering(isClickable);
    };

    // Add mouseenter/mouseleave listeners to specific elements for more reliable detection
    const setupInteractiveListeners = () => {
      const interactiveSelectors = [
        'button',
        'a',
        '.card',
        '.btn-custom',
        '.skill-tag',
        '.project-card',
        '.contact-link',
        '.nav-link',
        '[role="button"]',
        '[role="link"]',
        '[onclick]',
        '[data-cursor="hover"]'
      ];

      interactiveSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
          element.addEventListener('mouseenter', () => setIsHovering(true));
          element.addEventListener('mouseleave', () => setIsHovering(false));

          // Add visual feedback to element itself
          element.classList.add('cursor-hover-element');
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Setup listeners after a brief delay to ensure DOM is ready
    setTimeout(setupInteractiveListeners, 100);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      // Cleanup event listeners
      const interactiveSelectors = [
        'button',
        'a',
        '.card',
        '.btn-custom',
        '.skill-tag',
        '.project-card',
        '.contact-link',
        '.nav-link',
        '[role="button"]',
        '[role="link"]',
        '[onclick]',
        '[data-cursor="hover"]'
      ];

      interactiveSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
          element.removeEventListener('mouseenter', () => setIsHovering(true));
          element.removeEventListener('mouseleave', () => setIsHovering(false));
        });
      });
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

  if (!isVisible || isTouchDevice) return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-150 ease-out",
        isHovering
          ? "scale-[8] w-16 h-16 opacity-100 border-2 border-white/30"
          : "scale-100 opacity-90"
      )}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transformOrigin: 'center',
        
      }}
    />
  );
};

export default CustomCursor;