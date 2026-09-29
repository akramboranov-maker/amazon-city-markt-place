import React from 'react';
import { HERO_IMAGE, DISTRICTS } from '../data/productEngine';
import { useShop } from '../context/ShopContext';
import { Compass, Zap, Bot, ShieldCheck, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { CityDistrict } from '../types';

export const HeroSection: React.FC = () => {
  const { setActiveDistrict, setIsMapOpen, setIsAiAssistantOpen, setSearchQuery } = useShop();

  const featuredDistricts: { id: CityDistrict; name: string; icon: string; count: string; desc: string }[] = [
    { id: 'drinks', name: 'Drinks City', icon: '🥤', count: '1.4M+ Drinks', desc: 'Energy elixirs, cold brew & sparkling botanical nectars' },
    { id: 'phones', name: 'Phone City', icon: '📱', count: '3.8M+ Devices', desc: 'Quantum foldables, titanium flagships & gaming beasts' },
    { id: 'toys', name: 'Toy City', icon: '🧸', count: '1.1M+ Toys', desc: 'Modular STEM robotics, orbital space bricks & RC rovers' },
    { id: 'gaming', name: 'Gaming City', icon: '🎮', count: '5.1M+ Rigs', desc: '8K HDR consoles, VR headsets & ergonomic battlestations' },
    { id: 'computers', name: 'Computer City', icon: '💻', count: '2.9M+ Systems', desc: 'RTX 5090 workstations, creator laptops & quantum mini cubes' },
    { id: 'monitors', name: 'Monitor City', icon: '🖥️', count: '1.6M+ Displays', desc: '240Hz QD-OLED ultrawides & 5K color-calibrated panels' },
  ];

  return (
    <section className="relative w-full overflow-hidden border-b border-slate-800/80 bg-slate-950">
      {/* Background Graphic Hero with High-Resolution Generated Asset */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 z-10">
            {/* Live Inventory Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>100,000,000+ PRODUCTS AVAILABLE</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300 font-normal">Across 15 Shopping Districts</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-display">
                WELCOME TO <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                  AMAZON CITY
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl">
                “Everything You Need, All in One City.”
              </p>
              <p className="text-sm text-slate-400 max-w-lg leading-relaxed">
                Step into a modern digital shopping metropolis. Discover millions of products across specialized city sectors with automated hyperloop delivery, real verified sellers, and intelligent shopping.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const element = document.getElementById('marketplace-catalog');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMapOpen(true)}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Open City Map</span>
              </button>

              <button
                onClick={() => setIsAiAssistantOpen(true)}
                className="px-4 py-3 rounded-xl bg-violet-950/40 hover:bg-violet-900/40 border border-violet-500/40 text-violet-300 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Bot className="w-4 h-4 text-violet-400" />
                <span>Talk to City AI</span>
              </button>
            </div>

            {/* City Trust Features Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">Hyperloop Delivery</div>
                  <div className="text-[11px] text-slate-400">Under 30 mins citywide</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">Verified Sellers</div>
                  <div className="text-[11px] text-slate-400">100% Genuine Guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="font-semibold text-slate-200">AI Personalization</div>
                  <div className="text-[11px] text-slate-400">Adaptive recommendations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity City Visual Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-amber-500/5 group bg-slate-900">
              <img
                src={HERO_IMAGE}
                alt="Amazon City Digital Metropolis"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wider font-display">
                      CENTRAL METROPOLIS HUB
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400">Live Traffic: Optimal</span>
                </div>
                <div className="mt-1 text-xs text-slate-300">
                  Drone flight corridors active · 42,910 autonomous dispatches currently in transit
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Districts Quick Showcase Cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {featuredDistricts.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveDistrict(item.id);
                const element = document.getElementById('marketplace-catalog');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800/80 hover:border-amber-500/40 text-left transition-all group cursor-pointer"
            >
              <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="font-bold text-xs text-slate-100 group-hover:text-amber-400 transition-colors">
                {item.name}
              </div>
              <div className="text-[11px] text-amber-400/90 font-mono mt-0.5">
                {item.count}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
