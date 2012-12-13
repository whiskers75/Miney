/**
 * Coins
 * by whiskers75
 * */

exports.coins = new Object({});
exports.coins.balance = 0;
exports.coins.alter = function(amt, obj) {
    obj = obj + amt;
};
exports.coins.topup = -1;