import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart or increment quantity if it already exists
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically open cart when item is added
  };

  // Update item quantity (+ or -)
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove single item from cart
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Total quantity count for header badge
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-darkBg text-gray-100 flex flex-col font-sans">
      {/* Top Header */}
      <Header 
        totalItemsCount={totalItemsCount} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <Hero />
        <ProductCatalog onAddToCart={handleAddToCart} />
      </main>

      {/* Slide-out Cart Drawer & WhatsApp Checkout */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Footer */}
      <footer className="bg-cardBg border-t border-gold-500/20 py-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Royal Shine Car Wash & Lounge. All rights reserved.</p>
      </footer>
    </div>
  );
}