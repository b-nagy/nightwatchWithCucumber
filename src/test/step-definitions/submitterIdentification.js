const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open submitter identification page$/, () => {
  return client.url('https://www.google.com').waitForElementVisible('body', 1000);
//  var openMyPage = require('../pageObj/starterPage.js');
//  openMyPage;
});

When('I click to checkProba button', () => {
    module.exports = {
        'StarterPage' : function(browser){
            browser
                .useXpath().click(`//*[contains(text(), "checkProba")]`)
                .end();
        }
    };
});

Then('The form is genereted', () => {
   //return client.assert.visible('div[id="tr2"]');
});