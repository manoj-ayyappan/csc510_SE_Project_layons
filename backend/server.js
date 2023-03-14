const express = require('express');
const app  = express();
let job_id = 0;
let user_id = 0;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8082);
console.log("App running! yay");

app.get('/jobs', (req, res) => {
    let title = req.params;
    res.send(jobs_array)
})

app.post('/jobs', (req, res) => {
    let job = req.body;
    job_id += 1;
    job.jobId = job_id
    jobs_array.push(job);
    res.send(job)
})

app.get('/all-jobs', (req, res) => {
    for (let i = 0, len = jobs_array.length, text=""; i < len; i++) {
        text += jobs_array[i] + "<br>";
      }
    res.send(text)
})

app.post('/send-user', (req, res) => {
    let user = req.body;
    user_id += 1;
    users_array.push(user_id, user);
    res.send(users_array)
  })

app.get('/jobs/:jobid', (req, res) => {
    let id_req = req.body;
    res.send(jobs_array.get(id_req))
})

const jobs_array = [{jobid: "3", title: "SWE2"}];
const users_array = [];

