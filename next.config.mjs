/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    eslint: {
        ignoreDuringBuilds: true, // Ignora errores de ESLint durante la compilación
    },
};

export default nextConfig;
