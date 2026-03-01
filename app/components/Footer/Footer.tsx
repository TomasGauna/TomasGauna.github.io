import React, { useState } from 'react';

interface FooterProps {
    isDark?: boolean;
    translations: {
        tagline: string;
        copyright: string;
        copied: string;
        copyError: string;
    };
}

function Footer({ isDark = false, translations }: FooterProps) {
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const email = 'tomi.gauna08@gmail.com';

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 2000);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            showToast(translations.copied, 'success');
        } catch {
            showToast(translations.copyError, 'error');
        }
    };

    return (
        <footer className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} py-8 relative`}>

            {/* Toast propio */}
            {toast && (
                <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 px-4 py-2.5 rounded-xl text-sm font-mono shadow-lg transition-all duration-300 ${
                    toast.type === 'success'
                        ? isDark ? 'bg-gray-800 text-green-400 border border-gray-700' : 'bg-white text-green-600 border border-gray-200'
                        : isDark ? 'bg-gray-800 text-red-400 border border-gray-700' : 'bg-white text-red-600 border border-gray-200'
                }`}>
                    {toast.message}
                </div>
            )}

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <p className={`text-sm font-mono text-center ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                    © {new Date().getFullYear()} {translations.copyright} {translations.tagline}
                </p>

                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 text-sm font-mono transition-colors duration-200 ${
                        isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    {email}
                </button>
            </div>
        </footer>
    );
}

export default Footer;