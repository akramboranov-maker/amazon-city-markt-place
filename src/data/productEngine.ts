import { Product, CityDistrict, DistrictInfo, ProductReview } from '../types';

// Real generated high-fidelity assets
export const HERO_IMAGE = '/src/assets/images/hero_amazon_city_skyline_1790658220296.jpg';
export const PHONE_FEATURE_IMAGE = '/src/assets/images/phone_city_flagship_1790658238705.jpg';
export const PHONE_TITANIUM_AD = '/src/assets/images/phone_commercial_titanium_1790659483288.jpg';
export const DRINKS_FEATURE_IMAGE = '/src/assets/images/drinks_city_showcase_1790658252042.jpg';
export const DRINKS_SPLASH_AD = '/src/assets/images/drinks_commercial_splash_1790659466835.jpg';
export const GAMING_FEATURE_IMAGE = '/src/assets/images/gaming_city_rig_1790658268825.jpg';
export const TOY_FEATURE_IMAGE = '/src/assets/images/toy_city_modular_station_1790658746763.jpg';
export const TOYS_GAMING_AD = '/src/assets/images/toys_gaming_epic_ad_1790659499282.jpg';
export const FOOD_FEATURE_IMAGE = '/src/assets/images/food_city_commercial_ad_1790659446508.jpg';
export const KEYBOARD_FEATURE_IMAGE = '/src/assets/images/keyboard_city_mechanical_1790658763783.jpg';
export const MOUSE_FEATURE_IMAGE = '/src/assets/images/mouse_city_ultralight_1790658782896.jpg';
export const MONITOR_FEATURE_IMAGE = '/src/assets/images/monitor_city_curved_1790658798295.jpg';

export const DISTRICTS: DistrictInfo[] = [
  {
    id: 'drinks',
    name: 'Drinks City',
    slogan: 'Hydration, Energy Elixirs & Artisan Refreshments',
    productCountStr: '1,420,000+',
    productCountNum: 1420000,
    icon: '🥤',
    accentColor: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10',
    accentBorder: 'border-cyan-500/30',
    mapCoordinates: { x: 12, y: 18, width: 22, height: 20 },
    popularTags: ['Energy Drink', 'Cold Brew', 'Sparkling Water', 'Exotic Blend', 'Matcha', 'Protein Smoothie'],
  },
  {
    id: 'toys',
    name: 'Toy City',
    slogan: 'Robotics, Building Bricks, STEM & Board Games',
    productCountStr: '1,180,000+',
    productCountNum: 1180000,
    icon: '🧸',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/30',
    mapCoordinates: { x: 38, y: 15, width: 24, height: 22 },
    popularTags: ['LEGO-Style', 'RC Rover', 'Cyber Bot', 'Puzzles', 'Educational STEM', 'Plush Beasts'],
  },
  {
    id: 'phones',
    name: 'Phone City',
    slogan: 'Quantum Foldables, Flagships & Titanium Handhelds',
    productCountStr: '3,840,000+',
    productCountNum: 3840000,
    icon: '📱',
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    accentBorder: 'border-blue-500/30',
    mapCoordinates: { x: 66, y: 16, width: 22, height: 24 },
    popularTags: ['Quantum Fold', 'Pro Max 1TB', 'Cyber Phone', 'Gaming Titan', 'Budget Neo', '5G Ultra'],
  },
  {
    id: 'computers',
    name: 'Computer City',
    slogan: 'Workstations, Ultra-Laptops & Neural Rigs',
    productCountStr: '2,950,000+',
    productCountNum: 2950000,
    icon: '💻',
    accentColor: 'text-indigo-400',
    accentBg: 'bg-indigo-500/10',
    accentBorder: 'border-indigo-500/30',
    mapCoordinates: { x: 10, y: 44, width: 25, height: 24 },
    popularTags: ['Neural Laptop', 'Threadripper Rig', 'Mini Cube PC', 'All-in-One Studio', 'Server Node'],
  },
  {
    id: 'gaming',
    name: 'Gaming City',
    slogan: 'Consoles, Haptic Rigs, VR & Battlestation Gear',
    productCountStr: '5,120,000+',
    productCountNum: 5120000,
    icon: '🎮',
    accentColor: 'text-violet-400',
    accentBg: 'bg-violet-500/10',
    accentBorder: 'border-violet-500/30',
    mapCoordinates: { x: 39, y: 42, width: 24, height: 25 },
    popularTags: ['Cyber Console X', 'Haptic Controller', 'RGB Battle Desk', 'Spatial VR Headset', 'Flight Deck'],
  },
  {
    id: 'monitors',
    name: 'Monitor City',
    slogan: '360Hz OLEDs, 5K Studio Displays & Ultrawides',
    productCountStr: '1,650,000+',
    productCountNum: 1650000,
    icon: '🖥️',
    accentColor: 'text-teal-400',
    accentBg: 'bg-teal-500/10',
    accentBorder: 'border-teal-500/30',
    mapCoordinates: { x: 67, y: 44, width: 23, height: 23 },
    popularTags: ['49" Ultrawide', '32" 4K 240Hz', 'OLED Pro', 'Color-Calibrated 5K', 'Portable Touch'],
  },
  {
    id: 'keyboards',
    name: 'Keyboard City',
    slogan: 'Hall-Effect Magnetic, Custom Mechanicals & Cyber Decks',
    productCountStr: '1,240,000+',
    productCountNum: 1240000,
    icon: '⌨️',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/30',
    mapCoordinates: { x: 14, y: 72, width: 22, height: 22 },
    popularTags: ['Rapid Trigger', 'Gasket Mount', 'Split Ergonomic', 'Wireless 65%', 'Linear Jade Switches'],
  },
  {
    id: 'mice',
    name: 'Mouse City',
    slogan: 'Carbon Fiber, 8000Hz Polling & Ergo Precision',
    productCountStr: '1,100,000+',
    productCountNum: 1100000,
    icon: '🖱️',
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-500/10',
    accentBorder: 'border-rose-500/30',
    mapCoordinates: { x: 40, y: 71, width: 22, height: 23 },
    popularTags: ['38g Ultralight', '8K Polling Rate', 'Optical Switches', 'Vertical Ergonomic', 'Thumb Macro Grid'],
  },
  {
    id: 'electronics',
    name: 'Electronics City',
    slogan: 'Spatial Audio, Smart Rings & Autonomous Drones',
    productCountStr: '14,800,000+',
    productCountNum: 14800000,
    icon: '⚡',
    accentColor: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/30',
    mapCoordinates: { x: 66, y: 71, width: 24, height: 23 },
    popularTags: ['ANC Headphones', 'Smart Health Ring', '4K Drone', 'GaN 200W Charger', 'Smart Home Hub'],
  },
  {
    id: 'fashion',
    name: 'Fashion City',
    slogan: 'Techwear Parkas, Smart Sneakers & Titanium Watches',
    productCountStr: '18,500,000+',
    productCountNum: 18500000,
    icon: '🧥',
    accentColor: 'text-fuchsia-400',
    accentBg: 'bg-fuchsia-500/10',
    accentBorder: 'border-fuchsia-500/30',
    mapCoordinates: { x: 5, y: 95, width: 18, height: 18 },
    popularTags: ['Waterproof Techwear', 'Cyber Sneakers', 'Titanium Chrono', 'Carbon Fiber Pack', 'Smart Fabrics'],
  },
  {
    id: 'home',
    name: 'Home City',
    slogan: 'Sculptural Furniture, Smart Kitchens & Ambient Living',
    productCountStr: '16,200,000+',
    productCountNum: 16200000,
    icon: '🛋️',
    accentColor: 'text-orange-400',
    accentBg: 'bg-orange-500/10',
    accentBorder: 'border-orange-500/30',
    mapCoordinates: { x: 26, y: 95, width: 18, height: 18 },
    popularTags: ['Ergonomic Standing Desk', 'Acoustic Wool Chair', 'Induction Chef Station', 'HEPA Ion Purifier'],
  },
  {
    id: 'books',
    name: 'Book City',
    slogan: 'Sci-Fi Chronicles, Tech Hardcovers & Graphic Epics',
    productCountStr: '8,400,000+',
    productCountNum: 8400000,
    icon: '📚',
    accentColor: 'text-yellow-400',
    accentBg: 'bg-yellow-500/10',
    accentBorder: 'border-yellow-500/30',
    mapCoordinates: { x: 47, y: 95, width: 16, height: 18 },
    popularTags: ['Quantum Physics Hardcover', 'Cyberpunk Manga', 'Architecture Atlas', 'AI System Design'],
  },
  {
    id: 'sports',
    name: 'Sports City',
    slogan: 'Carbon Cycles, Smart Weights & Technical Athletics',
    productCountStr: '11,300,000+',
    productCountNum: 11300000,
    icon: '🚴',
    accentColor: 'text-lime-400',
    accentBg: 'bg-lime-500/10',
    accentBorder: 'border-lime-500/30',
    mapCoordinates: { x: 66, y: 95, width: 16, height: 18 },
    popularTags: ['Aero Carbon Bike', 'Auto-Adjust Dumbbells', 'Magnesium Climber Harness', 'Trail Running Shoes'],
  },
  {
    id: 'beauty',
    name: 'Beauty City',
    slogan: 'Bioactive Serums, Micro-Infusion & Clean Cosmetics',
    productCountStr: '9,600,000+',
    productCountNum: 9600000,
    icon: '✨',
    accentColor: 'text-pink-400',
    accentBg: 'bg-pink-500/10',
    accentBorder: 'border-pink-500/30',
    mapCoordinates: { x: 84, y: 80, width: 14, height: 18 },
    popularTags: ['Copper Peptide Serum', 'LED Light Therapy Mask', 'Botanical Perfume', 'Ceramide Barrier Cream'],
  },
  {
    id: 'food',
    name: 'Food City',
    slogan: 'Artisan Gourmet, Cosmic Confectionery & Superfoods',
    productCountStr: '12,700,000+',
    productCountNum: 12700000,
    icon: '🍜',
    accentColor: 'text-amber-300',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/30',
    mapCoordinates: { x: 84, y: 40, width: 14, height: 18 },
    popularTags: ['Hokkaido Tonkotsu Ramen Box', 'Zero-Sugar Cacao Bars', 'Uji Ceremonial Matcha', 'Freeze-Dried Dragonfruit'],
  },
];

