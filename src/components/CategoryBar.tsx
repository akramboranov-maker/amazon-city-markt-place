import React, { useRef } from 'react';
import { useShop } from '../context/ShopContext';
import { DISTRICTS } from '../data/productEngine';
import { CityDistrict } from '../types';
import { ChevronLeft, ChevronRight, Zap, Sparkles } from 'lucide-react';

export const CategoryBar: React.FC = () => {
  const { activeDistrict, setActiveDistrict, setSearchQuery } = useShop();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -240 : 240;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-slate-900/90 border-b border-slate-800/80 sticky top-18 z-30 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center">
        {/* Scroll Left Button */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer mr-2 shrink-0"
          title="Scroll Left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none no-scrollbar scroll-smooth flex-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* All Districts Item */}
          <button
            onClick={() => {
              setActiveDistrict('all');
              setSearchQuery('');
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
              activeDistrict === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-400/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
            }`}
          >
            <span>🏙️</span>
            <span>All Districts</span>
            <span
              className={`text-[10px] font-mono font-normal ${
                activeDistrict === 'all' ? 'text-slate-900 font-semibold' : 'text-slate-500'
              }`}
            >
              100M+
            </span>
          </button>

          {/* Flash Deals Tab */}
          <button
            onClick={() => {
              setActiveDistrict('all');
              setSearchQuery('flash deal');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all cursor-pointer shrink-0"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
            <span>Flash Deals</span>
          </button>

          {/* District list */}
          {DISTRICTS.map((district) => {
            const isActive = activeDistrict === district.id;
            return (
              <button
                key={district.id}
                onClick={() => {
                  setActiveDistrict(district.id as CityDistrict);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-slate-100 text-slate-950 font-bold shadow-md shadow-white/5'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70 font-medium'
                }`}
              >
                <span className="text-sm">{district.icon}</span>
                <span>{district.name}</span>
                <span
                  className={`text-[10px] font-mono ${
                    isActive ? 'text-slate-700 font-semibold' : 'text-slate-500'
                  }`}
                >
                  {district.productCountStr}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll Right Button */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer ml-2 shrink-0"
          title="Scroll Right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
