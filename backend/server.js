const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
let job_id = 0;
let user_id = 0;
let text = [];

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000);
console.log('App running! yay');

// takes a job properties and adds the job to the jobs array and returns the job (works)
app.post('/jobs', (req, res) => {
  let job = {};
  job.title = req.body.title.toString();
  job.description = req.body.description.toString();
  job.payrangemin = req.body.payrangemin;
  job.payrangemax = req.body.payrangemax;
  job.email = req.body.email.toString();
  job.location = req.body.location.toString();
  // console.log(typeof(job.payrangemin))

  // setting the jobid
  job_id += 1;
  job.jobId = job_id;

  // push the object to array
  jobs_array.push(job);
  res.send(job);
});

// get all jobs (works)
app.post('/all-jobs', (req, res) => {
  let jobs_arr = [];
  for (let i = 0, len = jobs_array.length; i < len; i++) {
    jobs_arr.push(jobs_array[i]);
  }
  res.send(jobs_arr);
});

// get all users (works)
app.post('/all-users', (req, res) => {
  let users_arr = [];
  for (let i = 0, len = users_array.length; i < len; i++) {
    users_arr.push(users_array[i]);
  }
  res.send(users_arr);
});

// send user info (works)
app.post('/send-user', (req, res) => {
  let user = {};
  user.name = req.body.name.toString();
  user_id += 1;
  user.userId = user_id;
  // users_array.set("user_id", user_id);
  users_array.push(user);
  res.send(user);
});

// returns job with a given job id (works)
app.post('/jobs/:jobid', (req, res) => {
  let id_req = req.body.jobId.toString();
  // console.log(id_req);
  let obj = jobs_array.find((o) => o.jobId == id_req);
  // console.log(obj)
  res.send(obj);
});

// returns all job title and their job id ()
app.post('/search', (req, res) => {
  kaam = {};
  searchObj_arr = [];
  jobs_array.forEach(function (job) {
    kaam.jobId = job.jobId;
    kaam.title = job.title;
    searchObj_arr.push(kaam);
  });
  res.send(searchObj_arr);

  // // code to get title when given jobid

  // let id_req = req.body.jobId.toString();
  // // console.log(id_req);
  // let obj = jobs_array.find(o => (o.jobId == id_req));
  // res.send(obj.title.toString())
});

// sample jobs array
let jobs_array = [
  {
    jobId: 3,
    description: 'Develop software for a functionality',
    title: 'SWE2',
    payrangemin: 18,
    payrangemax: 30,
    email: 'manoj@gmail.com',
    location: 'Remote',
  },
];
// sample users array
let users_array = [
  {
    userId: 3,
    name: 'Manoj',
  },
];
