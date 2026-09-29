import React, { useState } from 'react';
import { Product, CityDistrict } from '../types';

interface AIProductImageProps {
  product: Product;
  className?: string;
  isDetailed?: boolean;
}

// Real curated high-resolution AI generated commercial advertisement assets
const REAL_COMMERCIAL_ADS: Record<string, string[]> = {
  drinks: [
    '/src/assets/images/drinks_city_showcase_1790658252042.jpg',
    '/src/assets/images/drinks_commercial_splash_1790659466835.jpg',
  ],
  food: [
    '/src/assets/images/food_city_commercial_ad_1790659446508.jpg',
  ],
  phones: [
    '/src/assets/images/phone_city_flagship_1790658238705.jpg',
    '/src/assets/images/phone_commercial_titanium_1790659483288.jpg',
  ],
  gaming: [
    '/src/assets/images/gaming_city_rig_1790658268825.jpg',
    '/src/assets/images/toys_gaming_epic_ad_1790659499282.jpg',
  ],
  toys: [
    '/src/assets/images/toy_city_modular_station_1790658746763.jpg',
    '/src/assets/images/toys_gaming_epic_ad_1790659499282.jpg',
  ],
  keyboards: [
    '/src/assets/images/keyboard_city_mechanical_1790658763783.jpg',
  ],
  mice: [
    '/src/assets/images/mouse_city_ultralight_1790658782896.jpg',
  ],
  monitors: [
    '/src/assets/images/monitor_city_curved_1790658798295.jpg',
  ],
};

// 16 studio lighting colorways
const STUDIO_PALETTES = [
  { primary: '#0284c7', secondary: '#38bdf8', accent: '#fbbf24', bgGlow: 'rgba(56, 189, 248, 0.28)', label: 'CYBER AZURE', adTag: 'COMMERCIAL AD' },
  { primary: '#e11d48', secondary: '#fb7185', accent: '#38bdf8', bgGlow: 'rgba(251, 113, 133, 0.28)', label: 'CRIMSON NEO', adTag: 'OFFICIAL AD' },
  { primary: '#059669', secondary: '#34d399', accent: '#fbbf24', bgGlow: 'rgba(52, 211, 153, 0.28)', label: 'BIO EMERALD', adTag: 'ORGANIC AD' },
  { primary: '#7c3aed', secondary: '#c084fc', accent: '#38bdf8', bgGlow: 'rgba(192, 132, 252, 0.28)', label: 'QUANTUM VIOLET', adTag: 'STUDIO RENDER' },
  { primary: '#d97706', secondary: '#fbbf24', accent: '#06b6d4', bgGlow: 'rgba(251, 191, 36, 0.28)', label: 'SOLAR AMBER', adTag: 'PREMIUM BATCH' },
  { primary: '#0f172a', secondary: '#64748b', accent: '#38bdf8', bgGlow: 'rgba(100, 116, 139, 0.28)', label: 'TITANIUM OBSIDIAN', adTag: 'TITANIUM EDITION' },
  { primary: '#4f46e5', secondary: '#818cf8', accent: '#10b981', bgGlow: 'rgba(129, 140, 248, 0.28)', label: 'DEEP COBALT', adTag: 'PRO SERIES' },
  { primary: '#0d9488', secondary: '#2dd4bf', accent: '#f43f5e', bgGlow: 'rgba(45, 212, 191, 0.28)', label: 'GLACIAL TEAL', adTag: 'ARCTIC EDITION' },
  { primary: '#db2777', secondary: '#f472b6', accent: '#fbbf24', bgGlow: 'rgba(244, 114, 182, 0.28)', label: 'AURORA PINK', adTag: 'LIMITED LAUNCH' },
  { primary: '#1e293b', secondary: '#94a3b8', accent: '#f59e0b', bgGlow: 'rgba(148, 163, 184, 0.28)', label: 'STEEL GRAPHITE', adTag: 'FLAGSHIP AD' },
  { primary: '#b45309', secondary: '#fde047', accent: '#3b82f6', bgGlow: 'rgba(253, 224, 71, 0.28)', label: 'PURE GOLD', adTag: 'GOLD MASTER' },
  { primary: '#0369a1', secondary: '#7dd3fc', accent: '#ec4899', bgGlow: 'rgba(125, 211, 252, 0.28)', label: 'DEEP SPACE', adTag: 'AI COMMERCIAL' },
  { primary: '#be123c', secondary: '#fda4af', accent: '#f59e0b', bgGlow: 'rgba(253, 164, 175, 0.28)', label: 'RUBY BURST', adTag: 'EXCLUSIVE' },
  { primary: '#15803d', secondary: '#86efac', accent: '#38bdf8', bgGlow: 'rgba(134, 239, 172, 0.28)', label: 'LIME HYPER', adTag: 'REFRESH AD' },
  { primary: '#6b21a8', secondary: '#e9d5ff', accent: '#fbbf24', bgGlow: 'rgba(233, 213, 255, 0.28)', label: 'ROYAL VELVET', adTag: 'LUXURY AD' },
  { primary: '#334155', secondary: '#cbd5e1', accent: '#38bdf8', bgGlow: 'rgba(203, 213, 225, 0.28)', label: 'PLATINUM 999', adTag: 'PROTOTYPE' },
];

function stringToHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export const AIProductImage: React.FC<AIProductImageProps> = ({
  product,
  className = 'w-full h-full',
  isDetailed = false,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  const hash = stringToHash(product.id + product.name + (product.sku || ''));
  const palette = STUDIO_PALETTES[hash % STUDIO_PALETTES.length];
  const formVariant = (hash >> 2) % 5; // 5 distinct commercial variations per category

  // Check if product has an explicit image or an available high-res commercial photo
  const categoryAds = REAL_COMMERCIAL_ADS[product.district] || [];
  const assignedRealAd =
    product.imageUrl ||
    (categoryAds.length > 0 && hash % 4 === 0 ? categoryAds[hash % categoryAds.length] : null);

  if (assignedRealAd && !imgFailed) {
    return (
      <div className={`relative overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
        {/* Soft atmospheric backlight */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${palette.bgGlow} 0%, transparent 70%)`,
          }}
        />

        <img
          src={assignedRealAd}
          alt={product.name}
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Commercial Advertising Gloss Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/10 pointer-events-none" />

        {/* Commercial Advertisement Badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-700/80 shadow-lg pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono tracking-wider font-bold text-amber-300">
            {palette.adTag} · 8K
          </span>
        </div>

        {/* Studio Lighting Signature */}
        <div className="absolute bottom-2 left-2.5 text-[8px] font-mono tracking-widest text-slate-400 uppercase pointer-events-none bg-slate-950/70 backdrop-blur-sm px-1.5 py-0.5 rounded border border-slate-800">
          AMAZON CITY STUDIO · {palette.label}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
      {/* Studio Radial Lighting */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${palette.bgGlow} 0%, rgba(2,6,23,0.92) 80%)`,
        }}
      />

      {/* Unique Commercial Ad Vector Illustration */}
      {renderCommercialAdArtwork(product.district, formVariant, palette, product.name, product.price)}

      {/* Specular Edge Highlighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-white/10 pointer-events-none" />

      {/* Commercial Advertisement Header */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-slate-800 shadow pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span className="text-[9px] font-mono tracking-wider font-bold text-slate-300">
          {palette.adTag} · AI
        </span>
      </div>

      {/* Plinth Branding & Slogan */}
      <div className="absolute bottom-2 left-2.5 text-[8px] font-mono tracking-wider text-slate-400 pointer-events-none uppercase bg-slate-950/60 backdrop-blur-sm px-1.5 py-0.5 rounded border border-slate-800/80">
        {palette.label} · STUDIO #{hash % 99 + 1}
      </div>
    </div>
  );
};

// Render dedicated commercial advertising art for drinks, food, toys, gaming, phones, etc.
function renderCommercialAdArtwork(
  district: CityDistrict,
  variant: number,
  palette: typeof STUDIO_PALETTES[0],
  name: string,
  price: number
) {
  const shortName = name.split('·')[0].split('(')[0].trim().slice(0, 15);

  switch (district) {
    case 'drinks':
      if (variant === 0) {
        // High-energy soda / cola can with condensation droplets
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="75" ry="16" fill="#020617" opacity="0.8" />
            <rect x="125" y="45" width="70" height="150" rx="18" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <ellipse cx="160" cy="45" rx="35" ry="10" fill="#e2e8f0" stroke="#94a3b8" />
            <ellipse cx="160" cy="45" rx="28" ry="7" fill="#64748b" />
            <rect x="156" y="38" width="8" height="12" rx="2" fill="#cbd5e1" />
            <line x1="140" y1="52" x2="140" y2="185" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
            {/* Glossy Brand Circle */}
            <circle cx="160" cy="115" r="24" fill="#090d16" stroke={palette.accent} strokeWidth="2" />
            <text x="160" y="118" textAnchor="middle" fill={palette.accent} fontSize="9" fontWeight="900">
              {shortName.slice(0, 9).toUpperCase()}
            </text>
            <text x="160" y="130" textAnchor="middle" fill="#94a3b8" fontSize="6" fontFamily="monospace">
              ZERO SUGAR
            </text>
            {/* Fresh water droplets */}
            <circle cx="138" cy="85" r="2.5" fill="#ffffff" opacity="0.85" />
            <circle cx="178" cy="145" r="2" fill="#ffffff" opacity="0.85" />
            <circle cx="145" cy="165" r="1.5" fill="#ffffff" opacity="0.85" />
            <circle cx="172" cy="75" r="2" fill="#ffffff" opacity="0.85" />
          </svg>
        );
      } else if (variant === 1) {
        // Frosted Botanical Glass Bottle
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" opacity="0.8" />
            <rect x="150" y="38" width="20" height="42" fill={palette.secondary} opacity="0.85" />
            <ellipse cx="160" cy="38" rx="12" ry="5" fill="#d97706" />
            <path d="M 150 78 C 120 95, 120 190, 120 190 L 200 190 C 200 190, 200 95, 170 78 Z" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="126" y="108" width="68" height="52" rx="4" fill="#090d16" stroke={palette.accent} strokeWidth="1" />
            <text x="160" y="128" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
              {shortName.slice(0, 10)}
            </text>
            <text x="160" y="140" textAnchor="middle" fill={palette.secondary} fontSize="7" fontFamily="monospace">
              ESTATE RESERVE
            </text>
            <text x="160" y="152" textAnchor="middle" fill={palette.accent} fontSize="6" fontWeight="bold">
              ORGANIC ELIXIR
            </text>
          </svg>
        );
      } else if (variant === 2) {
        // Hexagonal Sports Hydration Flask
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" opacity="0.8" />
            <polygon points="130,55 190,55 205,190 115,190" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="145" y="35" width="30" height="20" rx="5" fill="#334155" stroke="#94a3b8" />
            <circle cx="160" cy="120" r="25" fill="#0f172a" stroke={palette.accent} strokeWidth="2" />
            <text x="160" y="122" textAnchor="middle" fill={palette.accent} fontSize="9" fontWeight="900">
              HYDRO+
            </text>
            <text x="160" y="133" textAnchor="middle" fill="#38bdf8" fontSize="6" fontFamily="monospace">
              ELECTROLYTES
            </text>
          </svg>
        );
      } else if (variant === 3) {
        // Nitro Cold Brew Amber Glass Jug
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" opacity="0.8" />
            <rect x="115" y="70" width="90" height="125" rx="14" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="148" y="45" width="24" height="26" fill="#475569" />
            <circle cx="160" cy="45" rx="14" ry="6" fill="#b45309" />
            <line x1="125" y1="80" x2="125" y2="185" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
            <rect x="125" y="112" width="70" height="48" rx="4" fill="#090d16" />
            <text x="160" y="132" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
              {shortName.slice(0, 9)}
            </text>
            <text x="160" y="146" textAnchor="middle" fill={palette.accent} fontSize="7" fontFamily="monospace">
              NITRO COLD DRIP
            </text>
          </svg>
        );
      } else {
        // Exotic Mango & Citrus Burst Can
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="75" ry="16" fill="#020617" opacity="0.8" />
            <rect x="120" y="45" width="80" height="145" rx="16" fill={palette.primary} stroke={palette.accent} strokeWidth="2" />
            <polygon points="120,80 180,45 200,45 140,80" fill={palette.accent} opacity="0.4" />
            <circle cx="160" cy="115" r="28" fill="#090d16" stroke={palette.secondary} strokeWidth="2" />
            <text x="160" y="115" textAnchor="middle" fill={palette.accent} fontSize="9" fontWeight="900">
              BURST
            </text>
            <text x="160" y="126" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">
              MANGO YUZU
            </text>
          </svg>
        );
      }

    case 'food':
      if (variant === 0) {
        // Luxury Artisan Dark Chocolate Box with gold foil
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="85" ry="16" fill="#020617" opacity="0.8" />
            <rect x="90" y="65" width="140" height="110" rx="10" fill="#1c1917" stroke={palette.secondary} strokeWidth="2" />
            <rect x="100" y="75" width="120" height="90" rx="6" fill={palette.primary} />
            {/* Chocolate pieces grid */}
            {Array.from({ length: 2 }).map((_, r) => (
              <g key={r}>
                {Array.from({ length: 3 }).map((_, c) => (
                  <rect
                    key={c}
                    x={110 + c * 35}
                    y={85 + r * 38}
                    width={28}
                    height={30}
                    rx="4"
                    fill="#292524"
                    stroke={palette.accent}
                    strokeWidth="1.5"
                  />
                ))}
              </g>
            ))}
            <rect x="110" y="145" width="100" height="20" rx="4" fill="#0c0a09" stroke={palette.accent} strokeWidth="1" />
            <text x="160" y="158" textAnchor="middle" fill={palette.accent} fontSize="8" fontWeight="bold">
              {shortName.slice(0, 12).toUpperCase()}
            </text>
          </svg>
        );
      } else if (variant === 1) {
        // Gourmet Japanese Ramen Bowl with Chopsticks
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="85" ry="16" fill="#020617" opacity="0.8" />
            {/* Bowl */}
            <path d="M 85 90 C 95 190, 225 190, 235 90 Z" fill={palette.primary} stroke={palette.secondary} strokeWidth="2.5" />
            <ellipse cx="160" cy="90" rx="75" ry="25" fill="#451a03" stroke={palette.accent} strokeWidth="2" />
            {/* Broth & egg toppings */}
            <ellipse cx="160" cy="93" rx="65" ry="18" fill="#78350f" />
            <circle cx="140" cy="93" r="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="140" cy="93" r="6" fill="#f59e0b" />
            <circle cx="175" cy="96" r="9" fill="#15803d" />
            {/* Chopsticks */}
            <line x1="75" y1="65" x2="245" y2="100" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
            <line x1="80" y1="58" x2="250" y2="92" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
            <text x="160" y="165" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
              ARTISAN CRAFT RAMEN
            </text>
          </svg>
        );
      } else if (variant === 2) {
        // Organic Honeycomb & Cereal Jar
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" opacity="0.8" />
            <rect x="110" y="60" width="100" height="130" rx="14" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="135" y="40" width="50" height="22" rx="4" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
            <circle cx="160" cy="115" r="28" fill="#090d16" stroke={palette.accent} strokeWidth="2" />
            <polygon points="160,95 180,105 180,125 160,135 140,125 140,105" fill={palette.accent} opacity="0.4" />
            <text x="160" y="118" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
              HONEYCOMB
            </text>
            <text x="160" y="165" textAnchor="middle" fill={palette.accent} fontSize="8" fontFamily="monospace">
              PURE BIO CEREAL
            </text>
          </svg>
        );
      } else if (variant === 3) {
        // Truffle Kettle Crisps Canister
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="70" ry="16" fill="#020617" opacity="0.8" />
            <rect x="120" y="45" width="80" height="150" rx="20" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <ellipse cx="160" cy="45" rx="40" ry="10" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
            <line x1="135" y1="55" x2="135" y2="185" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
            <rect x="126" y="95" width="68" height="50" rx="4" fill="#0c0a09" stroke={palette.accent} strokeWidth="1" />
            <text x="160" y="118" textAnchor="middle" fill={palette.accent} fontSize="8" fontWeight="900">
              TRUFFLE CRISPS
            </text>
            <text x="160" y="130" textAnchor="middle" fill="#ffffff" fontSize="6">
              SEA SALT & HERBS
            </text>
          </svg>
        );
      } else {
        // Ceremonial First-Harvest Matcha Tin
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" opacity="0.8" />
            <rect x="115" y="70" width="90" height="120" rx="16" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="160" cy="70" rx="45" ry="12" fill="#047857" stroke="#6ee7b7" strokeWidth="2" />
            <circle cx="160" cy="130" r="26" fill="#022c22" stroke="#fbbf24" strokeWidth="2" />
            <text x="160" y="130" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">
              MATCHA
            </text>
            <text x="160" y="142" textAnchor="middle" fill="#a7f3d0" fontSize="6" fontFamily="monospace">
              SPRING UJI 100g
            </text>
          </svg>
        );
      }

    case 'toys':
      if (variant === 0) {
        // Cyber Mecha & Robot Exo-Suit
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="85" ry="16" fill="#030712" opacity="0.8" />
            <rect x="120" y="85" width="80" height="75" rx="8" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="128" y="75" width="16" height="10" rx="3" fill={palette.accent} />
            <rect x="152" y="75" width="16" height="10" rx="3" fill={palette.accent} />
            <rect x="176" y="75" width="16" height="10" rx="3" fill={palette.accent} />
            <rect x="75" y="100" width="40" height="45" rx="6" fill={palette.secondary} />
            <rect x="205" y="100" width="40" height="45" rx="6" fill={palette.secondary} />
            <rect x="135" y="105" width="50" height="20" rx="5" fill="#090d16" stroke={palette.accent} strokeWidth="1.5" />
            <circle cx="150" cy="115" r="4" fill={palette.accent} />
            <circle cx="170" cy="115" r="4" fill={palette.accent} />
            <text x="160" y="185" textAnchor="middle" fill={palette.accent} fontSize="8" fontWeight="900">
              TITAN MECH-01
            </text>
          </svg>
        );
      } else if (variant === 1) {
        // High-Speed Anti-Gravity RC Speeder
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="90" ry="16" fill="#030712" opacity="0.8" />
            <path d="M 60 145 Q 160 90, 260 145 L 245 175 Q 160 155, 75 175 Z" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <polygon points="120,115 160,95 200,115 190,135 130,135" fill="#090d16" stroke={palette.accent} strokeWidth="1.5" />
            <circle cx="95" cy="175" r="16" fill="#1e293b" stroke={palette.accent} strokeWidth="3" />
            <circle cx="225" cy="175" r="16" fill="#1e293b" stroke={palette.accent} strokeWidth="3" />
            <ellipse cx="160" cy="190" rx="50" ry="4" fill={palette.accent} opacity="0.5" filter="blur(3px)" />
            <text x="160" y="152" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
              RC TURBO SPEEDER
            </text>
          </svg>
        );
      } else if (variant === 2) {
        // Modular STEM Space Station & Bricks
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="85" ry="16" fill="#030712" opacity="0.8" />
            <circle cx="160" cy="110" r="45" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="75" y="100" width="40" height="20" rx="4" fill="#334155" stroke={palette.accent} strokeWidth="1.5" />
            <rect x="205" y="100" width="40" height="20" rx="4" fill="#334155" stroke={palette.accent} strokeWidth="1.5" />
            <circle cx="160" cy="110" r="22" fill="#090d16" stroke={palette.accent} strokeWidth="2" />
            <circle cx="160" cy="110" r="12" fill={palette.accent} opacity="0.8" />
            <text x="160" y="180" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
              ORBITAL LAB 1,280 PCS
            </text>
          </svg>
        );
      } else {
        // Cybernetic Plush Companion
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#030712" opacity="0.8" />
            <circle cx="160" cy="120" r="55" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <circle cx="120" cy="70" r="22" fill={palette.secondary} />
            <circle cx="200" cy="70" r="22" fill={palette.secondary} />
            <circle cx="140" cy="115" r="10" fill="#020617" />
            <circle cx="142" cy="113" r="4" fill="#38bdf8" />
            <circle cx="180" cy="115" r="10" fill="#020617" />
            <circle cx="182" cy="113" r="4" fill="#38bdf8" />
            <ellipse cx="160" cy="135" rx="14" ry="8" fill="#fda4af" />
            <text x="160" y="185" textAnchor="middle" fill={palette.accent} fontSize="8" fontWeight="900">
              CYBER PLUSH DRAGON
            </text>
          </svg>
        );
      }

    case 'gaming':
      if (variant === 0) {
        // Pro Wireless Esports Gamepad
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="85" ry="16" fill="#020617" opacity="0.8" />
            <path
              d="M 90 95 C 100 65, 220 65, 230 95 C 245 130, 240 185, 215 185 C 195 185, 185 145, 160 145 C 135 145, 125 185, 105 185 C 80 185, 75 130, 90 95 Z"
              fill={palette.primary}
              stroke={palette.secondary}
              strokeWidth="2.5"
            />
            <rect x="135" y="80" width="50" height="26" rx="4" fill="#0f172a" stroke={palette.accent} strokeWidth="1.5" />
            <line x1="140" y1="85" x2="180" y2="85" stroke={palette.accent} strokeWidth="2" strokeLinecap="round" />
            <circle cx="130" cy="140" r="14" fill="#334155" stroke={palette.secondary} strokeWidth="2" />
            <circle cx="190" cy="140" r="14" fill="#334155" stroke={palette.secondary} strokeWidth="2" />
            <text x="160" y="172" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
              PRO WIRELESS V2
            </text>
          </svg>
        );
      } else if (variant === 1) {
        // Tempered Glass Liquid-Cooled Gaming Tower
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="210" rx="90" ry="16" fill="#020617" opacity="0.8" />
            <rect x="105" y="35" width="110" height="165" rx="10" fill="#090d16" stroke={palette.secondary} strokeWidth="2" />
            <rect x="112" y="42" width="96" height="151" rx="6" fill={palette.primary} />
            <circle cx="160" cy="75" r="22" fill="#020617" stroke={palette.accent} strokeWidth="3" />
            <circle cx="160" cy="120" r="22" fill="#020617" stroke={palette.accent} strokeWidth="3" />
            <line x1="125" y1="165" x2="195" y2="165" stroke={palette.accent} strokeWidth="3" strokeLinecap="round" />
            <text x="160" y="180" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">
              RTX 5090 LIQUID
            </text>
          </svg>
        );
      } else {
        // Spatial VR Headset
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="85" ry="16" fill="#020617" opacity="0.8" />
            <rect x="80" y="70" width="160" height="90" rx="20" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="95" y="85" width="130" height="60" rx="12" fill="#090d16" stroke={palette.accent} strokeWidth="2" />
            <circle cx="130" cy="115" r="16" fill={palette.accent} opacity="0.4" filter="blur(4px)" />
            <circle cx="190" cy="115" r="16" fill={palette.accent} opacity="0.4" filter="blur(4px)" />
            <text x="160" y="120" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">
              SPATIAL VR 8K
            </text>
          </svg>
        );
      }

    case 'phones':
      if (variant === 0) {
        // Titanium Edge-to-Edge Flagship
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="210" rx="80" ry="15" fill="#030712" opacity="0.8" />
            <rect x="110" y="30" width="100" height="175" rx="18" fill="#090d16" stroke={palette.secondary} strokeWidth="2.5" />
            <rect x="115" y="35" width="90" height="165" rx="14" fill={palette.primary} />
            <circle cx="160" cy="95" r="28" fill={palette.accent} opacity="0.4" filter="blur(5px)" />
            <circle cx="160" cy="95" r="16" fill="#ffffff" opacity="0.8" />
            <line x1="125" y1="60" x2="195" y2="60" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <text x="160" y="75" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
              10:24
            </text>
            <text x="160" y="165" textAnchor="middle" fill={palette.accent} fontSize="8" fontFamily="monospace">
              {shortName.slice(0, 12)}
            </text>
            <rect x="145" y="38" width="30" height="8" rx="4" fill="#020617" />
          </svg>
        );
      } else if (variant === 1) {
        // Quantum Dual-Hinge Foldable
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="210" rx="80" ry="15" fill="#030712" opacity="0.8" />
            <rect x="80" y="35" width="75" height="165" rx="10" fill={palette.primary} stroke={palette.secondary} strokeWidth="1.5" />
            <rect x="165" y="35" width="75" height="165" rx="10" fill={palette.primary} stroke={palette.secondary} strokeWidth="1.5" />
            <rect x="156" y="35" width="8" height="165" fill="#334155" />
            <circle cx="117" cy="115" r="20" fill={palette.accent} opacity="0.3" filter="blur(4px)" />
            <circle cx="202" cy="115" r="20" fill={palette.accent} opacity="0.3" filter="blur(4px)" />
            <text x="160" y="185" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
              DUAL-FOLD 120Hz
            </text>
          </svg>
        );
      } else {
        // Cyber Gaming Phone with RGB Vent
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="210" rx="80" ry="15" fill="#030712" opacity="0.8" />
            <rect x="108" y="28" width="104" height="178" rx="16" fill="#030712" stroke={palette.accent} strokeWidth="2" />
            <rect x="114" y="34" width="92" height="166" rx="12" fill={palette.primary} />
            <polygon points="135,70 185,70 175,100 145,100" fill="#020617" stroke={palette.secondary} strokeWidth="1" />
            <circle cx="160" cy="125" r="22" fill="#020617" stroke={palette.accent} strokeWidth="2" />
            <text x="160" y="129" textAnchor="middle" fill={palette.accent} fontSize="9" fontWeight="bold">
              SNAPDRAGON
            </text>
          </svg>
        );
      }

    case 'monitors':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="210" rx="90" ry="14" fill="#020617" opacity="0.8" />
          <polygon points="152,140 168,140 165,195 155,195" fill="#475569" />
          <polygon points="120,205 200,205 185,195 135,195" fill="#334155" />
          <path
            d="M 40 55 Q 160 48, 280 55 L 280 155 Q 160 148, 40 155 Z"
            fill="#090d16"
            stroke={palette.secondary}
            strokeWidth="2.5"
          />
          <path
            d="M 44 59 Q 160 52, 276 59 L 276 151 Q 160 144, 44 151 Z"
            fill={palette.primary}
          />
          <circle cx="160" cy="102" r="28" fill={palette.accent} opacity="0.3" filter="blur(6px)" />
          <text x="160" y="105" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900" letterSpacing="1">
            {shortName.slice(0, 12).toUpperCase()}
          </text>
          <text x="160" y="118" textAnchor="middle" fill={palette.secondary} fontSize="8" fontFamily="monospace">
            240Hz · 0.03ms QD-OLED
          </text>
        </svg>
      );

    case 'keyboards':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="200" rx="100" ry="16" fill="#020617" opacity="0.8" />
          <rect x="50" y="80" width="220" height="105" rx="12" fill="#0f172a" stroke={palette.secondary} strokeWidth="2" />
          <rect x="58" y="88" width="204" height="89" rx="6" fill="#020617" />
          {Array.from({ length: 4 }).map((_, r) => (
            <g key={r}>
              {Array.from({ length: 12 }).map((_, c) => (
                <rect
                  key={c}
                  x={64 + c * 16}
                  y={94 + r * 19}
                  width={13}
                  height={15}
                  rx="3"
                  fill={palette.primary}
                  stroke={palette.secondary}
                  strokeWidth="1"
                />
              ))}
            </g>
          ))}
          <circle cx="250" cy="98" r="7" fill={palette.accent} />
          <circle cx="250" cy="98" r="3" fill="#090d16" />
        </svg>
      );

    case 'mice':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="205" rx="70" ry="16" fill="#020617" opacity="0.8" />
          <path
            d="M 120 70 C 130 40, 190 40, 200 70 C 210 100, 215 160, 195 185 C 180 200, 140 200, 125 185 C 105 160, 110 100, 120 70 Z"
            fill={palette.primary}
            stroke={palette.secondary}
            strokeWidth="2.5"
          />
          <line x1="160" y1="45" x2="160" y2="100" stroke={palette.secondary} strokeWidth="1.5" />
          <rect x="155" y="60" width="10" height="22" rx="4" fill="#020617" stroke={palette.accent} strokeWidth="1.5" />
          <circle cx="160" cy="140" r="4" fill="#020617" stroke={palette.accent} strokeWidth="1" />
          <ellipse cx="160" cy="190" rx="35" ry="4" fill={palette.accent} opacity="0.6" filter="blur(3px)" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="205" rx="85" ry="16" fill="#020617" opacity="0.8" />
          <circle cx="160" cy="115" r="50" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
          <circle cx="160" cy="115" r="30" fill="#020617" stroke={palette.accent} strokeWidth="2" />
          <text x="160" y="119" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
            {shortName.slice(0, 8)}
          </text>
        </svg>
      );
  }
}
