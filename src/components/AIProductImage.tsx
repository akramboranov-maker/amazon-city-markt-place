import React, { useState } from 'react';
import { Product, CityDistrict } from '../types';

interface AIProductImageProps {
  product: Product;
  className?: string;
  isDetailed?: boolean;
}

// 12 curated studio color themes
const STUDIO_PALETTES = [
  { primary: '#0284c7', secondary: '#38bdf8', accent: '#f59e0b', bgGlow: 'rgba(56, 189, 248, 0.25)', label: 'CYBER AZURE' },
  { primary: '#e11d48', secondary: '#fb7185', accent: '#38bdf8', bgGlow: 'rgba(251, 113, 133, 0.25)', label: 'CRIMSON NEO' },
  { primary: '#059669', secondary: '#34d399', accent: '#fbbf24', bgGlow: 'rgba(52, 211, 153, 0.25)', label: 'BIO EMERALD' },
  { primary: '#7c3aed', secondary: '#a78bfa', accent: '#ec4899', bgGlow: 'rgba(167, 139, 250, 0.25)', label: 'QUANTUM VIOLET' },
  { primary: '#d97706', secondary: '#fbbf24', accent: '#06b6d4', bgGlow: 'rgba(251, 191, 36, 0.25)', label: 'SOLAR AMBER' },
  { primary: '#0f172a', secondary: '#64748b', accent: '#38bdf8', bgGlow: 'rgba(100, 116, 139, 0.25)', label: 'TITANIUM OBSIDIAN' },
  { primary: '#4f46e5', secondary: '#818cf8', accent: '#10b981', bgGlow: 'rgba(129, 140, 248, 0.25)', label: 'DEEP COBALT' },
  { primary: '#0d9488', secondary: '#2dd4bf', accent: '#f43f5e', bgGlow: 'rgba(45, 212, 191, 0.25)', label: 'GLACIAL TEAL' },
  { primary: '#db2777', secondary: '#f472b6', accent: '#fbbf24', bgGlow: 'rgba(244, 114, 182, 0.25)', label: 'AURORA PINK' },
  { primary: '#1e293b', secondary: '#94a3b8', accent: '#f59e0b', bgGlow: 'rgba(148, 163, 184, 0.25)', label: 'STEEL GRAPHITE' },
  { primary: '#b45309', secondary: '#fde047', accent: '#3b82f6', bgGlow: 'rgba(253, 224, 71, 0.25)', label: 'PURE GOLD' },
  { primary: '#0369a1', secondary: '#7dd3fc', accent: '#a855f7', bgGlow: 'rgba(125, 211, 252, 0.25)', label: 'DEEP SPACE' },
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

  // If real AI image generated file exists and has not errored, render it directly!
  if (product.imageUrl && !imgFailed) {
    return (
      <div className={`relative overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-white/5 pointer-events-none" />
      </div>
    );
  }

  // Generate completely unique, distinct AI product visuals based on deterministic seed
  const hash = stringToHash(product.id + product.name + product.sku);
  const palette = STUDIO_PALETTES[hash % STUDIO_PALETTES.length];
  const formVariant = (hash >> 3) % 4; // 4 distinct models per category

  return (
    <div className={`relative overflow-hidden bg-slate-950 flex items-center justify-center ${className}`}>
      {/* Studio Radial Lighting */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${palette.bgGlow} 0%, rgba(2,6,23,0.85) 75%)`,
        }}
      />

      {/* Unique Procedural Product Silhouette */}
      {renderUniqueProductModel(product.district, formVariant, palette, product.name)}

      {/* Specular Edge Highlighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/5 pointer-events-none" />

      {/* Amazon AI Studio Badge */}
      <div className="absolute top-2 right-2 text-[9px] font-mono tracking-widest text-slate-400 px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-800 pointer-events-none">
        AI STUDIO · 8K
      </div>

      {/* Brand Watermark on Studio Plinth */}
      <div className="absolute bottom-2 left-2 text-[8px] font-mono tracking-wider text-slate-500 pointer-events-none uppercase">
        {palette.label}
      </div>
    </div>
  );
};

