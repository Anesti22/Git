var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postCssVars = require('postcss-simple-vars'),
    postNested = require('postcss-nested'),
    postImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([postImport, mixins, postCssVars, postNested, autoprefixer]))
    .on('error', function(errorInfo){
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
