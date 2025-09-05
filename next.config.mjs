/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Опционально, для строгого режима
    images: {
    domains: [], // Добавьте домены, если SVG из внешних источников
    loader: 'default', // Использует встроенный лоадер Next.js
    // Если нужно кастомное расположение SVG, можно указать дополнительные параметры
  },
};


export default nextConfig;
