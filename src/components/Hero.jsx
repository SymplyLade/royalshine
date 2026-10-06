import React from 'react';
import { Sparkles, Car, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-cardBg to-darkBg border border-gold-500/20 rounded-2xl p-6 md:p-10 mb-8 text-center relative overflow-hidden shadow-xl">
      <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
        <Sparkles className="w-64 h-64 text-gold-400" />
      </div>

      <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
        <Sparkles className="w-4 h-4" />
        <span>Luxury For Your Car, Comfort For You</span>
      </div>

     <h2 className="text-3xl md:text-5xl font-extrabold text-gray-100 tracking-tight mb-4">
        Welcome to <span className="text-gold-400">Royal Shine</span> Lounge
      </h2>
      
      <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-6">
        Experience premium car care services while you relax with our exquisite selection of chilled drinks, savory pepper soup, and gourmet snacks.
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-300">
        <div className="flex items-center space-x-2 bg-darkBg px-4 py-2 rounded-lg border border-gold-500/20">
          <UtensilsCrossed className="w-4 h-4 text-gold-400" />
          <span>Fresh Catfish & Assorted Pepper Soup</span>
        </div>
        <div className="flex items-center space-x-2 bg-darkBg px-4 py-2 rounded-lg border border-gold-500/20">
          <Car className="w-4 h-4 text-gold-400" />
          <span>Professional Car Wash & Lounge</span>
        </div>
      </div>
    </div>
  );
}