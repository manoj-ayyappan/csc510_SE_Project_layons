import { Given, When, Then } from '@cucumber/cucumber';
// import { DocumentUploadService } from './DocumentUploadService.ts';
const { browser, $, element, by, protractor } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

Given('I am at the home page', async() => {
  await browser.get('http://localhost:4200/login');
  let input = await $("input[name='username']");
  await input.sendKeys("manoj");
  input = await $("input[name='password']");
  input.sendKeys("password");
  await element(by.buttonText('Log in')).click();
  });

When('I log in for the first time', async() => {
    await browser.get('http://localhost:4200/createprofile');
    await expect(browser.getTitle()).to.eventually.equal('Layons');
});

Then('I am presented with a form which asks for name, email, location, qualification',
    async () => {
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
      input = await $("input[name='skills']");
      exists = await input.isPresent();
      expect(exists).to.be.true;
    }
  );

  When('I fill in title as {string}', async (string) => {
    let input = await $("input[name='firstName']");
    input.sendKeys(string);
  });
  
  When('I fill in job description as {string}', async (string) => {
    let input = await $("textarea[name='lastName']");
    input.sendKeys(string);
  });
  
  When('I fill in pay range as {float} to {float}', async (string) => {
    let input = await $("input[name='email']");
    input.sendKeys(string);
  });
  
  When('I fill in email as {string}', async (string) => {
    let input = await $("input[name='location']");
    input.sendKeys(string);
  });
  
  When('I fill in location as {string}', async (string) => {
    let input = await $("input[name='skills']");
    input.sendKeys(string);
  });


// let documentUploadService: DocumentUploadService;

Given('I have a document upload service', () => {
  // documentUploadService = new DocumentUploadService();
});

// When('I upload my resume as a PDF file', async () => {
//   const document = { file: 'resume.pdf', size: 10000, type: 'pdf' }; // Define the resume document to be uploaded
//   const result = documentUploadService.upload(document); // Call the upload method with the resume document

//   // You can add your assertions here to verify the upload behavior, e.g. using Jest expect() statements
//   expect(result).toBeTruthy(); // Assert that the upload was successful
//   expect(documentUploadService.getUploadedDocuments()).toContain(document); // Assert that the uploaded document is in the list of uploaded documents
// });

  When('I fill in employer name as {string}', async (string) => {
    await element(by.buttonText('Submit')).click();
    let EC = protractor.ExpectedConditions;
    await browser.wait(
      EC.alertIsPresent(),
      5000,
      'Alert is not getting present :('
    );
    await browser.switchTo().alert().accept();
  });
  
//   how to check is "Profile Created" message is displayed
  Then('I am displayed a success message saying "Profile Created"', async () => {
    
  });


  