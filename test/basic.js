var assert = require('assert');

console.log('basic.js :3');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('./');
        console.log('basic.js :6');
        var title = browser.getTitle();
        console.log('basic.js :7', title);
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});