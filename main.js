/**
 * MINEY
 * LICENCED UNDER THE GENERAL PUBLIC LICENCE VERSION 2
 * CREATED BY WHISKERS75
 * CODE AT github.com/whiskers75/miney
 **/

var lib = require(__dirname + '/lib/');
var colorize = require('colorize')
var redis = require('redis');
var version = require(__dirname + '/package.json').version;
if (process.env.PORT) {
var db = redis.createClient(process.env.REDIS_PORT || 6379, process.env.REDIS_HOST || '127.0.0.1');
db.once('ready', function() {
    db.auth(process.env.REDIS_AUTH, function(err, res) {
        if (err) {
            throw new Error(err)
        }
    });
});
}
console.log = function(msg) {
    process.stdout.write('['+ Date() +'] ' + msg);
};
 
process.on('SIGTERM', function() {
   console.log('Exiting gracefully');
   process.exit(0);
});
exports.testOut = function(out) {
    try {
        var testOut = require(__dirname + '/' + out + '/main.js');
    }
    catch (error) {
        throw new Error('Out (testing) error: ' + error);
    }

}
if (process.env.PORT) {
try {
    var out = require(__dirname + '/' + process.argv[3] + '/main.js');
}
catch(error) {
    throw new Error('Out error: ' + error);
}

out.emit('connect', {n: 'Miney '+ version});
out.once('connect', function(n) {
    console.log('Constructor \'' + n + '\' linked.');
});

out.on('connection', function(req, res) {
    console.log('Host ' + req.host + ' connected.');
});

out.on('auth', function(req, res, user, pass) {
    
});
}


