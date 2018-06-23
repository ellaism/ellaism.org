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
    src: { root: 'src' },
    dist: { root: 'dist' },
    init: function() {
        this.src.sass        = this.src.root + '/scss/main.scss';
        this.src.templates   = this.src.root + '/**/*.hbs';
        this.src.javascript  = [this.src.root + '/js/**/*.js', '!' + this.src.root + '/js/libs/*.js'];
        this.src.libs        = this.src.root + '/js/libs/*.js';
        this.src.data        = this.src.root + '/data/**/*.json';
        this.src.images      = this.src.root + '/images/**/*.{jpg,jpeg,svg,png,gif}';
        this.src.videos      = this.src.root + '/videos/*.{mp4,webm,mpeg,wmv,avi,flv}';
        this.src.fonts      =  this.src.root + '/fonts/**/*.{ttf,woff,woff2}';
        this.src.files       = this.src.root + '/*.{html,txt,xml}';

        this.dist.css        = this.dist.root + '/css';
        this.dist.images     = this.dist.root + '/images';
        this.dist.videos     = this.dist.root + '/videos';
        this.dist.fonts     = this.dist.root + '/fonts';
        this.dist.javascript = this.dist.root + '/js';
        this.dist.libs       = this.dist.root + '/js/libs';
        this.dist.data       = this.dist.root + '/data';

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




gulp.task('serve', () => {
    browserSync.init({
        server: paths.dist.root,
        open: false,
        notify: false,

        // Whether to listen on external
        online: false,
    });
});

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
* Compile handlebars/partials into html
*/
gulp.task('templates', () => {
    var opts = {
        ignorePartials: true,
        batch: ['src/partials'],
    };
    watcher.start();
    gulp.src([paths.src.root + '/*.hbs'])
        .pipe(handlebars(null, opts))
        .on('error', util.log)
        .pipe(rename({
            extname: '.html',
        }))
        .on('error', util.log)
        .pipe(gulp.dest(paths.dist.root))
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

gulp.task('images', () => {
    watcher.start();
    gulp.src([paths.src.images])
        .pipe(gulp.dest(paths.dist.images))
        .on('end',watcher.end);
});

gulp.task('videos', () => {
    watcher.start();
    gulp.src([paths.src.videos])
        .pipe(gulp.dest(paths.dist.videos))
        .on('end',watcher.end);
});

gulp.task('fonts', () => {
    watcher.start();
    gulp.src([paths.src.fonts])
        .pipe(gulp.dest(paths.dist.fonts))
        .on('end',watcher.end);
});

gulp.task('files', () => {
    watcher.start();
    gulp.src([paths.src.files])
        .pipe(gulp.dest(paths.dist.root))
        .on('end',watcher.end);
});

gulp.task('json', () => {
    watcher.start();
    gulp.src([paths.src.data])
        .pipe(gulp.dest(paths.dist.data))
        .on('end',watcher.end);
});

watch(paths.src.images, () => {
    gulp.start('images');
});

watch(paths.src.videos, () => {
    gulp.start('videos');
});

watch(paths.src.fonts, () => {
    gulp.start('fonts');
});

watch(paths.src.files, () => {
    gulp.start('files');
});

watch(paths.src.data, () => {
    gulp.start('json');
});

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch(paths.src.javascript, ['scripts']);
    gulp.watch(paths.src.templates, ['templates']);
});

gulp.task('deploy', () => {
    return gulp.src([paths.dist.root + '/**/*'])
        .pipe(ghPages());
});


gulp.task('default', ['watch', 'serve', 'images', 'videos', 'fonts', 'files', 'styles', 'scripts', 'templates', 'json']);

gulp.task('generate', ['videos','images','fonts','files','styles','scripts','templates', 'json'], () => {
    setTimeout(()=>{
        console.log('Writing files to disk, please wait..');
    },1);
    watcher.wait(()=>{
        console.log('Done!');
        process.exit();
    });
});