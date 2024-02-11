/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontWeight: {
      thin: '1',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      colors: {
        'header': '#0B1F75',
        'button': '#0613D6',
        'section': '#004AAD',
        'footer': '#a4a3a3',
      },
      fontFamily: {
        garet: ['var(--font-garet)'],
        garetHeavy: ['var(--font-garetHeavy)'],
        arialBlack: ['var(--font-arialBlack)'],
      },
      lineHeight: {
        'hero': '1.125',
      },
      fontSize: {
        xxs: '0.6rem',
      },
      saturate: {
        125: '1.25',
      }
    },
  },
  plugins: [
  ],
}
