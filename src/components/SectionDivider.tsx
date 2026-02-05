import { cn } from "@/lib/utils";

interface SectionDividerProps {
    orientation: "up" | "down";
    className?: string;
}

const SectionDivider = ({ orientation, className }: SectionDividerProps) => {
    return (
        <div className={cn("w-full h-0 relative z-20 flex justify-center items-center", className)}>
            <svg
                width="100%"
                height="120"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute w-full h-[60px] md:h-[130px] pointer-events-none opacity-110"
                style={{ top: "50%", transform: "translateY(-50%)" }}
            >
                <line
                    x1="0"
                    y1={orientation === "up" ? "100" : "0"}
                    x2="100"
                    y2={orientation === "up" ? "0" : "100"}
                    className="stroke-foreground"
                    strokeWidth="0.5"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
};

export default SectionDivider;
