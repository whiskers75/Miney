/** 
 * Server Manager
 * by whiskers75
 */

var fs = require("fs");
var data = null;
var moment = require("moment");
var db = require("redis").createClient(process.env.REDIS_PORT || 6379, process.env.REDIS_HOST || '127.0.0.1');
exports = null;

console.log = function(msg) {
    process.stdout.write('['+ Date() +'] ' + msg);
};

function handleError(error) {
    if (error === null) {
        return;
    }
    else {
        throw new Error(error);
    }
};

db.on('ready', function() {
    var updateTime = setInterval(function() {
        db.set('change.current', moment.unix(0), function(err, res) {
            handleError(err);
        });
    }, 1);
    var checkDeadline = setInterval(function() {
        db.get('change.deadline', function(err, res) {
            handleError(err);
            if (res < moment.unix(0)) {
                // All change!
                db.set('change.isNeeded', true, function(err, res) {
                    handleError(err);
                    console.log('Server change occurred');
                });
            }
        });
    }, 1000);
    
});