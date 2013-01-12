// Test Coins Object
var coins = require(__dirname + '/../lib/coins.js');
describe('coins', function() {
    it('should return an object', function() {
        return new coins.coins();
    });
    var coinsobj = new coins.coins();
    it('should return 0 as the starting balance', function() {
        return coinsobj.balance;
    });
    it('should add 1 onto the balance and return 1', function() {
        coinsobj.alter(1, coinsobj.balance);
        return coinsobj.balance;
    });
})