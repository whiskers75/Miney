/**
 * X (child process)
 * by whiskers75
 */

var ready = false;
var glopack;

exports = new Object({});

exports.stream = require('stream');
exports.stream.readable = true;
exports.stream.writable = true;

exports.constructor = function(type, pack, user) {
    try {
        pack.js = require(__dirname + "/../packs/" + type + '/' + pack + '/index.js');
    }
    catch(e) {
        exports.stream.emit('error', {type: 'pack', err: e});
    }
    pack.stream = pack.js.stream;
    pack.name = pack.js.name;
    // Putting you through to the pack:
    exports.stream.pipe(pack.stream);
    pack.stream.pipe(exports.stream);
    pack.js.init(function() {
        ready = true;
        exports.stream.emit('ready');
        glopack = pack;
    });
};

exports.kill = function() {
    if (ready) {
        glopack.kill();
        return true;
    }
    else {
        return false;
    }
};

exports.start = function() {
    if (ready) {
        glopack.start();
        return true;
    }
    else {
        return false;
    }
};

exports.broadcast = function(what) {
    glopack.broadcast(what);
};