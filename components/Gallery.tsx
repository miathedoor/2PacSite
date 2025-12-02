import React, { useState } from 'react';
import { RetroButton } from './RetroButton';
import { ChevronLeft, ChevronRight, Sparkles, Camera } from 'lucide-react';
import content from '../content';

export const Gallery: React.FC = () => {
  const images = content.gallery.images;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [vibeCaption, setVibeCaption] = useState<string>('');

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setVibeCaption('');
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setVibeCaption('');
  };

  const handleShowLyrix = () => {
    setVibeCaption(images[currentIndex].defaultVibe);
  };

  return (
    <div className="flex flex-col h-full bg-[#d7ccc8] p-1 retro-border-outset">
      {/* Window Header */}
      <div className="bg-[#3e2723] text-white px-2 py-1 flex justify-between items-center mb-2">
        <span className="font-bold flex items-center gap-2">
            <Camera size={14} />
            {content.gallery.windowTitle}
        </span>
        <div className="flex gap-1">
            <div className="w-3 h-3 bg-[#d7ccc8] border border-white retro-border-outset text-black flex items-center justify-center text-[8px] font-bold">_</div>
            <div className="w-3 h-3 bg-[#d7ccc8] border border-white retro-border-outset text-black flex items-center justify-center text-[8px] font-bold">X</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-black retro-border p-4 flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none"></div>
        
        <img 
            src={images[currentIndex].url} 
            alt={images[currentIndex].title}
            className="max-h-[60vh] object-contain border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
        
        {/* Caption Overlay */}
        <div className="mt-4 bg-[#fff8e1] text-[#3e2723] px-4 py-2 border-2 border-[#5d4037] font-['Comic_Sans_MS',_cursive] text-center min-h-[3rem] flex items-center justify-center w-full max-w-md shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
            {vibeCaption ? (
                <span>{vibeCaption}</span>
            ) : (
                <span className="opacity-50 italic">{content.gallery.defaultCaption}</span>
            )}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-2 flex justify-between items-center bg-[#d7ccc8] p-2 border-t-2 border-white">
        <div className="text-[#3e2723] font-mono text-xs">
            {currentIndex + 1} / {images.length}
        </div>
        
        <div className="flex gap-2">
            <RetroButton onClick={handlePrev}>
                <ChevronLeft size={16} />
            </RetroButton>
            
            <RetroButton onClick={handleShowLyrix} className="text-[#3e2723] font-bold bg-[#efebe9] hover:bg-white">
                <div className="flex items-center gap-1">
                    <Sparkles size={14} />
                    <span>{content.gallery.buttonVibeCheck}</span>
                </div>
            </RetroButton>

            <RetroButton onClick={handleNext}>
                <ChevronRight size={16} />
            </RetroButton>
        </div>
      </div>
    </div>
  );
};