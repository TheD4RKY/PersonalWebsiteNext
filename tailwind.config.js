module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      scale: {
        '95': '0.95',
        '200': '2',
        '350': '3.5',
        
      },
      height: { 
        '110': '26rem',
        '128': '32rem', 
        '138': '34rem',
        '256': '62rem',
      },
      width: {
        '100': '28rem',
        '128': '32rem',
        '256': '62rem',
        '200': '38rem',
      },
      colors: {
        'fadedblue': '#40445c'
      }
    },
  },
  plugins: [],
}
