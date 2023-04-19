Feature: Search Jobs
  As an applicant using the website
  I should be able to search for job openings
  So that i can apply to them
    Scenario: Search Jobs
        Given I am logged in
        Given I am in the Search Jobs page
        Given I am greeted with a textbox
        When I enter a job’s name as "Software Engineer"
        When I click the button called Search
        Then I am given a list of jobs that match "Software Engineer"
        Then all the job listings have a button Apply
        When I click the button Apply of "Software Engineer" from that list
        Then I am redirected to the job page of that particular job
        Then I can see job details such as job description, employer’s email, employer’s name, pay range, work location
        When I click on Apply button to apply for that job
        Then A message is displayed Applied Successfully
        Then I stay on the same page at the end