// Demo sample reviews
const SAMPLE_REVIEWS: ProductReview[] = [
  {
    id: 'rev-1',
    userName: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    date: 'Yesterday',
    comment: 'The quality surpassed my expectations. Prime drone delivery arrived in District 7 under 25 minutes. Packaging was pristine.',
    verified: true,
  },
  {
    id: 'rev-2',
    userName: 'Kaelen Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    date: '3 days ago',
    comment: 'Amazing ergonomics and performance. Build material feels premium titanium and glass. Best purchase in Amazon City this year.',
    verified: true,
  },
  {
    id: 'rev-3',
    userName: 'Dr. Soraya Lin',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 4,
    date: '1 week ago',
    comment: 'Very solid unit. Benchmarked it for 48 hours continuous load, thermal dissipation is outstanding.',
    verified: true,
  },
];

// Distinct, authentic product definitions across all districts
interface RawItemDef {
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  seller: string;
  stock: number;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  tags: string[];
  gradient: string;
  badge?: string;
  imageOverride?: string;
  coupon?: string;
  boughtPastMonth?: number;
  amazonChoice?: boolean;
}

// Generate distinct realistic catalog with unique prices and visuals
export class ProductCatalogEngine {
  private inMemoryCatalog: Product[] = [];
  private totalVirtualCount: number = 100000000;

  constructor() {
    this.seedCatalog();
  }

