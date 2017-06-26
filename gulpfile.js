const gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    reload = browserSync.reload,
    path = require('path'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    pump = require('pump'),
    stylus = require('gulp-stylus'),
    notify = require("gulp-notify"),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    imagemin = require('gulp-imagemin');



gulp.task('styles', () => {
    return gulp.src('src/**/styles.styl')
        .pipe(stylus({
            'include css': true
        }))
        // .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something"
        }))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

 
gulp.task('images', () =>{
   return gulp.src('src/images/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
}))
        .pipe(gulp.dest('dist/images'))
}
);



gulp.task('js', function() {
     return gulp.src('./src/scripts/scripts.js')
        // .pipe(webpackStream({
        //     entry: {
        //         app: './src/scripts/scripts.js',
        //     },
        //     output: {
        //         path: path.resolve(__dirname, './src/scripts/'),
        //         filename: 'bundle.min.js',
        //     },
        //     module: {
        //         loaders: [{
        //             test: /\.js$/,
        //             // excluding some local linked packages.
        //             // for normal use cases only node_modules is needed.
        //             exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        //             use: {
        //                 loader: 'babel-loader',
        //                 options: {
        //                     presets: ['es2015']
        //                 }
        //             }

        //         }]
        //     }
        // }, webpack))
        // .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('dist/scripts/'));
});



gulp.task('indexTemplate', function() {
    return gulp.src('src/pages/*.pug')
        .pipe(pug({
            pretty: true,
            basedir: 'src'
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('styles-watch', ['styles'], reload);

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist',
            open: false
        },
    })
})

/**
 * Serve and watch the pug files for changes
 */
gulp.task('default', ['indexTemplate', 'js', 'styles', 'browserSync', 'images'], function() {
    gulp.watch(['src/**/*.styl', 'src/**/*.css'], ['styles-watch']);
    gulp.watch('src/**/*.pug', ['indexTemplate']);
    gulp.watch('src/**/*.js', ['js']);
    
});