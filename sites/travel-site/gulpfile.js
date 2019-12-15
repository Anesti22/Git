var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hey, you created a gulp task");
})


gulp.task('html', function() {
    console.log("Imagune")
});


gulp.task('watch', function() {
    watch('./app/index.html', function(){
        gulp.series('html');
    })
});

gulp.task('default', gulp.series (watch, gulp.parallel(styles, scripts, images),

    function (done) { done(); }
));
