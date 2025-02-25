import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Education {
    title: string;
    description: string;
    from: string;
    to: string;
    imagePath: string;
}

function BoxEducation({ title, description, from, to, imagePath }: Education) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full rounded-lg shadow-md overflow-hidden"
        >
            {/* Contenedor de la imagen con animación */}
            <motion.div
                className="relative w-full h-48 md:h-64 overflow-hidden"
                whileHover={{ scale: 1.1 }} // Efecto de zoom al hacer hover
                transition={{ duration: 0.3 }} // Duración de la animación
            >
                <Image
                    src={imagePath}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </motion.div>

            {/* Contenido */}
            <div className="relative z-10 p-4 bg-gray-800 text-white">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-gray-300">{description}</p>
                <p className="mt-1 text-sm text-gray-400">{from} - {to || "Actualidad"}</p>
            </div>
        </motion.div>
    );
}

export default BoxEducation;