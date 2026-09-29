import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { productCatalog } from '../data/productEngine';
import { AIProductImage } from './AIProductImage';
import {
  X,
  User,
  Package,
  Heart,
  MapPin,
  Award,
  Bell,
  Trash2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const UserProfileModal: React.FC = () => {
  const {
    isProfileOpen,
    setIsProfileOpen,
    orders,
    favorites,
    toggleFavorite,
    openOrderTracking,
    setSelectedProduct,
    deliveryLocation,
    setDeliveryLocation,
  } = useShop();

  const [activeTab, setActiveTab] = useState<'orders' | 'favorites' | 'addresses' | 'rewards'>('orders');

  if (!isProfileOpen) return null;

  // Retrieve favorited products
  const favoriteProducts = favorites
    .map((id) => productCatalog.getProductById(id))
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header Profile Bar */}
        <div className="p-6 border-b border-slate-800 bg-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 p-[2px] shadow-lg shadow-amber-500/10">
              <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-xl font-black text-amber-400 font-display">
                AM
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white font-display">Alex Mercer</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono">
                  CITIZEN #AC-99482
                </span>
              </div>
              <p className="text-xs text-slate-400">alex.mercer@amazoncity.io · Level 4 Prime Member</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right sm:block hidden">
              <div className="text-xs text-slate-400">Quantum Credits</div>
              <div className="text-sm font-mono font-bold text-amber-400">2,450 AC</div>
            </div>
            <button
              onClick={() => setIsProfileOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigator */}
        <div className="flex items-center gap-4 px-6 border-b border-slate-800 bg-slate-900/60 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'orders'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span>Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'favorites'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Wishlist ({favorites.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'addresses'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Saved Pod Addresses</span>
          </button>

          <button
            onClick={() => setActiveTab('rewards')}
            className={`py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors ${
              activeTab === 'rewards'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Citizen Rewards</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  No orders placed yet. Explore the marketplace to order items!
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3 text-xs">
                      <div>
                        <span className="font-mono font-bold text-white">{order.id}</span>
                        <span className="text-slate-500 mx-2">·</span>
                        <span className="text-slate-400">{order.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-amber-400">
                          ${order.total.toFixed(2)}
                        </span>
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            openOrderTracking(order);
                          }}
                          className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                        >
                          <span>Track Drone Dispatch</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center justify-between text-xs text-slate-300"
                        >
                          <span className="truncate max-w-[320px]">
                            {item.quantity}x {item.product.name}
                          </span>
                          <span className="font-mono text-slate-400">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div className="space-y-4">
              {favoriteProducts.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  Your wishlist is empty. Click the heart icon on any product to save it!
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {favoriteProducts.map((p) => {
                    if (!p) return null;
                    return (
                      <div
                        key={p.id}
                        className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3"
                      >
                        <div className="w-14 h-14 rounded-xl bg-slate-900 overflow-hidden shrink-0 border border-slate-800 flex items-center justify-center">
                          <AIProductImage product={p} className="w-full h-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
                          <div className="text-xs font-mono font-bold text-amber-400 mt-0.5">
                            ${p.price.toFixed(2)}
                          </div>
                          <div className="text-[10px] text-slate-400">{p.districtName}</div>
                        </div>
                        <div className="flex flex-col gap-1 shrink-0">
                          <button
                            onClick={() => {
                              setIsProfileOpen(false);
                              setSelectedProduct(p);
                            }}
                            className="px-2.5 py-1 rounded bg-slate-800 text-[10px] font-semibold text-white hover:bg-slate-700 cursor-pointer"
                          >
                            View
                          </button>
                          <button
                            onClick={() => toggleFavorite(p.id)}
                            className="text-slate-500 hover:text-rose-400 p-1 self-center cursor-pointer"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span>Primary Smart Landing Pad (Default)</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  742 Hyperloop Boulevard, Penthouse Floor 58, Balcony Pod #4
                </p>
                <div className="text-xs text-slate-400">{deliveryLocation}</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 opacity-75">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span>Office Workstation Pod</span>
                  </span>
                  <button
                    onClick={() => setDeliveryLocation('District 9 · Silicon Spire')}
                    className="text-[11px] text-amber-400 hover:underline cursor-pointer"
                  >
                    Set as active
                  </button>
                </div>
                <p className="text-xs text-slate-400">
                  Quantum Tower Alpha, Level 102, Innovation Suite 4
                </p>
                <div className="text-xs text-slate-500">District 9 · Silicon Spire</div>
              </div>
            </div>
          )}

          {/* Rewards Tab */}
          {activeTab === 'rewards' && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-slate-950 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Amazon City Citizen Status
                  </div>
                  <div className="text-2xl font-black text-white font-display mt-0.5">
                    Tier 4 Titanium Citizen
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Free supersonic drone delivery, 5% cash-back in Quantum Credits on all orders.
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Available Credits</div>
                  <div className="text-2xl font-black text-amber-400 font-mono">2,450 AC</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
