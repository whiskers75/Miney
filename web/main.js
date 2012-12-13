/**
 * Miney Web Out
 * by whiskers75
 */

exports = require('events').EventEmitter;
exports.on('connect', function(n) {
    exports.emit('connect', {n: 'Miney Web Out by whiskers75'});
});