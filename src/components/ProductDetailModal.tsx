import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { AIProductImage } from './AIProductImage';
import {
  X,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Share2,
  Check,
  MapPin,
  Lock,
  ChevronRight,
  Plus,
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart, buyNow, toggleFavorite, isFavorite, deliveryLocation } =
    useShop();

  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'description' | 'reviews'>('specs');
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  if (!selectedProduct) return null;

  const isFav = isFavorite(selectedProduct.id);

  const basePrice = selectedProduct.price;
  const effectivePrice = couponApplied ? Math.max(1, basePrice * 0.9) : basePrice;
  const dollars = Math.floor(effectivePrice);
  const cents = Math.round((effectivePrice - dollars) * 100);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
    buyNow(selectedProduct);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Amazon Category Breadcrumbs Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-800 bg-slate-950 text-xs text-slate-400 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <span>Amazon City</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-amber-400 font-medium truncate">{selectedProduct.districtName}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="font-mono text-slate-500">{selectedProduct.sku}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Share"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Amazon PDP Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Main 3-Column Amazon Layout (Gallery | Product Details | Amazon Buy Box) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
            {/* Column 1: Multi-Angle Gallery */}
            <div className="lg:col-span-4 flex flex-col-reverse sm:flex-row gap-3">
              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-2 shrink-0 overflow-x-auto sm:overflow-visible">
                {['Front View', 'Studio Angle', 'Close Up', 'Packaging'].map((label, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThumbnailIndex(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-slate-950 flex items-center justify-center p-1 ${
                      activeThumbnailIndex === idx ? 'border-amber-400 shadow-md' : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <AIProductImage product={selectedProduct} className="w-full h-full" />
                  </button>
                ))}
              </div>

              {/* Main Image Stage */}
              <div className="relative flex-1 h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                <AIProductImage product={selectedProduct} className="w-full h-full" isDetailed />

                {selectedProduct.discount > 0 && (
                  <div className="absolute top-3 left-3 bg-rose-600 text-white font-mono font-black text-xs px-2.5 py-1 rounded-md shadow-md z-10">
                    -{selectedProduct.discount}%
                  </div>
                )}
              </div>
            </div>

            {/* Column 2: Center Description, Ratings & Specs */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                  Brand Store: {selectedProduct.seller}
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {selectedProduct.name}
                </h1>

                {/* Rating Row with Amazon breakdown */}
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(selectedProduct.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-bold text-amber-400 font-mono">
                    {selectedProduct.rating.toFixed(1)}
                  </span>
                  <span className="text-slate-500 font-mono">
                    ({selectedProduct.reviewCount.toLocaleString()} ratings)
                  </span>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2 mt-2">
                  {selectedProduct.amazonChoice && (
                    <div className="flex items-center text-[10px] font-bold text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      <span className="text-amber-400 mr-1">Amazon's</span>
                      <span className="text-white">Choice</span>
                    </div>
                  )}
                  {selectedProduct.boughtPastMonth && (
                    <span className="text-xs text-slate-400">
                      {selectedProduct.boughtPastMonth.toLocaleString()}+ bought in past month
                    </span>
                  )}
                </div>
              </div>

              {/* Price Section */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                <div className="flex items-baseline gap-2">
                  {selectedProduct.discount > 0 && (
                    <span className="text-rose-500 font-black text-2xl font-display">
                      -{selectedProduct.discount}%
                    </span>
                  )}
                  <div className="flex items-start text-white">
                    <span className="text-sm font-semibold mt-1">$</span>
                    <span className="text-3xl font-black font-display tracking-tight">{dollars}</span>
                    <span className="text-sm font-semibold mt-1">
                      {String(cents).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {selectedProduct.oldPrice > effectivePrice && (
                  <div className="text-xs text-slate-400 font-mono">
                    Typical price:{' '}
                    <span className="line-through">${selectedProduct.oldPrice.toFixed(2)}</span>
                  </div>
                )}

                {/* Interactive Coupon */}
                {selectedProduct.coupon && (
                  <div
                    onClick={() => setCouponApplied(!couponApplied)}
                    className="flex items-center gap-2 text-xs text-emerald-400 font-semibold cursor-pointer select-none pt-1"
                  >
                    <input
                      type="checkbox"
                      checked={couponApplied}
                      onChange={() => {}}
                      className="rounded bg-slate-800 border-slate-700 accent-emerald-500 cursor-pointer"
                    />
                    <span>{couponApplied ? 'Coupon Applied (-10%)' : selectedProduct.coupon}</span>
                  </div>
                )}
              </div>

              {/* Specifications table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {selectedProduct.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between"
                    >
                      <span className="text-slate-500 text-[10px] uppercase font-semibold">
                        {spec.label}
                      </span>
                      <span className="text-white font-medium truncate">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About this item */}
              <div className="space-y-1.5 text-xs text-slate-300">
                <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
                  About this item
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Amazon Right-Side Buy Box */}
            <div className="lg:col-span-3">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 sticky top-4">
                <div className="flex items-start text-white">
                  <span className="text-xs font-semibold mt-0.5">$</span>
                  <span className="text-2xl font-black font-display tracking-tight">{dollars}</span>
                  <span className="text-xs font-semibold mt-0.5">
                    {String(cents).padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-black italic px-1.5 rounded">
                      prime
                    </span>
                    <span>FREE Delivery <strong className="text-white">Tomorrow</strong></span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Or fastest delivery <strong className="text-emerald-400">Today by 5 PM</strong>. Order within 2 hrs 14 mins.
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1 border-t border-slate-900">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">Deliver to {deliveryLocation}</span>
                </div>

                <div className="text-xs font-bold text-emerald-400">
                  {selectedProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Quantity:</span>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-white focus:outline-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amazon Buy Box Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-3 px-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-amber-500/20"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="w-full py-3 px-4 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-all shadow-md shadow-amber-500/20 cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Trust Metadata */}
                <div className="space-y-1.5 text-[11px] text-slate-400 pt-2 border-t border-slate-900">
                  <div className="flex justify-between">
                    <span>Ships from:</span>
                    <span className="text-slate-200">Amazon City</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sold by:</span>
                    <span className="text-slate-200 truncate max-w-[120px]">{selectedProduct.seller}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Returns:</span>
                    <span className="text-slate-200">30-day refund/replacement</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 pt-1">
                    <Lock className="w-3 h-3" />
                    <span>Secure transaction</span>
                  </div>
                </div>

                {/* Wishlist toggle */}
                <button
                  onClick={() => toggleFavorite(selectedProduct.id)}
                  className="w-full py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-rose-400 hover:border-slate-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{isFav ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Frequently Bought Together Bundle */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Frequently Bought Together
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center">
                  <AIProductImage product={selectedProduct} className="w-full h-full" />
                </div>
                <Plus className="w-4 h-4 text-slate-500" />
                <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center text-xl">
                  ⚡
                </div>
                <Plus className="w-4 h-4 text-slate-500" />
                <div className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center text-xl">
                  🛡️
                </div>
              </div>

              <div className="sm:ml-auto flex items-center gap-3">
                <div>
                  <div className="text-slate-400">Total Price for all 3:</div>
                  <div className="text-base font-bold text-amber-400 font-mono">
                    ${(effectivePrice + 44.98).toFixed(2)}
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs cursor-pointer shadow-md"
                >
                  Add all 3 to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-base font-bold text-white font-display">
              Customer Reviews ({selectedProduct.reviews.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProduct.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={rev.avatar} alt={rev.userName} className="w-7 h-7 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-white">{rev.userName}</div>
                        {rev.verified && (
                          <div className="text-[10px] text-amber-400 font-medium">Verified Purchase</div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-amber-400">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{rev.comment}</p>
                  <div className="text-[10px] text-slate-500 font-mono">{rev.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
