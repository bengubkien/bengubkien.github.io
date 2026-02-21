
import { VideoBackground } from '../components/VideoBackground';
import { BatteryWarning, Zap, Settings, Activity, Cpu } from 'lucide-react';

export function ResearchSlide() {
    const iconProps = {
        size: "clamp(24px, 6vw, 40px)",
        strokeWidth: 1.2
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />

            {/* Changed to overflow-y-auto for mobile scrollability */}
            <div className="relative z-10 w-full h-full flex flex-col p-[4%] pt-[6%] md:pt-[3%] overflow-y-auto pb-[20%] md:pb-[6%]">
                {/* Centered Title */}
                <div className="w-full text-center mt-[4%] md:mt-[1%] mb-[6%] md:mb-[3%] shrink-0">
                    <h2 className="text-[clamp(28px,7vw,64px)] md:text-[clamp(28px,4vw,64px)] tracking-[-0.02em] leading-tight font-bold">
                        Published &amp; Pending Research
                    </h2>
                </div>

                {/* Card Grid */}
                <div className="flex flex-col flex-1 px-[2%] gap-[clamp(12px,3vw,18px)] md:gap-[clamp(8px,1vw,18px)]">
                    {/* Top Row: 3 equal cards -> stacks to columns on mobile */}
                    <div className="flex-1 flex flex-col md:flex-row gap-[clamp(12px,3vw,18px)] md:gap-[clamp(8px,1vw,18px)] shrink-0 min-h-[min-content]">
                        <div className="flex-1 liquid-glass rounded-2xl border border-white/[0.08] flex flex-col justify-end p-[clamp(16px,4vw,36px)] md:p-[clamp(20px,2vw,36px)] transition-all hover:-translate-y-1 hover:border-white/[0.15] duration-300 group">
                            <Zap className="text-white mb-[12px] md:mb-[clamp(12px,1.5vw,24px)]" style={{ width: iconProps.size, height: iconProps.size }} strokeWidth={iconProps.strokeWidth} />
                            <span className="text-[10px] md:text-[10px] uppercase font-semibold tracking-widest text-white mb-2">Published</span>
                            <h3 className="text-[clamp(18px,4.5vw,26px)] md:text-[clamp(16px,1.4vw,26px)] font-bold tracking-tight mb-[6px] group-hover:text-white transition-colors">Super-Twisting Control</h3>
                            <p className="text-[clamp(13px,3vw,15px)] md:text-[clamp(12px,0.85vw,15px)] text-white/50 leading-snug">Sliding mode algorithm for current regulation in hybrid battery-supercapacitor systems.</p>
                        </div>

                        <div className="flex-1 liquid-glass rounded-2xl border border-white/[0.08] flex flex-col justify-end p-[clamp(16px,4vw,36px)] md:p-[clamp(20px,2vw,36px)] transition-all hover:-translate-y-1 hover:border-white/[0.15] duration-300 delay-75 group">
                            <Activity className="text-white mb-[12px] md:mb-[clamp(12px,1.5vw,24px)]" style={{ width: iconProps.size, height: iconProps.size }} strokeWidth={iconProps.strokeWidth} />
                            <span className="text-[10px] md:text-[10px] uppercase font-semibold tracking-widest text-white mb-2">Published</span>
                            <h3 className="text-[clamp(18px,4.5vw,26px)] md:text-[clamp(16px,1.4vw,26px)] font-bold tracking-tight mb-[6px] group-hover:text-white transition-colors">Decoupled Adaptive HESS</h3>
                            <p className="text-[clamp(13px,3vw,15px)] md:text-[clamp(12px,0.85vw,15px)] text-white/50 leading-snug">Independent regulation of battery/supercap currents with finite-time convergence guarantees.</p>
                        </div>

                        <div className="flex-1 liquid-glass rounded-2xl border border-white/[0.08] flex flex-col justify-end p-[clamp(16px,4vw,36px)] md:p-[clamp(20px,2vw,36px)] transition-all hover:-translate-y-1 hover:border-white/[0.15] duration-300 delay-150 group">
                            <BatteryWarning className="text-white mb-[12px] md:mb-[clamp(12px,1.5vw,24px)]" style={{ width: iconProps.size, height: iconProps.size }} strokeWidth={iconProps.strokeWidth} />
                            <span className="text-[10px] md:text-[10px] uppercase font-semibold tracking-widest text-white mb-2">Published</span>
                            <h3 className="text-[clamp(18px,4.5vw,26px)] md:text-[clamp(16px,1.4vw,26px)] font-bold tracking-tight mb-[6px] group-hover:text-white transition-colors">Thermal Model Reduction</h3>
                            <p className="text-[clamp(13px,3vw,15px)] md:text-[clamp(12px,0.85vw,15px)] text-white/50 leading-snug">Reduced-order Li-ion models via steady-state moment matching for real-time BMS.</p>
                        </div>
                    </div>

                    {/* Bottom Row: 2 equal cards -> stacks to columns on mobile */}
                    <div className="flex-1 flex flex-col md:flex-row gap-[clamp(12px,3vw,18px)] md:gap-[clamp(8px,1vw,18px)] shrink-0 min-h-[min-content]">
                        <div className="flex-1 liquid-glass rounded-2xl border border-white/[0.08] flex flex-col justify-end p-[clamp(16px,4vw,36px)] md:p-[clamp(20px,2vw,36px)] transition-all hover:-translate-y-1 hover:border-white/[0.15] duration-300 delay-200 group">
                            <Settings className="text-white/40 mb-[12px] md:mb-[clamp(12px,1.5vw,24px)]" style={{ width: iconProps.size, height: iconProps.size }} strokeWidth={iconProps.strokeWidth} />
                            <span className="text-[10px] md:text-[10px] uppercase font-semibold tracking-widest text-white/40 mb-2">In Progress</span>
                            <h3 className="text-[clamp(18px,4.5vw,26px)] md:text-[clamp(16px,1.4vw,26px)] font-bold tracking-tight mb-[6px] group-hover:text-white transition-colors">Degradation-Aware EMS</h3>
                            <p className="text-[clamp(13px,3vw,15px)] md:text-[clamp(12px,0.85vw,15px)] text-white/50 leading-snug max-w-[85%]">Combining Pontryagin's Minimum Principle with NN approximation for minimal battery degradation.</p>
                        </div>

                        <div className="flex-1 liquid-glass rounded-2xl border border-white/[0.08] flex flex-col justify-end p-[clamp(16px,4vw,36px)] md:p-[clamp(20px,2vw,36px)] transition-all hover:-translate-y-1 hover:border-white/[0.15] duration-300 delay-300 group">
                            <Cpu className="text-white/40 mb-[12px] md:mb-[clamp(12px,1.5vw,24px)]" style={{ width: iconProps.size, height: iconProps.size }} strokeWidth={iconProps.strokeWidth} />
                            <span className="text-[10px] md:text-[10px] uppercase font-semibold tracking-widest text-white/40 mb-2">In Progress</span>
                            <h3 className="text-[clamp(18px,4.5vw,26px)] md:text-[clamp(16px,1.4vw,26px)] font-bold tracking-tight mb-[6px] group-hover:text-white transition-colors">Optimal Sensor Fusion</h3>
                            <p className="text-[clamp(13px,3vw,15px)] md:text-[clamp(12px,0.85vw,15px)] text-white/50 leading-snug max-w-[85%]">Variational framework for fusing HFI and STO estimates in sensorless PMSM drives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
