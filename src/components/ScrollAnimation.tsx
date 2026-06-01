import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollAnimation = ({
  children,
  className = "",
}: ScrollAnimationProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
