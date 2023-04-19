Feature: Create Profile
  As a job seeker using the website
  I should be able to create a profile
  So that job seekers can search and apply for jobs
    Scenario: Create Profile
        Given I am at the home page
        When I log in for the first time
        Then I am presented with a form which asks for name, email, location, skills
        When I fill in my first name "Mansi"
        When I fill in my last name "Saxena"
        When I enter my email id "msaxena4@ncsu.edu"
        When I enter my location "Raleigh"
        When I enter my skills "Machine Learning"
        And I am asked to upload my resume as a PDF file
        When I click on Submit button
        Then I am displayed a success message saying "Profile Created"