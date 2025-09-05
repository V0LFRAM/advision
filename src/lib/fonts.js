// lib/fonts.js
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["400"], // Указываем вес 400 (можно добавить другие, например, ['400', '700'])
  subsets: ["latin"], // Подмножества шрифта (latin достаточно для вашего случая)
  display: "swap", // Оптимизация отображения (замена текста на шрифт после загрузки)
});
