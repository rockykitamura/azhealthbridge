export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary palette - warm and trustworthy
        primary: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fececa',
          300: '#fdaba5',
          400: '#fa7971',
          500: '#f14e42',
          600: '#de2f24',
          700: '#ba251b',
          800: '#9a221a',
          900: '#80221c',
          950: '#450d0a',
        },
        // Secondary palette - calming blue
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Sage green accent - health and vitality
        sage: {
          50: '#f6f9f4',
          100: '#e9f2e3',
          200: '#d3e4c8',
          300: '#b0ce9d',
          400: '#87b16e',
          500: '#68954d',
          600: '#51783b',
          700: '#405d30',
          800: '#364b2a',
          900: '#2d3f24',
          950: '#162110',
        },
        // Warm neutral grays
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        display: [
          "Poppins",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Larger base sizes for senior readability
        'xs': ['0.875rem', { lineHeight: '1.5' }],
        'sm': ['0.95rem', { lineHeight: '1.5' }],
        'base': ['1.125rem', { lineHeight: '1.75' }],
        'lg': ['1.25rem', { lineHeight: '1.75' }],
        'xl': ['1.5rem', { lineHeight: '1.75' }],
        '2xl': ['1.875rem', { lineHeight: '2' }],
        '3xl': ['2.25rem', { lineHeight: '2.25' }],
        '4xl': ['3rem', { lineHeight: '1.25' }],
        '5xl': ['3.75rem', { lineHeight: '1.25' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(241, 78, 66, 0.2)',
        'glow-lg': '0 0 40px rgba(241, 78, 66, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-trust': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-health': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      },
    },
  },
  plugins: [],
};