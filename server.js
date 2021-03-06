/**
 * Miney for WhiskersCraft v2.0
 * Created by whiskers75
 * Minecraft server hosting sponsored by EmberCore.com
**/

// Require modules
var Rcon = require('rcon'); // RCON is needed to connect to the server
var http = require('http'); // to keep socket.io happy
var io = require('socket.io').listen(http.createServer(function(req, res){res.redirect('http://whiskers75.github.com/Miney')}).listen(process.env.PORT));


io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});
// Initialize variables
var ready = false;
var version = '0.0.1b1';
var sockets = [];
// 2: Minecraft bridge
if (false) {
var connection = new Rcon(process.env.MCHOST, process.env.RCPORT, process.env.RCPASSWD);

connection.on('auth', function() {
    ready = true;
    console.log('Established RCON connection');
    console.log('Notifying server');
    connection.send('say [' + Date() + '] Miney ' + version + ' controller connected.');
    console.log('Notified server');
});
connection.on('end', function() {
    console.log('Connection ended. Retrying...');
    connection.connect();
});
connection.on('response', function(data) {
    console.log('RCON: ' + data);
});
console.log("Connecting to Minecraft");
connection.connect();

}
// 4: Socket.IO
io.sockets.on('connection', function(socket) {
    sockets.push(socket);
    console.log('Socket.IO connection recieved: Socket ' + sockets.indexOf(socket));
    socket.emit('ready', {});
    socket.write = function(x) {
        this.emit('write', {data: x});
    };
    socket.flush = function() {
        this.emit('flush', {});
    };
    socket.flush();
    socket.motd = setInterval(function() {
        socket.flush();
        socket.write('\n<h3>Server version ' + version + ' connected!</h3>\n<h5>Current date and time: ' + Date() + '</h5>\n<h5>Miney server out.</h5>');
    }, 1000);
    socket.on('debug', function() {
        console.log('Socket.IO debug command recieved on socket ' + sockets.indexOf(socket) + '!');
    });
    socket.on('end', function() {
        clearInterval(socket.motd);
    });
});