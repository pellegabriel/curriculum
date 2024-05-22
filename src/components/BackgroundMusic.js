import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(new Audio('/background-music.mp3'));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    const playAudio = () => {
      console.log("Attempting to play audio");
      audio.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    };

    const handleInteraction = () => {
      console.log("User interaction detected, attempting to play audio");
      playAudio();
      // Remove event listeners once audio starts playing
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);
    document.addEventListener('mousemove', handleInteraction);

    return () => {
      console.log("Cleaning up event listeners");
      audio.pause();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('mousemove', handleInteraction);
    };
  }, []);

  return null;
};

export default BackgroundMusic;
