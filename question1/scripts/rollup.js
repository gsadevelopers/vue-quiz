import rollupJson from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';

export default [
  {
    input: 'src/app/index.js',
    output: {
      file: 'dist/js/app.min.js',
      format: 'iife',
      interop: false,
    },
    plugins: [
      vue({
        css: false,
      }),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      rollupJson(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.BUILD': JSON.stringify('web'),
      }),
    ],
  },
];
