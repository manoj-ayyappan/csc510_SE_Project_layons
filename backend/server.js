const express = require('express');
const app  = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8082);
console.log("App running! yay");


const jobs_array = [];
const users_array = [];

