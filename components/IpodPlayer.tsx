import React from 'react';
import { Play, FastForward, Rewind } from 'lucide-react';
import content from '../content';

export const IpodPlayer: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full p-4">
      {/* iPod Body */}
      <div className="w-[370px] h-[550px] bg-gradient-to-b from-[#f2f2f2] to-[#d6d6d6] rounded-[40px] p-8 shadow-[10px_10px_20px_rgba(0,0,0,0.5),-2px_-2px_5px_rgba(255,255,255,0.8)_inset] flex flex-col items-center relative border border-[#999]">
        
        {/* Screen */}
        <div className="w-full h-[240px] bg-[#1a1a1a] rounded-lg border-4 border-[#333] shadow-inner overflow-hidden relative mb-10">
            {/* Glossy Reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10"></div>
            
            {/* Spotify Embed */}
            <iframe 
                style={{borderRadius: '0px'}} 
                src={content.player.spotifyEmbedUrl}
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Spotify Player"
            ></iframe>
        </div>

        {/* Click Wheel */}
        <div className="w-[200px] h-[200px] bg-[#e6e6e6] rounded-full relative flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.2)] group cursor-pointer active:scale-[0.99] transition-transform select-none">
            
            {/* Top: Menu */}
            <div className="absolute top-5 font-bold text-[#999] text-[12px] tracking-widest group-hover:text-[#666]">{content.player.menu}</div>
            
            {/* Bottom: Play/Pause */}
            <div className="absolute bottom-5 text-[#999] group-hover:text-[#666]">
                <Play size={16} fill="currentColor" />
            </div>
            
            {/* Left: Prev */}
            <div className="absolute left-5 text-[#999] group-hover:text-[#666]">
                <Rewind size={16} fill="currentColor" />
            </div>

            {/* Right: Next */}
            <div className="absolute right-5 text-[#999] group-hover:text-[#666]">
                <FastForward size={16} fill="currentColor" />
            </div>

            {/* Center Button */}
            <div className="w-[70px] h-[70px] bg-gradient-to-br from-[#ffffff] to-[#cccccc] rounded-full shadow-inner border border-[#bfbfbf] hover:brightness-95"></div>
        </div>

      </div>
    </div>
  );
};