/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        GreyQo: ["Grey Qo", "cursive"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        neon: {
          blue: '#00f3ff',
          purple: '#b537f2',
          cyan: '#00ffff',
          dark: '#0a0a0f',
          darker: '#050507',
        }
      },
      screens: {
        xs: "300px",
        S8: "375px",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f3ff, 0 0 10px #00f3ff' },
          '100%': { boxShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff, 0 0 30px #00f3ff' },
        }
      }
    },
  },
  plugins: [],
};
