// import { rollup } from 'rollup'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs';
export default {
  entry: 'src/refDecoratorComponent.js',
  format: 'umd',
  moduleName: 'ref-decorator-component',
  plugins: [
    resolve({
      // use "module" field for ES6 module if possible
      module: true, // Default: true

      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true, // Default: false

      // use "main" field or index.js, even if it's not an ES6 module
      // (needs to be converted from CommonJS to ES6
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true, // Default: true

      // some package.json files have a `browser` field which
      // specifies alternative files to load for people bundling
      // for the browser. If that's you, use this option, otherwise
      // pkg.browser will be ignored
      browser: true, // Default: false

      // not all files you want to resolve are .js files
      extensions: ['.js', '.json'], // Default: ['.js']

      // whether to prefer built-in modules (e.g. `fs`, `path`) or
      // local ones with the same names
      preferBuiltins: false, // Default: true

      // Lock the module search in this path (like a chroot). Module defined
      // outside this path will be mark has external
      jail: '/my/jail/path', // Default: '/'

      // If true, inspect resolved files to check that they are
      // ES2015 modules
      modulesOnly: true, // Default: false

      // Any additional options that should be passed through
      // to node-resolve
      customResolveOptions: {
        moduleDirectory: 'js_modules'
      }
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  dest: 'dist/bundle.js'
}
