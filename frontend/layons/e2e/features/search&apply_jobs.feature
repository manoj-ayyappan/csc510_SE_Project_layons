Feature: Search and Apply for a Job
  As a job seeker using the website
  I should be able to search and apply for a job 
    Scenario: Search and Apply for a Job
        Given I am logged in as job seeker
        And I am in the "Search for Jobs" page
        Then I am greeted with a textbox
        And I enter a job's name
        When I click the button "Search"
        Then I am given a list of jobs that match the search query
        And all the job listings have a button "Apply"
        When I click the button "Apply" of a job from that list
        Then I am redirected to the job page of that particular job
        And I can see job details such as job description, employer's email, employer's name, pay range, work location
        When I click on "Apply" button to apply for that job
        Then a message is displayed "Applied Successfully"
        And I stay on the same page at the end 