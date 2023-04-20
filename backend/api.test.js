const server = require('./server.js');
const supertest = require('supertest');
const request = supertest(server);
const baseURL = 'http://localhost:3000';

describe('Get all jobs', () => {
  it('should return 200', async () => {
    const response = await request.get('/jobs/all-jobs');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });
  it('should return jobs array', async () => {
    const response = await request.get('/jobs/all-jobs');
    expect(response.body.length >= 1).toBe(true);
  });
});

describe('Get all users', () => {
  it('should return 200', async () => {
    const response = await request.get('/users/all-users');
    expect(response.statusCode).toBe(200);
    expect(response.body.error).toBe(undefined);
  });
  it('should return jobs array', async () => {
    const response = await request.get('/users/all-users');
    expect(response.body.length >= 1).toBe(true);
  });
});

describe('POST /job', () => {
  const newJob = {
    description: 'Devops',
    title: 'Dev 1',
    payrangemin: 18,
    payrangemax: 30,
    email: 'm@gmail.com',
    employerName: 'S',
    location: 'US',
  };
  it('should add a job that is created', async () => {
    const response = await request.post('/jobs').send(newJob);
    const resp = response.body;
    expect(response.statusCode).toBe(200);
    expect(resp.description).toBe(newJob['description']);
    expect(resp.title).toBe(newJob['title']);
    expect(resp.payrangemin).toBe(newJob['payrangemin']);
    expect(resp.payrangemax).toBe(newJob['payrangemax']);
    expect(resp.email).toBe(newJob['email']);
    expect(resp.employerName).toBe(newJob['employerName']);
    expect(resp.location).toBe(newJob['location']);
  });
});

describe('GET /jobs/search', () => {
  it('should return all search objects', async () => {
    const response = await request.get('/jobs/search');
    expect(response.body.length >= 1).toBe(true);
  });
});

describe('GET /jobs/:jobid', () => {
  it('should return job with specific jobId', async () => {
    const jobId = 3;
    const response = await request.get('/jobs/' + jobId);
    const data = response.body;
    expect(data.jobId == 3).toBe(true);
  });
});
afterAll((done) => {
  server.close();
  done();
});
