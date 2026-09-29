import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { productCatalog, DISTRICTS } from '../data/productEngine';
import { ProductCard } from './ProductCard';
import { CityDistrict } from '../types';
import {
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Star,
  Zap,
  ArrowUpDown,
  Search,
} from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { activeDistrict, setActiveDistrict, searchQuery, setSearchQuery } = useShop();

  // Filters State
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(4000);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [flashDealsOnly, setFlashDealsOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<
    'recommended' | 'price-asc' | 'price-desc' | 'rating' | 'discount' | 'newest'
  >('recommended');
  const [page, setPage] = useState<number>(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Reset page when district or query changes
  React.useEffect(() => {
    setPage(1);
  }, [activeDistrict, searchQuery, minPrice, maxPrice, minRating, inStockOnly, flashDealsOnly, sortBy]);

  // Query results from engine
  const queryResult = useMemo(() => {
    return productCatalog.queryProducts({
      query: searchQuery,
      district: activeDistrict,
      minPrice: minPrice > 0 ? minPrice : undefined,
      maxPrice: maxPrice < 4000 ? maxPrice : undefined,
      minRating: minRating > 0 ? minRating : undefined,
      inStockOnly,
      flashDealsOnly,
      sortBy,
      page,
      limit: 12,
    });
  }, [searchQuery, activeDistrict, minPrice, maxPrice, minRating, inStockOnly, flashDealsOnly, sortBy, page]);

  const activeDistrictInfo = DISTRICTS.find((d) => d.id === activeDistrict);

  const resetAllFilters = () => {
    setMinPrice(0);
    setMaxPrice(4000);
    setMinRating(0);
    setInStockOnly(false);
    setFlashDealsOnly(false);
    setSortBy('recommended');
    setSearchQuery('');
  };

  const hasActiveFilters =
    minPrice > 0 ||
    maxPrice < 4000 ||
    minRating > 0 ||
    inStockOnly ||
    flashDealsOnly ||
    searchQuery.trim().length > 0;

  return (
    <section id="marketplace-catalog" className="w-full bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Marketplace Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider mb-1">
              <span>{activeDistrictInfo ? activeDistrictInfo.name : 'All City Districts'}</span>
              <span>·</span>
              <span className="text-slate-400">
                {activeDistrictInfo ? activeDistrictInfo.productCountStr : '100,000,000+ Items'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
              {searchQuery ? `Search Results for "${searchQuery}"` : activeDistrictInfo ? activeDistrictInfo.name : 'Metropolis Marketplace'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {activeDistrictInfo ? activeDistrictInfo.slogan : 'Browse dynamically generated items from certified Amazon City manufacturers and virtual stores.'}
            </p>
          </div>

          {/* Sort Controls & Mobile Filter Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-2 cursor-pointer"
            >
              <Filter className="w-4 h-4 text-amber-400" />
              <span>Filters</span>
              {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-amber-400" />}
            </button>

            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <label htmlFor="sort-dropdown" className="text-slate-400 hidden sm:inline">Sort By:</label>
              <select
                id="sort-dropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-200 font-medium focus:outline-none cursor-pointer"
              >
                <option value="recommended" className="bg-slate-900">Recommended</option>
                <option value="price-asc" className="bg-slate-900">Price: Low to High</option>
                <option value="price-desc" className="bg-slate-900">Price: High to Low</option>
                <option value="rating" className="bg-slate-900">Highest Rated</option>
                <option value="discount" className="bg-slate-900">Biggest Discount</option>
                <option value="newest" className="bg-slate-900">Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Summary Ribbon (if active) */}
        {hasActiveFilters && (
          <div className="flex items-center flex-wrap gap-2 py-3 border-b border-slate-800/80 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Active Filters:</span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-200">
                Keyword: "{searchQuery}"
                <button onClick={() => setSearchQuery('')} className="hover:text-amber-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {minPrice > 0 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-200">
                Min: ${minPrice}
                <button onClick={() => setMinPrice(0)} className="hover:text-amber-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {maxPrice < 4000 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-200">
                Max: ${maxPrice}
                <button onClick={() => setMaxPrice(4000)} className="hover:text-amber-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {minRating > 0 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-200">
                Rating: {minRating}★+
                <button onClick={() => setMinRating(0)} className="hover:text-amber-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {inStockOnly && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-200">
                In Stock Only
                <button onClick={() => setInStockOnly(false)} className="hover:text-amber-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {flashDealsOnly && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 text-slate-200">
                Flash Deals Only
                <button onClick={() => setFlashDealsOnly(false)} className="hover:text-amber-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              onClick={resetAllFilters}
              className="text-amber-400 hover:underline font-semibold ml-2 cursor-pointer"
            >
              Reset All
            </button>
          </div>
        )}

        {/* Main Grid + Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Left Column: Filter Sidebar */}
          <div
            className={`lg:col-span-3 space-y-6 ${
              isMobileFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-6 sticky top-32">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm font-display">
                  <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                  <span>Discovery Filters</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetAllFilters}
                    className="text-xs text-amber-400 hover:underline cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Districts Switcher */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  City District
                </label>
                <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                  <button
                    onClick={() => setActiveDistrict('all')}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      activeDistrict === 'all'
                        ? 'bg-amber-500/20 text-amber-400 font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>All Districts</span>
                    <span className="font-mono text-[10px]">100M+</span>
                  </button>
                  {DISTRICTS.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => setActiveDistrict(d.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center justify-between cursor-pointer ${
                        activeDistrict === d.id
                          ? 'bg-amber-500/20 text-amber-400 font-bold'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>{d.icon}</span>
                        <span className="truncate">{d.name}</span>
                      </span>
                      <span className="font-mono text-[10px] text-slate-500 shrink-0 ml-1">
                        {d.productCountStr.split('+')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-2 pt-3 border-t border-slate-800">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300 uppercase tracking-wider">
                    Price Range
                  </span>
                  <span className="font-mono text-amber-400 font-bold">
                    ${minPrice} - ${maxPrice}
                  </span>
                </div>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="4000"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                    <button
                      onClick={() => { setMinPrice(0); setMaxPrice(50); }}
                      className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                    >
                      &lt; $50
                    </button>
                    <button
                      onClick={() => { setMinPrice(50); setMaxPrice(300); }}
                      className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                    >
                      $50 - $300
                    </button>
                    <button
                      onClick={() => { setMinPrice(300); setMaxPrice(4000); }}
                      className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
                    >
                      $300+
                    </button>
                  </div>
                </div>
              </div>

              {/* Minimum Rating */}
              <div className="space-y-2 pt-3 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Customer Rating
                </span>
                <div className="space-y-1">
                  {[4.5, 4.0, 3.5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(minRating === rating ? 0 : rating)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-2 cursor-pointer ${
                        minRating === rating
                          ? 'bg-amber-500/20 text-amber-400 font-bold'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                      </div>
                      <span>{rating} Stars & Above</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Checkboxes */}
              <div className="space-y-2.5 pt-3 border-t border-slate-800 text-xs">
                <label className="flex items-center gap-2.5 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-800 border-slate-700 accent-amber-400"
                  />
                  <span>In Stock Only</span>
                </label>

                <label className="flex items-center gap-2.5 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={flashDealsOnly}
                    onChange={(e) => setFlashDealsOnly(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-800 border-slate-700 accent-amber-400"
                  />
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>Flash Deals & Discounts</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Product Cards Grid & Pagination */}
          <div className="lg:col-span-9 space-y-8">
            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
              <div>
                Showing <span className="font-mono text-white font-bold">{queryResult.products.length}</span> items{' '}
                <span className="text-slate-600">·</span>{' '}
                <span className="font-mono text-amber-400">{queryResult.virtualEstimatedTotal.toLocaleString()}+ total indexed</span>
              </div>
              <div className="font-mono text-[11px]">
                Page {queryResult.page} of {queryResult.totalPages}
              </div>
            </div>

            {/* Empty State */}
            {queryResult.products.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-2xl">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  No matching products located in this sector
                </h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Try broadening your price filters or searching across All Districts in Amazon City.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all cursor-pointer"
                >
                  Reset Discovery Filters
                </button>
              </div>
            ) : (
              /* Products Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {queryResult.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {queryResult.totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6 border-t border-slate-800">
                <button
                  disabled={page <= 1}
                  onClick={() => {
                    setPage((p) => Math.max(1, p - 1));
                    document.getElementById('marketplace-catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: Math.min(5, queryResult.totalPages) }).map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setPage(pageNum);
                        document.getElementById('marketplace-catalog')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-10 h-10 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        page === pageNum
                          ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                          : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {queryResult.totalPages > 5 && (
                  <span className="px-2 text-slate-500 font-mono">...</span>
                )}

                <button
                  disabled={page >= queryResult.totalPages}
                  onClick={() => {
                    setPage((p) => Math.min(queryResult.totalPages, p + 1));
                    document.getElementById('marketplace-catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  title="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
