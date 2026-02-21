
import { VideoBackground } from '../components/VideoBackground';

export function IntroSlide() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://stream.mux.com/hUT6X11m1Vkw1QMxPOLgI761x2cfpi9bHFbi5cNg4014.m3u8" />

            {/* Changed to overflow-y-auto for mobile scrollability if needed */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center p-[6%] overflow-y-auto pb-[20%] md:pb-[6%]">
                {/* Stack on mobile, row on md+ */}
                <div className="flex flex-col md:flex-row gap-[8%] md:gap-[6%] items-start md:items-end w-full mt-auto md:mt-0">
                    {/* Left: Hero text + stat */}
                    <div className="flex-1 md:flex-[0_0_50%] flex flex-col w-full">
                        <h2 className="text-[clamp(32px,7vw,72px)] md:text-[clamp(32px,4vw,72px)] tracking-[-0.03em] leading-[1.05] font-bold">
                            Engineering the Future<br />of Electric Vehicles
                        </h2>

                        <p className="text-[clamp(14px,3vw,20px)] md:text-[clamp(14px,1.1vw,20px)] opacity-75 leading-[1.6] mt-[16px] md:mt-[clamp(16px,2vw,32px)] max-w-full md:max-w-[90%]">
                            I research and engineer advanced control systems for electric vehicle powertrains, hybrid energy storage, and battery management. My work bridges nonlinear control theory, robust optimization, and machine learning to solve real-world energy and mobility challenges.
                        </p>

                        <div className="flex items-center gap-[clamp(16px,4vw,48px)] md:gap-[clamp(24px,3vw,48px)] mt-[24px] md:mt-[clamp(24px,2.5vw,40px)]">
                            <div className="flex flex-col">
                                <span className="text-[clamp(32px,8vw,72px)] md:text-[clamp(36px,4vw,72px)] font-bold tracking-tight leading-none">5+</span>
                                <span className="text-[clamp(10px,2vw,14px)] md:text-[clamp(11px,0.8vw,14px)] text-white/60 font-medium tracking-widest uppercase mt-1">Publications</span>
                            </div>
                            <div className="w-[1px] h-[clamp(28px,6vw,56px)] md:h-[clamp(32px,3vw,56px)] bg-white/15" />
                            <div className="flex flex-col">
                                <span className="text-[clamp(16px,4vw,28px)] md:text-[clamp(18px,1.5vw,28px)] font-bold tracking-tight leading-tight">HESS &amp; BMS</span>
                                <span className="text-[clamp(10px,2vw,14px)] md:text-[clamp(11px,0.8vw,14px)] text-white/60 font-medium tracking-widest uppercase mt-1">Focus Areas</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Supporting detail */}
                    <div className="flex-1 flex flex-col w-full mt-[8%] md:mt-0 md:justify-end">
                        <div className="liquid-glass rounded-2xl p-[clamp(20px,5vw,40px)] md:p-[clamp(24px,2vw,40px)]">
                            <p className="text-[clamp(11px,2.5vw,16px)] md:text-[clamp(12px,0.9vw,16px)] text-white/50 uppercase font-semibold tracking-widest mb-3">Research Focus</p>
                            <p className="text-[clamp(13px,3vw,20px)] md:text-[clamp(14px,1.1vw,20px)] opacity-85 leading-[1.6]">
                                Transitioning to sustainable mobility requires advanced control architectures spanning from motor drives to energy storage systems — bridging hybrid storage management and model order reduction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
