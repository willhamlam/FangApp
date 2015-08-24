var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var usemin = require("gulp-usemin");
var cssmin = require("gulp-minify-css");
var htmlmin = require("gulp-minify-html");
var rev = require("gulp-rev");
var coffee = require("gulp-coffee");
var stylus = require("gulp-stylus");
var watch = require("gulp-watch");
var livereload = require("gulp-livereload");
var clean = require("gulp-clean");
var shell = require("gulp-shell");
var replace = require("gulp-replace");

gulp.task("watch", function() {
    var server;
    server = livereload();
    gulp.watch(["app/*.html", "app/css/*.css"], function(evt) {
        server.changed(evt.path);
    });
});

// gulp.task("default", function() {
//     gulp.src("app/coffee/*.coffee").pipe(watch()).pipe(coffee()).pipe(gulp.dest("app/scripts/")).pipe(livereload());
//     gulp.src("app/stylus/*.styl").pipe(watch()).pipe(stylus()).pipe(gulp.dest("app/styles/")).pipe(livereload());
// });

gulp.task("clean", function() {
    gulp.src("dist/**/*", {
        read: false
    }).pipe(clean());
});

gulp.task("build", ["clean"], function() {
    gulp.src("app/*.html").pipe(usemin({
        css: [cssmin(), "concat", rev()],
        html: [
            htmlmin({
                empty: true
            })
        ],
        js: [uglify(), rev()]
    })).pipe(gulp.dest("dist/"));
});