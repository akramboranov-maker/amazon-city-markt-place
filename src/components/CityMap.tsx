import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { DISTRICTS } from '../data/productEngine';
import { CityDistrict } from '../types';
import { Compass, ZoomIn, ZoomOut, X, ArrowUpRight, Zap, Navigation, Building2 } from 'lucide-react';

interface CityMapProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const CityMap: React.FC<CityMapProps> = ({ isModal = false, onClose }) => {
  const { setActiveDistrict, setIsMapOpen, setSearchQuery } = useShop();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredDistrict, setHoveredDistrict] = useState<CityDistrict | null>(null);

  const handleSelectDistrict = (districtId: CityDistrict) => {
    setActiveDistrict(districtId);
    setSearchQuery('');
    if (isModal && onClose) {
      onClose();
    } else {
      setIsMapOpen(false);
    }
    const element = document.getElementById('marketplace-catalog');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const mapContent = (
    <div className="relative w-full h-[580px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden select-none">
      {/* City Background Grid & Transit Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      {/* Futuristic Hyperloop Skyway Tubes (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="transitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Hyperloop Skyway Main Artery */}
        <path
          d="M 50 150 C 250 80, 500 250, 850 160 S 1100 350, 1300 250"
          fill="none"
          stroke="url(#transitGlow)"
          strokeWidth="3"
          strokeDasharray="8 6"
          className="animate-pulse"
        />

        {/* Secondary Drone Ring */}
        <ellipse
          cx="50%"
          cy="50%"
          rx="380"
          ry="180"
          fill="none"
          stroke="#0284c7"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeDasharray="4 4"
        />

        {/* Central Automated Warehouse Hub */}
        <circle cx="50%" cy="50%" r="50" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" />
        <circle cx="50%" cy="50%" r="16" fill="#f59e0b" opacity="0.3" className="animate-ping" />
      </svg>

      {/* Central Central Logistics Center Label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center z-10">
        <div className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-black">
          AUTOMATED CENTRAL FULFILLMENT
        </div>
        <div className="text-[9px] text-slate-500 font-mono">100M+ Items · Sub-30m Dispatch</div>
      </div>

      {/* Zoom / Pan Controls Overlay */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-xl backdrop-blur-md">
        <button
          onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.15))}
          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <span className="text-xs font-mono text-slate-400 px-1">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button
          onClick={() => setZoomLevel((z) => Math.max(0.85, z - 0.15))}
          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>

      {/* Legend & Stats Overlay */}
      <div className="absolute bottom-4 left-4 z-20 bg-slate-900/90 border border-slate-800 p-3 rounded-xl backdrop-blur-md text-xs space-y-1.5 hidden sm:block max-w-xs">
        <div className="flex items-center gap-2 text-white font-bold font-display">
          <Building2 className="w-4 h-4 text-amber-400" />
          <span>Amazon City Metropolitan Map</span>
        </div>
        <div className="text-[11px] text-slate-400">
          Click on any skyscraper district to teleport directly into its product marketplace.
        </div>
        <div className="flex items-center gap-3 pt-1 text-[10px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-cyan-400" /> Hyperloop Route
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> Drone Corridor
          </span>
        </div>
      </div>

      {/* Buildings & Districts Container (Zoom scaled) */}
      <div
        className="w-full h-full relative transition-transform duration-300"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
      >
        {DISTRICTS.map((district) => {
          const isHovered = hoveredDistrict === district.id;
          return (
            <div
              key={district.id}
              style={{
                left: `${district.mapCoordinates.x}%`,
                top: `${district.mapCoordinates.y}%`,
              }}
              onMouseEnter={() => setHoveredDistrict(district.id)}
              onMouseLeave={() => setHoveredDistrict(null)}
              onClick={() => handleSelectDistrict(district.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
            >
              {/* Animated Skyscraper Pin */}
              <div
                className={`relative flex flex-col items-center transition-all duration-300 ${
                  isHovered ? 'scale-110 z-30' : 'scale-100'
                }`}
              >
                {/* Building Structure Visual Card */}
                <div
                  className={`px-3 py-2 rounded-xl border backdrop-blur-md transition-all shadow-lg flex items-center gap-2 ${
                    isHovered
                      ? 'bg-slate-900 border-amber-400 shadow-amber-500/20'
                      : 'bg-slate-900/90 border-slate-700/80 hover:border-slate-500'
                  }`}
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">
                    {district.icon}
                  </span>
                  <div className="text-left">
                    <div className="font-bold text-xs text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
                      {district.name}
                    </div>
                    <div className="text-[10px] text-amber-400 font-mono font-medium">
                      {district.productCountStr}
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors ml-1" />
                </div>

                {/* Building Tower Base Pillar */}
                <div
                  className={`w-1 h-5 bg-gradient-to-b from-amber-400 to-transparent transition-opacity ${
                    isHovered ? 'opacity-100' : 'opacity-40'
                  }`}
                />
                {/* District ground anchor light */}
                <div
                  className={`w-3 h-3 rounded-full border border-amber-400/80 ${
                    isHovered ? 'bg-amber-400 animate-ping' : 'bg-slate-800'
                  }`}
                />
              </div>

              {/* Hover Tooltip Preview */}
              {isHovered && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 bg-slate-900 border border-slate-700 p-2.5 rounded-xl shadow-2xl z-40 text-left pointer-events-none animate-in fade-in zoom-in-95">
                  <div className="text-xs font-bold text-amber-400">{district.name}</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">{district.slogan}</div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {district.popularTags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
        <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  INTERACTIVE AMAZON CITY METROPOLITAN MAP
                </h3>
                <p className="text-xs text-slate-400">
                  Select any district skyscraper to teleport immediately into its product catalog.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {mapContent}
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-slate-950 py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              <Navigation className="w-3.5 h-3.5" />
              <span>Digital City Navigation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              AMAZON CITY DIGITAL MAP
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              15 autonomous shopping districts connected by high-speed hyperloop and drone flight corridors. Explore buildings or click to jump into specialized collections.
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono text-amber-400 font-semibold">
              100,000,000+ Items Online
            </span>
          </div>
        </div>

        {mapContent}
      </div>
    </section>
  );
};
