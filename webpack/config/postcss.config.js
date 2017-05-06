import simpleVars from 'postcss-simple-vars';
import autoprefixer from 'autoprefixer';

//  TODO - Add postCSS plugins here as we need them
export default [
  simpleVars(),
  autoprefixer({
    browsers: ['last 2 versions'],
  }),
];
