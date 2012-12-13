/**
 * MINEY
 * LICENCED UNDER THE GENERAL PUBLIC LICENCE VERSION 2
 * CREATED BY WHISKERS75
 * CODE AT github.com/whiskers75/miney
 **/

console.log = function(msg) {
    process.stdout.write('['+ Date() +'] ' + msg);
};
 
process.on('SIGTERM', function() {
   console.log('Exiting gracefully');
});

var lib = require(__dirname + '/lib');
var packs = require(__dirname + '/packs');
