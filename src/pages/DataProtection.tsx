import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, UserX } from 'lucide-react';

export default function DataProtection() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Data Protection - GenZ Translator</title>
        <meta name="description" content="Understand how GenZ Translator protects your data and ensures your privacy. Learn about our security measures and commitment to keeping your translations safe." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Data Protection - GenZ Translator" />
        <meta property="og:description" content="Understand how GenZ Translator protects your data and ensures your privacy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genzdecoded.com/data-protection" />
        <link rel="canonical" href="https://genzdecoded.com/data-protection" />
      </Helmet>
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment to Data Protection</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">We Don't Sell Data</h3>
              <p className="text-gray-600">
                Your data is yours. We will never sell or trade your personal information to third parties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lock className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-gray-600">
                All data is encrypted and stored securely using industry-standard protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <UserX className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Minimal Collection</h3>
              <p className="text-gray-600">
                We only collect what's necessary to provide our translation service.
              </p>
            </div>
          </div>

          <div className="prose prose-purple max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
              <p>
                At GenZDecoded.com, we believe in absolute transparency regarding data handling. 
                We are committed to never selling your personal information or translation data 
                to third parties for marketing or any other purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide accurate translation services</li>
                <li>To improve our translation algorithms</li>
                <li>To maintain and enhance the security of our platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about our data protection practices, please contact us at:
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