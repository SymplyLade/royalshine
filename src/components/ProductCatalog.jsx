// import React, { useState } from 'react';
// import { Search, Plus, Utensils, Wine, Beer, Coffee } from 'lucide-react';
// import { menuData } from '../data/menu';

// export default function ProductCatalog({ onAddToCart }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const categories = ["all", "Food & Pepper Soup", "Beers", "Spirits & Wines", "Non-Alcoholic"];

//   // Filter items based on search term and category
//   const filteredItems = menuData.filter(item => {
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <section className="w-full">
//       {/* Search & Category Filter Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        
//         {/* Search Input */}
//         <div className="relative w-full md:w-96">
//           <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
//             <Search className="w-4 h-4" />
//           </span>
//           <input 
//             type="text" 
//             placeholder="Search food, pepper soup, drinks..." 
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 bg-cardBg border border-gold-500/30 rounded-lg focus:outline-none focus:border-gold-400 text-gray-200"
//           />
//         </div>

//         {/* Category Buttons */}
//         <div className="flex flex-wrap gap-2 w-full md:w-auto">
//           {categories.map((cat) => (
//             <button 
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
//                 selectedCategory === cat 
//                   ? 'bg-gold-500 text-black shadow-md' 
//                   : 'bg-cardBg border border-gold-500/30 text-gray-300 hover:border-gold-400'
//               }`}
//             >
//               {cat === "all" ? "All Items" : cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Product Cards Grid */}
//       {filteredItems.length === 0 ? (
//         <div className="text-center py-16 text-gray-500">
//           <p className="text-lg">No items found matching your search.</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredItems.map((item) => (
//             <div 
//               key={item.id} 
//               className="bg-cardBg border border-gold-500/20 rounded-xl p-4 flex flex-col justify-between shadow-md hover:border-gold-400 transition group"
//             >
//               <div>
//                 <div className="flex justify-between items-start mb-2">
//                   <span className="text-xs uppercase tracking-wider bg-darkBg text-gold-400 px-2 py-1 rounded border border-gold-500/20">
//                     {item.category}
//                   </span>
//                   {item.type === 'food' ? (
//                     <Utensils className="w-5 h-5 text-gold-500" />
//                   ) : (
//                     <Wine className="w-5 h-5 text-gray-500" />
//                   )}
//                 </div>
//                 <h3 className="font-bold text-lg text-gray-100 mb-1 group-hover:text-gold-400 transition">
//                   {item.name}
//                 </h3>
//                 <p className="text-gold-400 font-semibold text-xl">
//                   ₦{item.price.toLocaleString()}
//                 </p>
//               </div>

//               <button 
//                 onClick={() => onAddToCart(item)}
//                 className="mt-4 w-full bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-black border border-gold-500/40 font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2 shadow-sm"
//               >
//                 <Plus className="w-4 h-4" /> Add to Order
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }









import React, { useState } from 'react';
import { Search, Plus, Utensils, Wine, Beer, Coffee } from 'lucide-react';
import { menuData } from '../data/menu';

export default function ProductCatalog({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Food & Pepper Soup", "Beers", "Spirits & Wines", "Non-Alcoholic"];

  const filteredItems = menuData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Helper to pick a fitting icon per category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Food & Pepper Soup":
        return <Utensils className="w-8 h-8 text-gold-400" />;
      case "Beers":
        return <Beer className="w-8 h-8 text-gold-400" />;
      case "Spirits & Wines":
        return <Wine className="w-8 h-8 text-gold-400" />;
      default:
        return <Coffee className="w-8 h-8 text-gold-400" />;
    }
  };

  return (
    <section className="w-full">
      {/* Search & Category Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="relative w-full md:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <input 
            type="text" 
            placeholder="Search food, pepper soup, drinks..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-cardBg border border-gold-500/30 rounded-lg focus:outline-none focus:border-gold-400 text-gray-200"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                selectedCategory === cat 
                  ? 'bg-gold-500 text-black shadow-md' 
                  : 'bg-cardBg border border-gold-500/30 text-gray-300 hover:border-gold-400'
              }`}
            >
              {cat === "all" ? "All Items" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">No items found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-cardBg border border-gold-500/20 rounded-xl overflow-hidden flex flex-col justify-between shadow-md hover:border-gold-400 transition group"
            >
              {/* Product photo */}
              <div className="h-44 w-full bg-gradient-to-br from-darkBg via-[#1a1a1a] to-cardBg flex flex-col items-center justify-center relative border-b border-gold-500/10 overflow-hidden">
                <div className="p-3 bg-gold-500/10 rounded-full border border-gold-500/30 shadow-inner">
                  {getCategoryIcon(item.category)}
                </div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(event) => { event.currentTarget.style.display = 'none'; }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none" />
                <span className="absolute top-2 left-2 text-[10px] uppercase tracking-wider bg-black/60 text-gold-400 px-2 py-0.5 rounded border border-gold-500/20">
                  {item.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-base text-gray-100 mb-1 group-hover:text-gold-400 transition line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-gold-400 font-bold text-lg">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>

                <button 
                  onClick={() => onAddToCart(item)}
                  className="mt-4 w-full bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-black border border-gold-500/40 font-semibold py-2 rounded-lg transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4" /> Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
