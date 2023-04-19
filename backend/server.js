const express = require('express');
const fs = require('fs');
const cors = require('cors');
const formidable = require('express-formidable');
const form = formidable({ uploadDir: __dirname, keepExtensions: true });
const app = express();
app.use(cors());
app.use('/resume', formidable({ uploadDir: __dirname, keepExtensions: true }));

let job_id = 0;
let user_id = 0;
let text = [];
let resume = undefined;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000);

// takes a job properties and adds the job to the jobs array and returns the job (works)
app.post('/jobs', (req, res) => {
  let job = {};
  job.title = req.body.title.toString();
  job.description = req.body.description.toString();
  job.payrangemin = req.body.payrangemin;
  job.payrangemax = req.body.payrangemax;
  job.email = req.body.email.toString();
  job.location = req.body.location.toString();
  job.employerName = req.body.employerName.toString();

  // setting the jobid
  job_id += 1;
  job.jobId = job_id;

  // push the object to array
  jobs_array.push(job);
  res.send(job);
});

// get all jobs (works)
app.get('/jobs/all-jobs', (req, res) => {
  let jobs_arr = [];
  for (let i = 0, len = jobs_array.length; i < len; i++) {
    jobs_arr.push(jobs_array[i]);
  }
  res.send(jobs_arr);
});

// get all users (works)
app.get('/users/all-users', (req, res) => {
  let users_arr = [];
  for (let i = 0, len = users_array.length; i < len; i++) {
    users_arr.push(users_array[i]);
  }
  res.send(users_arr);
});

// returns all job title and their job id ()
app.get('/jobs/search', (req, res) => {
  kaam = {};
  searchObj_arr = [];
  jobs_array.forEach(function (job) {
    searchObj_arr.push({ jobId: job.jobId, title: job.title });
  });

  res.send(searchObj_arr); 
});

// returns job with a given job id (works)
app.get('/jobs/:jobid', (req, res) => {
  let id_req = req.params['jobid'];
  let obj = jobs_array.find((o) => o.jobId == id_req);
  res.send(obj);
});

app.post('/resume', (req, res) => {
  resume = req.files.file_upload.path;
});
app.get('/resume', (req, res) => {
  res.download(resume);
});

// sample jobs array
let jobs_array = [
  {
    jobId: 3,
    description: 'Develop software for a functionality',
    title: 'SDE 1',
    payrangemin: 18,
    payrangemax: 30,
    email: 'manoj@gmail.com',
    employerName: 'Sriram',
    location: 'Remote',
  },
  {
    jobId: 4,
    description: 'Implement Testing for a functionality',
    title: 'SDE 1',
    payrangemin: 15,
    payrangemax: 25,
    email: 'manoj@gmail.com',
    employerName: 'Sriram',
    location: 'Raleigh',
  },
  {
    jobId: 5,
    description: 'Integrate a functionality with codebase',
    title: 'SDE 2',
    payrangemin: 25,
    payrangemax: 40,
    email: 'manoj@gmail.com',
    employerName: 'Sriram',
    location: 'San Jose',
  },
  {
    jobId: 6,
    description: 'Manage Project',
    title: 'SDE 3',
    payrangemin: 30,
    payrangemax: 50,
    email: 'manoj@gmail.com',
    employerName: 'Sriram',
    location: 'Raleigh',
  },
];
// sample users array
let users_array = [
  {
    userId: 3,
    userName: 'Manoj',
    password: 'password12',
  },
  {
    userId: 4,
    userName: 'Karthik',
    password: 'password23',
  },
  {
    userId: 4,
    userName: 'Sriram',
    password: 'password34',
  },
  {
    userId: 4,
    userName: 'Mansi',
    password: 'password45',
  },
  {
    userId: 4,
    userName: 'Sourabh',
    password: 'password56',
  },
];
