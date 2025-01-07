/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.jsx'],
  theme: {
    fontFamily: {
      'medium': 'medium',
      'semibold': 'semi-bold',
      'regular': 'regular'
    },
    extend: {
      screens: {
        'mobile': '380px',
      },
      
      backgroundImage: {
        'bg-image': "url('./resources/Background_image.svg')"
      }
    },
  },
  plugins: [],
}

