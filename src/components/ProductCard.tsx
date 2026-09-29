import React, { useState } from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { AIProductImage } from './AIProductImage';
import { Star, ShoppingCart, Heart, Check, Clock } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, buyNow, toggleFavorite, isFavorite, setSelectedProduct } = useShop();
  const [justAdded, setJustAdded] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);

  const isFav = isFavorite(product.id);

  // Price calculation with optional coupon
  const basePrice = product.price;
  const effectivePrice = couponApplied ? Math.max(1, basePrice * 0.9) : basePrice;
  const dollars = Math.floor(effectivePrice);
  const cents = Math.round((effectivePrice - dollars) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.stopPropagation();
    buyNow(product);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <div
      onClick={() => setSelectedProduct(product)}
      className="group relative flex flex-col bg-slate-900 border border-slate-800 hover:border-slate-700 hover:shadow-2xl rounded-2xl p-4 transition-all duration-300 cursor-pointer"
    >
      {/* Amazon Badges Header */}
      <div className="flex items-center justify-between gap-1 mb-2 h-6">
        {product.amazonChoice ? (
          <div className="flex items-center text-[10px] font-bold text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
            <span className="text-amber-400 mr-1">Amazon's</span>
            <span className="text-white">Choice</span>
          </div>
        ) : product.badge?.includes('Best Seller') ? (
          <div className="text-[10px] font-bold text-slate-950 bg-amber-400 px-2 py-0.5 rounded shadow-sm">
            #1 Best Seller
          </div>
        ) : product.isFlashDeal ? (
          <div className="text-[10px] font-black text-white bg-rose-600 px-2 py-0.5 rounded uppercase tracking-wider">
            Limited Time Deal
          </div>
        ) : (
          <span className="text-[11px] text-slate-500 font-medium">
            {product.districtName}
          </span>
        )}

        {/* Wishlist Heart */}
        <button
          onClick={handleToggleFav}
          aria-label={isFav ? 'Remove from wishlist' : 'Add to wishlist'}
          className="p-1 rounded-full text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors cursor-pointer ml-auto"
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>
      </div>

      {/* AI Product Image Showcase Slot (100% Unique Image & High-Res) */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center mb-3 border border-slate-800/80">
        <AIProductImage product={product} className="w-full h-full" />

        {/* Discount Tag Over Image */}
        {product.discount > 0 && (
          <div className="absolute top-2.5 left-2.5 bg-rose-600 text-white font-mono font-black text-[11px] px-2 py-0.5 rounded-md shadow-md z-10">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Title */}
      <h3 className="font-semibold text-sm text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug mb-1.5">
        {product.name}
      </h3>

      {/* Amazon Star Rating & Review Count */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="flex items-center text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'fill-amber-400 text-amber-400'
                  : 'text-slate-600'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-mono font-bold text-amber-400">
          {product.rating.toFixed(1)}
        </span>
        <span className="text-xs text-slate-500 font-mono">
          ({product.reviewCount.toLocaleString()})
        </span>
      </div>

      {/* "X+ bought in past month" */}
      {product.boughtPastMonth && (
        <div className="text-[11px] text-slate-400 mb-2">
          {product.boughtPastMonth >= 1000
            ? `${(product.boughtPastMonth / 1000).toFixed(1)}K+`
            : `${product.boughtPastMonth}+`}{' '}
          bought in past month
        </div>
      )}

      {/* Amazon Price Layout: $XX.YY + List Price */}
      <div className="flex items-baseline gap-2 mb-2">
        <div className="flex items-start text-white">
          <span className="text-xs font-semibold mt-0.5">$</span>
          <span className="text-2xl font-black font-display tracking-tight">{dollars}</span>
          <span className="text-xs font-semibold mt-0.5">
            {String(cents).padStart(2, '0')}
          </span>
        </div>

        {product.oldPrice > effectivePrice && (
          <div className="text-xs text-slate-500 font-mono">
            Typical:{' '}
            <span className="line-through">${product.oldPrice.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Coupon Checkbox */}
      {product.coupon && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setCouponApplied(!couponApplied);
          }}
          className="flex items-center gap-1.5 mb-2.5 text-xs text-emerald-400 cursor-pointer hover:underline select-none"
        >
          <input
            type="checkbox"
            checked={couponApplied}
            onChange={() => {}}
            className="rounded bg-slate-800 border-slate-700 accent-emerald-500 cursor-pointer"
          />
          <span>{couponApplied ? 'Coupon Applied!' : product.coupon}</span>
        </div>
      )}

      {/* Amazon Prime & Delivery Status */}
      <div className="space-y-1 text-xs mb-3 text-slate-300">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-black italic px-1.5 py-0.2 rounded">
            prime
          </div>
          <span className="text-slate-300 text-[11px]">
            FREE delivery <span className="font-bold text-white">Tomorrow, 11 AM</span>
          </span>
        </div>

        {/* Stock Urgency */}
        {product.stock <= 15 && (
          <div className="text-[11px] text-rose-400 font-medium">
            Only {product.stock} left in stock - order soon.
          </div>
        )}
      </div>

      {/* Amazon Quick Action Buttons */}
      <div className="mt-auto grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
        <button
          onClick={handleAddToCart}
          className={`py-2 px-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            justAdded
              ? 'bg-emerald-500 text-slate-950 font-bold'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700'
          }`}
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>{justAdded ? 'Added' : 'Add to Cart'}</span>
        </button>

        <button
          onClick={handleBuyNow}
          className="py-2 px-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-all shadow-md shadow-amber-500/20 cursor-pointer"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};
