/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070d',
          900: '#0a0e1a',
          850: '#0d1220',
          800: '#111827',
          700: '#1a2236',
          600: '#25304a',
          500: '#364159',
        },
        accent: {
          DEFAULT: '#22d3ee',
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        signal: {
          DEFAULT: '#34d399',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        warn: {
          DEFAULT: '#fbbf24',
          400: '#fbbf24',
          500: '#f59e0b',
        },
        err: {
          DEFAULT: '#f87171',
          400: '#f87171',
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'flow-dash': 'flowDash 2s linear infinite',
        'blink': 'blink 1.4s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'scan': 'scan 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        flowDash: {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
