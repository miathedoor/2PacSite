import React, { useState } from 'react';
import { Gallery } from './components/Gallery';
import { IpodPlayer } from './components/IpodPlayer';
import content from './content';

const App: React.FC = () => {
  const [currentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  return (
    <>
      <div className="scanlines"></div>
      <div className="min-h-screen w-full flex flex-col p-4 gap-4">
        
        {/* Top Navbar / Marquee */}
        <div className="w-full bg-[#3e2723] text-white p-1 border-b-2 border-[#5d4037] shadow-md flex justify-between items-center retro-border-outset">
          <div className="flex items-center gap-2 px-2">
              <span className="animate-pulse text-[#d7ccc8]">●</span>
              <span className="font-['VT323'] text-xl tracking-widest">{content.navbar.status}</span>
          </div>
          <div className="flex-1 overflow-hidden px-4">
              <div className="whitespace-nowrap animate-[marquee_10s_linear_infinite] font-['VT323'] text-lg text-white">
                  {content.navbar.marquee}
              </div>
          </div>
          <div className="px-2 font-mono text-xs">
              {currentTime}
          </div>
        </div>

        {/* Main Split Layout */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 items-stretch justify-center max-w-7xl mx-auto w-full">
          
          {/* Part 1: Main Gallery (Takes remaining space) */}
          <div className="flex-1 min-h-[500px] h-auto retro-border-outset bg-[#d7ccc8] p-1 flex flex-col min-w-0">
             <Gallery />
             
             <div className="mt-2 bg-[#f5f5f5] border-2 border-inset border-[#8d6e63] p-2 font-mono text-xs h-32 overflow-y-auto">
               <p className="text-[#3e2723] font-bold mb-1">{content.sidebar.updates.title}</p>
               {content.sidebar.updates.entries.map((entry, index) => (
                  <p key={index} className="mb-1">
                      <span className="text-gray-500">{entry.date}</span> {entry.text}
                  </p>
               ))}
             </div>
          </div>

          {/* Part 2: iPod Sidebar (Fixed wider width) */}
          <div className="w-full lg:w-[420px] flex-none flex flex-col gap-4">
              {/* Music Player Container */}
              <div className="bg-transparent flex-1 flex flex-col justify-start items-center lg:items-end">
                 <IpodPlayer />
              </div>
          </div>

        </div>

          {/* Footer */}
          <div className="text-center text-[#a1887f] text-xs font-mono py-4">
              {content.footer.madeBy} <span className="text-[#efebe9]">{content.footer.role}</span> {content.footer.fromYear}
              <br />
              {content.footer.copyright}
          </div>
      </div>
    </>
  );
};

export default App;