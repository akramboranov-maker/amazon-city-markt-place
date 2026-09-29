import React, { useState, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { productCatalog } from '../data/productEngine';
import { Product } from '../types';
import { AIProductImage } from './AIProductImage';
import { Zap, Clock, ShoppingCart, Star, Heart } from 'lucide-react';

export const FlashDeals: React.FC = () => {
  const { addToCart, buyNow, toggleFavorite, isFavorite, setSelectedProduct } = useShop();
  const [deals, setDeals] = useState<Product[]>([]);

  // Ticking countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 38,
    seconds: 22,
  });

  useEffect(() => {
    setDeals(productCatalog.getFlashDeals(4));

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (deals.length === 0) return null;

  return (
    <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-6 h-6 fill-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
                  AMAZON CITY FLASH DEALS
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500 text-white uppercase tracking-wider">
                  Limited Time
                </span>
              </div>
              <p className="text-xs text-slate-400">High-demand products with algorithmic city discounts</p>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-slate-400 font-medium">Deals Expire In:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-amber-400 text-sm">
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span>:</span>
              <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-rose-400">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {deals.map((product) => {
            const isFav = isFavorite(product.id);
            const stockRemaining = Math.max(4, product.stock % 25);
            return (
              <div
                key={product.id}
                className="group relative bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Discount Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-xs font-black shadow-md">
                    {product.discount}% OFF
                  </span>
                </div>

                {/* Favorite Heart */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>

                {/* Product Image / Visual Showcase */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-950 cursor-pointer flex items-center justify-center mb-4 border border-slate-800/60"
                >
                  <AIProductImage product={product} className="w-full h-full" />
                </div>

                {/* District Tag */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>{product.districtName}</span>
                  <div className="flex items-center gap-1 text-amber-400 font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setSelectedProduct(product)}
                  className="font-bold text-sm text-slate-100 hover:text-amber-400 transition-colors line-clamp-2 cursor-pointer mb-2"
                >
                  {product.name}
                </h3>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-black text-amber-400 font-mono">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-500 line-through font-mono">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>

                {/* Limited Stock Indicator */}
                <div className="mb-4">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-rose-400 font-semibold">Only {stockRemaining} left!</span>
                    <span className="text-slate-500">Fast selling</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"
                      style={{ width: `${Math.min(100, (stockRemaining / 25) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Cart</span>
                  </button>
                  <button
                    onClick={() => buyNow(product)}
                    className="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20 cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
