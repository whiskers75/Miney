// Test Coins Object
var coins = require(__dirname + '/../lib/coins.js');
var Coins = coins.coins();
describe('coins', function() {
    it('should return an object', function() {
        return new Coins();
    });
    it('should return 0 as the starting balance', function() {
        return new Coins().balance;
    });
    it('should add 1 onto the balance and return 1', function() {
        var n = 0;
        new Coins().alter(1, n);
        return n;
    });
})