/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#f8fafc',
        accent: '#d97706', /* Cinematic Amber */
        primary: '#111111',
        secondary: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cinematic: ['Outfit', 'sans-serif'], // For headings
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.15), transparent 60%)',
      }
    },
  },
  plugins: [],
}
