import React from 'react';
import { useShop } from '../context/ShopContext';
import { Store, Compass, Bot, ShieldCheck, Truck, Headphones } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveDistrict, setIsMapOpen, setIsSellerDashboardOpen, setIsAiAssistantOpen, setIsProfileOpen } = useShop();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs">
      {/* City Guarantee Strip */}
      <div className="border-b border-slate-800/60 py-8 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Automated Hyperloop Dispatch</div>
              <p className="text-slate-400 text-xs mt-0.5">
                Every district connected with high-speed pneumatic and drone freight routes.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">Verified Metropolitan Sellers</div>
              <p className="text-slate-400 text-xs mt-0.5">
                Every merchant rigorously verified with 100% genuine citizen warranty.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">24/7 Quantum AI Shopping</div>
              <p className="text-slate-400 text-xs mt-0.5">
                Instant catalog querying across 100,000,000+ items by CITY AI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Slogan */}
          <div className="space-y-3 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center font-bold text-slate-950 font-display text-xs">
                AC
              </div>
              <span className="font-black text-white text-base tracking-tight font-display">
                AMAZON CITY
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              “Everything You Need, All in One City.”
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              A high-performance futuristic digital shopping metropolis engineered for rapid discovery across 100,000,000+ products.
            </p>
          </div>

          {/* Districts */}
          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Specialized Districts
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => { setActiveDistrict('drinks'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Drinks City (1.4M+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveDistrict('phones'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Phone City (3.8M+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveDistrict('toys'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Toy City (1.1M+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveDistrict('gaming'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Gaming City (5.1M+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveDistrict('computers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Computer City (2.9M+)
                </button>
              </li>
            </ul>
          </div>

          {/* Metropolitan Navigation */}
          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Metropolis Services
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => setIsMapOpen(true)}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Interactive City Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsAiAssistantOpen(true)}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  CITY AI Assistant
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSellerDashboardOpen(true)}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Seller Operations Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Citizen Profile & Orders
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-2">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Customer Service & Legal
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                  Quantum Warranty Terms
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                  Hyperloop Drone Dispatch Protocol
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                  Citizen Privacy Architecture
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-slate-200 cursor-pointer">
                  24/7 Metropolis Support Desk
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © 2026 AMAZON CITY. All rights reserved across all metropolitan sectors.
          </div>
          <div className="flex items-center gap-4">
            <span>Terms of Service</span>
            <span>·</span>
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Security Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
