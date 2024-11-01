import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">
              © 2024 GenZDecoded.com | All rights reserved |{' '}
              <a 
                href="https://webleveling.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Design & Development by Web Leveling
              </a>
            </p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/data-protection" className="text-sm hover:text-white transition-colors">
              Data Protection
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}