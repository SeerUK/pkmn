/*
 * This file is part of pkmn
 *
 * (c) Elliot Wright <elliot@elliotwright.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

var gulp       = require("gulp");
var browserify = require("gulp-browserify");
var concat     = require("gulp-concat");
var connect    = require("gulp-connect");
var plumber    = require("gulp-plumber");
var rimraf     = require("rimraf");
var watch      = require("gulp-watch");

var paths = {
  src: {
    html: "src/",
    js: "src/js/src/"
  },
  vendor: {
    js: [
      "src/vendor/bluebird/js/browser/bluebird.min.js",
      "src/vendor/EaselJS/lib/easeljs-0.8.0.combined.js"
    ]
  },
  build: {
    root: "build/",
    html: "build/",
    js: "build/js/"
  }
};

gulp.task("default", [ "connect", "watch" ]);
gulp.task("build", [ "build-html", "build-js", "build-vendor-js" ]);
gulp.task("clean-build", [ "clean", "build" ]);

gulp.task("watch", function() {
  gulp.start("clean-build");

  watch(paths.src.html + "**/*.html", function() {
    gulp.start("build-html");
  });

  watch(paths.src.js + "**/*.js", function() {
    gulp.start("build-js");
  });

  watch(paths.vendor.js, function() {
    gulp.start("build-vendor-js");
  });
});

gulp.task("build-html", function() {
  gulp
    .src(paths.src.html + "*.html", { base: paths.src.html })
    .pipe(gulp.dest(paths.build.html))
    .pipe(connect.reload());
});

gulp.task("build-js", function() {
  gulp
    .src(paths.src.js + "pkmn.js")
    .pipe(plumber())
    .pipe(browserify({
      insertGlobals: false,
      debug: !gulp.env.production
    }))
    .pipe(gulp.dest(paths.build.js))
    .pipe(connect.reload());
});

gulp.task("build-vendor-js", function() {
  gulp
    .src(paths.vendor.js)
    .pipe(plumber())
    .pipe(concat("vendor.js"))
    .pipe(gulp.dest(paths.build.js))
    .pipe(connect.reload());
});

gulp.task("clean", function(cb) {
  rimraf.sync(paths.build.root, cb);
});

gulp.task("connect", function() {
  connect.server({
    root: paths.build.root,
    livereload: true
  });
});
