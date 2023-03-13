const express = require('express');
const app  = express();
const job_id = 1;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8082);
console.log("App running! yay");

app.get('/jobs', (req, res) => {
    const {title} = req.params;
    res.send(jobs_array)
})

app.post('/send-jobs', (req, res) => {
    const job = req.body;
    job_id += 1;
    jobs_array.push(job);
    res.send(jobs_array)
})

app.post('/send-user', (req, res) => {
    const user = req.body;
    users_array.push(user);
    res.send(users_array)
  })

const jobs_array = [{name: "Manoj", age: "22"}];
const users_array = [];

