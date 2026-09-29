import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, Check, Truck, Package, Clock, ShieldCheck, MapPin, Send } from 'lucide-react';
import { OrderStatus } from '../types';

export const OrderTrackerModal: React.FC = () => {
  const { isOrderTrackerOpen, setIsOrderTrackerOpen, activeOrderForTracking } = useShop();

  if (!isOrderTrackerOpen || !activeOrderForTracking) return null;

  const order = activeOrderForTracking;

  const stages: { key: OrderStatus; label: string; desc: string }[] = [
    { key: 'confirmed', label: 'Order Confirmed', desc: 'Payment verified & inventory allocated' },
    { key: 'preparing', label: 'Preparing', desc: 'Automated retrieval from city sector warehouse' },
    { key: 'packed', label: 'Packed', desc: 'Secure aerodynamic tamper-proof drone capsule sealed' },
    { key: 'shipped', label: 'Shipped', desc: 'Loaded into pneumatic hyperloop transit tube' },
    { key: 'in_transit', label: 'In Transit', desc: 'Traveling along elevated skyway arterial' },
    { key: 'out_for_delivery', label: 'Out for Delivery', desc: 'Autonomous delivery drone descending to coordinate' },
    { key: 'delivered', label: 'Delivered', desc: 'Handed over at citizen balcony / smart pod' },
  ];

  const getStageIndex = (status: OrderStatus) => {
    return stages.findIndex((s) => s.key === status);
  };

  const currentIdx = getStageIndex(order.status);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Truck className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white font-display">
                  LIVE HYPERLOOP DISPATCH TRACKER
                </h2>
                <span className="font-mono text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {order.id}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Tracking code: <span className="font-mono text-slate-300">{order.trackingCode}</span>
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOrderTrackerOpen(false)}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          {/* Animated Futuristic Transit Visualizer */}
          <div className="relative w-full h-44 rounded-2xl bg-slate-950 border border-slate-800 p-4 overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-slate-200">
                  Drone Unit #AC-884 Flying Active Route
                </span>
              </div>
              <div className="text-xs font-mono text-amber-400 font-bold">
                {order.estimatedArrival}
              </div>
            </div>

            {/* Drone graphic route SVG */}
            <div className="relative w-full h-20 flex items-center justify-between px-8">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-amber-400 flex items-center justify-center text-xs">
                  🏭
                </div>
                <span className="text-[10px] text-slate-400 mt-1">Amazon City Depot</span>
              </div>

              {/* Progress Line */}
              <div className="flex-1 mx-4 relative h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400 w-3/4 animate-pulse" />
              </div>

              {/* Animated Drone flying icon */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-sm shadow-lg shadow-amber-500/30 animate-bounce">
                  🛸
                </div>
                <span className="text-[10px] text-amber-400 font-bold mt-1">In Transit</span>
              </div>

              {/* Progress Line */}
              <div className="flex-1 mx-4 relative h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-slate-700 w-1/4" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs">
                  🏠
                </div>
                <span className="text-[10px] text-slate-400 mt-1">Destination Pod</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 z-10 border-t border-slate-900 pt-2">
              <div className="flex items-center gap-1.5 truncate max-w-[340px]">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">
                  {order.shippingAddress.street}, {order.shippingAddress.district}
                </span>
              </div>
              <span className="text-emerald-400 font-medium">Altitude: 140m · Speed: 180 km/h</span>
            </div>
          </div>

          {/* Stepper Pipeline: Order Confirmed -> Delivered */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Autonomous Delivery Pipeline
            </h3>

            <div className="space-y-3">
              {stages.map((stage, idx) => {
                const isPassed = idx <= currentIdx;
                const isCurrent = idx === currentIdx;

                return (
                  <div key={stage.key} className="flex items-start gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-mono font-bold transition-all ${
                        isPassed
                          ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4 stroke-[3]" /> : idx + 1}
                    </div>

                    <div className="flex-1 pb-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold ${
                            isCurrent
                              ? 'text-amber-400 font-extrabold'
                              : isPassed
                              ? 'text-white'
                              : 'text-slate-500'
                          }`}
                        >
                          {stage.label}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">{stage.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ordered Products summary */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span>Items in Dispatch Capsule</span>
              <span className="font-mono text-amber-400">Total: ${order.total.toFixed(2)}</span>
            </div>
            {order.items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between text-xs text-slate-300"
              >
                <span className="truncate max-w-[340px]">
                  {item.quantity}x {item.product.name}
                </span>
                <span className="font-mono text-white">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
