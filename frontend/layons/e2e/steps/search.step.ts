import { async } from '@angular/core/testing';
import { Given, When, Then } from '@cucumber/cucumber';
const { browser, $, element, by, protractor } = require('protractor');
import { Job } from 'src/app/job';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let jobLinks = [],
  jobsList = [];
let visitedJob = '';
let jobDetails:Job = {title:"", description:"", payrangemin:-1, payrangemax:-1, email: "", location: "", employerName: ""};

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
    jobNames = jobNames.map((name:string) => {
      return name.replace('Apply',"");
    })
    jobNames = jobNames.map((name:string) => {
      return name.replaceAll(/\s/g,'');
    })
  string = string.replaceAll(/\s/g,'');
  let allStringsmatch = true;
  jobNames.forEach((jobName: string) => {
    allStringsmatch = allStringsmatch && searchsubsequence(string, jobName);
  });
  expect(allStringsmatch).to.be.true;
});
Then('all the job listings have a button Apply', async () => {
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

When('I click the button Apply of {string} from that list',
  async (jobName) => {
    let jobButton: any = null;
    let jobnames = await element.all(by.css("li .job-name")).each(async (el:any) => {

    })
    jobName = jobName.replaceAll(/\s/g,'');
    await element(by.css('ul')).all(by.css('li .job-name')).each(async (el: any) => {
        let job = (await el.getAttribute('innerText'));
        job = job.replaceAll("Apply","");
        job = job.replaceAll(/\s/g,'');
        if (job == jobName) {
          
          jobButton = await el
            .element(by.xpath('..'))
            .element(by.css('.joblink a'));
          visitedJob = await jobButton.getAttribute('href');
        }
      });
    let jobid = visitedJob.substring(visitedJob.lastIndexOf('/') + 1);
    // jobDetails = await fetch(`http://localhost:3000/jobs/${jobid}`);
    let Response = await fetch(`http://localhost:3000/jobs/${jobid}`);
    jobDetails = await Response.json();
    expect(jobButton).to.not.be.null;
    if (jobButton != null) {
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
    let input = await $('span.title');
    let title = await input.getText();
    input = await $('span.description');
    let desc = await input.getText();
    input = await $('span.payrangemin');
    let minpay = await input.getText();
    input = await $('span.payrangemax');
    let maxpay = await input.getText();
    input = await $('span.email');
    let email = await input.getText();
    input = await $('span.location');
    let location = await input.getText();
    input = await $('span.employerName');
    let employerName = await input.getText();
    // if (!jobDetails.title){
    //   return;
    // }
    expect(title).to.equal(jobDetails.title);
    expect(desc).to.equal(jobDetails.description);
    expect(Number(maxpay)).to.equal(jobDetails.payrangemax);
    expect(Number(minpay)).to.equal(jobDetails.payrangemin);
    expect(email).to.equal(jobDetails.email);
    expect(location).to.equal(jobDetails.location);
    expect(employerName).to.equal(jobDetails.employerName);
  }
);

When('I click on Apply button to apply for that job', async () => {
  await element(by.buttonText('Apply')).click();
});

Then('A message is displayed Applied Successfully', async () => {
  let ele = await element(by.buttonText('Applied Successfully'));
  let exists = await ele.isPresent();
  expect(exists).to.be.true;
});

Then('I stay on the same page at the end', async () => {
  let url = await browser.getCurrentUrl();
  expect(browser.getTitle()).to.eventually.equal('Layons');
  expect(url).to.equal(visitedJob);
});
