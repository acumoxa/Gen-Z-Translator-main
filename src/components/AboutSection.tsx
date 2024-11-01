import React from 'react';
import { Globe, MessageCircle, Users, BookOpen, Brain, History } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-8 h-8 text-purple-500" />,
    title: "Cross-Generational Communication",
    description: "Breaking down language barriers between Boomers, Gen X, Millennials, Gen Z, and Gen Alpha."
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
    title: "AI-Powered Translations",
    description: "Using advanced machine learning to understand and translate generational slang accurately."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Cultural Understanding",
    description: "More than just words - we help bridge the cultural gaps between generations."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-purple-500" />,
    title: "Living Dictionary",
    description: "Constantly evolving with new slang and expressions from all generations."
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-500" />,
    title: "Language Evolution",
    description: "Tracking and analyzing how language changes across different age groups and time periods."
  },
  {
    icon: <History className="w-8 h-8 text-purple-500" />,
    title: "Historical Context",
    description: "Understanding the origins and evolution of generational expressions and communication styles."
  }
];

export default function AboutSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-purple-500 rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At GenZDecoded, we're passionate about fostering understanding between generations. 
            Our platform combines cutting-edge AI technology with human-curated content to create 
            a bridge between different generational communication styles. We believe that better 
            communication leads to better relationships, whether in families, workplaces, or 
            social settings.
          </p>
        </div>
      </div>
    </div>
  );
}