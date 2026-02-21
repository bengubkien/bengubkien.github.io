
import { VideoBackground } from '../components/VideoBackground';

export function ResearchSlide() {
    const publications = [
        {
            status: "PUBLISHED",
            title: "Decoupled Adaptive Super-Twisting Control of Hybrid Energy Storage Systems for Electric Vehicles",
            description: "Designed a decoupled adaptive super-twisting controller enabling independent regulation of battery and supercapacitor currents in electric vehicle hybrid energy storage, with finite-time convergence guarantees.",
            tags: ["Adaptive Control", "Lyapunov", "Electric Vehicles"]
        },
        {
            status: "PUBLISHED",
            title: "Thermal Model Reduction for Real-Time BMS",
            description: "Developed reduced-order Li-ion models via steady-state moment matching for accurate, real-time temperature estimation within computational limits.",
            tags: ["Thermal Modeling", "Model Reduction", "BMS"]
        },
        {
            status: "IN PROGRESS",
            title: "Degradation-Aware Energy Management for Hybrid Energy Storage Systems: A Learning-Based Thermal-Optimal Approach",
            description: "Combining Pontryagin's Minimum Principle with neural network approximation for a real-time energy management strategy that minimizes battery degradation while maintaining optimal thermal behavior.",
            tags: ["Neural Networks", "PMP", "Degradation", "Thermal"]
        },
        {
            status: "IN PROGRESS",
            title: "Optimal Sensor Fusion for Hybrid Sensorless PMSM Control: A Variational Approach to HFI-STO Transition",
            description: "Designing a variational framework for optimal fusion of high-frequency injection and sliding-mode observer estimates in sensorless PMSM drives, targeting seamless full-speed-range operation.",
            tags: ["Sensor Fusion", "PMSM", "HFI", "Sensorless"]
        }
    ];

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            {/* Dark scrim over video for contrast to match the serious flat aesthetic */}
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
                <div className="w-full md:w-[60%] relative flex-1 md:overflow-y-auto md:pr-[2%] hide-scrollbar">
                    {/* Vertical Timeline Track */}
                    <div className="absolute left-[12px] md:left-[15px] top-[24px] bottom-0 w-[1px] bg-white/20" />

                    <div className="flex flex-col gap-[clamp(24px,4vw,32px)] w-full py-[4%]">
                        {publications.map((pub, idx) => (
                            <div key={idx} className="relative pl-[44px] md:pl-[64px] w-full">
                                {/* Timeline Node / Dot */}
                                <div className="absolute left-[8px] md:left-[11px] top-[20px] w-[9px] h-[9px] rounded-full bg-white ring-4 ring-black/80 z-10" />

                                {/* Card Block */}
                                <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl rounded-2xl p-[clamp(20px,3vw,32px)] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15]">
                                    <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/60 mb-[16px] md:mb-[20px] uppercase">
                                        {pub.status}
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
