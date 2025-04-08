import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BoxEducation from "./BoxEducation";

interface Education {
    title: string;
    description: string;
    from: string;
    to: string;
    imagePath: string;
}

function Education({ educations }: { educations: Education[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (openIndex !== null && contentRefs.current[openIndex]) {
            // Calcular la altura del header (ajusta este valor según tu diseño)
            const headerHeight = 80; // Ejemplo: 80px, ajusta según tu header real

            // Obtener la posición del elemento
            const element = contentRefs.current[openIndex];
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                
                // Desplazar con un offset para el header
                window.scrollTo({
                    top: elementPosition - headerHeight - 20, // 20px adicionales de padding
                    behavior: 'smooth'
                });
            }
        }
    }, [openIndex]);

    return (
        <div className="container mx-auto py-12">
            {educations.map((edu, index) => (
                <div key={index} className="mb-6">
                    {/* Botón de acordeón */}
                    <motion.button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full text-left p-4 bg-[#1c1e23] text-white rounded-lg shadow-md flex justify-between items-center"
                        aria-expanded={openIndex === index}
                        role="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>{edu.title}</span>
                        <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
                    </motion.button>

                    {/* Contenido expandible */}
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4"
                                ref={(el) => (contentRefs.current[index] = el)}
                            >
                                <BoxEducation {...edu} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default Education;