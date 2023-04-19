import { Given, When, Then } from '@cucumber/cucumber';
var path = require('path');
const { browser, $, element, by, protractor } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

Given('I am at the home page', async () => {
  await browser.get('http://localhost:4200/login');
  let input = await $("input[name='username']");
  await input.sendKeys("Manoj");
  input = await $("input[name='password']");
  input.sendKeys("password");
  await element(by.buttonText('Log in')).click();
});

When('I log in for the first time', async () => {
  await browser.get('http://localhost:4200/createprofile');
  await expect(browser.getTitle()).to.eventually.equal('Layons');
});

Then('I am presented with a form which asks for name, email, location, skills', async () => {
    let exists = false;
    let input = await $("input[name='firstName']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='lastName']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='email']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='location']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("textarea[name='skills']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
  }
);

When('I fill in my first name {string}', async (string) => {
  let input = await $("input[name='firstName']");
  input.sendKeys(string);
});

When('I fill in my last name {string}', async (string) => {
  let input = await $("input[name='lastName']");
  input.sendKeys(string);
});

When('I enter my email id {string}', async (string) => {
  let input = await $("input[name='email']");
  input.sendKeys(string);
});

When('I enter my location {string}', async (string) => {
  let input = await $("input[name='location']");
  input.sendKeys(string);
});

When('I enter my skills {string}', async (string) => {
  let input = await $("textarea[name='skills']");
  input.sendKeys(string);
});

When('I am asked to upload my resume as a PDF file', async () => {
  var fileToUpload = '../../../../LayOns.pdf',
      absolutePath = path.resolve(__dirname, fileToUpload);

  element(by.css('input[type="file"]')).sendKeys(absolutePath);    
  // element(by.id('uploadButton')).click();
});

When('I click on Submit button', async () => {
  await browser.executeScript('window.scrollTo(0,200);')
  // await element(by.buttonText('Submit')).click();

  let button = await element(by.buttonText('Submit'));
  await (browser.actions().mouseMove(button).click().perform());
  // await browser.sleep(2000);

});


Then('I am displayed a success message saying "Profile Created"', async () => {
  let EC = protractor.ExpectedConditions;
  await browser.wait(
    EC.alertIsPresent(),
    5000,
    'Alert is not getting present :('
  );
  let popup = await browser.switchTo().alert();
  let alertText = await popup.getText();
  popup.accept();
  expect(alertText == "Profile Created");
});

Then('I am navigated to the profile details page', function () {
  
});

// click submit 
// --> opens added profile alert 
// --> click mclose button 
// --> leads to profile details page
