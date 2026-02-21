
import { VideoBackground } from '../components/VideoBackground';

export function IntroSlide() {
    const keywords = ['Control Theory', 'Battery Management', 'Machine Learning', 'Optimization'];

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://cdn.dribbble.com/userupload/11189487/file/original-5987e1a5800867c8a3b8db60b53bb6c7.mp4" />

            <div className="relative z-10 w-full h-full flex flex-col justify-center p-[6%] overflow-y-auto pb-[20%] md:pb-[6%]">
                <div className="flex flex-col items-start w-full max-w-[65%] md:max-w-[55%] mt-auto md:mt-0">
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

                    {/* Keyword pills */}
                    <div className="flex flex-wrap gap-[clamp(8px,2vw,12px)] mt-[clamp(20px,3vw,36px)]">
                        {keywords.map((kw) => (
                            <span
                                key={kw}
                                className="bg-white/[0.06] border border-white/[0.1] rounded-full px-[clamp(14px,3vw,20px)] py-[clamp(6px,1.5vw,10px)] text-[clamp(11px,2.5vw,14px)] md:text-[clamp(11px,0.8vw,14px)] text-white/70 font-medium tracking-wide"
                            >
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
