var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postCssVars = require('postcss-simple-vars'),
    postNested = require('postcss-nested'),
    postImport = require('postcss-import');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([postImport, postCssVars, postNested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