  private seedCatalog() {
    const list: Product[] = [];

    // Distinct realistic product data definitions per district
    const catalogData: Record<CityDistrict, RawItemDef[]> = {
      all: [],
      drinks: [
        {
          name: 'Vortex Quantum Cola Zero · 330ml Can (Pack of 12)',
          price: 18.99,
          oldPrice: 24.99,
          rating: 4.9,
          reviews: 3840,
          seller: 'Vortex Beverage Labs',
          stock: 340,
          description: 'Zero-sugar crisp botanical cola formulated with organic kola nut, Madagascar vanilla, and micro-carbonated electrolytes.',
          features: ['Zero sugar & zero calories', 'Natural caffeine from green tea (80mg)', 'Micro-carbonation for silky texture', 'Chilled insulated delivery'],
          specs: [{ label: 'Volume', value: '12 x 330ml' }, { label: 'Calories', value: '0 kcal' }, { label: 'Caffeine', value: '80mg per can' }, { label: 'Sugar', value: '0g' }],
          tags: ['Cola', 'Zero Sugar', 'Energy', 'Best Seller'],
          gradient: 'from-amber-600 via-rose-700 to-slate-900',
          badge: '#1 Best Seller',
          imageOverride: DRINKS_FEATURE_IMAGE,
          coupon: 'Save $2.00 with coupon',
          boughtPastMonth: 4000,
          amazonChoice: true,
        },
        {
          name: 'CyberFuel Hyper-Drive Sparkling Energy Elixir · Yuzu Citrus (12 Cans)',
          price: 29.49,
          oldPrice: 38.00,
          rating: 4.8,
          reviews: 2190,
          seller: 'CyberFuel Labs',
          stock: 180,
          description: 'Nootropic mental clarity fuel powered by Alpha-GPC, L-Theanine, and sparkling real Yuzu citrus extract.',
          features: ['200mg Clean Caffeine', 'Alpha-GPC + L-Theanine focus matrix', 'No jitter, zero crash formula', 'Recyclable satin-finish aluminum'],
          specs: [{ label: 'Flavor', value: 'Yuzu Sparkling Citrus' }, { label: 'Active Matrix', value: 'Nootropic Focus Complex' }, { label: 'Pack Size', value: '12 Cans' }],
          tags: ['Energy Drink', 'Nootropic', 'Citrus', 'Sparkling'],
          gradient: 'from-cyan-500 via-blue-600 to-slate-950',
          imageOverride: DRINKS_SPLASH_AD,
          boughtPastMonth: 2000,
        },
        {
          name: 'Alpine Glacial Hydro-Water · Deuterium-Depleted 750ml Frosted Glass (6-Pack)',
          price: 14.85,
          oldPrice: 19.99,
          rating: 4.95,
          reviews: 1450,
          seller: 'Alpine Springs District',
          stock: 95,
          description: 'Sourced from deep Swiss glacial aquifers at 3,200m altitude. Naturally filtered through mineral basalt strata.',
          features: ['pH 7.8 balanced alkalinity', 'Rare silica and electrolyte balance', 'Heavy frosted obsidian-tinted glass', 'Certified carbon-neutral source'],
          specs: [{ label: 'Source', value: 'Matterhorn Glacial Aquifer' }, { label: 'pH', value: '7.85 Balanced' }, { label: 'Volume', value: '6 x 750ml' }],
          tags: ['Mineral Water', 'Glacial', 'Luxury Water', 'Glass Bottle'],
          gradient: 'from-sky-400 via-teal-500 to-slate-900',
          coupon: 'Save 10% with coupon',
          boughtPastMonth: 1000,
        },
        {
          name: 'Kyoto Ceremonial Grade Single-Origin Cold Brew Matcha · 500ml Flask',
          price: 22.40,
          oldPrice: 28.00,
          rating: 4.9,
          reviews: 980,
          seller: 'Kyoto Botanicals',
          stock: 120,
          description: 'First harvest stone-ground shade-grown tencha tea leaves steeped in glacial cold water for 18 hours.',
          features: ['100% Ceremonial Tencha', 'Rich in EGCG and L-Theanine', 'Smooth umami with zero bitterness', 'Zero added sweeteners'],
          specs: [{ label: 'Origin', value: 'Uji, Kyoto Japan' }, { label: 'Steep Time', value: '18h Slow Cold Drip' }, { label: 'Volume', value: '500ml' }],
          tags: ['Matcha', 'Cold Brew', 'Artisan Tea', 'Organic'],
          gradient: 'from-emerald-500 via-teal-700 to-slate-950',
          amazonChoice: true,
        },
        {
          name: 'Solara Blood Orange & Dragonfruit Sparkling Nectar · 12-Pack Cans',
          price: 24.79,
          oldPrice: 32.50,
          rating: 4.75,
          reviews: 1720,
          seller: 'Solara Orchards',
          stock: 450,
          description: 'Cold-pressed Sicilian blood oranges married with organic pink dragonfruit and effervescent alpine spring bubbles.',
          features: ['100% real fruit juice concentrate', 'Packed with Vitamin C & Zinc', 'Naturally pink color', 'Light effervescence'],
          specs: [{ label: 'Fruit Content', value: '45% Pure Juice' }, { label: 'Serving', value: '12 x 355ml' }, { label: 'Sugar', value: 'Naturally Occurring Only' }],
          tags: ['Fruit Drink', 'Blood Orange', 'Sparkling Juice', 'Vegan'],
          gradient: 'from-rose-500 via-amber-600 to-slate-900',
          badge: 'Flash Deal',
          boughtPastMonth: 3000,
        },
        {
          name: 'Nitro Cold Brew Dark Roast Espresso Cans · Colombian Geisha (8-Pack)',
          price: 26.90,
          oldPrice: 34.00,
          rating: 4.88,
          reviews: 3120,
          seller: 'Apex Roasters Guild',
          stock: 210,
          description: 'Infused with food-grade liquid nitrogen for a cascading velvet crema head upon opening. Notes of dark chocolate and roasted hazelnut.',
          features: ['Nitrogen widget inside every can', 'Direct-trade Colombian Geisha beans', 'Zero dairy, rich velvety mouthfeel', '220mg natural caffeine'],
          specs: [{ label: 'Roast', value: 'Medium Dark' }, { label: 'Bean', value: '100% Arabica Geisha' }, { label: 'Serving', value: '8 x 250ml' }],
          tags: ['Coffee', 'Nitro Cold Brew', 'Espresso', 'Dark Roast'],
          gradient: 'from-amber-800 via-stone-800 to-black',
          coupon: 'Save $3.00 with coupon',
        },
        {
          name: 'BioHydrate Ionised Raw Coconut Water with Wild Lime (Pack of 12)',
          price: 21.15,
          oldPrice: 27.99,
          rating: 4.7,
          reviews: 840,
          seller: 'Pacific Botanics',
          stock: 160,
          description: 'Micro-filtered organic Nam Hom coconut water enriched with natural potassium and Himalayan pink salt electrolytes.',
          features: ['Natural potassium powerhouse', 'Zero added cane sugar', 'Flash pasteurized for fresh taste'],
          specs: [{ label: 'Electrolytes', value: '650mg Potassium' }, { label: 'Volume', value: '12 x 330ml' }],
          tags: ['Coconut Water', 'Hydration', 'Organic'],
          gradient: 'from-teal-400 via-emerald-600 to-slate-900',
        },
        {
          name: 'Titan Cacao & Cordyceps Mushroom Functional Hot Chocolate (30 Servings)',
          price: 34.25,
          oldPrice: 42.00,
          rating: 4.85,
          reviews: 1250,
          seller: 'Titan Adaptogens',
          stock: 130,
          description: 'Raw ceremonial Ecuadorian heirloom cacao blended with 1,500mg dual-extracted Cordyceps and Lion’s Mane mushrooms.',
          features: ['Sustained cellular energy without jitters', 'Organic ceremonial cacao', 'Vegan and dairy-free'],
          specs: [{ label: 'Active Fungi', value: '1500mg Cordyceps + Reishi' }, { label: 'Servings', value: '30 x 15g' }],
          tags: ['Mushroom Drink', 'Adaptogen', 'Cacao'],
          gradient: 'from-stone-600 via-amber-900 to-black',
        },
      ],
      phones: [
        {
          name: 'Aether Quantum Fold 7 Pro · Holographic Display 1TB Titanium Obsidian',
          price: 1389.99,
          oldPrice: 1699.00,
          rating: 4.96,
          reviews: 5820,
          seller: 'Aether Mobile Global',
          stock: 45,
          description: 'The pinnacle of smartphone engineering. Dual-folding ultra-thin glass with zero-crease hinge, 240Hz LTPO OLED, and satellite quantum encryption.',
          features: ['8.1" Inner Foldable AMOLED + 6.5" Outer 165Hz Screen', 'Snapdragon 8 Gen 5 AI Core', '200MP Quad Periscope Telephoto (100x Space Zoom)', '6,000mAh Graphene Battery with 120W HyperCharge'],
          specs: [
            { label: 'Storage & RAM', value: '1TB UFS 4.1 · 24GB LPDDR5X' },
            { label: 'Display', value: '8.1" 240Hz QHD+ LTPO Foldable OLED' },
            { label: 'Camera', value: '200MP Main + 50MP UW + 50MP 10x Periscope' },
            { label: 'Battery & Charging', value: '6,000 mAh · 120W Wired · 50W Wireless' },
          ],
          tags: ['Smartphone', 'Foldable', 'Flagship', '1TB', 'Titanium'],
          gradient: 'from-blue-600 via-indigo-800 to-slate-950',
          badge: '#1 Best Seller',
          imageOverride: PHONE_FEATURE_IMAGE,
          boughtPastMonth: 1500,
          amazonChoice: true,
          coupon: 'Save $100 with coupon',
        },
        {
          name: 'Titan CyberMatrix 9 Gaming Phone · Liquid Vapor Chamber 512GB (Stealth Matte)',
          price: 879.50,
          oldPrice: 1099.00,
          rating: 4.9,
          reviews: 3200,
          seller: 'Titan Mobile Works',
          stock: 80,
          description: 'Dedicated handheld esports weapon with ultrasonic shoulder triggers, RGB rear telemetry panel, and miniature turbofan cooling.',
          features: ['Built-in 25,000 RPM turbofan and liquid vapor chamber', '165Hz 6.8" Flat AMOLED with 2000Hz touch polling', 'Dual stereo speakers with Dolby Atmos spatial tuning'],
          specs: [
            { label: 'RAM & Storage', value: '16GB RAM · 512GB Storage' },
            { label: 'Display', value: '6.8" FHD+ 165Hz Flat AMOLED' },
            { label: 'Processor', value: 'Overclocked Dimensity 9400+' },
          ],
          tags: ['Gaming Phone', 'Titan', 'High Refresh', '512GB'],
          gradient: 'from-rose-600 via-violet-800 to-slate-950',
          imageOverride: PHONE_TITANIUM_AD,
          boughtPastMonth: 800,
        },
        {
          name: 'Nova Prism 14 Neo · Ultra-Slim 256GB 5G (Champagne Gold)',
          price: 489.99,
          oldPrice: 649.00,
          rating: 4.78,
          reviews: 4120,
          seller: 'Nova Electronics Store',
          stock: 230,
          description: 'Sleek luxury design in aerospace aluminum, flagship-grade 108MP Sony sensor, and all-day battery life at an accessible price.',
          features: ['Ultra-thin 6.8mm profile weighing only 168g', '108MP Studio Portrait Camera with OIS', '6.67" 120Hz curved Crystal-Clear OLED'],
          specs: [
            { label: 'Storage', value: '256GB UFS 3.1' },
            { label: 'RAM', value: '12GB Virtual Dynamic' },
            { label: 'Weight', value: '168 grams' },
          ],
          tags: ['Budget Phone', 'Slim', '5G', 'Nova', 'Gold'],
          gradient: 'from-amber-400 via-orange-600 to-slate-900',
          coupon: 'Save $30 with coupon',
        },
        {
          name: 'Horizon Minimal E-Ink Hybrid Phone · 30-Day Battery Life (Chalk White)',
          price: 345.00,
          oldPrice: 420.00,
          rating: 4.82,
          reviews: 1640,
          seller: 'Horizon Digital Wellbeing',
          stock: 110,
          description: 'Distraction-free everyday phone featuring a dual color Kaleido E-Ink front screen, tactile volume keys, and month-long endurance.',
          features: ['Zero eye fatigue glare-free color E-Ink display', '30-day battery runtime on a single charge', 'Pure distraction-free OS'],
          specs: [
            { label: 'Battery Life', value: '30+ Days Typical' },
            { label: 'Screen', value: '5.84" Color Kaleido 3 E-Ink' },
          ],
          tags: ['E-Ink', 'Minimalist', 'Battery Beast', 'Hybrid Phone'],
          gradient: 'from-stone-500 via-neutral-700 to-slate-950',
        },
      ],
      toys: [
        {
          name: 'CyberCity Modular Orbital Space Station · 3,450-Piece Building Kit',
          price: 184.99,
          oldPrice: 249.99,
          rating: 4.95,
          reviews: 2410,
          seller: 'BrickCraft City',
          stock: 85,
          description: 'Massive precision-engineered interlocking brick architecture with illuminated solar arrays, rotating centrifuge ring, and 6 micro astronaut figures.',
          features: ['3,450 high-tolerance pieces', 'Integrated USB LED lighting kit', 'Detailed command deck and docking bays'],
          specs: [{ label: 'Pieces', value: '3,450 blocks' }, { label: 'Dimensions', value: '62 x 45 x 38 cm' }],
          tags: ['LEGO-Style', 'Space Station', 'Building Bricks', 'Collector'],
          gradient: 'from-blue-600 via-indigo-700 to-slate-950',
          badge: '#1 Best Seller in Toys',
          imageOverride: TOY_FEATURE_IMAGE,
          boughtPastMonth: 2500,
          amazonChoice: true,
          coupon: 'Save $15 with coupon',
        },
        {
          name: 'RoboRover Apex-7 Remote Control All-Terrain Cyber Buggy (65km/h)',
          price: 114.50,
          oldPrice: 159.00,
          rating: 4.85,
          reviews: 1890,
          seller: 'Apex Mechanics',
          stock: 140,
          description: 'Brushless motor powered high-speed RC vehicle with carbon fiber chassis, oil-filled shocks, and 2.4GHz digital telemetry remote.',
          features: ['65 km/h top speed with brushless motor', 'Independent hydraulic shock absorbers', 'IPX5 water and sand resistant'],
          specs: [{ label: 'Top Speed', value: '65 km/h' }, { label: 'Drive', value: '4WD Full Time' }],
          tags: ['RC Car', 'Remote Control', 'High Speed', 'All Terrain'],
          gradient: 'from-amber-500 via-red-600 to-slate-900',
          imageOverride: TOYS_GAMING_AD,
          boughtPastMonth: 1200,
        },
        {
          name: 'Aegis Sentinel Bipedal AI Robotic Companion with Voice Recognition',
          price: 148.00,
          oldPrice: 199.99,
          rating: 4.8,
          reviews: 970,
          seller: 'Omni Robotics Toy Division',
          stock: 60,
          description: 'Programmable educational android toy capable of speech interaction, gesture tracking, obstacle avoidance, and graphical scratch coding.',
          features: ['18 servo joints for lifelike fluid movement', 'Built-in camera for facial recognition', 'Visual drag-and-drop mobile programming'],
          specs: [{ label: 'Servos', value: '18 Precision Actuators' }, { label: 'Control', value: 'Voice, App & Motion' }],
          tags: ['Robot', 'AI Toy', 'STEM Robotics', 'Coding'],
          gradient: 'from-cyan-500 via-teal-600 to-slate-900',
        },
        {
          name: 'Quantum Maze 3D Gravity Sphere Board Puzzle (240 Obstacles)',
          price: 32.99,
          oldPrice: 45.00,
          rating: 4.7,
          reviews: 3120,
          seller: 'MindForge Puzzles',
          stock: 520,
          description: 'Intricate 360-degree multi-level track inside a transparent crystal polycarbonate sphere.',
          features: ['240 numbered challenge gates', 'Smooth steel precision ball bearing', 'Shatter-resistant polycarbonate sphere'],
          specs: [{ label: 'Obstacles', value: '240 Challenge Tracks' }, { label: 'Diameter', value: '22 cm' }],
          tags: ['Puzzles', 'Brain Teaser', 'Board Games'],
          gradient: 'from-violet-500 via-purple-700 to-slate-900',
          coupon: 'Save $5.00 with coupon',
        },
      ],
      computers: [
        {
          name: 'Apex Quantum Studio Desktop Workstation (64-Core / 128GB RAM / RTX 5090)',
          price: 3799.00,
          oldPrice: 4499.00,
          rating: 4.98,
          reviews: 1240,
          seller: 'Apex Computing Systems',
          stock: 22,
          description: 'Engineered for AI local training, 8K video render pipelines, and zero-compromise computational simulation in CNC anodized aluminum enclosure.',
          features: ['64-Core Threadripper 7000 Series CPU', 'GeForce RTX 5090 32GB GDDR7 Graphics Card', 'Custom liquid loop with dual 360mm copper radiators'],
          specs: [{ label: 'CPU', value: 'Threadripper 64-Core' }, { label: 'GPU', value: 'RTX 5090 32GB' }, { label: 'RAM', value: '128GB DDR5-6400 ECC' }],
          tags: ['Desktop', 'Workstation', 'RTX 5090', 'High Performance'],
          gradient: 'from-indigo-600 via-blue-800 to-slate-950',
          badge: '#1 Best Seller in Workstations',
          imageOverride: GAMING_FEATURE_IMAGE,
          amazonChoice: true,
        },
        {
          name: 'Spectre Aero 16 Ultra-Thin Creator Laptop · 4K OLED (Intel Core Ultra 9 / 32GB)',
          price: 1849.00,
          oldPrice: 2299.00,
          rating: 4.88,
          reviews: 2150,
          seller: 'Spectre Mobile Computing',
          stock: 65,
          description: 'Weighing only 1.48kg with an edge-to-edge 16-inch 120Hz 4K OLED 100% DCI-P3 calibrated panel and all-day 99Wh lithium battery.',
          features: ['16" 4K 120Hz OLED with touchscreen', 'Intel Core Ultra 9 with dedicated NPU', 'CNC milled magnesium chassis'],
          specs: [{ label: 'Display', value: '16" 3840x2400 OLED 120Hz' }, { label: 'Memory', value: '32GB LPDDR5X' }],
          tags: ['Laptop', 'Creator', '4K OLED', 'Thin & Light'],
          gradient: 'from-slate-700 via-slate-800 to-zinc-950',
          coupon: 'Save $100 with coupon',
        },
        {
          name: 'Cortex Mini Quantum Cube PC · Ryzen 9 8945HS (64GB RAM / 2TB SSD)',
          price: 789.95,
          oldPrice: 999.00,
          rating: 4.8,
          reviews: 940,
          seller: 'Cortex Microsystems',
          stock: 140,
          description: 'Pocket-sized computational powerhouse measuring just 12x12x5 cm with triple 4K display outputs and dual 2.5G Ethernet ports.',
          features: ['AMD Ryzen 9 8-Core/16-Thread 5.2GHz', 'Triple display output', 'Whisper-quiet vapor chamber cooling'],
          specs: [{ label: 'Form Factor', value: 'Mini PC (0.7 Liter)' }, { label: 'RAM', value: '64GB DDR5' }],
          tags: ['Mini PC', 'Compact', 'Ryzen 9'],
          gradient: 'from-teal-600 via-emerald-800 to-slate-950',
        },
      ],
      gaming: [
        {
          name: 'OmniStation X Cyber Console · 8K HDR Ray Tracing + 2 Wireless Haptic Controllers',
          price: 539.99,
          oldPrice: 649.99,
          rating: 4.94,
          reviews: 8420,
          seller: 'Omni Gaming Interactive',
          stock: 90,
          description: 'Next-generation console with custom RDNA 4 GPU, 2TB high-speed solid state drive, variable refresh rate up to 144Hz, and full backwards compatibility.',
          features: ['Native 4K 120FPS & 8K HDR ray-traced graphics', 'Haptic feedback controllers with dynamic adaptive tension triggers', '2TB Custom Gen5 NVMe SSD'],
          specs: [{ label: 'Storage', value: '2TB Gen5 NVMe' }, { label: 'Included', value: 'Console + 2 Controllers' }],
          tags: ['Console', 'Gaming', 'OmniStation', '8K'],
          gradient: 'from-violet-600 via-indigo-700 to-slate-950',
          badge: '#1 Best Seller in Gaming',
          imageOverride: GAMING_FEATURE_IMAGE,
          boughtPastMonth: 5000,
          amazonChoice: true,
          coupon: 'Save $25 with coupon',
        },
        {
          name: 'Valkyrie Spatial VR Headset 8K Micro-OLED with Inside-Out Tracking',
          price: 789.00,
          oldPrice: 949.00,
          rating: 4.9,
          reviews: 1890,
          seller: 'Valkyrie Immersion Labs',
          stock: 40,
          description: 'Ultra-lightweight 280g headset with pancake optics, 4K-per-eye resolution, eye-tracking foveated rendering, and wireless PC streaming.',
          features: ['Dual 4K Micro-OLED panels', '115-degree ultra-wide field of view', 'Foveated rendering with 120Hz eye tracking'],
          specs: [{ label: 'Resolution', value: 'Dual 4K Micro-OLED' }, { label: 'Weight', value: '285g' }],
          tags: ['VR Headset', '8K', 'Gaming'],
          gradient: 'from-cyan-600 via-blue-700 to-slate-950',
        },
        {
          name: 'Apex Throne Ergonomic Cyber Gaming Chair · Magnetic Memory Foam & Lumbar',
          price: 419.00,
          oldPrice: 549.00,
          rating: 4.86,
          reviews: 4320,
          seller: 'Apex Ergonomics',
          stock: 75,
          description: 'Cold-cure high-density foam chair wrapped in breathable matte carbon-weave upholstery with 4D magnetic armrests and steel wheelbase.',
          features: ['Integrated 4-way dynamic mechanical lumbar support', 'Magnetic cooling-gel memory foam head pillow', '165-degree tilt and lock'],
          specs: [{ label: 'Material', value: 'Carbon-Weave Fabric' }, { label: 'Base', value: 'ADC12 Aluminum Base' }],
          tags: ['Gaming Chair', 'Ergonomic', 'Comfort'],
          gradient: 'from-rose-600 via-slate-800 to-slate-950',
          coupon: 'Save $40 with coupon',
        },
      ],
      monitors: [
        {
          name: 'AeroVision 49" Curved QD-OLED Ultrawide Monitor · 240Hz 0.03ms (5120x1440)',
          price: 1089.00,
          oldPrice: 1399.00,
          rating: 4.97,
          reviews: 3120,
          seller: 'AeroVision Display Systems',
          stock: 35,
          description: 'Spectacular 32:9 super ultrawide curved canvas replacing dual 27-inch monitors. True 0.03ms response time with infinite contrast and Quantum Dot color brilliance.',
          features: ['49" Curved 1800R QD-OLED Panel', '240Hz refresh rate & 0.03ms GTG response time', 'DisplayHDR True Black 400'],
          specs: [{ label: 'Screen Size', value: '49-inch 32:9' }, { label: 'Resolution', value: '5120 x 1440' }, { label: 'Refresh Rate', value: '240Hz' }],
          tags: ['Monitor', 'Ultrawide', 'QD-OLED', '240Hz'],
          gradient: 'from-teal-600 via-cyan-800 to-slate-950',
          badge: '#1 Best Seller in Ultrawides',
          imageOverride: MONITOR_FEATURE_IMAGE,
          boughtPastMonth: 1200,
          amazonChoice: true,
          coupon: 'Save $50 with coupon',
        },
        {
          name: 'OmniView 27" 4K Pro Studio Monitor · 100% AdobeRGB Calibrated (Thunderbolt 4)',
          price: 639.99,
          oldPrice: 799.00,
          rating: 4.91,
          reviews: 1840,
          seller: 'OmniView Professional',
          stock: 60,
          description: 'Factory color calibrated Delta E < 1.0 studio display for photographers, colorists, and 3D animators.',
          features: ['27" 4K UHD IPS Black panel', '99% DCI-P3 and 100% AdobeRGB', 'Hardware calibration with 16-bit 3D LUT'],
          specs: [{ label: 'Screen Size', value: '27-inch 16:9' }, { label: 'Resolution', value: '3840 x 2160' }],
          tags: ['Monitor', '27-inch', '4K', 'Studio Pro'],
          gradient: 'from-blue-600 via-indigo-900 to-slate-950',
          imageOverride: MONITOR_FEATURE_IMAGE,
        },
        {
          name: 'Vortex Swift 24.5" Esports Monitor · 360Hz Fast-IPS 0.5ms',
          price: 379.00,
          oldPrice: 479.00,
          rating: 4.85,
          reviews: 2450,
          seller: 'Vortex Esports Gear',
          stock: 95,
          description: 'The definitive tournament monitor for FPS shooters. Zero motion blur backlight strobing and native 360Hz refresh rate.',
          features: ['360Hz refresh rate on Fast-IPS', '0.5ms GtG response', 'G-Sync compatible'],
          specs: [{ label: 'Screen Size', value: '24.5-inch' }, { label: 'Refresh Rate', value: '360Hz' }],
          tags: ['Esports', '360Hz', 'Fast IPS', 'Monitor'],
          gradient: 'from-rose-600 via-red-800 to-slate-950',
          coupon: 'Save $20 with coupon',
        },
      ],
      keyboards: [
        {
          name: 'CyberBlade 75 Magnetic Hall-Effect Rapid Trigger Keyboard (CNC Aluminum)',
          price: 174.99,
          oldPrice: 229.99,
          rating: 4.96,
          reviews: 4210,
          seller: 'CyberBlade Keyworks',
          stock: 120,
          description: 'Magnetic Hall-effect analog switches allowing continuous rapid trigger from 0.1mm to 4.0mm with 0.01mm adjustable actuation precision.',
          features: ['Hall-effect magnetic switches with Rapid Trigger', '8000Hz polling rate with near-zero latency', 'Full CNC anodized aluminum block case'],
          specs: [{ label: 'Switch Type', value: 'Magnetic Hall-Effect' }, { label: 'Polling Rate', value: '8000Hz' }],
          tags: ['Keyboard', 'Hall-Effect', 'Rapid Trigger', 'Mechanical'],
          gradient: 'from-emerald-500 via-teal-700 to-slate-950',
          badge: '#1 Best Seller in Keyboards',
          imageOverride: KEYBOARD_FEATURE_IMAGE,
          boughtPastMonth: 3500,
          amazonChoice: true,
          coupon: 'Save $15 with coupon',
        },
        {
          name: 'Zenith Split Ergonomic Mechanical Keyboard · Wireless Bluetooth + 2.4G',
          price: 194.50,
          oldPrice: 249.00,
          rating: 4.9,
          reviews: 1540,
          seller: 'Zenith Human Ergonomics',
          stock: 65,
          description: 'Split tented ergonomic layout that aligns wrists in natural neutral position. Includes magnetic memory foam palm rests.',
          features: ['Split two-piece design', 'Pre-lubed linear silent switches', 'Tri-mode connectivity: Bluetooth, 2.4G, USB-C'],
          specs: [{ label: 'Switches', value: 'Silent Linear Box' }, { label: 'Battery', value: '4000mAh Lithium' }],
          tags: ['Split Keyboard', 'Ergonomic', 'Wireless', 'Mechanical'],
          gradient: 'from-indigo-500 via-purple-700 to-slate-950',
          imageOverride: KEYBOARD_FEATURE_IMAGE,
        },
        {
          name: 'RetroCyber 60% RGB Mechanical Keyboard · Custom PBT Dye-Sub Keycaps',
          price: 76.99,
          oldPrice: 109.99,
          rating: 4.79,
          reviews: 2890,
          seller: 'RetroCyber Studio',
          stock: 310,
          description: 'Compact 60% desk-saving layout with vibrant per-key south-facing RGB lighting and thick retro PBT cherry profile keycaps.',
          features: ['Hot-swappable 5-pin switch sockets', 'South-facing addressable RGB', 'Detachable coiled aviator USB-C cable'],
          specs: [{ label: 'Layout', value: '60% 61-Key' }, { label: 'Keycaps', value: 'Thick PBT Dye-Sub' }],
          tags: ['Keyboard', '60%', 'RGB', 'Hot-Swap'],
          gradient: 'from-cyan-500 via-blue-600 to-slate-900',
          imageOverride: KEYBOARD_FEATURE_IMAGE,
          coupon: 'Save $8.00 with coupon',
        },
      ],
      mice: [
        {
          name: 'Phantom Carbon 8K Ultralight Wireless Gaming Mouse (34 grams / 30,000 DPI)',
          price: 134.99,
          oldPrice: 179.99,
          rating: 4.97,
          reviews: 5120,
          seller: 'Phantom Peripherals',
          stock: 140,
          description: 'Crafted with genuine woven carbon fiber composite for structural rigidity at an unbelievable 34-gram total weight with true 8000Hz polling.',
          features: ['34 grams ultra-featherweight forged carbon unibody', 'Focus Pro 30,000 DPI optical sensor', 'True 8000Hz wireless polling rate'],
          specs: [{ label: 'Weight', value: '34 grams' }, { label: 'Sensor', value: 'Focus Pro 30K Optical' }, { label: 'Polling Rate', value: '8000Hz' }],
          tags: ['Gaming Mouse', 'Ultralight', 'Carbon Fiber', '8000Hz'],
          gradient: 'from-rose-500 via-slate-800 to-black',
          badge: '#1 Best Seller in Gaming Mice',
          imageOverride: MOUSE_FEATURE_IMAGE,
          boughtPastMonth: 4200,
          amazonChoice: true,
          coupon: 'Save $12 with coupon',
        },
        {
          name: 'ErgoMaster Pro Vertical Wireless Mouse · 57° Natural Posture with Dual Scroll',
          price: 84.50,
          oldPrice: 119.00,
          rating: 4.88,
          reviews: 3410,
          seller: 'Apex Ergonomics',
          stock: 220,
          description: 'Scientifically contoured 57-degree vertical angle relieves forearm strain and carpal pressure. Features thumb scroll wheel and textured rubber grip.',
          features: ['57-degree natural handshake posture angle', 'Precision metal magnetic thumb scroll wheel', 'Connect up to 3 devices with instant Easy-Switch'],
          specs: [{ label: 'Ergonomic Angle', value: '57° Handshake' }, { label: 'DPI', value: '4000 DPI' }],
          tags: ['Vertical Mouse', 'Ergonomic', 'Wireless', 'Office Pro'],
          gradient: 'from-teal-500 via-cyan-700 to-slate-900',
          imageOverride: MOUSE_FEATURE_IMAGE,
          coupon: 'Save $10 with coupon',
        },
      ],
      electronics: [
        {
          name: 'AeroPulse ANC Spatial Audio Wireless Headphones · 60h Battery (Titanium Black)',
          price: 294.99,
          oldPrice: 379.99,
          rating: 4.93,
          reviews: 4890,
          seller: 'AeroPulse Acoustics',
          stock: 130,
          description: 'Custom 45mm beryllium drivers delivering acoustic perfection. Active Hybrid Noise Cancellation removes 98% of ambient city frequencies.',
          features: ['Adaptive noise cancellation with 8 microphones', 'Lossless LDAC audio', '60-hour playtime with quick charge'],
          specs: [{ label: 'Driver', value: '45mm Beryllium Dome' }, { label: 'Battery', value: '60 Hours' }],
          tags: ['Headphones', 'ANC', 'Spatial Audio'],
          gradient: 'from-sky-500 via-blue-700 to-slate-950',
          badge: '#1 Best Seller in Headphones',
          boughtPastMonth: 2800,
          amazonChoice: true,
          coupon: 'Save $25 with coupon',
        },
        {
          name: 'OmniVolt 200W GaN Prime 5-Port Desktop Fast Charger (Supports 3 Laptops)',
          price: 76.50,
          oldPrice: 109.99,
          rating: 4.9,
          reviews: 3200,
          seller: 'OmniVolt Technologies',
          stock: 410,
          description: 'Next-gen Gallium Nitride (GaN III) architecture powers 3 high-power laptops and 2 smartphones simultaneously from one wall outlet.',
          features: ['Single port up to 140W PD 3.1 output', 'Dynamic power allocation across 5 smart ports'],
          specs: [{ label: 'Total Output', value: '200W Max' }, { label: 'Ports', value: '4x USB-C + 1x USB-A' }],
          tags: ['Charger', 'GaN', '200W'],
          gradient: 'from-amber-500 via-orange-600 to-slate-900',
          coupon: 'Save $8.00 with coupon',
        },
      ],
      fashion: [
        {
          name: 'CyberKevlar Waterproof Techwear Parka · Magnetic Fasteners (Deep Obsidian)',
          price: 244.00,
          oldPrice: 329.00,
          rating: 4.89,
          reviews: 1980,
          seller: 'Kevlar Urban Tech',
          stock: 85,
          description: '3-layer microporous breathable waterproof membrane engineered to withstand torrential downpours. Features Fidlock magnetic chest fasteners.',
          features: ['20,000mm waterproof rating', '8 concealed modular utility pockets', 'Articulated sleeves'],
          specs: [{ label: 'Waterproof', value: '20,000mm' }, { label: 'Fabric', value: 'Ripstop Taslan Nylon' }],
          tags: ['Techwear', 'Parka', 'Waterproof', 'Jacket'],
          gradient: 'from-slate-700 via-slate-800 to-zinc-950',
          badge: 'Amazon Prime Exclusive',
          coupon: 'Save $20 with coupon',
        },
        {
          name: 'AeroCushion Carbon Plate Running Sneakers · Neon Cyber Wave',
          price: 154.95,
          oldPrice: 199.00,
          rating: 4.84,
          reviews: 2890,
          seller: 'AeroCushion Labs',
          stock: 140,
          description: 'Full-length curved carbon fiber propulsion plate sandwiched between ultra-responsive nitrogen-infused supercritical foam.',
          features: ['Full-length carbon fiber rocker plate', 'Nitrogen-infused foam for 85% energy return'],
          specs: [{ label: 'Weight', value: '198g' }, { label: 'Plate', value: 'Curved Carbon Fiber' }],
          tags: ['Sneakers', 'Running Shoes', 'Carbon Plate'],
          gradient: 'from-cyan-400 via-fuchsia-600 to-slate-950',
          coupon: 'Save 15% with coupon',
        },
      ],
      home: [
        {
          name: 'Solace Solid Walnut Motorized Standing Desk (180 x 80 cm) with Dual Motors',
          price: 679.00,
          oldPrice: 849.00,
          rating: 4.95,
          reviews: 2120,
          seller: 'Solace Living Studios',
          stock: 35,
          description: 'Crafted from sustainable European FSC-certified solid black walnut. Dual whisper-quiet synchronized motors with anti-collision gyro sensor.',
          features: ['Solid European walnut tabletop', 'Height adjusts from 62cm to 128cm', 'Supports 150kg'],
          specs: [{ label: 'Desktop', value: '180 x 80 x 3 cm' }, { label: 'Motor', value: 'Dual Synchronized' }],
          tags: ['Standing Desk', 'Walnut', 'Ergonomic'],
          gradient: 'from-amber-700 via-stone-800 to-slate-950',
          coupon: 'Save $50 with coupon',
        },
      ],
      books: [
        {
          name: 'The Architecture of Autonomous Digital Cities · Hardcover Collector Edition',
          price: 48.50,
          oldPrice: 65.00,
          rating: 4.98,
          reviews: 1420,
          seller: 'Metropolis Academic Press',
          stock: 190,
          description: 'A breathtaking 480-page visual study of cybernetic urban spaces, AI transportation networks, and vertical architectural ecosystems.',
          features: ['Clothbound embossed hardcover', 'Over 300 full-color architectural renders', 'Fold-out blueprint of Amazon City'],
          specs: [{ label: 'Pages', value: '480 Pages' }, { label: 'Binding', value: 'Clothbound Hardcover' }],
          tags: ['Book', 'Architecture', 'Sci-Fi'],
          gradient: 'from-yellow-600 via-amber-800 to-slate-950',
          amazonChoice: true,
        },
      ],
      sports: [
        {
          name: 'Apex Carbon Aero 12-Speed Road Bicycle (7.1kg Full Toray T1000 Carbon)',
          price: 2489.00,
          oldPrice: 3199.00,
          rating: 4.94,
          reviews: 620,
          seller: 'Apex Velo Works',
          stock: 18,
          description: 'Wind-tunnel perfected aerodynamic tube profiles with wireless electronic 12-speed shifting and hydraulic flat-mount disc brakes.',
          features: ['Toray T1000 carbon frame & fork', 'Wireless electronic 12-speed groupset', '50mm deep-section tubeless wheels'],
          specs: [{ label: 'Total Weight', value: '7.15 kg' }, { label: 'Gears', value: 'Wireless 2x12 Speed' }],
          tags: ['Bicycle', 'Road Bike', 'Carbon Fiber'],
          gradient: 'from-lime-500 via-emerald-700 to-slate-950',
        },
      ],
      beauty: [
        {
          name: 'Lumina Quantum Copper Peptide Youth Serum · 50ml Airless Dropper',
          price: 86.99,
          oldPrice: 120.00,
          rating: 4.92,
          reviews: 3670,
          seller: 'Lumina Skin Science',
          stock: 140,
          description: 'Formulated with 3% pure GHK-Cu copper tripeptide, multi-molecular weight hyaluronic acids, and ectoin for barrier rejuvenation.',
          features: ['Visible collagen firming within 14 days', 'Vibrant natural cobalt blue hue', 'Fragrance-free & cruelty-free'],
          specs: [{ label: 'Volume', value: '50ml (1.7 fl.oz)' }, { label: 'Active', value: '3% Copper Tripeptide' }],
          tags: ['Serum', 'Skincare', 'Anti-Aging'],
          gradient: 'from-pink-500 via-rose-700 to-slate-950',
          badge: '#1 Best Seller in Skincare',
          coupon: 'Save $10 with coupon',
        },
      ],
      food: [
        {
          name: 'Kyoto Artisan Gold Flake Wagyu Beef Jerky · 200g Vacuum Pouch',
          price: 37.50,
          oldPrice: 48.00,
          rating: 4.96,
          reviews: 1850,
          seller: 'Kyoto Gourmet Guild',
          stock: 80,
          description: 'Slow-smoked A5 Miyazaki wagyu beef marinated in 20-year aged tamari soy sauce, wild mountain honey, and edible 24K gold flakes.',
          features: ['A5 Miyazaki Wagyu with marble score 11+', 'Cold-smoked over cherrywood and binchotan charcoal', 'Unbelievably tender texture'],
          specs: [{ label: 'Net Weight', value: '200g' }, { label: 'Cut', value: 'A5 Miyazaki Wagyu' }],
          tags: ['Wagyu', 'Gourmet', 'Jerky'],
          gradient: 'from-amber-600 via-red-800 to-stone-950',
          amazonChoice: true,
        },
      ],
    };

    // First load curated base items
    const districts = DISTRICTS.map((d) => d.id);
    districts.forEach((d) => {
      const items = catalogData[d] || [];
      const distInfo = DISTRICTS.find((item) => item.id === d);

      items.forEach((item, idx) => {
        const idNum = 100000 + list.length;
        const discountPct = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);

        list.push({
          id: `ac-${d}-${idx + 1}`,
          sku: `AC-${idNum}`,
          name: item.name,
          district: d,
          districtName: distInfo?.name || 'City Center',
          price: item.price,
          oldPrice: item.oldPrice,
          discount: discountPct,
          rating: item.rating,
          reviewCount: item.reviews,
          seller: item.seller,
          stock: item.stock,
          description: item.description,
          features: item.features,
          imageUrl: item.imageOverride || '',
          imageFallbackGradient: item.gradient,
          badge: item.badge,
          isFlashDeal: item.badge === 'Flash Deal',
          specifications: item.specs,
          reviews: SAMPLE_REVIEWS,
          tags: item.tags,
          districtBuildingIcon: distInfo?.icon || '🏙️',
          coupon: item.coupon,
          isPrime: true,
          deliveryDate: 'Tomorrow, by 11 AM',
          boughtPastMonth: item.boughtPastMonth || 500 + (idx * 210),
          amazonChoice: item.amazonChoice,
          bestSellerCategory: item.badge?.includes('Best Seller') ? distInfo?.name : undefined,
        });
      });
    });

