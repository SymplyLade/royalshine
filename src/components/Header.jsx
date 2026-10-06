// import React from 'react';
// import { ShoppingCart } from 'lucide-react';

// export default function Header({ totalItemsCount, onOpenCart }) {
//   return (
//     <header className="bg-cardBg border-b border-gold-500/30 sticky top-0 z-40 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Brand / Logo Title */}
//         <div className="flex items-center space-x-3">
//           <div>
//             <h1 className="text-xl font-bold tracking-wider text-gold-400 uppercase">Royal Shine</h1>
//             <p className="text-xs text-gray-400 tracking-widest">Car Wash & Lounge</p>
//           </div>
//         </div>

//         {/* Cart Trigger Button */}
//         <button 
//           onClick={onOpenCart}
//           className="relative bg-gold-500 hover:bg-gold-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 transition shadow-md"
//         >
//           <ShoppingCart className="w-5 h-5" />
//           <span className="hidden sm:inline">Cart</span>
//           {totalItemsCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
//               {totalItemsCount}
//             </span>
//           )}
//         </button>

//       </div>
//     </header>
//   );
// }





import React from 'react';
import { ShoppingCart } from 'lucide-react';
import logo from '../assets/royalshine.jpeg';

export default function Header({ totalItemsCount, onOpenCart }) {
  return (
    <header className="bg-cardBg border-b border-gold-500/30 sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand / Logo Title */}
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Royal Shine Logo" 
            className="w-10 h-10 rounded-full object-cover border border-gold-500/40 shadow-sm"
          />
          <div>
            <h1 className="text-xl font-bold tracking-wider text-gold-400 uppercase">Royal Shine</h1>
            <p className="text-xs text-gray-400 tracking-widest">Car Wash & Lounge</p>
          </div>
        </div>

        {/* Cart Trigger Button */}
        <button 
          onClick={onOpenCart}
          className="relative bg-gold-500 hover:bg-gold-600 text-black font-semibold px-4 py-2 rounded-lg flex items-center space-x-2 transition shadow-md"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Cart</span>
          {totalItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItemsCount}
            </span>
          )}
        </button>

      </div>
    </header>
  );
}