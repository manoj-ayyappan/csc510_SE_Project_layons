import { Given, When, Then } from '@cucumber/cucumber';
var path = require('path');
const { browser, $, element, by, protractor } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

Given('I am at the Login page of the website', async () => {
    await browser.get('http://localhost:4200/login');
    // await expect(browser.getTitle()).to.eventually.equal('Layons');
  });

  Then('I am presented with a form which asks for Username and Password', async () => {
    let exists = false;
    let input = await $("input[name='username']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='password']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
  });

  When('I fill in my Username as {string}', async (string) => {
    let input = await $("input[name='username']");
    input.sendKeys(string);
  });

  When('I fill in my password as {string}', async (string) => {
    let input = await $("input[name='password']");
    input.sendKeys(string);
  });

  When('I click the Log In button', async () => {
    await element(by.buttonText('Log In')).click();
  });

  Then('I am navigated to the create profile page', async () => {
    await browser.get('http://localhost:4200/createprofile');
    await expect(browser.getTitle()).to.eventually.equal('Layons');
  });

