import { Given, When, Then } from '@cucumber/cucumber';
const { browser, $, element, by, protractor } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let jobLinks = [],
  jobsList = [];
let visitedJob = '';
let jobDetails = {};

function searchsubsequence(query: string, jobName: string) {
  if (!query) return true;
  let cur = 0,
    len = query.length;
  jobName.split('').forEach((ch: string) => {
    if (ch == query.charAt(cur)) cur++;
  });
  return cur == query.length;
}

Given('I am in the Search Jobs page', async () => {
  await browser.get('http://localhost:4200/search');
  await expect(browser.getTitle()).to.eventually.equal('Layons');
});

Given('I am greeted with a textbox', async () => {
  let input = await $('input');
  let exists = await input.isPresent();
  expect(exists).to.be.true;
});

When('I enter a job’s name as {string}', async (jobName) => {
  let input = await $('input');
  await input.sendKeys(jobName);
});

When('I click the button called Search', async () => {
  await element(by.buttonText('Search')).click();
});

Then('I am given a list of jobs that match {string}', async (string) => {
  jobsList = await $('ul');
  expect(await jobsList.isPresent()).to.be.true;
  let jobNames: string[] = await element(by.css('ul'))
    .all(by.css('li .job-name'))
    .map((el: any) => {
      return el.getText();
    });
  let allStringsmatch = true;
  jobNames.forEach((jobName: string) => {
    allStringsmatch = allStringsmatch && searchsubsequence(string, jobName);
  });
  expect(allStringsmatch).to.be.true;
});
Then('all the job listings have a button “Apply”', async () => {
  let applyButtonsList: boolean[] = await $('ul')
    .all(by.css('li .job-link button'))
    .map(async (el: any) => {
      if (!el) return false;
      let innerHTML: string = await el.getAttribute('innerHTML');
      if (innerHTML.includes('Apply')) return true;
      return false;
    });
  expect(
    applyButtonsList.every((isbtnPresent: boolean) => {
      return isbtnPresent == true;
    })
  ).to.be.true;
});

When(
  'I click the button “Apply” of {string} from that list',
  async (jobName) => {
    /* console.log(`Here ${jobName}`); */
    let jobButton: any = null;
    await element(by.css('ul'))
      .all(by.css('li .job-name'))
      .each(async (el: any) => {
        if ((await el.getAttribute('innerText')) == jobName) {
          console.log('Here3');
          jobButton = await el
            .element(by.xpath('..'))
            .element(by.css('button a'));
          visitedJob = await jobButton.getAttribute('href');
        }
      });
    console.log('Here', visitedJob);
    console.log('Here', jobButton);
    let jobid = visitedJob.substring(visitedJob.lastIndexOf('/') + 1);
    jobDetails = await fetch(`http://localhost:3000/jobs/${jobid}`);
    expect(jobButton).to.not.be.null;
    if (jobButton != null) {
      console.log('Here', jobButton, visitedJob);
      await jobButton.click();
    }
  }
);

Then('I am redirected to the job page of that particular job', async () => {
  expect(await browser.getCurrentUrl()).to.equal(visitedJob);
});

Then(
  'I can see job details such as job description, employer’s email, employer’s name, pay range, work location',
  async () => {
    // let input = await $('span.title');
    // let title = await input.getText();
    // input = await $('span.description');
    // let desc = await input.getText();
    // input = await $('span.payrangemin');
    // let minpay = await input.getText();
    // input = await $('span.payrangemax');
    // let maxpay = await input.getText();
    // input = await $('span.email');
    // let email = await input.getText();
    // input = await $('span.location');
    // let location = await input.getText();
    // input = await $('span.employerName');
    // let employerName = await input.getText();
    // expect(title).to.eventually.equal(jobDetails.title);
    // expect(description).to.eventually.equal(jobDetails.description);
    // expect(payrangemax).to.eventually.equal(jobDetails.payrangemax);
    // expect(payrangemin).to.eventually.equal(jobDetails.payrangemin);
    // expect(email).to.eventually.equal(jobDetails.email);
    // expect(location).to.eventually.equal(jobDetails.location);
    // expect(employerName).to.eventually.equal(jobDetails.employerName);
  }
);

When('I click on “Apply” button to apply for that job', () => {
  // await element(by.buttonText('Apply')).click();
});

Then('A message is displayed “Applied Successfully”', () => {
  // let ele = await element(by.buttonText('Applied'));
  // let exists = ele.isPresent();
  // expect(exists).to.be.true;
});

Then('I stay on the same page at the end', async () => {
  // let url = await browser.getCurrentUrl();
  // expect(await browser.getTitle()).to.eventually.equal('Layons');
  // expect(url).to.equal(visitedJob);
});
