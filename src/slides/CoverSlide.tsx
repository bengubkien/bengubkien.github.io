
import { VideoBackground } from '../components/VideoBackground';

export function CoverSlide() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8" />

            <div className="relative z-10 w-full h-full flex flex-col p-[4%]">
                {/* Center Content */}
                <main className="flex-1 flex flex-col items-center justify-center -translate-y-[3%] text-center px-4">
                    <h1 className="text-[clamp(40px,9vw,96px)] md:text-[clamp(32px,5vw,96px)] tracking-[-0.02em] leading-[1.05] font-bold">
                        Control Systems &amp; <br /> Electric Vehicle Research
                    </h1>
                    <p className="text-[clamp(24px,5vw,48px)] md:text-[clamp(20px,2vw,48px)] opacity-90 mt-[6%] md:mt-[1.5%] font-medium">
                        Bridging Control Theory &amp; Energy Tech
                    </p>
                    <p className="text-[clamp(16px,3vw,24px)] md:text-[clamp(14px,1vw,24px)] opacity-75 mt-[4%] md:mt-[2%] text-white">
                        By Benjamin
                    </p>
                </main>
            </div>
        </div>
    );
}
