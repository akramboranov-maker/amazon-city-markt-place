import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, CityDistrict } from '../types';
import { productCatalog } from '../data/productEngine';

interface ShopContextType {
  cart: CartItem[];
  favorites: string[];
  orders: Order[];
  activeDistrict: CityDistrict;
  searchQuery: string;
  selectedProduct: Product | null;
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isMapOpen: boolean;
  isAiAssistantOpen: boolean;
  isSellerDashboardOpen: boolean;
  isProfileOpen: boolean;
  isOrderTrackerOpen: boolean;
  activeOrderForTracking: Order | null;
  deliveryLocation: string;
  notifications: { id: string; title: string; message: string; time: string; read: boolean }[];
  cartCount: number;
  cartSubtotal: number;
  cartDiscount: number;
  cartTotal: number;

  // Actions
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  placeOrder: (shippingDetails: {
    fullName: string;
    district: string;
    street: string;
    phone: string;
    deliverySpeed: string;
  }) => Order;
  setActiveDistrict: (district: CityDistrict) => void;
  setSearchQuery: (query: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  setIsCartOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsMapOpen: (open: boolean) => void;
  setIsAiAssistantOpen: (open: boolean) => void;
  setIsSellerDashboardOpen: (open: boolean) => void;
  setIsProfileOpen: (open: boolean) => void;
  setIsOrderTrackerOpen: (open: boolean) => void;
  openOrderTracking: (order?: Order) => void;
  setDeliveryLocation: (loc: string) => void;
  markNotificationRead: (id: string) => void;
  addNewSellerProduct: (product: Product) => void;
  buyNow: (product: Product) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ac_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ac_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('ac_orders');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Seed an initial demo order so tracking works immediately
    const demoProduct = productCatalog.getProductById('ac-phones-1');
    if (demoProduct) {
      return [
        {
          id: 'ORD-88421',
          date: 'Today, 2:15 PM',
          items: [{ product: demoProduct, quantity: 1 }],
          total: demoProduct.price,
          status: 'in_transit',
          shippingAddress: {
            fullName: 'Alex Mercer',
            district: 'District 4 · Cyber Bay',
            street: '742 Hyperloop Boulevard, Penthouse 42',
            phone: '+1 (555) 019-4820',
            deliverySpeed: 'Hyperloop Drone Express (Under 30 mins)',
          },
          trackingCode: 'AC-DRONE-98214',
          estimatedArrival: 'Estimated in 18 minutes',
        },
      ];
    }
    return [];
  });

  const [activeDistrict, setActiveDistrict] = useState<CityDistrict>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState<boolean>(false);
  const [isSellerDashboardOpen, setIsSellerDashboardOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState<boolean>(false);
  const [activeOrderForTracking, setActiveOrderForTracking] = useState<Order | null>(null);
  const [deliveryLocation, setDeliveryLocation] = useState<string>('District 7 · Neo Tokyo Skyway');

  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Hyperloop Express Delivery Dispatched',
      message: 'Drone Unit #42 is en route to District 7 with Order #ORD-88421.',
      time: '12m ago',
      read: false,
    },
    {
      id: 'notif-2',
      title: 'Flash Deal Alert: Drinks City',
      message: 'Vortex Quantum Cola Zero is now 24% off for the next 2 hours.',
      time: '45m ago',
      read: false,
    },
    {
      id: 'notif-3',
      title: 'Welcome to Amazon City!',
      message: 'Explore over 100,000,000 products across 15 specialized metropolis districts.',
      time: '2h ago',
      read: true,
    },
  ]);

  // Persist cart & favs
  useEffect(() => {
    try {
      localStorage.setItem('ac_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('ac_favs', JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('ac_orders', JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const buyNow = (product: Product) => {
    addToCart(product, 1);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  const placeOrder = (shippingDetails: {
    fullName: string;
    district: string;
    street: string;
    phone: string;
    deliverySpeed: string;
  }): Order => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: 'Just now',
      items: [...cart],
      total: cartTotal,
      status: 'confirmed',
      shippingAddress: shippingDetails,
      trackingCode: `AC-AIR-${Math.floor(100000 + Math.random() * 900000)}`,
      estimatedArrival: 'Estimated in 24 minutes via Hyperloop Drone',
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setIsCheckoutOpen(false);
    setActiveOrderForTracking(newOrder);
    setIsOrderTrackerOpen(true);

    // Add alert notification
    setNotifications((prev) => [
      {
        id: `notif-${Date.now()}`,
        title: `Order ${newOrder.id} Placed Successfully`,
        message: `Your items have been allocated and routed for automated dispatch.`,
        time: 'Just now',
        read: false,
      },
      ...prev,
    ]);

    return newOrder;
  };

  const openOrderTracking = (order?: Order) => {
    if (order) {
      setActiveOrderForTracking(order);
    } else if (orders.length > 0) {
      setActiveOrderForTracking(orders[0]);
    }
    setIsOrderTrackerOpen(true);
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const addNewSellerProduct = (newProduct: Product) => {
    productCatalog.addSellerProduct(newProduct);
    setNotifications((prev) => [
      {
        id: `notif-sell-${Date.now()}`,
        title: `New Product Listed: ${newProduct.name}`,
        message: `Successfully published to ${newProduct.districtName} catalog.`,
        time: 'Just now',
        read: false,
      },
      ...prev,
    ]);
  };

  // Cart calculations
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartSavings = cart.reduce(
    (acc, item) =>
      acc + (item.product.oldPrice > item.product.price ? (item.product.oldPrice - item.product.price) * item.quantity : 0),
    0
  );
  const cartTotal = cartSubtotal; // Free delivery in Amazon City!

  return (
    <ShopContext.Provider
      value={{
        cart,
        favorites,
        orders,
        activeDistrict,
        searchQuery,
        selectedProduct,
        isCartOpen,
        isCheckoutOpen,
        isMapOpen,
        isAiAssistantOpen,
        isSellerDashboardOpen,
        isProfileOpen,
        isOrderTrackerOpen,
        activeOrderForTracking,
        deliveryLocation,
        notifications,
        cartCount,
        cartSubtotal,
        cartDiscount: cartSavings,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleFavorite,
        isFavorite,
        placeOrder,
        setActiveDistrict,
        setSearchQuery,
        setSelectedProduct,
        setIsCartOpen,
        setIsCheckoutOpen,
        setIsMapOpen,
        setIsAiAssistantOpen,
        setIsSellerDashboardOpen,
        setIsProfileOpen,
        setIsOrderTrackerOpen,
        openOrderTracking,
        setDeliveryLocation,
        markNotificationRead,
        addNewSellerProduct,
        buyNow,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
