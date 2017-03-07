"use strict";

var config      = require('../config')

var path        = require('path')
var del         = require('del')
var runSequence = require("run-sequence")
var gulp        = require("gulp")
var gutil       = require('gulp-util')
var cached      = require('gulp-cached')


// 清除文件,css/js/images/fonts
gulp.task('clean',function (callback) {
    runSequence(    
        ['clean:css', 'clean:js', 'clean:image', 'clean:font', 'clean:cache'], 
        callback
    );
});    

// 清除文件,删除dist目录下的所有文件
gulp.task('clean:all',function (callback) {
    del([path.join(config.root.dest, '/**'), path.join('!', config.root.dest)]).then(paths => {
    	if(paths.length){
    		console.log("---------------------------- clean:all ----------------------------\n");
            console.log(" • 共删除"+paths.length+"个文件");
	    	console.log(' •',paths.join('\n • '));
	    	console.log("\n-------------------------------------------------------------------\n");
    	}else{
    		console.log("---------------------------- clean:all ----------------------------\n");
	    	console.log(" • 空目录！共删除"+paths.length+"个文件");
	    	console.log("\n-------------------------------------------------------------------\n");
    	}   	
	},callback);
});

// 清除css文件,删除dist/css目录下的所有css文件
gulp.task('clean:css',function (callback) {
    del([path.join(config.root.dest, config.tasks.css.dest, '/**')]).then(paths => {
    	if(paths.length){
    		console.log("---------------------------- clean:css ----------------------------\n");
            console.log(" • 共删除"+paths.length+"个文件");
	    	console.log(' •',paths.join('\n • '));
	    	console.log("\n-------------------------------------------------------------------\n");
    	}else{
    		console.log("---------------------------- clean:css ----------------------------\n");
	    	console.log(" • 空目录！共删除"+paths.length+"个文件");
	    	console.log("\n-------------------------------------------------------------------\n");
    	}   	
	},callback);
});

// 清除js文件,删除dist/js目录下的所有js文件
gulp.task('clean:js',function (callback) {
    del([path.join(config.root.dest, config.tasks.js.dest, '/**')]).then(paths => {
    	if(paths.length){
    		console.log("---------------------------- clean:js -----------------------------\n");
            console.log(" • 共删除"+paths.length+"个文件");
	    	console.log(' •',paths.join('\n • '));
	    	console.log("\n-------------------------------------------------------------------\n");
    	}else{
    		console.log("---------------------------- clean:js -----------------------------\n");
	    	console.log(" • 空目录！共删除"+paths.length+"个文件");
	    	console.log("\n-------------------------------------------------------------------\n");
    	}   	
	},callback);
});

// 清除image文件,删除dist/images目录下的所有图片文件
gulp.task('clean:image',function (callback) {
    del([path.join(config.root.dest, config.tasks.images.dest, '/**')]).then(paths => {
    	if(paths.length){
    		console.log("---------------------------- clean:img ----------------------------\n");
            console.log(" • 共删除"+paths.length+"个文件");
	    	console.log(' •',paths.join('\n • '));
	    	console.log("\n-------------------------------------------------------------------\n");
    	}else{
    		console.log("---------------------------- clean:img ----------------------------\n");
	    	console.log(" • 空目录！共删除"+paths.length+"个文件");
	    	console.log("\n-------------------------------------------------------------------\n");
    	}   	
	},callback);
});

// 清除字体文件
gulp.task('clean:font',function (callback) {
    del([path.join(config.root.dest, config.tasks.fonts.dest, '/**')]).then(paths => {
        if(paths.length){
            console.log("---------------------------- clean:font ---------------------------\n");
            console.log(" • 共删除"+paths.length+"个文件");
            console.log(' •',paths.join('\n • '));
            console.log("\n-------------------------------------------------------------------\n");
        }else{
            console.log("---------------------------- clean:font ---------------------------\n");
            console.log(" • 空目录！共删除"+paths.length+"个文件");
            console.log("\n-------------------------------------------------------------------\n");
        }       
    },callback);
});

// 清除整个缓存
gulp.task('clean:cache', function (done) {
  cached.caches = {};
  return gutil.log(gutil.colors.magenta('已清空缓存'));
});
