'use strict';
var gulp        = require('gulp');
var filters     = require('gulp-filter');
var insert      = require('gulp-insert');
var sass        = require('gulp-sass');
var merge       = require('merge-stream');

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

    return merge(bower);
});

gulp.task('default', ['sass','insert', 'copy']);