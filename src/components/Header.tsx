import React, { useState } from 'react';
import { MessageSquareText, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <MessageSquareText size={32} className="text-white" />
            <h1 className="ml-3 text-2xl font-bold text-white">GenZ Translator</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-purple-200 transition-colors">Translate</Link>
            <Link to="/shop" className="text-white hover:text-purple-200 transition-colors">Shop</Link>
            <Link to="/glossary" className="text-white hover:text-purple-200 transition-colors">Glossary</Link>
            <Link to="/about" className="text-white hover:text-purple-200 transition-colors">About</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 grid grid-cols-2 gap-4">
            <Link to="/" className="text-white hover:text-purple-200 transition-colors text-center py-2">
              Translate
            </Link>
            <Link to="/shop" className="text-white hover:text-purple-200 transition-colors text-center py-2">
              Shop
            </Link>
            <Link to="/glossary" className="text-white hover:text-purple-200 transition-colors text-center py-2">
              Glossary
            </Link>
            <Link to="/about" className="text-white hover:text-purple-200 transition-colors text-center py-2">
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}