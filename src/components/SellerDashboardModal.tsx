import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { DISTRICTS } from '../data/productEngine';
import { CityDistrict, Product } from '../types';
import { Store, Plus, X, DollarSign, Package, ShoppingBag, Eye, Star, Check } from 'lucide-react';

export const SellerDashboardModal: React.FC = () => {
  const { isSellerDashboardOpen, setIsSellerDashboardOpen, addNewSellerProduct } = useShop();

  const [activeTab, setActiveTab] = useState<'metrics' | 'add'>('metrics');
  const [successNotice, setSuccessNotice] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [district, setDistrict] = useState<CityDistrict>('drinks');
  const [price, setPrice] = useState('24.99');
  const [oldPrice, setOldPrice] = useState('32.00');
  const [stock, setStock] = useState('150');
  const [sellerName, setSellerName] = useState('Omni City Labs');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('Trending, Pro');

  if (!isSellerDashboardOpen) return null;

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const dInfo = DISTRICTS.find((d) => d.id === district);
    const pVal = parseFloat(price) || 19.99;
    const oldPVal = parseFloat(oldPrice) || pVal * 1.25;
    const discount = Math.round(((oldPVal - pVal) / oldPVal) * 100);

    const newProd: Product = {
      id: `ac-custom-${Date.now()}`,
      sku: `AC-${Math.floor(100000 + Math.random() * 900000)}`,
      name: name.trim() || 'New Amazon City Product',
      district,
      districtName: dInfo?.name || 'Metropolis',
      price: pVal,
      oldPrice: oldPVal,
      discount,
      rating: 5.0,
      reviewCount: 1,
      seller: sellerName.trim() || 'Verified Citizen Merchant',
      stock: parseInt(stock, 10) || 50,
      description: description.trim() || 'High precision manufactured goods certified in Amazon City.',
      features: ['Citizen warranty', 'Certified quality', 'Hyperloop shipping ready'],
      imageUrl: '',
      imageFallbackGradient: dInfo?.accentBg ? 'from-amber-600 to-slate-900' : 'from-blue-600 to-slate-950',
      badge: 'New Arrival',
      specifications: [
        { label: 'Origin', value: 'Amazon City Sector 4' },
        { label: 'Inspection', value: '100% Passed' },
      ],
      reviews: [],
      tags: tags.split(',').map((t) => t.trim()),
      districtBuildingIcon: dInfo?.icon || '🏙️',
    };

    addNewSellerProduct(newProd);
    setSuccessNotice(true);
    setTimeout(() => {
      setSuccessNotice(false);
      setName('');
      setDescription('');
      setActiveTab('metrics');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">
                AMAZON CITY SELLER PORTAL
              </h2>
              <p className="text-xs text-slate-400">
                Merchant Operations, Analytics & Inventory Dispatch
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSellerDashboardOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 px-6 pt-4 border-b border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'metrics'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Merchant Analytics & Sales
          </button>
          <button
            onClick={() => setActiveTab('add')}
            className={`pb-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'add'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>List New Product</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              {/* Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400 flex items-center justify-between">
                    <span>Total Revenue</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">$482,910.45</div>
                  <div className="text-[10px] text-emerald-400 font-medium">+18.4% this cycle</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400 flex items-center justify-between">
                    <span>Completed Orders</span>
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">14,290</div>
                  <div className="text-[10px] text-slate-400">99.8% Drone On-Time</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400 flex items-center justify-between">
                    <span>Active Inventory</span>
                    <Package className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">3,840 units</div>
                  <div className="text-[10px] text-slate-400">Stored across 4 depots</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-xs text-slate-400 flex items-center justify-between">
                    <span>Citizen Rating</span>
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-white font-mono">4.94 ★</div>
                  <div className="text-[10px] text-emerald-400">Top 1% City Merchant</div>
                </div>
              </div>

              {/* Live Inventory Preview */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Recent Merchant Dispatches
                  </h4>
                  <button
                    onClick={() => setActiveTab('add')}
                    className="text-xs text-amber-400 hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <Plus className="w-3.5 h-3.5" /> List Another Item
                  </button>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden text-xs">
                  <div className="grid grid-cols-12 p-3 bg-slate-900 border-b border-slate-800 text-slate-400 font-semibold">
                    <span className="col-span-5">Product Title</span>
                    <span className="col-span-3">District</span>
                    <span className="col-span-2">Price</span>
                    <span className="col-span-2 text-right">In Stock</span>
                  </div>
                  <div className="divide-y divide-slate-800/60 text-slate-300">
                    <div className="grid grid-cols-12 p-3 items-center">
                      <span className="col-span-5 font-semibold text-white truncate">
                        Vortex Quantum Cola Zero · Pack of 12
                      </span>
                      <span className="col-span-3 text-slate-400">Drinks City</span>
                      <span className="col-span-2 font-mono">$18.99</span>
                      <span className="col-span-2 text-right font-mono text-emerald-400">340</span>
                    </div>
                    <div className="grid grid-cols-12 p-3 items-center">
                      <span className="col-span-5 font-semibold text-white truncate">
                        CyberBlade 75 Magnetic Hall-Effect
                      </span>
                      <span className="col-span-3 text-slate-400">Keyboard City</span>
                      <span className="col-span-2 font-mono">$179.99</span>
                      <span className="col-span-2 text-right font-mono text-emerald-400">120</span>
                    </div>
                    <div className="grid grid-cols-12 p-3 items-center">
                      <span className="col-span-5 font-semibold text-white truncate">
                        Aether Quantum Fold 7 Pro 1TB
                      </span>
                      <span className="col-span-3 text-slate-400">Phone City</span>
                      <span className="col-span-2 font-mono">$1,399.00</span>
                      <span className="col-span-2 text-right font-mono text-amber-400">45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'add' && (
            <form onSubmit={handleCreateProduct} className="space-y-4">
              {successNotice && (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Item successfully verified and published to Amazon City!</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Product Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Apex Hyper-Drive Energy Elixir (12 Cans)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    City District Category *
                  </label>
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value as CityDistrict)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {DISTRICTS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.icon} {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Price ($ USD) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Regular Price ($ USD)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={oldPrice}
                    onChange={(e) => setOldPrice(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Initial Stock Allocation *
                  </label>
                  <input
                    type="number"
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Seller / Store Name
                  </label>
                  <input
                    type="text"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Search Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="e.g. Energy, Nootropic, Gaming, Organic"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Product Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe technical materials, manufacturing tolerances, and key user benefits..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish to Amazon City Marketplace</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
