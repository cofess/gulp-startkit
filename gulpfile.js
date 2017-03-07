"use strict";

var requireDir = require("require-dir");

var paths = {
  "tplSrc": "_templates/**",
  "htmlSrc": "_templates/*.jade",
  "lessSrc": "_less/*.less",
  "scssSrc": "_scss/*.scss",
  "jsSrc": "_js/*.js",
  "imgSrc": "_images/**",
  "rootDir": "dist/",
  "imgDir": "dist/images/"
}

// require all tasks in gulp/tasks, including sub-folders
requireDir("./gulp/tasks", {
    recurse: true
});