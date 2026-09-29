/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { CategoryBar } from './components/CategoryBar';
import { HeroSection } from './components/HeroSection';
import { FlashDeals } from './components/FlashDeals';
import { CityMap } from './components/CityMap';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { SellerDashboardModal } from './components/SellerDashboardModal';
import { UserProfileModal } from './components/UserProfileModal';
import { CityAIAssistant } from './components/CityAIAssistant';
import { Footer } from './components/Footer';
import { Bot, Compass, ShoppingCart } from 'lucide-react';

const MainLayout: React.FC = () => {
  const {
    isMapOpen,
    setIsMapOpen,
    setIsAiAssistantOpen,
    setIsCartOpen,
    cartCount,
  } = useShop();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-amber-400 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar />

      {/* District Ribbons */}
      <CategoryBar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* ⚡ Flash Deals */}
        <FlashDeals />

        {/* Core Discovery & Search Architecture Catalog */}
        <ProductGrid />

        {/* Interactive Amazon City Map Section */}
        <CityMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderTrackerModal />
      <SellerDashboardModal />
      <UserProfileModal />
      <CityAIAssistant />

      {/* Map Modal when opened from header button */}
      {isMapOpen && <CityMap isModal onClose={() => setIsMapOpen(false)} />}

      {/* Floating Mobile / Quick Action Dock */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsMapOpen(true)}
          className="p-3.5 rounded-2xl bg-slate-900 border border-slate-700/80 hover:border-cyan-400 text-cyan-400 shadow-xl shadow-cyan-500/10 hover:scale-105 transition-all cursor-pointer"
          title="Open City Map"
        >
          <Compass className="w-5 h-5 animate-spin-slow" />
        </button>

        <button
          onClick={() => setIsAiAssistantOpen(true)}
          className="flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-violet-600/30 hover:scale-105 transition-all cursor-pointer"
          title="Talk with City AI"
        >
          <Bot className="w-5 h-5" />
          <span className="hidden sm:inline">Ask City AI</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer font-bold"
          title="Shopping Cart"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-black bg-slate-950 text-amber-400 font-mono">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainLayout />
    </ShopProvider>
  );
}
