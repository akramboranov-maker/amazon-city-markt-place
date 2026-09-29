import React, { useState, useRef, useEffect } from 'react';
import { useShop } from '../context/ShopContext';
import { productCatalog } from '../data/productEngine';
import { Product } from '../types';
import { AIProductImage } from './AIProductImage';
import { Bot, Send, X, Sparkles, ShoppingCart, ArrowRight, CornerDownLeft } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  time: string;
  recommendedProducts?: Product[];
}

export const CityAIAssistant: React.FC = () => {
  const { isAiAssistantOpen, setIsAiAssistantOpen, setSelectedProduct, addToCart } = useShop();

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      text: 'Greetings citizen! I am CITY AI, your personal quantum shopping concierge across Amazon City’s 100,000,000+ products. What are you looking to discover today?',
      time: 'Just now',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isAiAssistantOpen) return null;

  const quickPrompts = [
    'I need a gaming mouse under $100',
    'Find me a 27-inch gaming monitor',
    'Refreshing drinks & energy elixirs',
    'Flagship phone with 1TB titanium',
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // AI Semantic Engine
    setTimeout(() => {
      let matchedProducts: Product[] = [];
      let replyText = '';

      const lower = query.toLowerCase();

      if (lower.includes('mouse') || lower.includes('mice')) {
        matchedProducts = productCatalog.queryProducts({ district: 'mice', limit: 2 }).products;
        replyText = `Here are high-precision ultralight and ergonomic mice available right now in Mouse City:`;
      } else if (lower.includes('monitor') || lower.includes('screen') || lower.includes('display')) {
        matchedProducts = productCatalog.queryProducts({ district: 'monitors', limit: 2 }).products;
        replyText = `Located these ultra-low latency QD-OLED and 4K displays in Monitor City:`;
      } else if (lower.includes('drink') || lower.includes('cola') || lower.includes('energy') || lower.includes('water')) {
        matchedProducts = productCatalog.queryProducts({ district: 'drinks', limit: 2 }).products;
        replyText = `Here are prime hydration elixirs and cold brews chilled in Drinks City:`;
      } else if (lower.includes('phone') || lower.includes('iphone') || lower.includes('foldable') || lower.includes('mobile')) {
        matchedProducts = productCatalog.queryProducts({ district: 'phones', limit: 2 }).products;
        replyText = `Synthesized the latest quantum titanium flagships from Phone City:`;
      } else if (lower.includes('keyboard') || lower.includes('hall-effect') || lower.includes('mechanical')) {
        matchedProducts = productCatalog.queryProducts({ district: 'keyboards', limit: 2 }).products;
        replyText = `Discovered these magnetic rapid-trigger custom decks in Keyboard City:`;
      } else if (lower.includes('toy') || lower.includes('lego') || lower.includes('robot')) {
        matchedProducts = productCatalog.queryProducts({ district: 'toys', limit: 2 }).products;
        replyText = `Top orbital brick models and AI robotic companions in Toy City:`;
      } else {
        // Generic search query
        const res = productCatalog.queryProducts({ query: lower, limit: 2 });
        matchedProducts = res.products;
        replyText = `I queried the 100,000,000+ catalog for "${query}" and found these top citizen-reviewed items:`;
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        recommendedProducts: matchedProducts,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[440px] bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300 shadow-md shadow-violet-500/10">
            <Bot className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-white text-sm font-display">CITY AI ASSISTANT</h3>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-400">Autonomous Concierge · 100M+ Items</p>
          </div>
        </div>

        <button
          onClick={() => setIsAiAssistantOpen(false)}
          className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-amber-500 text-slate-950 font-medium'
                  : 'bg-slate-950 border border-slate-800 text-slate-200'
              }`}
            >
              {msg.text}
            </div>

            {/* Interactive Recommended Product Mini-Cards */}
            {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
              <div className="w-full mt-3 space-y-2">
                {msg.recommendedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition-all flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-900 overflow-hidden shrink-0 border border-slate-800 flex items-center justify-center">
                      <AIProductImage product={p} className="w-full h-full" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-amber-400 font-mono">{p.districtName}</div>
                      <div className="text-xs font-bold text-white truncate">{p.name}</div>
                      <div className="text-xs font-mono font-bold text-slate-200">
                        ${p.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-semibold cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="px-2 py-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 text-[10px] font-bold cursor-pointer"
                      >
                        + Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <span className="text-[10px] text-slate-500 font-mono mt-1 px-1">{msg.time}</span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-950 border border-slate-800 p-2.5 rounded-2xl w-fit">
            <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-spin" />
            <span>CITY AI is querying metropolis catalog...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/60 overflow-x-auto flex gap-1.5 scrollbar-none">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => handleSend(prompt)}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] whitespace-nowrap transition-colors cursor-pointer"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-4 border-t border-slate-800 bg-slate-950">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask City AI (e.g., Best noise-cancelling headphones)..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            aria-label="Send message to City AI"
            className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all cursor-pointer shadow-md shadow-amber-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
