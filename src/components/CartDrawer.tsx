import React from 'react';
import { useShop } from '../context/ShopContext';
import { AIProductImage } from './AIProductImage';
import { X, Trash2, ShoppingCart, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    setIsCheckoutOpen,
  } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
          {/* Cart Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white font-display">YOUR CART</h2>
                <div className="text-xs text-slate-400">
                  <span className="font-mono font-bold text-amber-400">{cartCount}</span> products selected
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-rose-400 transition-colors cursor-pointer mr-2"
                  title="Clear Cart"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center text-3xl">
                  🛒
                </div>
                <div>
                  <h3 className="font-bold text-white text-base font-display">Your cart is empty</h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Explore 100,000,000+ items across Drinks City, Phone City, Toy City, and Gaming City.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all cursor-pointer"
                >
                  Explore Marketplace
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80"
                >
                  {/* Thumbnail */}
                  <div className="w-18 h-18 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-800 flex items-center justify-center">
                    <AIProductImage product={item.product} className="w-full h-full" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-amber-400 font-medium">
                        {item.product.districtName}
                      </div>
                      <h4 className="text-xs font-bold text-white truncate">{item.product.name}</h4>
                      <div className="text-xs font-mono font-bold text-slate-200 mt-0.5 tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-slate-800 rounded-lg bg-slate-900">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-slate-400 hover:text-white cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 font-mono text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-slate-400 hover:text-white cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer & Checkout Breakdown */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-slate-200 tabular-nums">
                    ${cartSubtotal.toFixed(2)}
                  </span>
                </div>

                {cartDiscount > 0 && (
                  <div className="flex justify-between text-rose-400">
                    <span>Discount:</span>
                    <span className="font-mono tabular-nums">-${cartDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Hyperloop Delivery:</span>
                  <span className="font-bold text-emerald-400 uppercase text-[11px]">FREE</span>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between text-base font-bold text-white">
                  <span>Total:</span>
                  <span className="font-mono text-amber-400 text-lg tabular-nums">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Protected by Amazon City Quantum Guarantee</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
