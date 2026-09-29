export type CityDistrict =
  | 'all'
  | 'drinks'
  | 'toys'
  | 'phones'
  | 'computers'
  | 'gaming'
  | 'monitors'
  | 'keyboards'
  | 'mice'
  | 'electronics'
  | 'fashion'
  | 'home'
  | 'books'
  | 'sports'
  | 'beauty'
  | 'food';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  district: CityDistrict;
  districtName: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  seller: string;
  stock: number;
  description: string;
  features: string[];
  imageUrl: string;
  imageFallbackGradient: string;
  badge?: string;
  isFlashDeal?: boolean;
  specifications: ProductSpecification[];
  reviews: ProductReview[];
  tags: string[];
  districtBuildingIcon: string;
  coupon?: string;
  isPrime?: boolean;
  deliveryDate?: string;
  boughtPastMonth?: number;
  amazonChoice?: boolean;
  bestSellerCategory?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export type OrderStatus =
  | 'confirmed'
  | 'preparing'
  | 'packed'
  | 'shipped'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  shippingAddress: {
    fullName: string;
    district: string;
    street: string;
    phone: string;
    deliverySpeed: string;
  };
  trackingCode: string;
  estimatedArrival: string;
}

export interface DistrictInfo {
  id: CityDistrict;
  name: string;
  slogan: string;
  productCountStr: string;
  productCountNum: number;
  icon: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  mapCoordinates: { x: number; y: number; width: number; height: number };
  popularTags: string[];
}
