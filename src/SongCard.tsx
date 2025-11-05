import React, { useState, useRef, useEffect } from 'react';

const PlayIcon = () => (
  <svg role="img" height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4.018 1.691a.7.7 0 0 0-1.018.606v11.407a.7.7 0 0 0 1.018.606L14.636 8.309a.7.7 0 0 0 0-1.217L4.018 1.691z"></path>
  </svg>
);

const PauseIcon = () => (
  <svg role="img" height="24" width="24" viewBox="0 0 16 16" fill="currentColor">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);
const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return '0:00';
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
interface SongCardProps {
  title: string;
  audioSrc: string;
}

const SongCard: React.FC<SongCardProps> = ({ title, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedData = () => {
      setDuration(audio.duration);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoadedData);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioSrc]); 

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Error al reproducir el audio:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressBarRef.current;
    if (!progressBar || !audioRef.current || duration === 0) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const barWidth = progressBar.clientWidth;
    
    const newTime = (clickX / barWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="songCard">
      <audio ref={audioRef} src={audioSrc} />
      <div className="card-content-overlay"> 
        <p className="songTitle">{title}</p>
        <div className="player-controls-container">
          <button className="play-pause-btn-card" onClick={togglePlayPause}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div className="player-seek-area">
            <div 
              className="progress-bar-card-container" 
              ref={progressBarRef}
              onClick={handleProgressClick}
            >
              <div
                className="progress-bar-card-inner"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="time-display-card">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;