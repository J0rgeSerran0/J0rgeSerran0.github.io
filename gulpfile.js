'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

gulp.task('sass', () =>{
    gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(prefix("last 2 version"))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  //watch sass files
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});
gulp.task('browser-sync', () =>{
  browserSync.init({
        server: "./"
    });  
});

gulp.task('dev', ['browser-sync','watch']);
