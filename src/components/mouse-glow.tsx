"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="absolute h-[500px] w-[500px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, oklch(0.7 0.22 38 / 0.12) 0%, transparent 70%)",
                    left: position.x - 250,
                    top: position.y - 250,
                    transition: "left 0.15s ease-out, top 0.15s ease-out",
                }}
            />
        </div>
    );
}
