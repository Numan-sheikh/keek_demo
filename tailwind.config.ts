// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set Plus Jakarta Sans as the default sans-serif font
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        // You can keep Geist for specific uses if needed, or remove if not used
        // geistSans: ['var(--font-geist-sans)'], // If you want to explicitly use Geist
        // geistMono: ['var(--font-geist-mono)'], // If you want to explicitly use Geist Mono
      },
      // ... your other extend configurations
    },
  },
  plugins: [],
};

export default config;