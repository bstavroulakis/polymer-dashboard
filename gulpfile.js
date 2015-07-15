'use strict';
var gulp        = require('gulp');
var filters     = require('gulp-filter');
var insert      = require('gulp-insert');
var sass        = require('gulp-sass');
var merge       = require('merge-stream');
var vulcanize   = require('gulp-vulcanize');
var $           = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var filter = filters(['*', '!app/css/skins/color-vars-template.scss', '!app/css/skins/skin-template.scss']);

gulp.task('sass', function () {
    gulp.src('./app/**/*.scss')
        .pipe(filter)
        .pipe(sass().on('error', sass.logError))
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/**/*.scss', ['sass'])
        .pipe(filter);
});

gulp.task('insert', function(){
    gulp.src(['app/css/skins/default/color-vars-body.css',
              'app/css/skins/default/color-vars.css'])
        .pipe(insert.append('</style>'))
        .pipe(insert.prepend("<style is=\"custom-style\">"));
});

gulp.task('copy', function () {
    var bower = gulp.src([
        'bower_components/**/*'
    ]).pipe(gulp.dest('app/bower_components'));

    var vulcanized = gulp.src(['app/components/pd-dashboard/pd-dashboard.html'])
        .pipe($.rename('pd-dashboard.vulcanized.html'))
        .pipe(gulp.dest('app/components/pd-dashboard'));

    return merge(bower);
});

gulp.task('vulcanize', function () {
    return gulp.src('../app/components/pd-dashboard/pd-dashboard.vulcanized.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: ['../bower_components/polymer/polymer.html',
                '../app/bower_components/polymer/polymer.html'
            ],
            stripExcludes: false
        }))
        .pipe(gulp.dest('../app/components/pd-dashboard'));
});

gulp.task('precache', function (callback) {

});

gulp.task('default',  function (cb) {
    runSequence(
        ['sass','insert', 'copy'],
        'vulcanize', 'precache',
        cb)
    });

require('web-component-tester').gulp.init(gulp);