/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#eef7f0',
          100: '#d8eadc',
          500: '#2d6b45',
          700: '#17432d',
          900: '#0d2b1e',
        },
        coffee: {
          100: '#ead7c1',
          300: '#b8875b',
          500: '#744828',
          700: '#4f2f1b',
          900: '#2d1a10',
        },
        cream: '#fbf6ea',
        oat: '#eee0c8',
        gold: '#c99b4a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(29, 45, 37, 0.12)',
        card: '0 16px 35px rgba(45, 26, 16, 0.09)',
      },
      backgroundImage: {
        'hero-farm':
          "linear-gradient(100deg, rgba(13,43,30,.88), rgba(23,67,45,.68) 48%, rgba(45,26,16,.42)), url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1800&q=85')",
      },
    },
  },
  plugins: [],
};
