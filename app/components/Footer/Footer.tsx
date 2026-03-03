import React, { useState } from 'react';
import Image from 'next/image';

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
        <footer className="relative overflow-hidden">
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <Image
                    src="/foto/fondo-presentacion.jpg"
                    alt="Fondo footer"
                    fill
                    className="object-cover"
                    quality={100}
                    priority={false}
                    sizes="100vw"
                />
            </div>

            {/* Overlay */}
            <div className={`
                absolute inset-0 
                transition-colors duration-300 
                ${isDark
                    ? 'bg-black/60'
                    : 'bg-gradient-to-b from-blue-950/60 to-blue-950/80'
                }
            `} />

            {/* Toast propio */}
            {toast && (
                <div className={`fixed bottom-6 right-4 sm:right-6 z-[9999] px-4 py-2.5 rounded-xl text-sm font-mono shadow-lg max-w-[200px] sm:max-w-xs ${toast.type === 'success'
                        ? isDark ? 'bg-gray-800 text-green-400 border border-gray-700' : 'bg-white text-green-600 border border-gray-200'
                        : isDark ? 'bg-gray-800 text-red-400 border border-gray-700' : 'bg-white text-red-600 border border-gray-200'
                    }`}>
                    {toast.message}
                </div>
            )}

            {/* Contenido del footer */}
            <div className="relative z-10 py-4 backdrop-blur-[1px]">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between max-w-5xl mx-auto px-8 lg:px-12">
                    <p className={`text-sm font-mono text-center drop-shadow-md ${isDark ? 'text-gray-200' : 'text-white'
                        }`}>
                        © {new Date().getFullYear()} {translations.copyright} {translations.tagline}
                    </p>

                    <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 text-sm font-mono transition-all duration-200 group ${isDark ? 'text-gray-200 hover:text-white' : 'text-white/90 hover:text-white'
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="drop-shadow-md group-hover:scale-110 transition-transform"
                        >
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span className="drop-shadow-md">{email}</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;