/**
 * Sample X-pack
 * by whiskers75
 * */

var Pack = require(__dirname + '../../lib/packs.js');

exports.sample = new Pack({});
exports.sample.name = 'Sample';
exports.sample.id = 1;
exports.sample.ram = 1000;
exports.sample.start = function() {
    exports.sample.str.emit('message', {msg: 'Hello Sample Pack!'});
};
exports.sample.end = function() {
    exports.sample.str.emit('end');
};
exports.sample.err = function() {
    exports.sample.str.emit('error', {err: 'You DID ask for it, though!'});
};
