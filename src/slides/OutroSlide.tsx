
import { VideoBackground } from '../components/VideoBackground';
import { Mail, MapPin } from 'lucide-react';

export function OutroSlide() {
    const iconProps = {
        className: "text-white opacity-80",
        size: "clamp(20px, 6vw, 32px)", /* Slightly bigger min size on mobile */
        strokeWidth: 1.5
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground url="https://stream.mux.com/00qQnfNo7sSpn3pB1hYKkyeSDvxs01NxiQ3sr29uL3e028.m3u8" />

            {/* Changed to overflow-y-auto for mobile scrollability */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-[6%] text-center overflow-y-auto pb-[20%] md:pb-[6%]">
                {/* Headline */}
                <h2 className="text-[clamp(32px,8vw,72px)] md:text-[clamp(32px,4.5vw,72px)] tracking-[-0.03em] leading-[1.05] font-bold mt-auto md:mt-0">
                    Let's Build the Future <br />
                    of Mobility Together
                </h2>

                <p className="text-[clamp(14px,3.5vw,22px)] md:text-[clamp(14px,1.2vw,22px)] opacity-70 leading-[1.6] max-w-[90%] md:max-w-[50%] mt-[6%] md:mt-[2%]">
                    Open to research collaborations, industry positions, and consulting opportunities in EV powertrains, energy storage, and advanced control systems.
                </p>

                {/* Vertical split on mobile, row on md */}
                <div className="flex flex-col md:flex-row items-center gap-[clamp(16px,4vw,48px)] md:gap-[clamp(20px,3vw,48px)] mt-[10%] md:mt-[4%] flex-wrap justify-center w-full mb-auto md:mb-0">
                    <a href="mailto:benjamin@example.com" className="flex items-center gap-3 w-full md:w-auto justify-center group cursor-pointer liquid-glass rounded-full px-[clamp(24px,5vw,28px)] md:px-[clamp(16px,1.5vw,28px)] py-[clamp(14px,3vw,16px)] md:py-[clamp(10px,0.8vw,16px)] transition-all duration-300 hover:-translate-y-0.5">
                        <Mail className="text-[#b46dff]" style={{ width: iconProps.size, height: iconProps.size }} strokeWidth={iconProps.strokeWidth} />
                        <span className="text-[clamp(14px,3.5vw,18px)] md:text-[clamp(13px,1vw,18px)] font-medium opacity-90">Email</span>
                    </a>

                    <a href="https://linkedin.com/in/benjamin" className="flex items-center gap-3 w-full md:w-auto justify-center group cursor-pointer liquid-glass rounded-full px-[clamp(24px,5vw,28px)] md:px-[clamp(16px,1.5vw,28px)] py-[clamp(14px,3vw,16px)] md:py-[clamp(10px,0.8vw,16px)] transition-all duration-300 hover:-translate-y-0.5">
                        <svg width={iconProps.size} height={iconProps.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#3edcc5]">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="text-[clamp(14px,3.5vw,18px)] md:text-[clamp(13px,1vw,18px)] font-medium opacity-90">LinkedIn</span>
                    </a>

                    <a href="https://github.com/benjamin" className="flex items-center gap-3 w-full md:w-auto justify-center group cursor-pointer liquid-glass rounded-full px-[clamp(24px,5vw,28px)] md:px-[clamp(16px,1.5vw,28px)] py-[clamp(14px,3vw,16px)] md:py-[clamp(10px,0.8vw,16px)] transition-all duration-300 hover:-translate-y-0.5">
                        <svg width={iconProps.size} height={iconProps.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#e8578a]">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span className="text-[clamp(14px,3.5vw,18px)] md:text-[clamp(13px,1vw,18px)] font-medium opacity-90">GitHub</span>
                    </a>

                    <div className="flex items-center gap-3 w-full md:w-auto justify-center liquid-glass rounded-full px-[clamp(24px,5vw,28px)] md:px-[clamp(16px,1.5vw,28px)] py-[clamp(14px,3vw,16px)] md:py-[clamp(10px,0.8vw,16px)]">
                        <MapPin className="text-[#D2FF55]" style={{ width: iconProps.size, height: iconProps.size }} strokeWidth={iconProps.strokeWidth} />
                        <span className="text-[clamp(14px,3.5vw,18px)] md:text-[clamp(13px,1vw,18px)] font-medium opacity-90">Open to Relocate</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
