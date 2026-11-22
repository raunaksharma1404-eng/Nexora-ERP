/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101828',
          blue: '#155EEF',
          'blue-hover': '#134ec9',
          'blue-light': '#EFF4FF',
          green: '#12B76A',
          'green-light': '#ECFDF3',
          bg: '#F2F4F7',
          surface: '#FFFFFF',
        },
        enterprise: {
          50: '#F8F9FC',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 24, 40, 0.06), 0 1px 2px 0 rgba(16, 24, 40, 0.04)',
        'card': '0 2px 5px -1px rgba(16, 24, 40, 0.06), 0 4px 6px -1px rgba(16, 24, 40, 0.07)',
        'elevated': '0 12px 24px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)',
      },
      borderRadius: {
        'card': '12px',
      }
    },
  },
  plugins: [],
}
