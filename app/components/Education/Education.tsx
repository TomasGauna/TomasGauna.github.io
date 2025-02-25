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
            // Usar un pequeño retraso para asegurar que la animación haya terminado
            setTimeout(() => {
                contentRefs.current[openIndex]?.scrollIntoView({
                    behavior: "smooth", // Desplazamiento suave
                    block: "start",     // Alinea el elemento en la parte superior de la ventana
                });
            }, 300); // Ajusta este valor según la duración de tu animación
        }
    }, [openIndex]);

    return (
        <div className="container mx-auto px-4 py-12">
            {educations.map((edu, index) => (
                <div key={index} className="mb-6">
                    {/* Botón de acordeón */}
                    <motion.button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full text-left p-4 bg-gray-800 text-white rounded-lg shadow-md flex justify-between items-center"
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
                                ref={(el) => (contentRefs.current[index] = el)} // Asignar la referencia
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