import hook from 'css-modules-require-hook';
import sass from 'node-sass';

hook({
  extensions: ['.scss'],
  generateScopedName: '[name]__[local]--[hash:base64:5]',
  preprocessCss: (data, file) => sass.renderSync({ file }).css
});
