/**
 * Authentication + Registration
 * by whiskers75
 */

var redis = require(__dirname + '/../node_modules/redis/index.js');
var db;

exports = new Object({});
exports.constructor(function(rserver, rport, rauth) {
    try {
    db = redis.createServer(rport, rserver);
    db.once('ready', function() {
        db.auth(rauth, function(err, res) {
            if (err) {
                throw new Error(err)
            }
        });
    });
    }
    catch(error) {
        
    }
});
exports.check = function(user, callback) {
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
};