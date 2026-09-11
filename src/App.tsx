import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ShopByRoom } from './components/ShopByRoom';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { CollectionBanner } from './components/CollectionBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { ConsultationModal } from './components/ConsultationModal';
import { StoryModal } from './components/StoryModal';
import { SearchModal } from './components/SearchModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { BackToTop } from './components/BackToTop';

import { PRODUCTS_CATALOG, CRAFTSMANSHIP_FEATURE } from './data/furnitureData';
import { Product, CartItem, ColorSwatch, ConsultationFormData } from './types';
import { CheckCircle2, X, Package, ShieldCheck } from 'lucide-react';

export default function App() {
  // Local storage backed Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('arvena_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Default initial luxury item in cart for immediate demonstration
    return [
      {
        product: CRAFTSMANSHIP_FEATURE,
        quantity: 1,
        selectedColor: CRAFTSMANSHIP_FEATURE.colorSwatches[0],
      },
    ];
  });

  // Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeRoomFilter, setActiveRoomFilter] = useState<string | null>(null);
  const [orderConfirmation, setOrderConfirmation] = useState<{
    id: string;
    total: number;
  } | null>(null);

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('arvena_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const addToast = (type: 'success' | 'info' | 'error', title: string, message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart Operations
  const handleAddToCart = (product: Product, swatch?: ColorSwatch, quantity = 1) => {
    const chosenSwatch = swatch || product.colorSwatches[0] || {
      name: 'Standard',
      hex: '#D7C7B2',
      image: product.image,
    };

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor.name === chosenSwatch.name
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, quantity, selectedColor: chosenSwatch }];
      }
    });

    addToast(
      'success',
      'Added to Shopping Bag',
      `${product.name} (${chosenSwatch.name}) was placed in your bag.`
    );
  };

  const handleUpdateQuantity = (productId: string, colorName: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedColor.name === colorName) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveCartItem = (productId: string, colorName: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedColor.name === colorName)
      )
    );
    addToast('info', 'Item Removed', 'Piece removed from your shopping bag.');
  };

  const handleCheckout = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    const mockOrderId = `ARV-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmation({ id: mockOrderId, total });
    setIsCartOpen(false);
    setCartItems([]);
  };

  // Room Selection Navigation
  const handleSelectRoom = (roomKey: 'living' | 'bedroom' | 'dining' | 'office') => {
    setActiveRoomFilter(roomKey);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSelectProduct = (productOrId: Product | string) => {
    if (typeof productOrId === 'string') {
      const found = PRODUCTS_CATALOG.find((p) => p.id === productOrId);
      if (found) setSelectedProduct(found);
    } else {
      setSelectedProduct(productOrId);
    }
  };

  const handleConsultationSuccess = (data: ConsultationFormData) => {
    addToast(
      'success',
      'Consultation Requested',
      `Our design director will contact you at ${data.email}.`
    );
  };

  return (
    <div className="min-h-screen bg-[#F6F3EE] text-[#24231F] flex flex-col selection:bg-[#3F4B35]/20 selection:text-[#24231F]">
      {/* Header & Navigation */}
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onShopClick={() => {
            const el = document.getElementById('catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onWatchStory={() => setIsStoryOpen(true)}
          onSelectProduct={handleHeroSelectProduct}
        />

        {/* 4-Item Benefits & Trust Bar */}
        <TrustBar />

        {/* Shop By Room Editorial Gallery */}
        <ShopByRoom onSelectRoom={handleSelectRoom} />

        {/* Featured Product Craftsmanship Section */}
        <CraftsmanshipSection
          onViewProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={(prod, swatch) => handleAddToCart(prod, swatch, 1)}
          onLearnProcess={() => setIsStoryOpen(true)}
        />

        {/* Full-width Olive Collection Feature Banner */}
        <CollectionBanner
          onDiscover={() => {
            const found = PRODUCTS_CATALOG.find((p) => p.id === 'merida-lounge');
            if (found) setSelectedProduct(found);
          }}
        />

        {/* Curated Product Catalog Grid with Room & Category Filters */}
        <ProductCatalog
          initialRoomFilter={activeRoomFilter}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={(prod, swatch) => handleAddToCart(prod, swatch, 1)}
        />

        {/* Why Choose Us: 4 Core Pillars */}
        <WhyChooseUs />

        {/* Testimonials with Customer Stories and Star Ratings */}
        <Testimonials
          onViewAllReviews={() => {
            addToast('info', 'Customer Reviews', 'All 4,800+ customer reviews verified by Arvena Heritage.');
          }}
        />

        {/* Newsletter Subscription with Instant 10% Discount Code */}
        <Newsletter />
      </main>

      {/* Multi-column Luxury Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, swatch, qty) => handleAddToCart(prod, swatch, qty)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onSubmitSuccess={handleConsultationSuccess}
      />

      <StoryModal isOpen={isStoryOpen} onClose={() => setIsStoryOpen(false)} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* Order Confirmation Modal */}
      {orderConfirmation && (
        <div
          id="order-confirmation-modal"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setOrderConfirmation(null)}
        >
          <div
            className="w-full max-w-md bg-[#F6F3EE] rounded-3xl p-8 border border-[#E6E1D8] shadow-2xl text-center relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOrderConfirmation(null)}
              className="absolute top-4 right-4 text-[#6E6A61] hover:text-[#24231F] p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 rounded-full bg-[#3F4B35]/15 text-[#3F4B35] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#3F4B35] font-semibold block mb-1">
              ORDER CONFIRMED
            </span>
            <h3 className="font-serif-luxury text-3xl text-[#24231F] mb-2">
              Thank You for Your Order
            </h3>
            <p className="text-xs text-[#6E6A61] mb-6 font-light leading-relaxed">
              Order Reference: <span className="font-mono font-bold text-[#24231F]">{orderConfirmation.id}</span>
              <br />
              Total Amount: <span className="font-semibold text-[#24231F]">${orderConfirmation.total.toLocaleString()}</span>
            </p>
            <div className="bg-[#ECE7DE] p-4 rounded-xl text-left text-xs space-y-2 mb-6 text-[#24231F]">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#3F4B35]" />
                <span>Our logistics concierge will contact you to confirm white-glove delivery date.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3F4B35]" />
                <span>Included: 30-Day in-home trial and lifetime structural frame warranty.</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOrderConfirmation(null)}
              className="w-full bg-[#3F4B35] text-[#F6F3EE] py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#2F3928] transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

      {/* Floating Utilities */}
      <BackToTop />
      <ToastContainer toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
