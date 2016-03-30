'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;
var isWindows = require('check-if-windows');

var gt = function(name, args, cwd) {
    var opts = {
        stdio: [0, 1, 2]
    };
    if (cwd != null) {
        opts.cwd = cwd;
    }
    gulp.task(name, function () {
        if (isWindows) {
            spawn('mvn.bat', args.split(' '), opts);
        } else {
            spawn('bash', ['-lc', 'mvn ' + args], opts);
        }
    });
};


module.exports = gt;
