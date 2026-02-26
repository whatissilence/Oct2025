const { src, dest, watch, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const sortCSSmq = require('sort-css-media-queries');
const fileinclude = require('gulp-file-include');

const PATHS = {
  scssSource: './src/**/*.scss',
  projectDest: './assets',
  htmlSource: './*.html',
  htmlPartsSource: './src/**/*.html',
};

const postCssPlugins = [
  mqpacker({ sort: sortCSSmq }),
  cssnano({ preset: 'default' }),
]

function minifyScss() {
  return src(PATHS.scssSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postCssPlugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(PATHS.projectDest));
}

function syncInit () {
  browserSync.init({
    server: {
      baseDir: PATHS.projectDest,
    }
  });
}

async function sync() {
  browserSync.reload()
}

function parseHtml() {
  return src([ './*.html'])
    .pipe(fileinclude())
    .pipe(dest(PATHS.projectDest));
}


function watchFiles() {
  minifyScss()
  syncInit()
  watch(PATHS.scssSource, minifyScss)
  watch(PATHS.scssSource, sync)
  watch(PATHS.htmlPartsSource, parseHtml)
  watch(PATHS.htmlPartsSource, sync)
  watch(PATHS.htmlSource, parseHtml)
  watch(PATHS.htmlSource, sync)
  // watch('./assets/js/**/*.js', sync)
}

task('watch', watchFiles);
task('scss', minifyScss);





