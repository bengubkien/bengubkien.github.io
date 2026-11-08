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
            title: "Analysis and Assessment of Hybrid Topologies for Energy Storage Systems Oriented for Electric Vehicles: An Experimental Case Study on Supercapacitors and a High Energy Density Device",
            description: "Experimental analysis of hybrid supercapacitor/battery topologies with tailored control strategies to overcome the contrasting limitations of individual energy storage devices in EV applications.",
            tags: ["Hybrid Storage", "Supercapacitors", "Topologies", "Renewable Energy"],
            abstract: "Hybrid energy storage systems consist of two or more types of energy storage technologies, usually including batteries and supercapacitors. The complementary characteristics of these hybrid systems make them outperform any individual energy storage device, depending on the energy requirements of the application in different scenarios or under certain conditions. This work introduces a variety of different energy storage systems, while later on different topologies composed of supercapacitors and an energy-dense device are experimentally analyzed to solve their contrasting limitations. Additionally, a control strategy is implemented in each topology to regulate energy distribution, enhancing system performance under varying load conditions. Finally, the results are presented and discussed, validating the effectiveness of the proposed hybrid topologies in mitigating the limitations of individual energy storage devices.",
            year: "2025",
            journal: "Clean Energy Science and Technology, Vol. 3, Issue 1",
            doi: "https://doi.org/10.18686/cest314"
        },
        {
            status: "ACCEPTED",
            title: "Control-Oriented Thermal Model Reduction of LiFePO4 Battery Packs via Moment Matching",
            description: "Reduced a 192-state distributed thermal model of a 96-cell LiFePO4 module to a 5-state control-oriented model (97.4% order reduction) via steady-state moment matching, with tracking errors below 0.1 °C over a standardized drive cycle.",
            tags: ["Thermal Modeling", "Model Reduction", "Moment Matching", "LiFePO4"],
            abstract: "Real-time energy management in electric vehicle hybrid energy storage systems requires accurate, low-order thermal models to enforce safety constraints and preserve battery life. High-fidelity distributed models are computationally too complex for embedded controllers, while lumped models neglect critical cell-to-cell temperature gradients. This paper presents a systematic reduction of a generalized 2D distributed 2-RC thermal model of an NxM LiFePO4 battery module, based on model reduction by steady-state moment matching. Applied to a 192-state model of a 96-cell (8x12) module, the method yields a 5-state reduced-order model that preserves the steady-state response and the dominant thermal modes of the full-order model, achieving a relative H-infinity error of 0.13% and tracking errors below 0.1 degrees Celsius over a standardized drive cycle. The resulting 97.4% reduction in model order makes the model suitable for real-time control algorithms such as Equivalent Consumption Minimization Strategy or Model Predictive Control.",
            year: "2026",
            journal: "URUCON — accepted, publication pending"
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
