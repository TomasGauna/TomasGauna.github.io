import React, { useEffect, useRef, useState } from 'react';

interface SeparatorProps {
    isDark?: boolean;
}

function Separator({ isDark = false }: SeparatorProps) {
    const [progress, setProgress] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setProgress(0);
                    let current = 0;
                    const interval = setInterval(() => {
                        current += 1;
                        setProgress(current);
                        if (current >= 100) clearInterval(interval);
                    }, 20);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex items-center justify-center my-10">
            <div className="w-11/12 sm:w-10/12 flex items-center">

                {/* Línea izquierda */}
                <div className={`flex-grow h-[1px] sm:h-[1px] rounded-full overflow-hidden ${isDark ? 'bg-gray-500' : 'bg-gray-200'}`}>
                    <div
                        className="h-full"
                        style={{
                            width: `${progress}%`,
                            marginLeft: 'auto',
                            background: 'linear-gradient(to left, #2c90f3, transparent)',
                        }}
                    />
                </div>

                {/* Línea derecha */}
                <div className={`flex-grow h-[1px] sm:h-[1px] rounded-full overflow-hidden ${isDark ? 'bg-gray-500' : 'bg-gray-200'}`}>
                    <div
                        className="h-full"
                        style={{
                            width: `${progress}%`,
                            background: 'linear-gradient(to right, #2c90f3, transparent)',
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default Separator;