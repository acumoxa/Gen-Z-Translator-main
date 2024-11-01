import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About GenZ Translator - Our Mission to Connect Generations</title>
        <meta name="description" content="Learn how GenZ Translator bridges generational communication gaps using AI technology. Discover our mission to help different generations understand each other better." />
        <meta name="keywords" content="about GenZ translator, generational communication, Gen Z slang explanation, cross-generational understanding" />
        <meta property="og:title" content="About GenZ Translator - Our Mission to Connect Generations" />
        <meta property="og:description" content="Learn how GenZ Translator bridges generational communication gaps using AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genzdecoded.com/about" />
        <link rel="canonical" href="https://genzdecoded.com/about" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            About GenZ Translator: Bridging Generation Gaps
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Welcome to GenZ Translator, where we're revolutionizing cross-generational communication through AI-powered technology. 
            Our platform seamlessly translates between Gen Z, Millennial, Gen X, and Boomer language styles, helping families, 
            colleagues, and friends understand each other better. Whether you're trying to decode "no cap fr fr" or explain 
            what "groovy" means to your grandkids, we've got you covered.
          </p>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}