"use strict";

var requireDir   = require("require-dir")
// var PrettyError  = require('pretty-error')
// var pe           = new PrettyError().start()

// require all tasks in gulp/tasks, including sub-folders
requireDir("./gulp/tasks", {
    recurse: true
});