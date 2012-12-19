/**
 * Miney Minecraft Vanilla Xpack
 * Minecraft (c) Mojang AB. Do not distribute Minecraft illegally!
 * This Xpack will download the Minecraft server jarfile.
 * Xpack by whiskers75.
 */

var http = require("http");
var fs = require("fs");
var options = {
    host: 's3.amazonaws.com',
    port: 80,
    path: '/MinecraftDownload/launcher/minecraft_server.jar'
};

http.get(options, function (data) {
    var jar = fs.createWriteStream(__dirname + '/server.jar');
    data.pipe(jar);
    data.on('end', function () {
        jar.end();
    });
});
