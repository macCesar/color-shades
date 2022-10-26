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
        'kingfisher-daisy': '#38069a',
        'olive-drab': '#5cb22c',
        primary: {
          '50': '#f4f6f7',
          '100': '#e3e7ea',
          '200': '#cad2d7',
          '300': '#a6b3ba',
          '400': '#7a8b96',
          '500': '#5f707b',
          '600': '#53606b',
          '700': '#464f58',
          '800': '#3e444c',
          '900': '#373c42',
          default: '#53606b'
        },
        wedgewood: {
          '50': '#f2f9f9',
          '100': '#ddeff0',
          '200': '#bfe0e2',
          '300': '#92cace',
          '400': '#5faab1',
          '500': '#438e96',
          '600': '#3b757f',
          '700': '#356169',
          '800': '#325158',
          '900': '#2d464c',
          default: '#438e96'
        },
        'mountain-meadow': {
          '50': '#ecfdf3',
          '100': '#d1fae1',
          '200': '#a7f3c9',
          '300': '#6ee7ac',
          '400': '#34d38b',
          '500': '#0fa968',
          '600': '#05965c',
          '700': '#04784c',
          '800': '#065f3e',
          '900': '#064e34',
          default: '#0fa968'
        },
        'cerise-red': {
          '50': '#fef2f4',
          '100': '#fde6e9',
          '200': '#fbd0d9',
          '300': '#f7aab9',
          '400': '#f27a93',
          '500': '#e63f66',
          '600': '#d42a5b',
          '700': '#b21e4b',
          '800': '#951c45',
          '900': '#801b40',
          default: '#e63f66'
        },
        mulberry: {
          '50': '#fbf4f9',
          '100': '#f9eaf6',
          '200': '#f4d6ec',
          '300': '#ecb5dc',
          '400': '#df87c4',
          '500': '#d163ab',
          '600': '#ba418b',
          '700': '#a33375',
          '800': '#872d60',
          '900': '#722952',
          default: '#ba418b'
        },
        'cornflower-blue': {
          '50': '#eff5fe',
          '100': '#e2ebfd',
          '200': '#cbd9fa',
          '300': '#abc0f6',
          '400': '#899ef0',
          '500': '#7281e8',
          '600': '#5158da',
          '700': '#4245c0',
          '800': '#383c9b',
          '900': '#343a7b',
          default: '#7281e8'
        }
      }
    },
    Label: { apply: 'text-(#53606b)' }
  }
}
