import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  MapPin,
  Bot,
  Store,
  Bell,
  X,
  ChevronDown,
  Sparkles,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { DISTRICTS } from '../data/productEngine';
import { CityDistrict } from '../types';

export const Navbar: React.FC = () => {
  const {
    cartCount,
    cartTotal,
    favorites,
    activeDistrict,
    setActiveDistrict,
    searchQuery,
    setSearchQuery,
    setIsCartOpen,
    setIsMapOpen,
    setIsAiAssistantOpen,
    setIsSellerDashboardOpen,
    setIsProfileOpen,
    openOrderTracking,
    deliveryLocation,
    setDeliveryLocation,
    notifications,
    markNotificationRead,
  } = useShop();

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isNotifDropdownOpen, setIsNotifDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchInput, setSearchInput] = useState(searchQuery);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const notifContainerRef = useRef<HTMLDivElement>(null);
  const locationContainerRef = useRef<HTMLDivElement>(null);

  // Close popups on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
      if (notifContainerRef.current && !notifContainerRef.current.contains(e.target as Node)) {
        setIsNotifDropdownOpen(false);
      }
      if (locationContainerRef.current && !locationContainerRef.current.contains(e.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setIsSearchFocused(false);
  };

  const handleQuickSuggestion = (term: string) => {
    setSearchInput(term);
    setSearchQuery(term);
    setIsSearchFocused(false);
  };

  const unreadNotifs = notifications.filter((n) => !n.read).length;

  const popularSearches = [
    'Quantum Fold',
    'Vortex Cola',
    '360Hz Gaming Monitor',
    'Rapid Trigger Keyboard',
    'Carbon Wireless Mouse',
    'Threadripper Workstation',
    'RoboRover RC',
    'Techwear Parka',
  ];

  const cityDistrictsList = [
    'District 1 · Metropolis Central',
    'District 4 · Cyber Bay Harbor',
    'District 7 · Neo Tokyo Skyway',
    'District 9 · Silicon Spire',
    'District 12 · Orbital Hub',
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      {/* Top Bar Announcement / Live Hyperloop Ticker */}
      <div className="hidden sm:flex items-center justify-between px-4 py-1.5 text-xs bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border-b border-slate-800/50 text-slate-400">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-medium">100,000,000+ PRODUCTS AVAILABLE</span>
          <span className="text-slate-600">·</span>
          <span>15 Specialised City Districts</span>
          <span className="text-slate-600">·</span>
          <span className="text-amber-400 font-medium">Hyperloop Drone Delivery: Under 30 mins</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSellerDashboardOpen(true)}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Store className="w-3.5 h-3.5" />
            <span>Seller Center</span>
          </button>
          <span className="text-slate-700">|</span>
          <button
            onClick={() => openOrderTracking()}
            className="hover:text-slate-200 transition-colors cursor-pointer"
          >
            Track Deliveries
          </button>
          <span className="text-slate-700">|</span>
          <button
            onClick={() => setIsProfileOpen(true)}
            className="hover:text-slate-200 transition-colors cursor-pointer"
          >
            Help & 24/7 AI Desk
          </button>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-3 md:gap-6">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              setActiveDistrict('all');
              setSearchQuery('');
              setSearchInput('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group text-left cursor-pointer flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 p-[1px] shadow-lg shadow-amber-500/10">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                <span className="font-display font-extrabold text-xl tracking-tighter bg-gradient-to-tr from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  AC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors leading-tight">
                AMAZON CITY
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-medium">
                EVERYTHING IN ONE CITY
              </span>
            </div>
          </button>
        </div>

        {/* Location Dropdown selector */}
        <div className="hidden lg:block relative shrink-0" ref={locationContainerRef}>
          <button
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-slate-700 text-left text-xs transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <div className="max-w-[130px] truncate">
              <div className="text-[10px] text-slate-400 leading-none">Deliver to</div>
              <div className="text-slate-200 font-medium truncate">{deliveryLocation}</div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          </button>

          {isLocationDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-1">
              <div className="text-xs font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">
                Select City District
              </div>
              <div className="divide-y divide-slate-800/60">
                {cityDistrictsList.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setDeliveryLocation(loc);
                      setIsLocationDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      deliveryLocation === loc
                        ? 'bg-amber-500/10 text-amber-400 font-medium'
                        : 'text-slate-300 hover:bg-slate-800/80'
                    }`}
                  >
                    <span>{loc}</span>
                    {deliveryLocation === loc && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Center Zone: Search Bar with Autocomplete */}
        <div className="flex-1 max-w-2xl relative" ref={searchContainerRef}>
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            {/* Category selection within search bar */}
            <div className="hidden sm:flex items-center pl-3 pr-2 py-2 border-r border-slate-800 bg-slate-900 text-xs text-slate-300 rounded-l-xl">
              <select
                value={activeDistrict}
                onChange={(e) => setActiveDistrict(e.target.value as CityDistrict)}
                aria-label="Filter by City District"
                className="bg-transparent text-slate-200 font-medium focus:outline-none cursor-pointer pr-1"
              >
                <option value="all" className="bg-slate-900 text-slate-200">
                  All Districts
                </option>
                {DISTRICTS.map((d) => (
                  <option key={d.id} value={d.id} className="bg-slate-900 text-slate-200">
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search 100,000,000+ products (e.g., iPhone, cola, gaming mouse, 4K monitor)..."
              className="w-full bg-slate-900 text-slate-100 placeholder-slate-500 text-sm py-2.5 pl-4 pr-18 sm:rounded-r-none rounded-l-xl sm:rounded-l-none focus:outline-none border-y border-l sm:border-l-0 border-slate-800 focus:border-amber-500/60 transition-colors"
            />

            {searchInput && (
              <button
                type="button"
                onClick={() => {
                  setSearchInput('');
                  setSearchQuery('');
                }}
                className="absolute right-12 text-slate-400 hover:text-slate-200 p-1 cursor-pointer"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              type="submit"
              aria-label="Search Amazon City"
              className="h-10 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold rounded-r-xl flex items-center justify-center transition-all cursor-pointer shadow-md shadow-amber-500/20"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Autocomplete Dropdown */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/98 border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl">
              <div className="p-3 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-300">Popular in Amazon City</span>
                <span className="text-[11px] text-amber-400/90 font-mono">100M+ Items Indexed</span>
              </div>
              <div className="p-2 grid grid-cols-2 gap-1">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSuggestion(term)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:text-amber-400 hover:bg-slate-800/60 rounded-lg text-left transition-colors cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{term}</span>
                  </button>
                ))}
              </div>
              <div className="p-2 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs px-3">
                <span className="text-slate-400">Need personal shopping help?</span>
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchFocused(false);
                    setIsAiAssistantOpen(true);
                  }}
                  className="text-amber-400 font-medium hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Ask City AI
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Zone: Interactive Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Interactive City Map Button */}
          <button
            onClick={() => setIsMapOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 hover:text-amber-400 transition-colors cursor-pointer"
            title="Open Interactive Amazon City Map"
          >
            <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span className="hidden md:inline font-semibold">City Map</span>
          </button>

          {/* City AI Assistant Button */}
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/30 hover:border-violet-500/60 text-xs font-medium text-violet-200 hover:text-white transition-all cursor-pointer shadow-sm shadow-violet-500/10"
            title="Chat with City AI Shopping Assistant"
          >
            <Bot className="w-4 h-4 text-violet-400" />
            <span className="hidden lg:inline font-semibold">City AI</span>
          </button>

          {/* Notifications Button */}
          <div className="relative" ref={notifContainerRef}>
            <button
              onClick={() => setIsNotifDropdownOpen(!isNotifDropdownOpen)}
              className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              {unreadNotifs > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>

            {isNotifDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 z-50">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-semibold text-slate-200">City Dispatch Updates</span>
                  <span className="text-[11px] text-amber-400 font-mono">{unreadNotifs} New</span>
                </div>
                <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => markNotificationRead(n.id)}
                      className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                        n.read ? 'bg-slate-950/40 text-slate-400' : 'bg-slate-800/60 text-slate-200 border-l-2 border-amber-400'
                      }`}
                    >
                      <div className="font-medium text-slate-200">{n.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{n.message}</div>
                      <div className="text-[10px] text-slate-500 mt-1 font-mono">{n.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Favorites Wishlist */}
          <button
            onClick={() => {
              // Open favorites view by querying or selecting
              if (favorites.length > 0) {
                setSearchQuery('');
                setActiveDistrict('all');
              }
              setIsProfileOpen(true);
            }}
            className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors cursor-pointer"
            title="Wishlist / Favorites"
          >
            <Heart className="w-4 h-4 text-slate-300 hover:text-rose-400 transition-colors" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-rose-500 text-white font-mono">
                {favorites.length}
              </span>
            )}
          </button>

          {/* User Account / Profile & Amazon Lists */}
          <button
            onClick={() => setIsProfileOpen(true)}
            className="hidden sm:flex flex-col text-left px-2.5 py-1 rounded-lg text-slate-300 hover:text-white hover:border border-slate-700/80 transition-all cursor-pointer"
            title="User Account & Orders"
          >
            <span className="text-[10px] text-slate-400 leading-tight">Hello, Alex</span>
            <span className="text-xs font-bold text-slate-100 flex items-center gap-1 leading-tight">
              Account & Lists
            </span>
          </button>

          {/* Amazon Returns & Orders */}
          <button
            onClick={() => openOrderTracking()}
            className="hidden md:flex flex-col text-left px-2.5 py-1 rounded-lg text-slate-300 hover:text-white hover:border border-slate-700/80 transition-all cursor-pointer"
            title="Track Orders"
          >
            <span className="text-[10px] text-slate-400 leading-tight">Returns</span>
            <span className="text-xs font-bold text-slate-100 leading-tight">& Orders</span>
          </button>

          {/* Shopping Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 cursor-pointer"
            title="Shopping Cart"
          >
            <div className="relative">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 px-1.5 py-0.2 rounded-full text-[9px] font-black bg-slate-950 text-amber-400 font-mono">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline tabular-nums">
              {cartCount > 0 ? `$${cartTotal.toFixed(2)}` : 'Cart'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
