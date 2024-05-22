// src/components/BackgroundMusic.js
import { useState, useEffect, useRef } from "react";
import { FaMusic } from "react-icons/fa";

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

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      {!isPlaying && (
        
        <button
          onClick={handlePlay}
          style={{
            position: "absolute",
            top: "10px",
            left: "30px",
            zIndex: 1000,
            padding:5,
          }}>
          <FaMusic /> PLAY 
        </button>
      )}
    </div>
  );
};

export default BackgroundMusic;
