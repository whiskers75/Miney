// Test Coins Object
var coins = require(__dirname + '/../lib/coins.js');
describe('coins', function() {
    it('should return an object', function() {
        return new coins.coins();
    });
    it('should return 0 as the starting balance', function() {
        return new coins.coins().balance;
    });
    it('should add 1 onto the balance and return 1', function() {
        var n = 0;
        new coins.coins().alter(1, n);
        return n;
    });
})