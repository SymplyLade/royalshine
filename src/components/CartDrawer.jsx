// import React, { useState } from 'react';
// import { X, Trash2, Plus, Minus, Send } from 'lucide-react';

// export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, clearCart }) {
//   const [customerName, setCustomerName] = useState("");
//   const [orderNotes, setOrderNotes] = useState("");

//   if (!isOpen) return null;

//   // Calculate total price
//   const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//   // WhatsApp Checkout Handler
//   const handleWhatsAppCheckout = (e) => {
//     e.preventDefault();
//     if (cart.length === 0) return;

//     // Replace with your actual WhatsApp business phone number (with country code, e.g., 234...)
//     const businessWhatsAppNumber = "+2349068178511"; 

//     let message = `*NEW ORDER - ROYAL SHINE LOUNGE*\n\n`;
//     message += `*Customer Name:* ${customerName || "Walk-in Guest"}\n`;
//     if (orderNotes) message += `*Notes/Table:* ${orderNotes}\n\n`;
//     message += `*Order Items:*\n`;

//     cart.forEach((item, index) => {
//       message += `${index + 1}. ${item.name} x ${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}\n`;
//     });

//     message += `\n*Total Amount:* ₦${totalPrice.toLocaleString()}\n`;
//     message += `\nPlease confirm my order. Thank you!`;

//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;

//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
//       <div className="w-full max-w-md bg-cardBg border-l border-gold-500/30 h-full flex flex-col shadow-2xl">
        
//         {/* Drawer Header */}
//         <div className="p-4 border-b border-gold-500/20 flex items-center justify-between">
//           <h2 className="text-xl font-bold text-gold-400">Your Order Cart</h2>
//           <button 
//             onClick={onClose}
//             className="text-gray-400 hover:text-white transition"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Cart Items List */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {cart.length === 0 ? (
//             <div className="text-center py-20 text-gray-500">
//               <p>Your cart is empty.</p>
//               <p className="text-sm mt-1">Add drinks, pepper soup, or snacks to begin!</p>
//             </div>
//           ) : (
//             cart.map((item) => (
//               <div key={item.id} className="bg-darkBg border border-gold-500/20 rounded-lg p-3 flex items-center justify-between">
//                 <div className="flex-1">
//                   <h4 className="font-semibold text-gray-100">{item.name}</h4>
//                   <p className="text-gold-400 text-sm">₦{item.price.toLocaleString()}</p>
//                 </div>

//                 {/* Quantity Controls */}
//                 <div className="flex items-center space-x-2">
//                   <button 
//                     onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
//                     className="p-1 bg-cardBg border border-gold-500/30 rounded text-gray-300 hover:text-gold-400"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="font-bold text-gray-200 w-6 text-center">{item.quantity}</span>
//                   <button 
//                     onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//                     className="p-1 bg-cardBg border border-gold-500/30 rounded text-gray-300 hover:text-gold-400"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                   <button 
//                     onClick={() => onRemoveItem(item.id)}
//                     className="p-1 text-red-500 hover:text-red-400 ml-2"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Checkout Form & Total Footer */}
//         {cart.length > 0 && (
//           <div className="p-4 border-t border-gold-500/20 bg-darkBg space-y-4">
//             <div className="space-y-2">
//               <input 
//                 type="text" 
//                 placeholder="Your Name / Table Number"
//                 value={customerName}
//                 onChange={(e) => setCustomerName(e.target.value)}
//                 className="w-full px-3 py-2 bg-cardBg border border-gold-500/30 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-gold-400"
//                 required
//               />
//               <input 
//                 type="text" 
//                 placeholder="Notes (e.g. Extra spicy pepper soup)"
//                 value={orderNotes}
//                 onChange={(e) => setOrderNotes(e.target.value)}
//                 className="w-full px-3 py-2 bg-cardBg border border-gold-500/30 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-gold-400"
//               />
//             </div>

//             <div className="flex justify-between items-center text-lg font-bold text-gray-100 pt-2">
//               <span>Total:</span>
//               <span className="text-gold-400">₦{totalPrice.toLocaleString()}</span>
//             </div>

//             <button 
//               onClick={handleWhatsAppCheckout}
//               className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition shadow-lg"
//             >
//               <Send className="w-5 h-5" />
//               <span>Checkout via WhatsApp</span>
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }









import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, clearCart }) {
  const [customerName, setCustomerName] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  if (!isOpen) return null;

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const businessWhatsAppNumber = "+2349068178511"; 

    let message = `*NEW ORDER - ROYAL SHINE LOUNGE*\n\n`;
    message += `*Customer Name:* ${customerName || "Walk-in Guest"}\n`;
    if (orderNotes) message += `*Notes/Table:* ${orderNotes}\n\n`;
    message += `*Order Items:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x ${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}\n`;
    });

    message += `\n*Total Amount:* ₦${totalPrice.toLocaleString()}\n`;
    message += `\nPlease confirm my order. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    clearCart();
    setCustomerName("");
    setOrderNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-[2px] flex justify-end">
      {/* Click outside to close area */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Reduced width container on the side */}
      <div className="relative w-72 sm:w-80 bg-cardBg border-l border-gold-500/30 h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-3 border-b border-gold-500/20 flex items-center justify-between bg-darkBg/80">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-4 h-4 text-gold-400" />
            <h2 className="text-sm font-bold text-gold-400">Your Order Cart</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition p-1 rounded hover:bg-cardBg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-500 flex flex-col items-center justify-center space-y-1">
              <ShoppingBag className="w-8 h-8 text-gray-600 stroke-1" />
              <p className="text-xs font-medium text-gray-400">Your cart is empty</p>
              <p className="text-[10px] text-gray-500">Select items to build your order.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-darkBg border border-gold-500/20 rounded p-2.5 flex items-center justify-between gap-2 shadow-sm">
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-100 text-xs truncate">{item.name}</h4>
                  <p className="text-gold-400 text-[11px] font-medium">₦{item.price.toLocaleString()}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-1 shrink-0">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="p-1 bg-cardBg border border-gold-500/30 rounded text-gray-300 hover:text-gold-400"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="font-bold text-gray-200 text-xs w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="p-1 bg-cardBg border border-gold-500/30 rounded text-gray-300 hover:text-gold-400"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 text-red-400 hover:text-red-300 ml-0.5"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Form & Total Footer */}
        {cart.length > 0 && (
          <div className="p-3 border-t border-gold-500/20 bg-darkBg space-y-2.5">
            <div className="space-y-1.5">
              <input 
                type="text" 
                placeholder="Your Name / Table / Spot"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-cardBg border border-gold-500/30 rounded text-xs text-gray-200 focus:outline-none focus:border-gold-400"
                required
              />
              <input 
                type="text" 
                placeholder="Notes (e.g. Extra spicy)"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full px-2.5 py-1.5 bg-cardBg border border-gold-500/30 rounded text-xs text-gray-200 focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="flex justify-between items-center text-sm font-bold text-gray-100 pt-1">
              <span>Total:</span>
              <span className="text-gold-400">₦{totalPrice.toLocaleString()}</span>
            </div>

            <button 
              onClick={handleWhatsAppCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-1.5 transition shadow-md text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Checkout via WhatsApp</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}