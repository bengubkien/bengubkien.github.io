
import { useState, useEffect, useCallback } from 'react';
import { VideoBackground } from '../components/VideoBackground';
import { ExternalLink } from 'lucide-react';

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

    const closeExpanded = useCallback(() => {
        setExpandedIndex(null);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeExpanded();
        };
        if (expandedIndex !== null) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [expandedIndex, closeExpanded]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://cdn.dribbble.com/userupload/18230555/file/original-4337707c6074fa00350d1f13a028d5bc.mp4" />

            {/* Dark scrim over video for contrast */}
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

                        {publications.map((pub, idx) => (
                            <div key={idx} className="relative pl-[44px] md:pl-[64px] w-full">
                                {/* Timeline Node / Dot */}
                                <div className="absolute left-[8px] md:left-[11px] top-[20px] w-[9px] h-[9px] rounded-full bg-white ring-4 ring-black/80 z-10" />

                                {/* Card Block */}
                                <div
                                    onClick={() => setExpandedIndex(idx)}
                                    className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl rounded-2xl p-[clamp(20px,3vw,32px)] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15] cursor-pointer group"
                                >
                                    <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/60 mb-[16px] md:mb-[20px] uppercase">
                                        {pub.status}
                                    </div>

                                    <h3 className="text-[clamp(16px,2vw,22px)] font-bold text-white leading-[1.4] mb-[12px] md:mb-[16px] group-hover:text-white/90 transition-colors">
                                        {pub.title}
                                    </h3>

                                    <p className="text-[clamp(13px,1.2vw,15px)] text-white/60 leading-[1.6] mb-[20px] md:mb-[24px]">
                                        {pub.description}
                                    </p>

                                    <div className="flex flex-wrap gap-[8px] md:gap-[10px]">
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Expanded Card Modal Overlay */}
            <div
                className={`fixed inset-0 z-[100] flex items-center justify-center p-[4%] transition-all duration-300 ${expandedIndex !== null
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeExpanded}
            >
                {/* Blurred backdrop */}
                <div className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${expandedIndex !== null ? 'opacity-100' : 'opacity-0'
                    }`} />

                {/* Expanded Card */}
                {expandedIndex !== null && (
                    <div
                        className={`relative z-10 w-full max-w-[600px] max-h-[85vh] overflow-y-auto hide-scrollbar card-glass rounded-3xl p-[clamp(28px,5vw,48px)] transition-all duration-300 ${expandedIndex !== null
                                ? 'scale-100 opacity-100 translate-y-0'
                                : 'scale-95 opacity-0 translate-y-4'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Status + Year */}
                        <div className="flex items-center gap-3 mb-[20px] md:mb-[24px]">
                            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">
                                {publications[expandedIndex].status}
                            </span>
                            <span className="text-[10px] md:text-[11px] text-white/30">·</span>
                            <span className="text-[10px] md:text-[11px] font-medium text-white/50">
                                {publications[expandedIndex].year}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[clamp(20px,4vw,28px)] md:text-[clamp(20px,2vw,28px)] font-bold text-white leading-[1.3] mb-[16px] md:mb-[20px]">
                            {publications[expandedIndex].title}
                        </h3>

                        {/* Journal */}
                        <p className="text-[clamp(12px,3vw,15px)] md:text-[clamp(12px,1vw,15px)] text-white/40 font-medium italic mb-[20px] md:mb-[28px]">
                            {publications[expandedIndex].journal}
                        </p>

                        {/* Abstract */}
                        <p className="text-[clamp(13px,3vw,16px)] md:text-[clamp(13px,1.1vw,16px)] text-white/70 leading-[1.7] mb-[24px] md:mb-[32px]">
                            {publications[expandedIndex].abstract}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-[8px] md:gap-[10px] mb-[20px] md:mb-[24px]">
                            {publications[expandedIndex].tags.map(t => (
                                <span
                                    key={t}
                                    className="px-[12px] py-[6px] md:px-[14px] md:py-[8px] rounded-lg border border-white/[0.1] text-white/50 text-[10px] md:text-[11px] font-medium tracking-wide"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* DOI Link (only if available) */}
                        {publications[expandedIndex].doi && (
                            <a
                                href={publications[expandedIndex].doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-[clamp(12px,3vw,14px)] md:text-[clamp(12px,1vw,14px)] font-medium transition-colors duration-200"
                            >
                                View Paper <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
