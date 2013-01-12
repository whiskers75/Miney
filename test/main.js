// Main File Tests
var main = require(__dirname + '/../main.js')
describe('main', function() {
    it('should return an error when the output cannot be reached', function() {
        return main.testOut('');
    });
});