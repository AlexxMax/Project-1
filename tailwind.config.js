module.exports = {
  theme: {
    container: {
      center: true
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'brown': '#63343A',
        'grey': '#D0C3B1',
        'dark': '#1F1F21'
      },
      fontSize: {
        'h1': '48px',
        'h1-tablet': '42px',
        'h1-mobile': '36px',
        'h2': '36px',
        'h3': '32px',
        'h4': '24px',
        'h5': '22px',
        'h6': '20px',
      },
      fontFamily: {
        
      },
      height: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem'
      },
      width: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem'
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem'
      }
    },
  },
  variants: {
    backgroundAttachment: ['responsive', 'hover', 'focus']
  },
  plugins: []
}