import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface VideoBackgroundProps {
    url: string;
}

export function VideoBackground({ url }: VideoBackgroundProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | null = null;

        if (Hls.isSupported()) {
            hls = new Hls({
                enableWorker: true,
            });

            hls.loadSource(url);
            hls.attachMedia(video);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(e => console.error("Auto-play failed:", e));
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Fallback for Safari native HLS
            video.src = url;
            video.addEventListener('loadedmetadata', () => {
                video.play().catch(e => console.error("Auto-play failed:", e));
            });
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [url]);

    return (
        <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        />
    );
}