function renderUniqueProductModel(
  district: CityDistrict,
  variant: number,
  palette: typeof STUDIO_PALETTES[0],
  name: string
) {
  // Short brand identifier
  const shortName = name.split('·')[0].split('(')[0].trim().slice(0, 14);

  switch (district) {
    case 'drinks':
      if (variant === 0) {
        // Slim Modern Can
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="75" ry="16" fill="#020617" />
            <rect x="125" y="45" width="70" height="150" rx="18" fill={palette.primary} stroke={palette.secondary} strokeWidth="1.5" />
            <ellipse cx="160" cy="45" rx="35" ry="10" fill="#e2e8f0" stroke="#94a3b8" />
            <ellipse cx="160" cy="45" rx="28" ry="7" fill="#64748b" />
            <rect x="156" y="38" width="8" height="12" rx="2" fill="#cbd5e1" />
            <line x1="140" y1="52" x2="140" y2="185" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.7" strokeLinecap="round" />
            <circle cx="160" cy="115" r="22" fill="#090d16" stroke={palette.accent} strokeWidth="2" />
            <text x="160" y="118" textAnchor="middle" fill={palette.accent} fontSize="9" fontWeight="900">
              {shortName.slice(0, 8).toUpperCase()}
            </text>
            <circle cx="138" cy="85" r="2.5" fill="#ffffff" opacity="0.8" />
            <circle cx="178" cy="145" r="2" fill="#ffffff" opacity="0.8" />
          </svg>
        );
      } else if (variant === 1) {
        // Frosted Glass Bottle
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" />
            {/* Neck */}
            <rect x="150" y="40" width="20" height="40" fill={palette.secondary} opacity="0.85" />
            <ellipse cx="160" cy="40" rx="12" ry="5" fill="#d97706" />
            {/* Body */}
            <path d="M 150 78 C 120 95, 120 190, 120 190 L 200 190 C 200 190, 200 95, 170 78 Z" fill={palette.primary} stroke={palette.secondary} strokeWidth="1.5" />
            {/* Label */}
            <rect x="126" y="110" width="68" height="50" rx="4" fill="#090d16" stroke={palette.accent} strokeWidth="1" />
            <text x="160" y="132" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
              {shortName.slice(0, 9)}
            </text>
            <text x="160" y="145" textAnchor="middle" fill={palette.secondary} fontSize="7" fontFamily="monospace">
              ESTATE RESERVE
            </text>
          </svg>
        );
      } else if (variant === 2) {
        // Hexagonal Sports Flask
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" />
            <polygon points="130,55 190,55 205,190 115,190" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="145" y="35" width="30" height="20" rx="5" fill="#334155" stroke="#94a3b8" />
            <circle cx="160" cy="120" r="25" fill="#0f172a" stroke={palette.accent} strokeWidth="2" />
            <text x="160" y="124" textAnchor="middle" fill={palette.accent} fontSize="10" fontWeight="900">
              HYDRO
            </text>
          </svg>
        );
      } else {
        // Cold Brew Amber Jug
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="205" rx="80" ry="16" fill="#020617" />
            <rect x="115" y="70" width="90" height="125" rx="14" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
            <rect x="148" y="45" width="24" height="26" fill="#475569" />
            <circle cx="160" cy="45" rx="14" ry="6" fill="#b45309" />
            <line x1="125" y1="80" x2="125" y2="185" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
            <rect x="125" y="115" width="70" height="45" rx="4" fill="#090d16" />
            <text x="160" y="135" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
              {shortName.slice(0, 9)}
            </text>
            <text x="160" y="148" textAnchor="middle" fill={palette.accent} fontSize="7" fontFamily="monospace">
              NITRO COLD DRIP
            </text>
          </svg>
        );
      }

    case 'phones':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="210" rx="80" ry="15" fill="#030712" />
          {variant === 1 ? (
            // Foldable book model
            <g>
              <rect x="80" y="35" width="75" height="165" rx="10" fill={palette.primary} stroke={palette.secondary} strokeWidth="1.5" />
              <rect x="165" y="35" width="75" height="165" rx="10" fill={palette.primary} stroke={palette.secondary} strokeWidth="1.5" />
              <rect x="156" y="35" width="8" height="165" fill="#334155" />
              <circle cx="117" cy="115" r="20" fill={palette.accent} opacity="0.3" filter="blur(4px)" />
              <circle cx="202" cy="115" r="20" fill={palette.accent} opacity="0.3" filter="blur(4px)" />
            </g>
          ) : (
            // Curved titanium flagship
            <g>
              <rect x="110" y="30" width="100" height="175" rx="18" fill="#090d16" stroke={palette.secondary} strokeWidth="2" />
              <rect x="115" y="35" width="90" height="165" rx="14" fill={palette.primary} />
              {/* Wallpaper graphic */}
              <circle cx="160" cy="95" r="25" fill={palette.accent} opacity="0.4" filter="blur(5px)" />
              <circle cx="160" cy="95" r="15" fill="#ffffff" opacity="0.7" />
              <line x1="125" y1="60" x2="195" y2="60" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
              <text x="160" y="75" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
                10:24
              </text>
              <text x="160" y="165" textAnchor="middle" fill={palette.accent} fontSize="8" fontFamily="monospace">
                {shortName.slice(0, 12)}
              </text>
              {/* Camera island */}
              <rect x="145" y="38" width="30" height="8" rx="4" fill="#020617" />
            </g>
          )}
        </svg>
      );

    case 'monitors':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="210" rx="90" ry="14" fill="#020617" />
          <polygon points="152,140 168,140 165,195 155,195" fill="#475569" />
          <polygon points="120,205 200,205 185,195 135,195" fill="#334155" />
          {/* Monitor Screen with curve */}
          <path
            d="M 40 55 Q 160 48, 280 55 L 280 155 Q 160 148, 40 155 Z"
            fill="#090d16"
            stroke={palette.secondary}
            strokeWidth="2"
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
          <ellipse cx="160" cy="200" rx="100" ry="16" fill="#020617" />
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
          <ellipse cx="160" cy="205" rx="70" ry="16" fill="#020617" />
          <path
            d="M 120 70 C 130 40, 190 40, 200 70 C 210 100, 215 160, 195 185 C 180 200, 140 200, 125 185 C 105 160, 110 100, 120 70 Z"
            fill={palette.primary}
            stroke={palette.secondary}
            strokeWidth="2"
          />
          <line x1="160" y1="45" x2="160" y2="100" stroke={palette.secondary} strokeWidth="1.5" />
          <rect x="155" y="60" width="10" height="22" rx="4" fill="#020617" stroke={palette.accent} strokeWidth="1.5" />
          <circle cx="160" cy="140" r="4" fill="#020617" stroke={palette.accent} strokeWidth="1" />
          <circle cx="150" cy="150" r="4" fill="#020617" stroke={palette.accent} strokeWidth="1" />
          <circle cx="170" cy="150" r="4" fill="#020617" stroke={palette.accent} strokeWidth="1" />
          <ellipse cx="160" cy="190" rx="35" ry="4" fill={palette.accent} opacity="0.6" filter="blur(3px)" />
        </svg>
      );

    case 'toys':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="205" rx="85" ry="16" fill="#030712" />
          {/* Modular Robot Mech or Orbital Station */}
          <rect x="120" y="90" width="80" height="70" rx="8" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
          <rect x="128" y="80" width="16" height="10" rx="3" fill={palette.accent} />
          <rect x="152" y="80" width="16" height="10" rx="3" fill={palette.accent} />
          <rect x="176" y="80" width="16" height="10" rx="3" fill={palette.accent} />
          <rect x="75" y="105" width="40" height="40" rx="6" fill={palette.secondary} />
          <rect x="205" y="105" width="40" height="40" rx="6" fill={palette.secondary} />
          <rect x="135" y="110" width="50" height="18" rx="5" fill="#090d16" stroke={palette.accent} strokeWidth="1.5" />
          <circle cx="150" cy="119" r="4" fill={palette.accent} />
          <circle cx="170" cy="119" r="4" fill={palette.accent} />
        </svg>
      );

    case 'gaming':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="205" rx="85" ry="16" fill="#020617" />
          <path
            d="M 90 95 C 100 65, 220 65, 230 95 C 245 130, 240 185, 215 185 C 195 185, 185 145, 160 145 C 135 145, 125 185, 105 185 C 80 185, 75 130, 90 95 Z"
            fill={palette.primary}
            stroke={palette.secondary}
            strokeWidth="2"
          />
          <rect x="135" y="80" width="50" height="26" rx="4" fill="#0f172a" stroke={palette.accent} strokeWidth="1.5" />
          <line x1="140" y1="85" x2="180" y2="85" stroke={palette.accent} strokeWidth="2" strokeLinecap="round" />
          <circle cx="130" cy="140" r="14" fill="#334155" stroke={palette.secondary} strokeWidth="2" />
          <circle cx="190" cy="140" r="14" fill="#334155" stroke={palette.secondary} strokeWidth="2" />
        </svg>
      );

    case 'computers':
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="210" rx="90" ry="16" fill="#020617" />
          <rect x="100" y="30" width="120" height="170" rx="10" fill="#090d16" stroke={palette.secondary} strokeWidth="2" />
          <rect x="108" y="38" width="104" height="154" rx="6" fill={palette.primary} />
          <circle cx="160" cy="70" r="20" fill="#020617" stroke={palette.accent} strokeWidth="3" />
          <circle cx="160" cy="115" r="20" fill="#020617" stroke={palette.accent} strokeWidth="3" />
          <circle cx="160" cy="160" r="20" fill="#020617" stroke={palette.accent} strokeWidth="3" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 320 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="205" rx="85" ry="16" fill="#020617" />
          <circle cx="160" cy="115" r="50" fill={palette.primary} stroke={palette.secondary} strokeWidth="2" />
          <circle cx="160" cy="115" r="30" fill="#020617" stroke={palette.accent} strokeWidth="2" />
          <text x="160" y="119" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">
            {shortName.slice(0, 8)}
          </text>
        </svg>
      );
  }
}
