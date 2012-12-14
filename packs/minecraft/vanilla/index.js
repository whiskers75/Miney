/**
 * Miney Minecraft Vanilla Xpack
 * Minecraft (c) Mojang AB. Do not distribute Minecraft illegally!
 * This Xpack will download the Minecraft server jarfile if it does not exist.
 * Xpack by whiskers75.
 */
 
var http = require("http");
var fs = require("fs")
var options = {
    host: 's3.amazonaws.com',
    port: 80,
    path: '/MinecraftDownload/launcher/minecraft_server.jar'
};

fs.stat(__dirname + './server.jar', function(err, stat) {
    if (err) {
        throw new Error(err);
    }
});
