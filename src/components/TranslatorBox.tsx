import React, { useState } from 'react';
import { ArrowRightLeft, Copy } from 'lucide-react';
import { Generation, translateText } from '../utils/translations';

type TranslationDirection = {
  from: Generation;
  to: Generation;
};

export default function TranslatorBox() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [direction, setDirection] = useState<TranslationDirection>({
    from: 'genz',
    to: 'genx'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generations: { value: Generation; label: string }[] = [
    { value: 'genz', label: 'Gen Z' },
    { value: 'gena', label: 'Gen Alpha' },
    { value: 'millennial', label: 'Millennial' },
    { value: 'genx', label: 'Gen X' },
    { value: 'boomer', label: 'Boomer' }
  ];

  const handleTranslate = async () => {
    if (!input.trim()) {
      setOutput('');
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const translation = await translateText(input, direction.from, direction.to);
      setOutput(translation || getDefaultMessage());
    } catch (error) {
      console.error('Translation error:', error);
      setError('Translation failed. Please try again.');
      setOutput('');
    } finally {
      setIsLoading(false);
    }
  };

  const getDefaultMessage = () => {
    return `No translation found from ${getGenerationLabel(direction.from)} to ${getGenerationLabel(direction.to)}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const toggleDirection = () => {
    setDirection(prev => ({
      from: prev.to,
      to: prev.from
    }));
    setInput('');
    setOutput('');
    setError(null);
  };

  const getGenerationLabel = (gen: Generation): string => {
    const found = generations.find(g => g.value === gen);
    return found ? found.label : gen;
  };

  const handleFromChange = (newFrom: Generation) => {
    setDirection(prev => {
      const newTo = newFrom === prev.to
        ? generations.find(g => g.value !== newFrom)?.value || prev.to
        : prev.to;
      return { from: newFrom, to: newTo };
    });
    setInput('');
    setOutput('');
    setError(null);
  };

  const handleToChange = (newTo: Generation) => {
    setDirection(prev => ({ ...prev, to: newTo }));
    setInput('');
    setOutput('');
    setError(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select
              value={direction.from}
              onChange={(e) => handleFromChange(e.target.value as Generation)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {generations.map(gen => (
                <option key={gen.value} value={gen.value}>
                  {gen.label}
                </option>
              ))}
            </select>
            <span className="text-gray-500">to</span>
            <select
              value={direction.to}
              onChange={(e) => handleToChange(e.target.value as Generation)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {generations
                .filter(gen => gen.value !== direction.from)
                .map(gen => (
                  <option key={gen.value} value={gen.value}>
                    {gen.label}
                  </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={toggleDirection}
          className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
        >
          <ArrowRightLeft size={20} />
          Swap
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {getGenerationLabel(direction.from)} Text
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder={`Enter ${getGenerationLabel(direction.from)} text to translate...`}
          />
        </div>

        <button
          onClick={handleTranslate}
          disabled={isLoading}
          className={`w-full py-3 ${
            isLoading ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'
          } text-white rounded-lg transition-colors`}
        >
          {isLoading ? 'Translating...' : 'Translate'}
        </button>

        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {getGenerationLabel(direction.to)} Translation
            </label>
            {output && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700"
              >
                <Copy size={16} />
                Copy
              </button>
            )}
          </div>
          <div className="w-full min-h-32 p-3 bg-gray-50 border border-gray-300 rounded-lg">
            {output || 'Translation will appear here...'}
          </div>
        </div>
      </div>
    </div>
  );
}