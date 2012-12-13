/**
 * User Management
 * by whiskers75
 * */

var Coins = require(__dirname + '/coins.js').coins;
 
exports.user = new Object({});
exports.user.name = 'Guest';
exports.user.minecraft = 'Guest';
exports.user.email = 'Guest';
exports.user.pass = 'Guest';
exports.user.id = -1;
exports.user.coins = new Coins({});