    // NOW EXPAND with completely UNIQUE products, UNIQUE prices and UNIQUE titles!
    const expandedDistricts: CityDistrict[] = [
      'drinks', 'toys', 'phones', 'computers', 'gaming', 'monitors', 'keyboards', 'mice', 'electronics', 'fashion', 'home', 'food'
    ];

    // Rich domain product titles & base prices to ensure ZERO duplicate names or prices
    const uniqueDistrictNames: Record<string, { title: string; price: number; oldPrice: number; specs: { label: string; value: string }[] }[]> = {
      drinks: [
        { title: 'Apex Tropical Lychee & Dragonfruit Sparkling Elixir (12x330ml)', price: 23.49, oldPrice: 29.99, specs: [{ label: 'Flavor', value: 'Tropical Lychee' }, { label: 'Pack', value: '12 Cans' }] },
        { title: 'Glacial Blue Cold-Pressed Mountain Spring Hydration 1L (Pack of 6)', price: 16.89, oldPrice: 21.50, specs: [{ label: 'Volume', value: '6 x 1000ml' }, { label: 'pH', value: '8.2 Alkaline' }] },
        { title: 'Vortex Blood Orange Zero-Sugar Quantum Soda (12 Cans)', price: 19.95, oldPrice: 25.00, specs: [{ label: 'Sugar', value: '0g' }, { label: 'Volume', value: '12 x 330ml' }] },
        { title: 'Kyoto Stone-Ground Sencha Iced Green Tea 500ml Glass (8-Pack)', price: 25.60, oldPrice: 33.00, specs: [{ label: 'Tea Leaf', value: 'Uji Sencha' }, { label: 'Bottle', value: 'Glass' }] },
        { title: 'CyberFuel Hyper-Focus Blackcurrant Nootropic Drink (12-Pack)', price: 31.99, oldPrice: 39.99, specs: [{ label: 'Nootropics', value: 'L-Theanine 200mg' }, { label: 'Pack', value: '12' }] },
        { title: 'Pure Nitro Cascara Berry Cold Brew Infusion (6 Cans)', price: 17.40, oldPrice: 22.90, specs: [{ label: 'Brew', value: 'Nitrogen Steep' }, { label: 'Origin', value: 'Costa Rica' }] },
        { title: 'BioHydrate Electrolyte Organic Watermelon Sea Salt (12 Cans)', price: 21.80, oldPrice: 28.00, specs: [{ label: 'Electrolytes', value: '800mg' }, { label: 'Volume', value: '12 x 355ml' }] },
        { title: 'Titan Adaptogenic Reishi & Dark Cacao Elixir (10 Servings)', price: 28.95, oldPrice: 36.00, specs: [{ label: 'Extract', value: 'Reishi 1000mg' }, { label: 'Sugar', value: 'Zero Added' }] },
        { title: 'Alpine Glacial Sparkling Mineral Water · Lime Essence (12 Glass)', price: 27.50, oldPrice: 35.00, specs: [{ label: 'Source', value: 'Swiss Alps' }, { label: 'Bottle', value: 'Frosted Glass' }] },
        { title: 'Solara Yuzu Ginger Sparkling Botanical Juice (12 Cans)', price: 24.15, oldPrice: 31.00, specs: [{ label: 'Flavor', value: 'Yuzu Ginger' }, { label: 'Fruit', value: 'Real Juice' }] },
      ],
      phones: [
        { title: 'Quantum Horizon Flip 5G · 512GB Flexible Dynamic AMOLED', price: 994.00, oldPrice: 1249.00, specs: [{ label: 'Storage', value: '512GB' }, { label: 'Screen', value: '6.7" Dynamic 144Hz' }] },
        { title: 'Titan CyberMatrix Pro 1TB · Titanium Armor Shell (Obsidian)', price: 1149.99, oldPrice: 1399.00, specs: [{ label: 'RAM', value: '24GB' }, { label: 'Cooling', value: 'Dual Vapor Chamber' }] },
        { title: 'Vanguard Stealth Phone 256GB · Satellite Ultra-Link (Desert Gold)', price: 689.50, oldPrice: 849.00, specs: [{ label: 'Camera', value: '108MP Studio' }, { label: 'Battery', value: '5,500mAh' }] },
        { title: 'AeroPhone Carbon Ultralight 512GB · 148 grams Monocoque', price: 829.00, oldPrice: 999.00, specs: [{ label: 'Weight', value: '148g' }, { label: 'Material', value: 'Carbon Fiber' }] },
        { title: 'Nova Prism 14 Max 1TB · 200MP Periscope Camera (Cobalt Blue)', price: 1049.00, oldPrice: 1299.00, specs: [{ label: 'Zoom', value: '100x Optical' }, { label: 'Screen', value: '6.8" 120Hz LTPO' }] },
        { title: 'Horizon Minimal Color E-Ink 128GB · 40-Day Battery Life', price: 319.99, oldPrice: 399.00, specs: [{ label: 'Battery', value: '40 Days' }, { label: 'Display', value: 'Kaleido E-Ink' }] },
        { title: 'Starlight Crystal Phone 256GB · Transparent Rear Bezel', price: 549.00, oldPrice: 699.00, specs: [{ label: 'Back', value: 'Transparent Glass' }, { label: 'Lighting', value: 'Glyph LEDs' }] },
        { title: 'Apex Titan Gaming Smartphone 512GB · 185Hz Screen', price: 779.95, oldPrice: 949.00, specs: [{ label: 'Refresh', value: '185Hz' }, { label: 'Triggers', value: 'Magnetic Ultrasonic' }] },
      ],
      toys: [
        { title: 'Modular Cyber Mecha Titan Warrior · 2,800-pc Robotic Set', price: 159.95, oldPrice: 219.00, specs: [{ label: 'Pieces', value: '2,800' }, { label: 'Height', value: '48 cm' }] },
        { title: 'Autonomous Lunar Rover 4WD with HD Camera & Telemetry', price: 129.49, oldPrice: 179.00, specs: [{ label: 'Control', value: 'Wi-Fi / 2.4G' }, { label: 'Speed', value: '45 km/h' }] },
        { title: 'Bipedal AI Companion Android Bot with Face Tracking', price: 139.00, oldPrice: 189.00, specs: [{ label: 'Servos', value: '16 Metal Actuators' }, { label: 'App', value: 'iOS / Android' }] },
        { title: 'Orbital Space Shuttle Discovery & Launch Gantry 3,100-pc', price: 174.50, oldPrice: 239.00, specs: [{ label: 'Pieces', value: '3,100' }, { label: 'LED Kit', value: 'Included' }] },
        { title: '3D Gyro Gravity Puzzle Maze Sphere (180 Obstacles)', price: 29.89, oldPrice: 39.99, specs: [{ label: 'Difficulty', value: 'Master Class' }, { label: 'Diameter', value: '19 cm' }] },
        { title: 'Magnetic Quantum Hyper-Cube Puzzle (64 Rare-Earth Blocks)', price: 38.50, oldPrice: 49.99, specs: [{ label: 'Magnets', value: 'Neodymium N52' }, { label: 'Pieces', value: '64' }] },
      ],
      computers: [
        { title: 'Apex Threadripper Pro Studio Rig (32-Core / 64GB / RTX 5080)', price: 2989.00, oldPrice: 3499.00, specs: [{ label: 'GPU', value: 'RTX 5080 24GB' }, { label: 'RAM', value: '64GB DDR5' }] },
        { title: 'Spectre Aero 14 Ultra-Light Laptop (Intel Core Ultra 7 / 32GB)', price: 1429.00, oldPrice: 1749.00, specs: [{ label: 'Weight', value: '1.18 kg' }, { label: 'Screen', value: '14" 2.8K OLED' }] },
        { title: 'Titan Dual-Loop Liquid Gaming PC (Ryzen 9 9950X / RTX 5090)', price: 4299.00, oldPrice: 4999.00, specs: [{ label: 'Cooling', value: 'Dual Hardline Loop' }, { label: 'GPU', value: 'RTX 5090 32GB' }] },
        { title: 'Studio All-in-One 32-inch 5K Retina Touch Workstation', price: 2199.00, oldPrice: 2599.00, specs: [{ label: 'Screen', value: '32" 5K 5120x2880' }, { label: 'Color', value: '100% DCI-P3' }] },
        { title: 'Cortex Micro Cube Ryzen 7 Mini PC (32GB RAM / 1TB SSD)', price: 589.99, oldPrice: 729.00, specs: [{ label: 'Size', value: '10x10 cm' }, { label: 'Ports', value: 'Dual 2.5G LAN + USB4' }] },
      ],
      gaming: [
        { title: 'OmniStation Portable Cyber Handheld Console · 7" 120Hz OLED', price: 449.99, oldPrice: 549.00, specs: [{ label: 'Screen', value: '7" OLED 120Hz' }, { label: 'Storage', value: '1TB NVMe' }] },
        { title: 'Force-Feedback Direct Drive Racing Wheel & Load Cell Pedals', price: 629.00, oldPrice: 799.00, specs: [{ label: 'Torque', value: '12 Nm Direct Drive' }, { label: 'Pedals', value: 'Load Cell 100kg' }] },
        { title: 'Apex Flight Deck HOTAS Throttle & Dual Joystick Rig', price: 349.50, oldPrice: 449.00, specs: [{ label: 'Sensors', value: 'Magnetic Hall-Effect' }, { label: 'Buttons', value: '48 Programmable' }] },
        { title: 'Valkyrie Wireless Low-Latency Spatial VR Controllers (Pair)', price: 169.00, oldPrice: 219.00, specs: [{ label: 'Tracking', value: '6DoF Optical' }, { label: 'Battery', value: '40h Rechargeable' }] },
        { title: 'Apex Stealth Battle Desk with Integrated Motorized Rise (160cm)', price: 499.00, oldPrice: 629.00, specs: [{ label: 'Top', value: 'Full Desk Mousepad' }, { label: 'Motors', value: 'Dual Smooth Lift' }] },
      ],
      monitors: [
        { title: 'Titan 32" 4K Mini-LED Gaming Monitor · 165Hz HDR1400 (1152 Zones)', price: 749.00, oldPrice: 949.00, specs: [{ label: 'Zones', value: '1,152 Local Dimming' }, { label: 'Brightness', value: '1400 nits Peak' }] },
        { title: 'Zenith 34" Curved WQHD 175Hz OLED Gaming Monitor (3440x1440)', price: 689.99, oldPrice: 879.00, specs: [{ label: 'Curve', value: '1800R' }, { label: 'Panel', value: 'QD-OLED 0.03ms' }] },
        { title: 'OmniView 15.6" 4K OLED Portable Monitor with Touch & Battery', price: 329.50, oldPrice: 429.00, specs: [{ label: 'Battery', value: '10,000mAh Built-In' }, { label: 'Weight', value: '650 grams' }] },
        { title: 'AeroVision 27" QHD 300Hz Fast-IPS Esports Tournament Screen', price: 419.00, oldPrice: 529.00, specs: [{ label: 'Refresh', value: '300Hz' }, { label: 'Response', value: '0.5ms GtG' }] },
      ],
      keyboards: [
        { title: 'Ghost Transparent 65% Wireless Mechanical Keyboard (RGB Acrylic)', price: 98.50, oldPrice: 139.00, specs: [{ label: 'Chassis', value: 'Polished Acrylic' }, { label: 'Switches', value: 'Crystal Linear 45g' }] },
        { title: 'Vanguard 100% Full-Size Aluminum Mechanical Keyboard with Macro Keys', price: 164.99, oldPrice: 219.00, specs: [{ label: 'Layout', value: 'Full 104-Key' }, { label: 'Plate', value: 'Brass Weighted' }] },
        { title: 'AeroType Ultra-Thin Low-Profile Wireless Keyboard (Bluetooth/2.4G)', price: 119.00, oldPrice: 159.00, specs: [{ label: 'Thickness', value: '14mm Profile' }, { label: 'Keycaps', value: 'Low Profile PBT' }] },
        { title: 'CyberBlade 60 Hall-Effect Rapid Trigger Tournament Edition', price: 139.95, oldPrice: 179.00, specs: [{ label: 'Latency', value: '0.125ms' }, { label: 'Actuation', value: '0.1mm - 4.0mm' }] },
      ],
      mice: [
        { title: 'Apex Viper 8000Hz Ultra-Low Latency Esports Mouse (42g)', price: 94.99, oldPrice: 129.00, specs: [{ label: 'Weight', value: '42g' }, { label: 'Polling', value: '8000Hz Hyper-Speed' }] },
        { title: 'Hydra 12-Button MMO Tactical Wireless Mouse (PixArt 3395)', price: 79.50, oldPrice: 109.00, specs: [{ label: 'Side Grid', value: '12 Thumb Keys' }, { label: 'DPI', value: '26,000 DPI' }] },
        { title: 'Nova Carbon Ergo Productivity Mouse with Magnetic Infinite Wheel', price: 89.00, oldPrice: 119.00, specs: [{ label: 'Wheel', value: 'MagSpeed Free-Spin' }, { label: 'Multi-Device', value: '3 Devices' }] },
        { title: 'Honeycomb Ultralight 38g Magnesium Alloy Wireless Mouse', price: 124.00, oldPrice: 169.00, specs: [{ label: 'Chassis', value: 'Magnesium Die-Cast' }, { label: 'Battery', value: '90 Hours' }] },
      ],
      electronics: [
        { title: 'AeroRing Smart Health & Sleep Tracker Titanium Ring (Waterproof)', price: 198.00, oldPrice: 269.00, specs: [{ label: 'Sensors', value: 'Heart, HRV, SpO2, Temp' }, { label: 'Battery', value: '7 Days' }] },
        { title: 'Apex Sonic Pro Studio Microphone with USB-C & XLR Outputs', price: 129.99, oldPrice: 179.00, specs: [{ label: 'Capsule', value: '25mm Gold Condenser' }, { label: 'Bitrate', value: '24-bit / 96kHz' }] },
        { title: 'OmniBeam 4K Ultra Short Throw Laser Home Cinema Projector', price: 1899.00, oldPrice: 2399.00, specs: [{ label: 'Throw', value: '100" at 18cm distance' }, { label: 'Brightness', value: '3,000 ANSI Lumens' }] },
      ],
      fashion: [
        { title: 'CyberTech Tactical Modular Cargo Pants (Water-Resistant Cordura)', price: 89.50, oldPrice: 129.00, specs: [{ label: 'Material', value: 'Cordura 500D' }, { label: 'Pockets', value: '10 Functional Pockets' }] },
        { title: 'AeroChron Titanium Automatic Mechanical Watch with Sapphire Glass', price: 389.00, oldPrice: 520.00, specs: [{ label: 'Movement', value: 'Miyota 9015 28,800 vph' }, { label: 'Glass', value: 'AR Sapphire' }] },
        { title: 'Carbon Matrix Urban Anti-Theft Waterproof Backpack 25L', price: 119.00, oldPrice: 159.00, specs: [{ label: 'Shell', value: 'Molded Carbon Fiber' }, { label: 'Compartment', value: '16" Laptop Padded' }] },
      ],
      home: [
        { title: 'AeroPure HEPA 14 Smart Plasma Ion Air Purifier (700 sq.ft)', price: 219.00, oldPrice: 289.00, specs: [{ label: 'Filtration', value: '99.995% Particles' }, { label: 'CADR', value: '450 m³/h' }] },
        { title: 'Sculptural Minimalist Magnetic Levitating Moon Lamp (Warm/Cool)', price: 68.99, oldPrice: 95.00, specs: [{ label: 'Levitation', value: 'Magnetic 15mm Float' }, { label: 'Lighting', value: 'Touch 3-Tone' }] },
      ],
      food: [
        { title: 'Hokkaido Tonkotsu Artisan Ramen Box (8 Gourmet Bowls with Broth)', price: 39.50, oldPrice: 52.00, specs: [{ label: 'Servings', value: '8 Complete Bowls' }, { label: 'Noodles', value: 'Sun-Dried Craft Wheat' }] },
        { title: 'Swiss Dark Cacao & Gold Leaf Truffles Gift Box (24 Pieces)', price: 28.95, oldPrice: 38.00, specs: [{ label: 'Origin', value: 'Single-Estate Criollo Cacao' }, { label: 'Pieces', value: '24 Artisan Truffles' }] },
        { title: 'Uji Ceremonial Single-Estate Stone Ground Matcha Can 100g', price: 34.00, oldPrice: 45.00, specs: [{ label: 'Harvest', value: 'First Spring Flush' }, { label: 'Net Weight', value: '100g Tin' }] },
        { title: 'Black Truffle & Sea Salt Kettle Cooked Potato Crisps (6 Canisters)', price: 22.50, oldPrice: 29.99, specs: [{ label: 'Ingredients', value: 'Real Black Summer Truffle' }, { label: 'Pack', value: '6 x 150g' }] },
        { title: 'Organic Mountain Raw Wildflower Honeycomb Jar (500g Glass)', price: 19.99, oldPrice: 26.00, specs: [{ label: 'Raw Honey', value: '100% Unpasteurized Comb' }, { label: 'Weight', value: '500g' }] },
        { title: 'Belgian Speculoos Crunchy Biscuit Butter Spread (Pack of 2)', price: 14.80, oldPrice: 18.50, specs: [{ label: 'Texture', value: 'Caramelized Crunchy Bits' }, { label: 'Net Weight', value: '2 x 400g' }] },
      ]
    };

