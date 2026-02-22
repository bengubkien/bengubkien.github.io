import { useState, useEffect, useCallback } from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { ExternalLink, X } from 'lucide-react';

interface Publication {
    status: string;
    title: string;
    description: string;
    tags: string[];
    abstract: string;
    year: string;
    journal: string;
    doi?: string;
}

export function ResearchSlide() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);
    const [drawerRect, setDrawerRect] = useState<DOMRect | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // We use a separate state to handle full unmount
    const [mountedModalIndex, setMountedModalIndex] = useState<number | null>(null);

    const publications: Publication[] = [
        {
            status: "PUBLISHED",
            title: "Decoupled Adaptive Super-Twisting Control of Hybrid Energy Storage Systems for Electric Vehicles",
            description: "Designed a decoupled adaptive super-twisting controller enabling independent regulation of battery and supercapacitor currents in electric vehicle hybrid energy storage, with finite-time convergence guarantees.",
            tags: ["Adaptive Control", "Lyapunov", "Electric Vehicles"],
            abstract: "This paper proposes a decoupled adaptive super-twisting sliding mode controller for hybrid energy storage systems in electric vehicles. The controller independently regulates both battery and supercapacitor currents through separate control channels, achieving finite-time convergence while rejecting matched and unmatched disturbances. Lyapunov stability analysis confirms the robustness of the approach under parametric uncertainty and load variations.",
            year: "2024",
            journal: "Journal of Power Sources",
            doi: "https://doi.org/10.1016/example1"
        },
        {
            status: "PUBLISHED",
            title: "Thermal Model Reduction for Real-Time BMS",
            description: "Developed reduced-order Li-ion models via steady-state moment matching for accurate, real-time temperature estimation within computational limits.",
            tags: ["Thermal Modeling", "Model Reduction", "BMS"],
            abstract: "We present a model order reduction technique based on steady-state moment matching for lithium-ion battery thermal dynamics. The reduced-order model preserves key thermal behavior while dramatically lowering computational cost, making it suitable for deployment in embedded battery management systems. Validation against full-order electrochemical-thermal models demonstrates high fidelity across diverse operating conditions.",
            year: "2024",
            journal: "Applied Thermal Engineering",
            doi: "https://doi.org/10.1016/example2"
        },
        {
            status: "IN PROGRESS",
            title: "Degradation-Aware Energy Management for Hybrid Energy Storage Systems: A Learning-Based Thermal-Optimal Approach",
            description: "Combining Pontryagin's Minimum Principle with neural network approximation for a real-time energy management strategy that minimizes battery degradation while maintaining optimal thermal behavior.",
            tags: ["Neural Networks", "PMP", "Degradation", "Thermal"],
            abstract: "This work formulates the energy management problem for hybrid energy storage systems as a multi-objective optimal control problem. Pontryagin's Minimum Principle provides the theoretical framework, while a neural network approximates the resulting co-state dynamics for real-time implementation. The strategy explicitly accounts for battery degradation mechanisms and thermal constraints, achieving a balance between performance, longevity, and computational feasibility.",
            year: "2025",
            journal: "In preparation"
        },
        {
            status: "IN PROGRESS",
            title: "Optimal Sensor Fusion for Hybrid Sensorless PMSM Control: A Variational Approach to HFI-STO Transition",
            description: "Designing a variational framework for optimal fusion of high-frequency injection and sliding-mode observer estimates in sensorless PMSM drives, targeting seamless full-speed-range operation.",
            tags: ["Sensor Fusion", "PMSM", "HFI", "Sensorless"],
            abstract: "This paper introduces a variational optimization framework for fusing high-frequency injection (HFI) and sliding-mode observer (STO) position estimates in sensorless permanent magnet synchronous motor drives. The approach eliminates the abrupt handoff between low-speed and high-speed estimation methods, instead computing an optimal, continuously weighted fusion across the entire speed range. Simulation and experimental results demonstrate smooth transitions and improved position estimation accuracy.",
            year: "2025",
            journal: "In preparation"
        }
    ];

    // Compute Drawer Target Box dynamically
    useEffect(() => {
        const updateDrawerRect = () => {
            if (typeof window === 'undefined') return;
            // Mobile: 100% width. Desktop: 40vw, min 450px, max 700px.
            const w = window.innerWidth;
            const h = window.innerHeight;
            const isMobile = w < 768;
            const width = isMobile ? w : Math.max(450, Math.min(700, w * 0.45));
            const left = isMobile ? 0 : w - width;

            // Re-create a light DOMRect-like object mathematically
            const rect = {
                top: 0,
                left: left,
                width: width,
                height: h,
                bottom: h,
                right: w,
                x: left,
                y: 0,
                toJSON: () => { }
            } as DOMRect;

            setDrawerRect(rect);
        };

        updateDrawerRect();
        window.addEventListener('resize', updateDrawerRect);
        return () => window.removeEventListener('resize', updateDrawerRect);
    }, []);

    const handleExpand = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setOriginRect(rect);
        setMountedModalIndex(idx);
        setExpandedIndex(idx);

        // Wait for React to render the initial un-animated fixed modal at rect position, 
        // then trigger the CSS morph to drawer layout
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        });
    };

    const closeExpanded = useCallback(() => {
        setIsAnimating(false);
        setExpandedIndex(null);
        // Wait for the 600ms CSS transition to finish before fully unmounting the modal
        setTimeout(() => {
            setMountedModalIndex(null);
            setOriginRect(null);
        }, 600);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeExpanded();
        };
        if (expandedIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Stop scrolling behind overlay
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [expandedIndex, closeExpanded]);

    // Determines the live styles for the transitioning morph modal
    const getModalStyle = () => {
        if (!originRect || !drawerRect) return {};

        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

        return {
            position: 'fixed' as const,
            top: isAnimating ? drawerRect.top : originRect.top,
            left: isAnimating ? drawerRect.left : originRect.left,
            width: isAnimating ? drawerRect.width : originRect.width,
            height: isAnimating ? drawerRect.height : originRect.height,
            borderRadius: isAnimating ? (isMobile ? '0px' : '32px 0 0 32px') : '16px',
            // Keep background / styles uniform through transition using tailwind className 'card-glass'
        };
    };

    const renderCardContent = (pub: Publication) => (
        <div className="flex flex-col h-full pointer-events-none">
            <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/60 mb-[16px] md:mb-[20px] uppercase">
                {pub.status}
            </div>

            <h3 className="text-[clamp(16px,2vw,22px)] font-bold text-white leading-[1.4] mb-[12px] md:mb-[16px]">
                {pub.title}
            </h3>

            <p className="text-[clamp(13px,1.2vw,15px)] text-white/60 leading-[1.6] mb-[20px] md:mb-[24px]">
                {pub.description}
            </p>

            <div className="flex flex-wrap gap-[8px] md:gap-[10px] mt-auto">
                {pub.tags.map(t => (
                    <span
                        key={t}
                        className="px-[12px] py-[6px] md:px-[14px] md:py-[8px] rounded-lg border border-white/[0.08] text-white/50 text-[10px] md:text-[11px] font-medium tracking-wide"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );

    const pub = mountedModalIndex !== null ? publications[mountedModalIndex] : null;

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://cdn.dribbble.com/userupload/18230555/file/original-4337707c6074fa00350d1f13a028d5bc.mp4" />

            {/* Dark scrim over video */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />

            <div className="relative z-10 w-full h-full flex flex-col md:flex-row p-[6%] overflow-y-auto md:overflow-hidden pb-[20%] md:pb-[6%] gap-[8%] md:gap-[4%]">

                {/* Left Column: Context Text */}
                <div className="w-full md:w-[40%] flex flex-col shrink-0 h-fit md:sticky md:top-0 text-white mt-[8%] md:mt-[4%]">
                    <h2 className="text-[clamp(32px,6vw,64px)] tracking-tight leading-[1.05] font-bold mb-[8%] md:mb-[6%]">
                        Research &amp;<br />Publications
                    </h2>
                    <p className="text-[clamp(14px,1.3vw,18px)] text-white/70 leading-[1.7] max-w-[95%]">
                        My research lies at the intersection of modern nonlinear control theory and power electronics, strictly applied to the mobility sector.
                        I focus on developing mathematically rigorous, robust algorithms that maximize energy efficiency, hybrid storage longevity, and powertrain performance in electric vehicles without sacrificing computational feasibility or safety.
                    </p>
                </div>

                {/* Right Column: Timeline Grid */}
                <div className="w-full md:w-[60%] flex-1 md:overflow-y-auto md:pr-[2%] hide-scrollbar">

                    <div className="relative flex flex-col gap-[clamp(24px,4vw,32px)] w-full py-[4%] md:py-[2%]">
                        {/* Vertical Timeline Track */}
                        <div className="absolute left-[12px] md:left-[15px] top-4 md:top-[8px] bottom-4 md:bottom-[8px] w-[1px] bg-white/20" />

                        {publications.map((item, idx) => (
                            <div key={idx} className="relative pl-[44px] md:pl-[64px] w-full">
                                {/* Timeline Node / Dot */}
                                <div className="absolute left-[8px] md:left-[11px] top-[20px] w-[9px] h-[9px] rounded-full bg-white ring-4 ring-black/80 z-10" />

                                {/* Card Block - Turns invisible while its modal clone is morphing */}
                                <div
                                    onClick={(e) => handleExpand(idx, e)}
                                    className={`bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl rounded-2xl p-[clamp(20px,3vw,32px)] transition-all duration-300 cursor-pointer group hover:bg-white/[0.05] hover:border-white/[0.15] ${mountedModalIndex === idx ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                        }`}
                                >
                                    {renderCardContent(item)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Backdrop for the Morphing Drawer Overlay */}
            <div
                className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] cursor-pointer transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${expandedIndex !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeExpanded}
            />

            {/* Morphing Drawer Modal */}
            {mountedModalIndex !== null && pub && (
                <div
                    style={getModalStyle()}
                    className={`fixed z-[100] card-glass overflow-hidden shadow-2xl transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${!isAnimating ? 'hover:bg-white/[0.05] border-white/[0.08]' : 'bg-black/40 border-l border-white/[0.08]'
                        }`}
                >
                    {/* Collapsed Original State Layer (Fades out flawlessly as it grows) */}
                    <div
                        className={`absolute inset-0 p-[clamp(20px,3vw,32px)] pointer-events-none transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'
                            }`}
                    >
                        {renderCardContent(pub)}
                    </div>

                    {/* True Expanded Drawer Content Layer (Fades in slightly late for silky UX) */}
                    <div
                        className={`absolute inset-0 p-[clamp(32px,5vw,64px)] overflow-y-auto hide-scrollbar flex flex-col transition-opacity duration-[500ms] delay-[150ms] ${isAnimating ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                            }`}
                    >
                        <button onClick={closeExpanded} className="absolute top-[24px] right-[24px] md:top-[32px] md:right-[32px] p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-[110] backdrop-blur-md">
                            <X size={20} className="text-white" />
                        </button>

                        {/* Extended Meta */}
                        <div className="flex items-center gap-3 mb-[24px] md:mb-[32px] pt-8 md:pt-0">
                            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-[#3edcc5] uppercase">
                                {pub.status}
                            </span>
                            <span className="text-[10px] md:text-[11px] text-white/30">·</span>
                            <span className="text-[10px] md:text-[11px] font-medium text-white/50">
                                {pub.year}
                            </span>
                        </div>

                        {/* Extended Title */}
                        <h3 className="text-[clamp(24px,4vw,36px)] md:text-[clamp(28px,2.5vw,40px)] font-bold text-white leading-[1.2] mb-[24px] md:mb-[32px] pr-8">
                            {pub.title}
                        </h3>

                        {/* Extended Journal Details */}
                        <div className="flex flex-col gap-[12px] mb-[32px] md:mb-[48px] p-[20px] md:p-[24px] bg-white/[0.02] rounded-2xl border border-white/[0.04]">
                            <div className="flex items-center gap-3">
                                <div className="w-[4px] h-[24px] bg-[#3edcc5] rounded-full" />
                                <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-white/40 uppercase">Journal Context</span>
                            </div>
                            <p className="text-[clamp(14px,3vw,16px)] md:text-[clamp(14px,1vw,16px)] text-white/80 font-medium pl-4">
                                Pre-print for <span className="text-white font-semibold italic">"{pub.journal}"</span>
                            </p>
                        </div>

                        {/* Extended Abstract Section */}
                        <h4 className="text-[12px] md:text-[13px] font-bold tracking-[0.15em] text-white/40 uppercase mb-[16px]">Full Abstract</h4>
                        <p className="text-[clamp(14px,3vw,18px)] md:text-[clamp(15px,1.2vw,18px)] text-white/80 leading-[1.8] mb-[48px] font-light">
                            {pub.abstract}
                        </p>

                        {/* Extended Tags */}
                        <div className="flex flex-wrap gap-[8px] md:gap-[10px] mb-[48px]">
                            {pub.tags.map(t => (
                                <span
                                    key={t}
                                    className="px-[14px] py-[8px] rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/70 text-[11px] md:text-[12px] font-semibold tracking-wide"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-auto pt-8">
                            {pub.doi ? (
                                <a
                                    href={pub.doi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center gap-3 w-full bg-white text-black py-[20px] rounded-[20px] transition-all duration-300 hover:bg-[#3edcc5] hover:scale-[1.02] shadow-[0_0_40px_rgba(62,220,197,0.3)] hover:shadow-[0_0_60px_rgba(62,220,197,0.5)]"
                                >
                                    <span className="text-[15px] md:text-[16px] font-bold tracking-wide">Read Full Paper</span>
                                    <ExternalLink size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            ) : (
                                <div className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 text-white/50 py-[18px] rounded-[20px] cursor-not-allowed">
                                    <span className="text-[14px] md:text-[15px] font-medium tracking-wide">Paper Unavailable (In Progress)</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
