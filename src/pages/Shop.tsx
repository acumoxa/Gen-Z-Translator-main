import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MerchSection from '../components/MerchSection';
import { Sparkles, Gift, Truck } from 'lucide-react';

export default function Shop() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gen Z Translator Merch - Express Your Generational Style</title>
        <meta name="description" content="Shop exclusive Gen Z translator merch! Rock your generational style with our unique collection of t-shirts, hoodies, and accessories featuring popular Gen Z slang." />
        <meta name="keywords" content="Gen Z merch, generational clothing, slang merchandise, Gen Z fashion, translator merchandise" />
        <meta property="og:title" content="Gen Z Translator Merch - Express Your Generational Style" />
        <meta property="og:description" content="Shop exclusive Gen Z translator merch! Rock your generational style with our unique collection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genzdecoded.com/shop" />
        <link rel="canonical" href="https://genzdecoded.com/shop" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Express Your Gen Z Style
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
              Rock the latest Gen Z lingo with our exclusive collection of apparel and accessories. 
              Each piece is designed to be a conversation starter and a statement of cultural fluency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  Exclusive Designs
                </h3>
                <p className="text-gray-600 text-center">
                  Each piece features unique Gen Z-inspired artwork and phrases you won't find anywhere else.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <Gift className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  Perfect Gifts
                </h3>
                <p className="text-gray-600 text-center">
                  Surprise your favorite Gen Z friend or family member with merch that speaks their language.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center justify-center mb-6">
                  <Truck className="w-12 h-12 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  Fast Shipping
                </h3>
                <p className="text-gray-600 text-center">
                  Quick delivery worldwide with tracking on all orders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <MerchSection />
      </main>
      <Footer />
    </div>
  );
}