import { useState, useEffect, useRef } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

const BackgroundMusic = () => {
  const audioRef = useRef(new Audio("/background-music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={togglePlayPause} className="nes-btn is-primary" >
        {isPlaying ? (
          <>
            <FaPause /> PAUSE
          </>
        ) : (
          <>
            <FaMusic /> PLAY
          </>
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;
