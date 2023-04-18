import { Given, When, Then } from '@cucumber/cucumber';
const { browser, $, element, by, protractor } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

Given('I am logged in', async() => {
  await browser.get('http://localhost:4200/login');
  let input = await $("input[name='username']");
  await input.sendKeys("sourabh");
  input = await $("input[name='password']");
  input.sendKeys("sourabh");
  await element(by.buttonText('Log in')).click();
});

When('I am inside the Create Jobs page', async () => {
  await browser.get('http://localhost:4200/create');
  await expect(browser.getTitle()).to.eventually.equal('Layons');
});

Then(
  `I am presented with a form which asks for title, job description, pay range, email, location, employer name.`,
  async () => {
    let exists = false;
    let input = await $("input[name='title']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("textarea[name='description']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='minpay']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='maxpay']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='email']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='location']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
    input = await $("input[name='employerName']");
    exists = await input.isPresent();
    expect(exists).to.be.true;
  }
);

When('I fill in title as {string}', async (string) => {
  let input = await $("input[name='title']");
  input.sendKeys(string);
});

When('I fill in job description as {string}', async (string) => {
  let input = await $("textarea[name='description']");
  input.sendKeys(string);
});

When('I fill in pay range as {float} to {float}', async (float1, float2) => {
  let input = await $("input[name='minpay']");
  input.sendKeys(float1);
  input = await $("input[name='maxpay']");
  input.sendKeys(float2);
});

When('I fill in email as {string}', async (string) => {
  let input = await $("input[name='email']");
  input.sendKeys(string);
});

When('I fill in location as {string}', async (string) => {
  let input = await $("input[name='location']");
  input.sendKeys(string);
});

When('I fill in employer name as {string}', async (string) => {
  let input = await $("input[name='employerName']");
  // console.log(input);
  // console.log("input is",string)
  input.sendKeys(string);
  // await element(by.buttonText('Submit')).click();
  // /* Needs search functionality to complete the remaining portion of the test 
  //    For now, an alert is being used just to ensure a job is added
  //    When phase 3 is complete, we need to change the below lines 
  //    to handle the search part of the feature
  // */
  // let EC = protractor.ExpectedConditions;
  // await browser.wait(
  //   EC.alertIsPresent(),
  //   5000,
  //   'Alert is not getting present :('
  // );
  // await browser.switchTo().alert().accept();
});

Then('I am still in the Create Jobs page', async () => {
  // expect(0).to.equal(1);
  // await expect(browser.getTitle()).to.eventually.equal('Layons');
});