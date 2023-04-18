Feature: Create Jobs
  As an employer using the website
  I should be able to create job openings
  So that employers can create jobs
    Scenario: Create Jobs
        Given I am logged in
        When I am inside the Create Jobs page
        Then I am presented with a form which asks for title, job description, pay range, email, location, employer name.
        When I fill in title as "Software Engineer"
        When I fill in job description as "Good job with lots of perks"
        When I fill in pay range as 30 to 50
        When I fill in email as "snaray24@ncsu.edu"
        When I fill in location as "Remote, US"
        When I fill in employer name as "Sriram"
        Then I am still in the Create Jobs Page
        When I am in the Search for Jobs page
        When I enter the job’s name which I have created before
        When I click the button called Search
        Then I can see the job posted
