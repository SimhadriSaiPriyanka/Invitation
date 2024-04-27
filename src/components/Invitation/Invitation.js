import React, { useState, useRef } from 'react';
import './Invitation.css';
import audioFile from './antena_bommarillu.mp3';

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Dear Macha,<br />
        Nuvu kshemam ani bhavisthu rasthunna lekha...🙂 Nenu ninnu eno sarlu ahvanincha kani, nuvu nanu grahincha ledhu kabatti ippudu neku ardham ayela rasthunna...
        "Ne raka kosam 1000 kallu tho edhuru chusthunna...🤪"<br />
        @Bangaru Konda😉
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default Invitation;
   