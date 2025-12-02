
import React, { useState } from 'react';
import { CloseIcon } from './icons';

interface RewriterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RewriterModal: React.FC<RewriterModalProps> = ({ isOpen, onClose }) => {
    const [endpoint, setEndpoint] = useState('http://localhost:11434/api/generate');
    const [text, setText] = useState('');
    const [tone, setTone] = useState('Professional');
    const [platform, setPlatform] = useState('LinkedIn');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRewrite = async () => {
        if (!text || !endpoint) {
            setError('Please fill in all fields.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        const prompt = `Rewrite the following text for ${platform} in a ${tone} tone. Keep it concise and engaging. Text: "${text}"`;

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama3', // A common default, user's endpoint might override
                    prompt: prompt,
                    stream: false,
                }),
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            setResult(data.response || 'No response field found in the result.');

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">AI Social Post Rewriter</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon />
                    </button>
                </div>
                <div className="p-6 space-y-4 overflow-y-auto">
                    <div>
                        <label htmlFor="endpoint" className="block text-sm font-medium text-gray-700">Ollama Cloud/Local Endpoint</label>
                        <input
                            type="text"
                            id="endpoint"
                            value={endpoint}
                            onChange={(e) => setEndpoint(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Original Text</label>
                        <textarea
                            id="text"
                            rows={5}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter the post you want to rewrite..."
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="tone" className="block text-sm font-medium text-gray-700">Tone</label>
                            <select
                                id="tone"
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option>Professional</option>
                                <option>Casual</option>
                                <option>Witty</option>
                                <option>Enthusiastic</option>
                                <option>Informative</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="platform" className="block text-sm font-medium text-gray-700">Platform</label>
                            <select
                                id="platform"
                                value={platform}
                                onChange={(e) => setPlatform(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option>LinkedIn</option>
                                <option>Twitter / X</option>
                                <option>Facebook</option>
                                <option>Instagram</option>
                            </select>
                        </div>
                    </div>
                    {error && <div className="text-red-600 bg-red-100 p-3 rounded-md">{error}</div>}
                    {result && (
                        <div>
                             <label className="block text-sm font-medium text-gray-700">Rewritten Post</label>
                            <div className="mt-1 p-3 bg-gray-50 border border-gray-200 rounded-md whitespace-pre-wrap">{result}</div>
                        </div>
                    )}
                </div>
                <div className="flex justify-end p-4 border-t bg-gray-50">
                    <button
                        onClick={handleRewrite}
                        disabled={isLoading}
                        className="bg-[#0052CC] text-white font-bold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Rewriting...
                            </>
                        ) : 'Rewrite Post'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RewriterModal;
