// Main File Tests
var main = require(__dirname + '/../main.js')
describe('main', function() {
    it('throws an error when the output cannot be reached', function() {
        main.testOut('');
    });
});