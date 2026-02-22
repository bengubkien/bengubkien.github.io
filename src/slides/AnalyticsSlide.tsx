import { useState } from 'react';
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

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://cdn.dribbble.com/userupload/18230555/file/original-4337707c6074fa00350d1f13a028d5bc.mp4" />

            {/* Dark scrim over video */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />

            <div className="relative z-10 w-full h-full flex flex-col md:flex-row p-[6%] overflow-y-auto md:overflow-hidden pb-[20%] md:pb-[6%] gap-[8%] md:gap-[4%]">

                {/* Left Column: Context Text */}
                <div className="w-full md:w-[40%] flex flex-col shrink-0 h-fit md:sticky md:top-0 text-white mt-[8%] md:mt-[4%] transition-opacity duration-500">
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
                        <div className="absolute left-[12px] md:left-[15px] top-4 md:top-[8px] bottom-4 md:bottom-[8px] w-[1px] bg-white/20 transition-opacity duration-500" />

                        {publications.map((pub, idx) => {
                            const isExpanded = expandedIndex === idx;
                            const isDimmed = expandedIndex !== null && expandedIndex !== idx;

                            return (
                                <div key={idx} className="relative pl-[44px] md:pl-[64px] w-full">
                                    {/* Timeline Node / Dot */}
                                    <div className={`absolute left-[8px] md:left-[11px] top-[20px] w-[9px] h-[9px] rounded-full bg-white ring-4 ring-black/80 z-10 transition-all duration-500 ${isDimmed ? 'opacity-30' : 'opacity-100'}`} />

                                    {/* Card Block */}
                                    <div
                                        onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                                        className={`bg-white/[0.03] backdrop-blur-3xl rounded-2xl p-[clamp(20px,3vw,32px)] transition-all duration-500 cursor-pointer overflow-hidden border ${isExpanded
                                                ? 'border-white/[0.2] shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-[1.02] bg-white/[0.06]'
                                                : isDimmed
                                                    ? 'border-white/[0.04] opacity-40 hover:opacity-60 scale-[0.98]'
                                                    : 'border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.15]'
                                            }`}
                                    >
                                        <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/60 mb-[16px] md:mb-[20px] uppercase flex items-center">
                                            {pub.status}
                                            {isExpanded && (
                                                <>
                                                    <span className="text-white/30 mx-2">·</span>
                                                    <span className="text-white/50">{pub.year}</span>
                                                </>
                                            )}
                                        </div>

                                        <h3 className="text-[clamp(16px,2vw,22px)] font-bold text-white leading-[1.4] mb-[12px] md:mb-[16px]">
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

                                        {/* Expandable Content (Accordion) */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${isExpanded
                                                    ? 'grid-rows-[1fr] opacity-100 mt-[24px] md:mt-[32px] pt-[24px] md:pt-[32px] border-t border-white/10'
                                                    : 'grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent'
                                                }`}
                                        >
                                            <div className="overflow-hidden min-h-0">
                                                <div className="flex flex-col gap-[20px] pb-2">
                                                    <div>
                                                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Journal</span>
                                                        <p className="text-[13px] md:text-[14px] text-white/80 italic mt-1">{pub.journal}</p>
                                                    </div>

                                                    <div>
                                                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Abstract</span>
                                                        <p className="text-[13px] md:text-[14px] text-white/70 leading-[1.7] mt-2 font-light">
                                                            {pub.abstract}
                                                        </p>
                                                    </div>

                                                    {pub.doi && (
                                                        <div className="mt-2 text-left">
                                                            <a
                                                                href={pub.doi}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex items-center gap-2 group border border-white/20 bg-white/5 hover:bg-white border-solid px-[24px] py-[14px] rounded-full transition-all duration-300"
                                                            >
                                                                <span className="text-[13px] font-semibold text-white group-hover:text-black tracking-wide">Read Full Paper</span>
                                                                <ExternalLink size={14} className="text-white group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
