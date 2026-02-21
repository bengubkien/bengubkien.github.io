import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface PresentationProps {
    children: React.ReactNode[];
}

export function Presentation({ children }: PresentationProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [controlsVisible, setControlsVisible] = useState(true);
    const totalSlides = React.Children.count(children);
    const containerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }, []);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'f':
                case 'F':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case 'Escape':
                    if (document.fullscreenElement) {
                        document.exitFullscreen();
                    }
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, toggleFullscreen]);

    // Auto-hide controls
    useEffect(() => {
        const handleMouseMove = () => {
            setControlsVisible(true);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setControlsVisible(false);
            }, 3000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        // Initial trigger
        handleMouseMove();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-screen h-screen bg-black text-white overflow-hidden font-sans"
        >
            {/* Slides */}
            {React.Children.map(children, (child, index) => {
                const isCurrent = index === currentSlide;
                const isPast = index < currentSlide;
                const isFuture = index > currentSlide;

                let transform = 'scale(1)';
                let opacity = isCurrent ? 1 : 0;
                let pointerEvents: 'auto' | 'none' = isCurrent ? 'auto' : 'none';

                if (isPast) {
                    transform = 'scale(0.95)';
                } else if (isFuture) {
                    transform = 'scale(1.05)';
                }

                return (
                    <div
                        className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out"
                        style={{
                            opacity,
                            transform,
                            pointerEvents,
                            zIndex: isCurrent ? 10 : 0
                        }}
                    >
                        {child}
                    </div>
                );
            })}

            {/* Bottom navigation bar */}
            <div
                className={`absolute bottom-[4%] left-[4%] right-[4%] flex items-center justify-between z-50 transition-opacity duration-300 ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {/* Left: Counter */}
                <div className="text-[13px] text-white/50 tabular-nums font-medium tracking-wide">
                    {(currentSlide + 1).toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
                </div>

                {/* Center: Progress Dots */}
                <div className="flex items-center gap-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-[6px] rounded-full transition-all duration-300 ${i === currentSlide
                                ? 'w-[24px] bg-white/90'
                                : 'w-[6px] bg-white/30'
                                }`}
                        />
                    ))}
                </div>

                {/* Right: Controls */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={prevSlide}
                        className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="w-[1px] h-4 bg-white/20 mx-2" />

                    <button
                        onClick={toggleFullscreen}
                        className="p-2 text-white/50 hover:text-white/90 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <Maximize size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
