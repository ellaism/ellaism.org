'use strict';

const gulp        = require('gulp');
const del         = require('del');
const util        = require('gulp-util');
const sass        = require('gulp-sass');
const prefixer    = require('gulp-autoprefixer');
const uglify      = require('gulp-uglify');
const concat      = require('gulp-concat');
const rename      = require('gulp-rename');
const handlebars  = require('gulp-compile-handlebars');
const browserSync = require('browser-sync');
const ghPages     = require('gulp-gh-pages');
const sassGlob    = require('gulp-sass-bulk-import');
const watch       = require('gulp-watch');
const babel       = require('gulp-babel');

var paths = {
    dist: { root: 'dist' },
    src: { },
    init: function() {
        this.src.sass        = 'scss/main.scss';
        this.src.javascript  = ['js/**/*.js', '!js/libs/*.js'];
        this.src.libs        = 'js/libs/*.js';
        this.src.fonts       = 'fonts/**/*.{ttf,woff,woff2}';

        this.dist.css        = this.dist.root + '/css';
        this.dist.javascript = this.dist.root + '/js';
        this.dist.libs       = this.dist.root + '/js/libs';

        return this;
    },
}.init();

var watcher = (function(){
    var count = 0;
    var callback = function(){};

    return {
        start: function () {
            count++;
        },
        end: function () {
            count--;
            if (count <= 0) {
                callback();
            }
        },
        wait: function (fn) {
            callback = fn;
        }
    }
})();

gulp.task('styles', () => {
    watcher.start();
    gulp.src([paths.src.sass])
        .pipe(sassGlob())
        .on('error', util.log)
        .pipe(sass({
            includePaths: [
                'src/scss',
                require('node-normalize-scss').includePaths,
                'node_modules/bootstrap-sass/assets/stylesheets',
                // 'node_modules/font-awesome-sass/assets/stylesheets'
            ]
            //includePaths: require('bootstrap-sass').includePaths
        }))
        .on('error', util.log)
        .pipe(prefixer('last 2 versions'))
        .on('error', util.log)
        .pipe(gulp.dest(paths.dist.css))
        .on('end',watcher.end)
        .pipe(browserSync.reload({stream: true}));
});

/*
* Bundle all javascript files
*/
gulp.task('scripts', () => {
    watcher.start();
    gulp.src(paths.src.javascript)
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(concat('bundle.js'))
        .on('error', util.log)
        .pipe(uglify())
        .on('error', util.log)
        .pipe(gulp.dest(paths.dist.javascript))
        .on('end',watcher.end)
        .pipe(browserSync.reload({stream: true}));

    /*
    * Uglify JS libs and move to dist folder
    */
    watcher.start()
    gulp.src([paths.src.libs])
        .pipe(uglify())
        .on('error', util.log)
        .pipe(rename({
            suffix: '.min',
        }))
        .on('error', util.log)
        .pipe(gulp.dest(paths.dist.libs))
        .on('end',watcher.end)
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['styles', 'scripts']);