import React from 'react';
import { GlossaryTerm } from '../types/glossary';

interface GlossaryCardProps {
  term: GlossaryTerm;
}

export default function GlossaryCard({ term }: GlossaryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-purple-600 mb-2">{term.term}</h3>
      <div className="mb-3">
        <span className="inline-block bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded">
          {term.category}
        </span>
      </div>
      <p className="text-gray-700 mb-4">{term.definition}</p>
      <div className="bg-gray-50 p-3 rounded-lg">
        <p className="text-gray-600 italic">"{term.example}"</p>
      </div>
    </div>
  );
}