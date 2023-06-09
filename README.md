<img src="/frontend/layons/src/assets/logo.png" alt="Logo" width="auto" height="auto"> 

# CSC510 Software Engineering Project Spring'23 - LayOns


[![Testing workflow](https://github.com/manoj-ayyappan/csc510_SE_Project_layons/actions/workflows/testing.yaml/badge.svg)](https://github.com/manoj-ayyappan/csc510_SE_Project_layons/actions/workflows/testing.yaml)  [![DOI](https://zenodo.org/badge/630275621.svg)](https://zenodo.org/badge/latestdoi/630275621)



![GitHub issues](https://img.shields.io/github/issues-raw/manoj-ayyappan/csc510_SE_Project_layons)  ![GitHub pull requests](https://img.shields.io/github/issues-pr/manoj-ayyappan/csc510_SE_Project_layons)  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/manoj-ayyappan/csc510_SE_Project_layons) ![GitHub repo size](https://img.shields.io/github/repo-size/manoj-ayyappan/csc510_SE_Project_layons)
![Lines of code](https://img.shields.io/tokei/lines/github/manoj-ayyappan/csc510_SE_Project_layons) ![GitHub contributors](https://img.shields.io/github/contributors/manoj-ayyappan/csc510_SE_Project_layons)


<!-- <img src="https://img.shields.io/codacy/coverage/github/sriram2000na/csc510_SE_Project_layons"></img> -->
<!-- <img src="https://img.shields.io/github/languages/code-size/sriram2000na/csc510_SE_Project_layons"></img> -->

![Coverage lines](./backend/coverage/badge-lines.svg)
![Coverage functions](./backend/coverage/badge-functions.svg)
![Coverage branches](./backend/coverage/badge-branches.svg)
![Coverage statements](./backend/coverage/badge-statements.svg)



## Table of Contents
1. [Introduction](#introduction)
2. [Pre-requisites](#pre-requisites)
3. [Getting Started](#getting-started)
4. [Directory Structure](#directory-structure)
5. [Contribution](#contribution)
6. [Support and Contributors](#support-and-contributors)

## Introduction
The LayOns (Job Search Portal), is a web application that allows users to search for job opportunities and apply for jobs. Along with this users can also post job openings in their institution. The project is built using Angular and Node.js, and it serves as a showcase for software engineering learnings. The repository contains all the code, documentation, and resources related to the project.

1. FRONTEND: This directory contains the Angular frontend code, including components, services, and templates for the user interface of the job search portal.
2. BACKEND: This directory contains the Node.js backend code, including database, and controllers for handling job search and job application functionalities.
3. E2E: This directory contains test cases and test data used for testing the project. Path -> "frontend/layons/e2e"

## Pre-requisites

1. Installation of VS Code: <br>
Go to [VS Code](https://code.visualstudio.com/download) and then download the latest version of it. <br>
Open installation file (.exe) and then follow all the instructions to install the IDE.
2. Install Node.js and Angular: <br>
    Go to [Node.js](https://nodejs.org/en/download) and then download the latest version as per your system configuration. <br>
    Go to [Angular](https://angular.io/guide/setup-local) and then download the latest version of it.
    Follow the instructions given on those websites to successfully install the required server and framework.


## Getting started
To run LayOns locally, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.ncsu.edu/sswattam/CSC510_SE_PROJECT_Spring23.git`
2. Navigate to the FRONTEND directory `CSC510_SE_PROJECT_Spring23/frontend/layons` and run `npm install` to install the dependencies for the frontend.
3. Run these commands to install required frameworks: `npm install i` | `npm i @serenity-js/web` | `npm i ts-node`
3. Navigate to the BACKEND directory `CSC510_SE_PROJECT_Spring23/backend` and run `npm install` to install the dependencies for the backend.
4. Start the Angular development server by running `ng serve` OR `npm start` in the FRONTEND directory.
5. Start the Node.js backend server by running `node server.js` in the BACKEND directory.
6. Open a web browser and go to `http://localhost:4200` to access LayOns.

Below are the config files:

1. angular.json - This is the configuration file for an Angular project. It contains settings for build options, assets, styles, scripts, and other project-related configurations.
2. package.json - This is the configuration file for Node.js projects. It contains metadata, dependencies, scripts, and other project-related configurations.
3. server.js - This is the entry point file for the Node.js backend server. It contains the server setup, routes, and other backend configurations.

## Directory Structure

    .
    ├── LayOns.pdf
    ├── LayOns - Presentation.pptx
    ├── backend
    │   ├── api.test.js
    │   ├── db.json
    │   ├── node_modules
    │   ├── api.test.ts
    │   ├── db.json
    │   ├── package-lock.json
    │   ├── package.json
    │   └── server.js
    ├── frontend
    │   ├── layons
    │   │   ├── README.md
    │   │   ├── angular.json
    │   │   ├── dist
    │   │   ├── e2e
    │   │   │   ├── features
    │   │   │   │   ├── create_jobs.feature
    │   │   │   │   ├── create_profile.feature
    │   │   │   │   └── search.feature
    │   │   │   ├── steps
    │   │   │   │   ├── app.po.ts
    │   │   │   │   ├── create_jobs.step.ts
    │   │   │   │   ├── create_profile.step.ts
    │   │   │   │   └── search.step.ts
    │   │   │   └── tsconfig.e2e.json
    │   │   ├── node_modules
    │   │   ├── package-lock.json
    │   │   ├── package.json
    │   │   ├── protractor.conf.js
    │   │   ├── reports
    │   │   │   └── summary.json
    │   │   ├── src
    │   │   │   ├── app
    │   │   │   │   ├── app-routing.module.ts
    │   │   │   │   ├── app.component.css
    │   │   │   │   ├── app.component.html
    │   │   │   │   ├── app.component.spec.ts
    │   │   │   │   ├── app.component.ts
    │   │   │   │   ├── app.module.ts
    │   │   │   │   ├── auth.service.spec.ts
    │   │   │   │   ├── auth.service.ts
    │   │   │   │   ├── create-jobs
    │   │   │   │   │   ├── create-jobs.component.css
    │   │   │   │   │   ├── create-jobs.component.html
    │   │   │   │   │   ├── create-jobs.component.spec.ts
    │   │   │   │   │   └── create-jobs.component.ts
    │   │   │   │   ├── create-profile
    │   │   │   │   │   ├── create-profile.component.css
    │   │   │   │   │   ├── create-profile.component.html
    │   │   │   │   │   ├── create-profile.component.spec.ts
    │   │   │   │   │   └── create-profile.component.ts
    │   │   │   │   ├── edit-profile
    │   │   │   │   │   ├── edit-profile.component.css
    │   │   │   │   │   ├── edit-profile.component.html
    │   │   │   │   │   ├── edit-profile.component.spec.ts
    │   │   │   │   │   └── edit-profile.component.ts
    │   │   │   │   ├── job-page
    │   │   │   │   │   ├── job-page.component.css
    │   │   │   │   │   ├── job-page.component.html
    │   │   │   │   │   ├── job-page.component.spec.ts
    │   │   │   │   │   └── job-page.component.ts
    │   │   │   │   ├── job.ts
    │   │   │   │   ├── jobs.service.spec.ts
    │   │   │   │   ├── jobs.service.ts
    │   │   │   │   ├── login
    │   │   │   │   │   ├── login.component.css
    │   │   │   │   │   ├── login.component.html
    │   │   │   │   │   ├── login.component.spec.ts
    │   │   │   │   │   └── login.component.ts
    │   │   │   │   ├── logout
    │   │   │   │   │   ├── logout.component.css
    │   │   │   │   │   ├── logout.component.html
    │   │   │   │   │   ├── logout.component.spec.ts
    │   │   │   │   │   └── logout.component.ts
    │   │   │   │   ├── profile
    │   │   │   │   │   ├── profile.component.css
    │   │   │   │   │   ├── profile.component.html
    │   │   │   │   │   ├── profile.component.spec.ts
    │   │   │   │   │   └── profile.component.ts
    │   │   │   │   ├── profile.service.spec.ts
    │   │   │   │   ├── profile.service.ts
    │   │   │   │   ├── search
    │   │   │   │   │   ├── search.component.css
    │   │   │   │   │   ├── search.component.html
    │   │   │   │   │   ├── search.component.spec.ts
    │   │   │   │   │   └── search.component.ts
    │   │   │   │   ├── searchobject.ts
    │   │   │   │   ├── user.service.spec.ts
    │   │   │   │   ├── user.service.ts
    │   │   │   │   ├── user.ts
    │   │   │   │   └── utilities
    │   │   │   │       ├── auth.guard.spec.ts
    │   │   │   │       └── auth.guard.ts
    │   │   │   ├── assets
    │   │   │   │   └── logo.png
    │   │   │   ├── favicon.ico
    │   │   │   ├── index.html
    │   │   │   ├── main.ts
    │   │   │   └── styles.css
    │   │   ├── tsconfig.app.json
    │   │   ├── tsconfig.json
    │   │   └── tsconfig.spec.json
    │   └── package-lock.json
    ├── CITATION.cff
    ├── CODE_OF_CONDUCT.md
    ├── LICENSE
    ├── package-lock.json
    └── README.md 

## Contribution
We welcome contributions to the project! If you would like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bugfix.
3. Make changes to the code in your branch.
4. Test your changes to ensure they are working as expected.
5. Commit your changes with descriptive commit messages.
6. Push your changes to your forked repository on GitHub.
7. Create a pull request from your branch to the main repository.
8. Provide a detailed description of your changes in the pull request.
9. Await feedback from the project maintainers and address any comments or issues raised.

## Support and Contributors

We do our best to answer all tickets in a timely manner, but sometimes we accumulate a backlog and may take awhile to respond. Please be patient - we will get back to you as soon as we can!

Please do contact any of us:

1. [Sriram Narayanan](snaray24@ncsu.edu)
2. [Sourabh Wattamwar](sswattam@ncsu.edu)
3. [Manoj Ayyappan](mayyapp@ncsu.edu)
4. [Mansi Saxena](msaxena4@ncsu.edu)
5. [Karthik Narayanan Gopala Sundaresan](kgopala3@ncsu.edu)

Thanks goes to [these](https://github.com/sriram2000na/csc510_SE_Project_layons/graphs/contributors) people for developing LayOns!