    // Inject unique items for each district
    expandedDistricts.forEach((dist) => {
      const distInfo = DISTRICTS.find((d) => d.id === dist)!;
      const customItems = uniqueDistrictNames[dist] || [];

      customItems.forEach((cItem, i) => {
        const numId = 160000 + list.length;
        const discount = Math.round(((cItem.oldPrice - cItem.price) / cItem.oldPrice) * 100);

        list.push({
          id: `ac-${dist}-item-${i + 1}`,
          sku: `AC-${numId}`,
          name: cItem.title,
          district: dist,
          districtName: distInfo.name,
          price: cItem.price,
          oldPrice: cItem.oldPrice,
          discount: discount,
          rating: Math.round((4.3 + (i % 6) * 0.1) * 10) / 10,
          reviewCount: 380 + (i * 240),
          seller: `${distInfo.name} Verified Merchant #${i + 2}`,
          stock: 25 + ((i * 37) % 180),
          description: `Certified authentic ${cItem.title} stored in Amazon City climate-controlled automated fulfillment depots.`,
          features: ['Amazon City Verified Genuine', 'Free Hyperloop Delivery', '30-Day Hassle-Free Returns'],
          imageUrl: dist === 'food' && i === 0 ? FOOD_FEATURE_IMAGE : '',
          imageFallbackGradient: distInfo.accentBg,
          badge: i === 0 ? 'Amazon’s Choice' : i === 1 ? '#1 Best Seller' : i % 3 === 0 ? 'Flash Deal' : undefined,
          isFlashDeal: i % 3 === 0,
          specifications: cItem.specs,
          reviews: SAMPLE_REVIEWS,
          tags: [distInfo.name, 'Prime', 'In Stock'],
          districtBuildingIcon: distInfo.icon,
          coupon: i % 2 === 0 ? `Save $${Math.max(2, Math.round(cItem.price * 0.08))} with coupon` : undefined,
          isPrime: true,
          deliveryDate: 'Tomorrow, by 11 AM',
          boughtPastMonth: 600 + (i * 320),
          amazonChoice: i === 0,
          bestSellerCategory: i === 1 ? distInfo.name : undefined,
        });
      });
    });

