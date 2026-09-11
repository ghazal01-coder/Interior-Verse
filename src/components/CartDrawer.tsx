import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, colorName: string, delta: number) => void;
  onRemoveItem: (productId: string, colorName: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountAmount = discountApplied ? subtotal * 0.1 : 0;
  const freeShippingThreshold = 1500;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const estimatedShipping = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 120;
  const finalTotal = subtotal - discountAmount + estimatedShipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'ARVENA10') {
      setDiscountApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try ARVENA10');
    }
  };

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end transition-opacity"
      onClick={onClose}
    >
      <div
        id="cart-drawer-panel"
        className="w-full max-w-md bg-[#F6F3EE] h-full shadow-2xl flex flex-col justify-between overflow-hidden relative animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E6E1D8] flex items-center justify-between bg-[#F9F7F3]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#3F4B35]" />
            <h3 className="font-serif-luxury text-2xl font-normal text-[#24231F]">
              Your Shopping Bag
            </h3>
            <span className="text-xs bg-[#ECE7DE] text-[#6E6A61] px-2 py-0.5 rounded-full font-medium ml-1">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart drawer"
            className="p-2 text-[#6E6A61] hover:text-[#24231F] hover:bg-[#ECE7DE] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#ECE7DE] px-6 py-3 border-b border-[#E6E1D8]">
          <div className="flex items-center justify-between text-xs text-[#24231F] mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#3F4B35]" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-[#3F4B35] font-semibold">
                  You unlocked Complimentary White-Glove Delivery!
                </span>
              ) : (
                <span>
                  Add ${remainingForFreeShipping.toLocaleString()} more for Free White-Glove Delivery
                </span>
              )}
            </span>
          </div>
          <div className="w-full bg-[#E0D9CC] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#3F4B35] h-full transition-all duration-500 rounded-full"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#E6E1D8]">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#ECE7DE] flex items-center justify-center text-[#6E6A61] mb-4">
                <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h4 className="font-serif-luxury text-xl font-normal text-[#24231F] mb-2">
                Your bag is empty
              </h4>
              <p className="text-xs text-[#6E6A61] max-w-xs font-light mb-6">
                Explore our curated living, dining, and bedroom collections to discover enduring furniture pieces.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="bg-[#3F4B35] text-[#F6F3EE] text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded-full hover:bg-[#2F3928] transition-colors"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.product.id}-${item.selectedColor.name}`} className="py-4 flex gap-4">
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#ECE7DE] shrink-0 border border-[#E6E1D8]">
                  <img
                    src={item.selectedColor.image || item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-xs font-semibold text-[#24231F] leading-tight">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#6E6A61] mt-0.5">
                        Finish: {item.selectedColor.name}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id, item.selectedColor.name)}
                      aria-label="Remove item"
                      className="text-[#6E6A61] hover:text-rose-600 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#E6E1D8] bg-[#F9F7F3] rounded-lg">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedColor.name, -1)}
                        className="p-1.5 text-[#6E6A61] hover:text-[#24231F]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-medium text-[#24231F]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedColor.name, 1)}
                        className="p-1.5 text-[#6E6A61] hover:text-[#24231F]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-xs font-semibold text-[#24231F]">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Calculations and Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#E6E1D8] bg-[#F9F7F3]">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Discount code (try ARVENA10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 text-xs bg-[#F6F3EE] border border-[#E6E1D8] px-3 py-2 rounded-lg text-[#24231F] focus:outline-none focus:border-[#3F4B35]"
                />
                <button
                  type="submit"
                  className="bg-[#ECE7DE] hover:bg-[#E0D9CC] text-[#24231F] text-xs font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoError && <p className="text-[11px] text-rose-600 mt-1">{promoError}</p>}
              {discountApplied && (
                <p className="text-[11px] text-[#3F4B35] mt-1 font-medium">
                  ARVENA10 applied — 10% discount!
                </p>
              )}
            </form>

            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-[#6E6A61] mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#24231F] font-medium">${subtotal.toLocaleString()}</span>
              </div>
              {discountApplied && (
                <div className="flex justify-between text-[#3F4B35]">
                  <span>Discount (10%)</span>
                  <span>-${discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>White-Glove Placement</span>
                <span className="text-[#24231F] font-medium">
                  {estimatedShipping === 0 ? 'Complimentary' : `$${estimatedShipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#24231F] pt-2 border-t border-[#E6E1D8]">
                <span>Total</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              onClick={onCheckout}
              className="w-full bg-[#3F4B35] hover:bg-[#2F3928] text-[#F6F3EE] py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#6E6A61] mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3F4B35]" />
              <span>30-Day In-Home Trial & Lifetime Frame Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
