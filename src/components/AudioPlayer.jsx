import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
  const [isTranscriptionDone, setIsTranscriptionDone] = useState(false); // To track if transcription is done
  const audioRef = useRef(null);

  // Simulate the transcription process (you would replace this with actual logic)
  useEffect(() => {
    // Simulate a delay (for example, waiting for transcription to finish)
    const transcriptionDelay = setTimeout(() => {
      setIsTranscriptionDone(true);
    }, 3000); // 3 seconds for example, adjust as needed

    return () => clearTimeout(transcriptionDelay); // Clean up timeout on unmount
  }, []);

  // Play or pause the audio when clicked
  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  // Only allow the audio to play if transcription is done
  useEffect(() => {
    if (isTranscriptionDone && audioRef.current) {
      audioRef.current.play(); // Automatically play the audio once transcription is done
    }
  }, [isTranscriptionDone]); // This runs when `isTranscriptionDone` is updated

  return (
    <div>
      {/* <p>Audio Player with Controls</p> */}
      <button onClick={handlePlayPause} disabled={!isTranscriptionDone} className='play-button'>
        {isTranscriptionDone ? 'Play / Pause' : 'Waiting for transcription...'}
      </button>
      <audio ref={audioRef} src="../../instrumental.wav" />
    </div>
  );
};

export default AudioPlayer;