    this.inMemoryCatalog = list;
  }

  // Get total supported catalog number string
  public getTotalCountString(): string {
    return '100,000,000+';
  }

  // Find product by ID or SKU
  public getProductById(idOrSku: string): Product | undefined {
    return this.inMemoryCatalog.find((p) => p.id === idOrSku || p.sku.toLowerCase() === idOrSku.toLowerCase());
  }

  // Search & Filter Query
  public queryProducts(options: {
    query?: string;
    district?: CityDistrict;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
    flashDealsOnly?: boolean;
    inStockOnly?: boolean;
    sortBy?: 'recommended' | 'price-asc' | 'price-desc' | 'rating' | 'discount' | 'newest';
    page?: number;
    limit?: number;
  }): {
    products: Product[];
    totalMatched: number;
    virtualEstimatedTotal: number;
    page: number;
    totalPages: number;
  } {
    const {
      query = '',
      district = 'all',
      minPrice,
      maxPrice,
      minRating,
      flashDealsOnly,
      inStockOnly,
      sortBy = 'recommended',
      page = 1,
      limit = 16,
    } = options;

    let filtered = [...this.inMemoryCatalog];

    // District filter
    if (district && district !== 'all') {
      filtered = filtered.filter((p) => p.district === district);
    }

    // Query text search
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.districtName.toLowerCase().includes(q) ||
          p.seller.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.specifications.some((s) => s.value.toLowerCase().includes(q) || s.label.toLowerCase().includes(q))
      );
    }

    // Flash deals only
    if (flashDealsOnly) {
      filtered = filtered.filter((p) => p.isFlashDeal || p.discount >= 25);
    }

    // In stock only
    if (inStockOnly) {
      filtered = filtered.filter((p) => p.stock > 0);
    }

    // Price filters
    if (minPrice !== undefined && minPrice > 0) {
      filtered = filtered.filter((p) => p.price >= minPrice);
    }
    if (maxPrice !== undefined && maxPrice > 0) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    // Rating filter
    if (minRating !== undefined && minRating > 0) {
      filtered = filtered.filter((p) => p.rating >= minRating);
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      case 'newest':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'recommended':
      default:
        filtered.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0) || b.rating - a.rating);
        break;
    }

    const totalMatched = filtered.length;
    let virtualScale = this.totalVirtualCount;
    if (district !== 'all') {
      const dInfo = DISTRICTS.find((d) => d.id === district);
      if (dInfo) virtualScale = dInfo.productCountNum;
    }

    const startIndex = (page - 1) * limit;
    const paginatedItems = filtered.slice(startIndex, startIndex + limit);
    const totalPages = Math.max(1, Math.ceil(totalMatched / limit));

    return {
      products: paginatedItems,
      totalMatched,
      virtualEstimatedTotal: virtualScale,
      page,
      totalPages,
    };
  }

  // Flash deals grabber
  public getFlashDeals(limit: number = 8): Product[] {
    return this.inMemoryCatalog
      .filter((p) => p.isFlashDeal || p.discount >= 20)
      .slice(0, limit);
  }

  // Trending items grabber
  public getTrending(limit: number = 8): Product[] {
    return this.inMemoryCatalog
      .filter((p) => p.rating >= 4.8)
      .slice(0, limit);
  }

  // Inject a new seller product dynamically into the active catalog
  public addSellerProduct(newProduct: Product): void {
    this.inMemoryCatalog.unshift(newProduct);
  }
}

export const productCatalog = new ProductCatalogEngine();
