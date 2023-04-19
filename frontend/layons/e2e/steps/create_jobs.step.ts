import { Given, When, Then } from '@cucumber/cucumber';
const { browser, $, element, by, protractor } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let jobName = '';

Given('I am logged in', async () => {
  await browser.driver.manage().window().maximize();
  await browser.get('http://localhost:4200/login');
  let input = await $("input[name='username']");
  await input.sendKeys('sourabh');
  input = await $("input[name='password']");
  input.sendKeys('sourabh');
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
  jobName = string;
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
  await input.sendKeys(string);
  await browser.sleep(2000);
  await browser.executeScript('window.scrollTo(0,200);')
  let button = await element(by.buttonText('Submit'));
  
  await (browser.actions().mouseMove(button).click().perform());

  // await browser.sleep(1000);
  // /* Needs search functionality to complete the remaining portion of the test
  //    For now, an alert is being used just to ensure a job is added
  //    When phase 3 is complete, we need to change the below lines
  //    to handle the search part of the feature
  // */
  let EC = protractor.ExpectedConditions;
  await browser.wait(
    EC.alertIsPresent(),
    5000,
    'Alert is not getting present :('
  );
  let popup = await browser.switchTo().alert();
  let alertText = await popup.getText();
  popup.accept();
});

Then('I am still in the Create Jobs Page', async () => {
  // expect(0).to.equal(1);
  await expect(browser.getTitle()).to.eventually.equal('Layons');
  let url = await browser.getCurrentUrl();
  expect(url).to.equal('http://localhost:4200/create');
});
When('I am in the Search for Jobs page', async () => {
  await browser.get('http://localhost:4200/search');
});

When('I enter the job’s name which I have created before', async () => {
  let input = await $('input');
  await input.sendKeys(jobName);
});

Then('I can see the job posted', async () => {
  let jobsList = await $('ul');
  expect(await jobsList.isPresent()).to.be.true;
  let jobNames: string[] = await element(by.css('ul'))
    .all(by.css('li .job-name'))
    .map((el: any) => {
      return el.getText();
    });
  jobNames = jobNames.map(name=>{
      return name.replaceAll('Apply','');
  });
  jobNames = jobNames.map(name=>{
      return name.replaceAll(/\s/g,'');
  });
  jobName = jobName.replaceAll(/\s/g,'');
  let jobExists = false;
  jobNames.forEach((job) => {
    jobExists = jobExists || job.includes(jobName);
  });
  expect(jobExists).to.be.true;
});
