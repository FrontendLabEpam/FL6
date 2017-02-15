var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var watch = require('gulp-watch');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync');
gulp.task('sync', function () {
   browserSync.init(['build/**/*'], {
      server: {
         baseDir: '.'
      }
   });
});

gulp.task('js', function () {
   return gulp.src(['src/js/libs/**/*.js', 'src/js/*.js'])
      .pipe(eslint({
        'rules':{
            "camelcase": 1,
        }
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(uglify())
      .pipe(concat('production.min.js'))
      .pipe(gulp.dest('build/js'));
});

gulp.task('css', function(){
  return gulp.src('src/css/global.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function () {
   gulp.watch('src/**/*.scss', ['css']);
   gulp.watch('src/**/*.js', ['js']);
});

gulp.task('default', [ 'css', 'js' ]);