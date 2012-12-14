/**
 * Authentication + Registration
 * by whiskers75
 */

var redis = require(__dirname + '/../node_modules/redis/index.js');
var db;
var r = 0;

exports = new Object({});
exports.str = require('events').EventEmitter;
exports.constructor(function(rserver, rport, rauth) {
    try {
        db = redis.createServer(rport, rserver);
        db.once('ready', function() {
            if (rauth) {
                db.auth(rauth, function(err, res) {
                    if (err) {
                        throw new Error(err);
                    }
                    else {
                        r = 1;
                    }
                });
            }
            else {
                r = 1;
            }
        });
    }
    catch (error) {
        exports.str.emit('error', {
            err: error
        });
    }
});
exports.check = function(user, callback) {
    if (r == 1) {
        db.get(user + ':name', function(error, response) {
            if (error) {
                callback(error, null);
            }
            else {
                if (response === null) {
                    callback(null, false);
                }
                else {
                    callback(null, true);
                }
            }
        });
    }
    else {
        exports.str.emit('error', {
            err: 'Not ready'
        });
    }
};

exports.login = function(user, pass, callback) {
    
};
exports.register = function(user, pass, callback) {
    
};