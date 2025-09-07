import React, { useState, useEffect } from 'react';
import { Search, Home, ArrowLeft, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const [encryptedText, setEncryptedText] = useState('');
    const [isDecrypting, setIsDecrypting] = useState(false);

    const cryptoSymbols = ['∀', '∃', '∈', '∉', '⊕', '⊗', '⊥', '⊤', 'Σ', 'Π', '∧', '∨'];
    const targetText = "404";

    useEffect(() => {
        // Generate initial encrypted text - one symbol for each character in "404"
        const generateEncryptedText = () => {
            return targetText.split('').map(() =>
                cryptoSymbols[Math.floor(Math.random() * cryptoSymbols.length)]
            ).join('');
        };

        setEncryptedText(generateEncryptedText());

        // Start decryption animation
        const timer = setTimeout(() => {
            setIsDecrypting(true);
            let currentIndex = 0;

            const decryptInterval = setInterval(() => {
                setEncryptedText(prev => {
                    const chars = prev.split('');
                    if (currentIndex < targetText.length) {
                        chars[currentIndex] = targetText[currentIndex];
                        currentIndex++;
                    }

                    if (currentIndex >= targetText.length) {
                        clearInterval(decryptInterval);
                        setIsDecrypting(false);
                    }

                    return chars.join('');
                });
            }, 300);

            return () => clearInterval(decryptInterval);
        }, 800);

        return () => clearTimeout(timer);
    }, []);


    const navigate = useNavigate();

    const handleRedirectHome = () =>{
        navigate('/');
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-8">
            <div className="text-center max-w-lg mx-auto">

                {/* Static 404 with professional styling */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <div className="text-8xl font-bold text-gray-800 mb-2 font-mono tracking-wide">
                            404
                        </div>
                    </div>
                </div>

                {/* Clean error message */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        Page Not Found
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        The page you're looking for doesn't exist or has been moved.
                        Please check the URL or navigate back to our homepage.
                    </p>

                    {/* Professional action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button onClick={handleRedirectHome} className="cursor-pointer flex items-center justify-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 text-sm font-medium">
                            <Home className="w-4 h-4 mr-2" />
                            Return Home
                        </button>
                    </div>
                </div>

                {/* Minimal footer info */}
                <div className="text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <p>Error 404 | If you believe this is an error, please contact support</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;