const critical = require('critical');
const babelify = require('babelify');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const source = require('vinyl-source-stream');

/* ----------------- */
/* Development
/* ----------------- */

gulp.task('development', ['scripts', 'styles', 'browser-sync'], () => {
    gulp.watch('./styles/**/*.scss', ['styles']);
    gulp.watch('./js/**/*.js', ['scripts']);
    gulp.watch('./**/*.html', browserSync.reload);
});

// gulp.task('scripts', function () {
//   return gulp.src('js/**/*.js')
//     .pipe(sourcemaps.init())
//     .pipe(babel())
//     .pipe(concat('./js/main.js'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./build/js/'));
// });


/* ----------------- */
/* Scripts
/* ----------------- */
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('scripts', () => {
    return browserify({
        'entries': ['./js/main.js'],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015']
            })
        ]
    })
    .bundle()
    .on('error', function () {
        var args = Array.prototype.slice.call(arguments);

        plugins().notify.onError({
            'title': 'Compile Error',
            'message': '<%= error.message %>'
        }).apply(this, args);

        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins().sourcemaps.init({'loadMaps': true}))
    .pipe(plugins().sourcemaps.write('.'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browserSync.stream());
});

/* ----------------- */
/* Styles
/* ----------------- */

gulp.task('styles', () => {
    return gulp.src('./styles/*.scss')
        .pipe(plugins().sourcemaps.init())
        .pipe(plugins().sass().on('error', plugins().sass.logError))
        .pipe(plugins().sourcemaps.write())
        .pipe(gulp.dest('./build/css/'))
        .pipe(browserSync.stream());
});


/* ----------------- */
/* HTML
/* ----------------- */

gulp.task('html', ['cssmin'], () => {
    return gulp.src('index.html')
        .pipe(critical.stream({
            'base': 'build/',
            'inline': true,
            'extract': true,
            'minify': true,
            'css': ['./build/css/style.css']
        }))
        .pipe(gulp.dest('build'));
});


/* ----------------- */
/* Cssmin
/* ----------------- */

gulp.task('cssmin', () => {
    return gulp.src('./styles/**/*.scss')
        .pipe(plugins().sass({
            'outputStyle': 'compressed'
        }).on('error', plugins().sass.logError))
        .pipe(gulp.dest('./build/css/'));
});


/* ----------------- */
/* Jsmin
/* ----------------- */

gulp.task('jsmin', () => {
    var envs = plugins().env.set({
        'NODE_ENV': 'production'
    });

    return browserify({
        'entries': ['./js/main.js'],
        'debug': false,
        'transform': [
            babelify.configure({
                'presets': ['es2015', 'react']
            })
        ]
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(envs)
    .pipe(buffer())
    .pipe(plugins().uglify())
    .pipe(envs.reset)
    .pipe(gulp.dest('./build/js/'));
});

/* ----------------- */
/* Taks
/* ----------------- */

gulp.task('default', ['development']);
gulp.task('deploy', ['html', 'jsmin']);