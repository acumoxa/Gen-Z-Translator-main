import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlossarySearch from '../components/GlossarySearch';
import GlossaryCard from '../components/GlossaryCard';
import MerchSection from '../components/MerchSection';
import { glossaryTerms } from '../data/glossaryTerms';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(glossaryTerms.map(term => term.category))];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gen Z Slang Glossary - Complete Dictionary of Modern Terms</title>
        <meta name="description" content="Comprehensive glossary of Gen Z slang terms, phrases, and expressions. Learn what no cap, bussin, fr fr, and other popular Gen Z terms mean with examples." />
        <meta name="keywords" content="Gen Z glossary, Gen Z dictionary, Gen Z slang meanings, modern slang terms, Gen Z expressions" />
        <meta property="og:title" content="Gen Z Slang Glossary - Complete Dictionary of Modern Terms" />
        <meta property="og:description" content="Comprehensive glossary of Gen Z slang terms, phrases, and expressions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genzdecoded.com/glossary" />
        <link rel="canonical" href="https://genzdecoded.com/glossary" />
      </Helmet>
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Complete Gen Z Slang Dictionary & Glossary
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Your comprehensive guide to understanding modern slang and expressions
            </p>

            <GlossarySearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((term, index) => (
                <GlossaryCard key={index} term={term} />
              ))}
            </div>
          </div>
        </div>

        <MerchSection />
      </main>
      <Footer />
    </div>
  );
}