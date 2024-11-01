import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface SuggestionFormData {
  term: string;
  meaning: string;
  generation: string;
  context: string;
  email: string;
}

export default function SuggestionForm() {
  const [formData, setFormData] = useState<SuggestionFormData>({
    term: '',
    meaning: '',
    generation: 'genz',
    context: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit suggestion');
      }

      setFormData({
        term: '',
        meaning: '',
        generation: 'genz',
        context: '',
        email: ''
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit suggestion. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="term" className="block text-sm font-medium text-gray-700">
            Slang Term
          </label>
          <input
            type="text"
            id="term"
            value={formData.term}
            onChange={(e) => setFormData({ ...formData, term: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            placeholder="e.g., no cap"
            required
          />
        </div>
        <div>
          <label htmlFor="generation" className="block text-sm font-medium text-gray-700">
            Generation
          </label>
          <select
            id="generation"
            value={formData.generation}
            onChange={(e) => setFormData({ ...formData, generation: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          >
            <option value="genz">Gen Z</option>
            <option value="gena">Gen Alpha</option>
            <option value="millennial">Millennial</option>
            <option value="genx">Gen X</option>
            <option value="boomer">Boomer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="meaning" className="block text-sm font-medium text-gray-700">
          Meaning
        </label>
        <input
          type="text"
          id="meaning"
          value={formData.meaning}
          onChange={(e) => setFormData({ ...formData, meaning: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="What does it mean?"
          required
        />
      </div>

      <div>
        <label htmlFor="context" className="block text-sm font-medium text-gray-700">
          Usage Context/Example
        </label>
        <textarea
          id="context"
          value={formData.context}
          onChange={(e) => setFormData({ ...formData, context: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="How is it used in a sentence?"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Your Email (optional)
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="To receive updates about your submission"
        />
      </div>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          Thank you for your contribution! We'll review your submission.
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
          isSubmitting ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
      >
        <Send className="w-4 h-4 mr-2" />
        {isSubmitting ? 'Submitting...' : 'Submit Translation'}
      </button>
    </form>
  );
}