"use client";
import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current.currentTime = 2; // Skip first 2 seconds
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current && time >= 2) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      setIsMuted(vol === 0);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
        setIsMuted(false);
      } else {
        videoRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Fade duration={2000}>
          <div className="relative z-10 mx-auto max-w-[845px]">
            <div className="relative">
              <div 
                className="relative mx-auto max-w-[845px] rounded-xl overflow-hidden bg-gray-100 group border-8 border-[#58c0c2] shadow-2xl shadow-[#58c0c2]/20"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                onTouchStart={() => setShowControls(true)}
                onTouchEnd={() => setTimeout(() => setShowControls(false), 2000)}
              >
                <video
                  ref={videoRef}
                  className="w-full h-auto object-contain cursor-pointer"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onClick={togglePlay}
                >
                  <source src="https://pub-d466b5bd13de45a6a78414c86cff5e2f.r2.dev/innoscribe%20norway%204k%20(1).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Custom Controls */}
                <div className={`absolute bottom-2 left-2 right-2 bg-black/20 rounded-lg p-2 md:p-3 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Seek Slider */}
                  <div className="mb-2">
                    <input
                      type="range"
                      min="2"
                      max={duration}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {/* Play Button */}
                    <button
                      onClick={togglePlay}
                      className="bg-[#58c0c2] hover:bg-[#4dbabc] text-white p-1.5 md:p-3 rounded-full transition-colors"
                    >
                      {isPlaying ? (
                        <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Volume Control */}
                    <div className="flex items-center gap-1 md:gap-2">
                      <button onClick={toggleMute} className="text-white hover:text-[#58c0c2] transition-colors flex items-center">
                        {isMuted ? (
                          <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                          </svg>
                        ) : (
                          <>
                            <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" />
                            </svg>
                            <div className="flex items-center gap-px -ml-px">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1 h-2 md:w-1 md:h-2 rounded-full ${
                                    i < Math.ceil((isMuted ? 0 : volume) * 5) ? 'bg-white' : 'bg-gray-500'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-12 md:w-20 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default VideoSection;