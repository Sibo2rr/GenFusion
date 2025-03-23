const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('styles', function() {
    return gulp.src('website/resources/css/*.css')
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('website/dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'website/resources/js/jquery.min.js',
        'website/resources/js/bootstrap.min.js',
        'website/resources/js/fontawesome.all.min.js',
        'website/resources/js/video-compare.min.js',
        'website/resources/js/app.js'
    ])
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('website/dist/js'));
});


gulp.task('default', gulp.parallel('styles', 'scripts'));