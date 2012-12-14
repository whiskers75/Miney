/**
 * MINEY
 * LICENCED UNDER THE GENERAL PUBLIC LICENCE VERSION 2
 * CREATED BY WHISKERS75
 * CODE AT github.com/whiskers75/miney
 **/

var lib = require(__dirname + '/lib/');
var packs = require(__dirname + '/packs/');
var colorize = require('colorize')
var redis = require('redis');
var version = require(__dirname + '/package.json').version;
var db = redis.createServer(process.env.REDIS_PORT || 6379, process.env.REDIS_HOST || '127.0.0.1');
db.once('ready', function() {
    db.auth(process.env.REDIS_AUTH, function(err, res) {
        if (err) {
            throw new Error(err)
        }
    });
});

if (process.argv[3] === null) {
    throw new Error(colorize.ansify('#red[Please provide arguments in the form of \'node main.js (out)\']'));
};

console.log = function(msg) {
    process.stdout.write('['+ Date() +'] ' + msg);
};
 
process.on('SIGTERM', function() {
   console.log('Exiting gracefully');
   process.exit(0);
});

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

