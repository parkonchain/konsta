const plugin = require('tailwindcss/plugin');

module.exports = () =>
  plugin(({ addBase }) => {
    addBase({
      ':root': {
        '--twm-device-pixel-ratio': '1',
        '--twm-hairline-color': 'rgba(0, 0, 0, 0.2)',
      },
      '.dark': {
        '--twm-hairline-color': 'rgba(255, 255, 255, 0.15)',
      },
      '@media (min-resolution: 2dppx)': {
        ':root': {
          '--twm-device-pixel-ratio': '2',
        },
      },
      '@media (min-resolution: 3dppx)': {
        ':root': {
          '--twm-device-pixel-ratio': '3',
        },
      },
      '*': {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-text-size-adjust': '100%',
      },
      body: {
        margin: 0,
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        color: '#000',
        '&.dark': {
          color: '#fff',
        },
        '.dark &': {
          color: '#fff',
        },
      },
      '.twm-ios': {
        'font-family':
          '-apple-system, SF Pro Text, SF UI Text, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      },
      '.twm-material': {
        'font-family': 'Roboto, system-ui, Noto, Helvetica, Arial, sans-serif',
      },
    });
  });