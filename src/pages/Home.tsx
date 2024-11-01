import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import TranslatorBox from '../components/TranslatorBox';
import MerchSection from '../components/MerchSection';
import Footer from '../components/Footer';
import SuggestionForm from '../components/SuggestionForm';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>GenZ Translator - Breaking Down Generational Language Barriers</title>
        <meta name="description" content="Instantly translate between Gen Z, Millennial, Gen X, and Boomer slang. Our AI-powered translator helps bridge the generational communication gap. No cap, fr fr!" />
        <meta name="keywords" content="Gen Z translator, Gen Z slang translator, generational slang, millennial translator, boomer translator" />
        <link rel="canonical" href="https://genzdecoded.com" />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            GenZ Translator: Your Cross-Generational Language Bridge
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Breaking down generational language barriers, no cap fr fr
          </p>

          <TranslatorBox />
        </div>

        <MerchSection />

        <div className="bg-purple-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Help Us Grow Our Dictionary</h2>
            <p className="mt-4 text-lg text-gray-600 text-center mb-8">
              Can't find a translation? Submit new slang terms and their meanings to help others understand your generation's language.
            </p>
            <SuggestionForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;