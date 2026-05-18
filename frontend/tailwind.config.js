/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-slate': '#050505',
        'accent-indigo': '#7C3AED',
        'glow-cyan': '#A855F7',
        
        // Legacy fallbacks aliased to new brand identity to prevent broken pages during transition
        'bg-base': '#050505',
        'bg-surface': '#111111',
        'bg-raised': '#1A1A1A',
        'brand-green': '#7C3AED',
        'brand-green-dim': '#6D28D9',
        'brand-indigo': '#7C3AED',
        'brand-cyan': '#A855F7',
        'brand-white': '#FFFFFF',
        'brand-silver': '#9CA3AF',
        'brand-border': 'rgba(255, 255, 255, 0.06)',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        clash: ['Plus Jakarta Sans', 'sans-serif'],
        general: ['Plus Jakarta Sans', 'sans-serif'],
        space: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Plus Jakarta Sans', 'sans-serif'],
        syne: ['Plus Jakarta Sans', 'sans-serif'],
        dmsans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
