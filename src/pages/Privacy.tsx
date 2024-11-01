import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy - GenZ Translator</title>
        <meta name="description" content="Learn how GenZ Translator protects your privacy and handles your data. Our comprehensive privacy policy ensures your information is secure while using our translation services." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Privacy Policy - GenZ Translator" />
        <meta property="og:description" content="Learn how GenZ Translator protects your privacy and handles your data." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genzdecoded.com/privacy" />
        <link rel="canonical" href="https://genzdecoded.com/privacy" />
      </Helmet>
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-purple max-w-none">
            <p className="text-lg mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At GenZDecoded.com, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Text inputs for translation purposes</li>
                <li>Usage data to improve our translation accuracy</li>
                <li>Technical data such as browser type and device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our translation service</li>
                <li>To analyze usage patterns and optimize user experience</li>
                <li>To maintain the security of our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. 
                However, no method of transmission over the internet is 100% secure, and we cannot 
                guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                privacy@genzdecoded.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}