module.exports = {
  purge: {
    mode: 'all',
    options: {
      legacy: false,
      missing: true,
      widgets: false,
      safelist: [],
      plugins: []
    }
  },
  theme: {
    extend: {
      colors: {
        blue: {
          default: '#0d6efd',
          100: '#cfe2ff',
          200: '#9ec5fe',
          300: '#6ea8fe',
          400: '#3d8bfd',
          500: '#0d6efd',
          600: '#0a58ca',
          700: '#084298',
          800: '#052c65',
          900: '#031633'
        },
        indigo: {
          default: '#6610f2',
          100: '#e0cffc',
          200: '#c29ffa',
          300: '#a370f7',
          400: '#8540f5',
          500: '#6610f2',
          600: '#520dc2',
          700: '#3d0a91',
          800: '#290661',
          900: '#140330'
        },
        purple: {
          default: '#6f42c1',
          100: '#e2d9f3',
          200: '#c5b3e6',
          300: '#a98eda',
          400: '#8c68cd',
          500: '#6f42c1',
          600: '#59359a',
          700: '#432874',
          800: '#2c1a4d',
          900: '#160d27'
        },
        pink: {
          default: '#d63384',
          100: '#f7d6e6',
          200: '#efadce',
          300: '#e685b5',
          400: '#de5c9d',
          500: '#d63384',
          600: '#ab296a',
          700: '#801f4f',
          800: '#561435',
          900: '#2b0a1a'
        },
        red: {
          default: '#dc3545',
          100: '#f8d7da',
          200: '#f1aeb5',
          300: '#ea868f',
          400: '#e35d6a',
          500: '#dc3545',
          600: '#b02a37',
          700: '#842029',
          800: '#58151c',
          900: '#2c0b0e'
        },
        orange: {
          default: '#fd7e14',
          100: '#ffe5d0',
          200: '#fecba1',
          300: '#feb272',
          400: '#fd9843',
          500: '#fd7e14',
          600: '#ca6510',
          700: '#984c0c',
          800: '#653208',
          900: '#331904'
        },
        yellow: {
          default: '#ffc107',
          100: '#fff3cd',
          200: '#ffe69c',
          300: '#ffda6a',
          400: '#ffcd39',
          500: '#ffc107',
          600: '#cc9a06',
          700: '#997404',
          800: '#664d03',
          900: '#332701'
        },
        green: {
          default: '#198754',
          100: '#d1e7dd',
          200: '#a3cfbb',
          300: '#75b798',
          400: '#479f76',
          500: '#198754',
          600: '#146c43',
          700: '#0f5132',
          800: '#0a3622',
          900: '#051b11'
        },
        teal: {
          default: '#20c997',
          100: '#d2f4ea',
          200: '#a6e9d5',
          300: '#79dfc1',
          400: '#4dd4ac',
          500: '#20c997',
          600: '#1aa179',
          700: '#13795b',
          800: '#0d503c',
          900: '#06281e'
        },
        cyan: {
          default: '#0dcaf0',
          100: '#cff4fc',
          200: '#9eeaf9',
          300: '#6edff6',
          400: '#3dd5f3',
          500: '#0dcaf0',
          600: '#0aa2c0',
          700: '#087990',
          800: '#055160',
          900: '#032830'
        },
        gray: {
          default: '#adb5bd',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529'
        },
        primary: '#0d6efd',
        secondary: '#6c757d',
        success: '#198754',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#0dcaf0',
        light: '#f8f9fa',
        dark: '#212529'
      },
      fontSize: { xxs: '.625rem' }
    },
    Label: { apply: 'text-(#53606b)' },
    fontFamily: { mono: 'Courier' }
  }
}
