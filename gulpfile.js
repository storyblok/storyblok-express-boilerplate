const gulp = require('gulp')
const blok = require('gulp-blok')
const watch = require('gulp-watch')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const browserSync = require('browser-sync')
const webpack = require('webpack')
const gulpWebpack = require('gulp-webpack')
const rename = require('gulp-rename')
const nodemon = require('gulp-nodemon')
const reload = browserSync.reload

gulp.task('styles:below', function () {
  return gulp.src('source/scss/below.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.stream())
})

gulp.task('styles:above', function () {
  return gulp.src('source/scss/above.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.stream())
    .pipe(rename('above_fold_css.hbs'))
    .pipe(gulp.dest('./views/components/'))
})

gulp.task('scripts', function () {
  return gulp.src('source/js/scripts.js')
    .pipe(gulpWebpack({
      output: {
        filename: 'scripts.js',
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader'
        }]
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          }
        })
      ]
    }, webpack))
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream())
})

gulp.task('browsersync', ['nodemon'], function () {
  browserSync({
    port: 4301,
    serveStatic: ['./public'],
    proxy: {
      target: 'http://localhost:4300'
    },
    reloadDelay: 500,
    notify: true,
    open: true,
    logLevel: 'silent'
  })

  // gulp.watch('views/**/*.hbs', ['scripts'])
  gulp.watch(['source/scss/components/above/**/*.scss', 'source/scss/_variables.scss'], ['styles:above'])
  gulp.watch(['source/scss/components/below/**/*.scss', 'source/scss/_variables.scss'], ['styles:below'])
  gulp.watch('source/js/**/*.js', ['scripts'])
})

gulp.task('nodemon', function (cb) {
  return nodemon({
    script: 'index.js',
    watch: ['index.js', 'helpers.js'],
  }).once('start', cb)
})

gulp.task('default', ['styles:above', 'styles:below', 'scripts', 'browsersync'])
