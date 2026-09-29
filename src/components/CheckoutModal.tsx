import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, ShieldCheck, Truck, CreditCard, Check, ArrowRight, Zap } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const { cart, isCheckoutOpen, setIsCheckoutOpen, cartTotal, placeOrder } = useShop();

  const [fullName, setFullName] = useState('Alex Mercer');
  const [district, setDistrict] = useState('District 7 · Neo Tokyo Skyway');
  const [street, setStreet] = useState('742 Hyperloop Boulevard, Floor 58');
  const [phone, setPhone] = useState('+1 (555) 019-4820');
  const [deliverySpeed, setDeliverySpeed] = useState('express');
  const [paymentMethod, setPaymentMethod] = useState<'quantum' | 'card' | 'cod'>('quantum');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      placeOrder({
        fullName,
        district,
        street,
        phone,
        deliverySpeed:
          deliverySpeed === 'instant'
            ? 'Ultrasonic Drone Delivery (15 mins)'
            : 'Standard Hyperloop Express (Under 45 mins)',
      });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
              ✓
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-display">AMAZON CITY CHECKOUT</h2>
              <p className="text-xs text-slate-400">Demo Order Fulfillment & Dispatch Authorization</p>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Customer & Shipping Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              1. Citizen Delivery Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Metropolitan District
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option>District 1 · Metropolis Central</option>
                  <option>District 4 · Cyber Bay Harbor</option>
                  <option>District 7 · Neo Tokyo Skyway</option>
                  <option>District 9 · Silicon Spire</option>
                  <option>District 12 · Orbital Logistics Hub</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Street Address & Unit
                </label>
                <input
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Delivery Option */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              2. Dispatch Method
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  deliverySpeed === 'instant'
                    ? 'border-amber-400 bg-amber-500/10'
                    : 'border-slate-800 bg-slate-950/60'
                }`}
              >
                <input
                  type="radio"
                  name="speed"
                  checked={deliverySpeed === 'instant'}
                  onChange={() => setDeliverySpeed('instant')}
                  className="mt-0.5 accent-amber-400"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ultrasonic Drone Delivery</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Guaranteed 15 mins dispatch (FREE)</div>
                </div>
              </label>

              <label
                className={`p-3 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  deliverySpeed === 'express'
                    ? 'border-amber-400 bg-amber-500/10'
                    : 'border-slate-800 bg-slate-950/60'
                }`}
              >
                <input
                  type="radio"
                  name="speed"
                  checked={deliverySpeed === 'express'}
                  onChange={() => setDeliverySpeed('express')}
                  className="mt-0.5 accent-amber-400"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Standard Hyperloop Express</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Under 45 mins citywide (FREE)</div>
                </div>
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              3. Payment Authorization
            </h3>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <button
                type="button"
                onClick={() => setPaymentMethod('quantum')}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  paymentMethod === 'quantum'
                    ? 'border-amber-400 bg-amber-500/10 text-white font-bold'
                    : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}
              >
                <div className="font-semibold text-white">Quantum Pay</div>
                <div className="text-[10px] text-slate-500">Instant One-Click</div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-amber-400 bg-amber-500/10 text-white font-bold'
                    : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}
              >
                <div className="font-semibold text-white">Credit / Debit</div>
                <div className="text-[10px] text-slate-500">Encrypted Vault</div>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-amber-400 bg-amber-500/10 text-white font-bold'
                    : 'border-slate-800 bg-slate-950 text-slate-400'
                }`}
              >
                <div className="font-semibold text-white">Drone COD</div>
                <div className="text-[10px] text-slate-500">Pay on Handover</div>
              </button>
            </div>
          </div>

          {/* Order Summary & Products Preview */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              4. Order Summary ({cart.length} unique items)
            </h3>

            <div className="max-h-36 overflow-y-auto space-y-2 pr-1">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between text-xs py-1 border-b border-slate-800/40 text-slate-300"
                >
                  <span className="truncate max-w-[320px]">
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-mono text-white font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Total Authorized Amount:</div>
                <div className="text-xs text-emerald-400">Includes Free Hyperloop Delivery</div>
              </div>
              <div className="text-2xl font-black text-amber-400 font-mono">
                ${cartTotal.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-500/25 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Routing Automated Drone Delivery...</span>
              ) : (
                <>
                  <span>Confirm & Dispatch Order (${cartTotal.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <div className="text-center text-[10px] text-slate-500 mt-2">
              Demonstration mode: No financial transaction processed. Generates a live interactive delivery tracking pipeline.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
