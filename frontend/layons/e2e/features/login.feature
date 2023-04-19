Feature: Login 
    As a user, I should be able to Log In to the website
    So that I can search and apply for jobs as a job seeker
    And create jobs as an employer
        Scenario: Login Functionality
            Given I am at the Login page of the website 
            Then I am presented with a form which asks for Username and Password
            When I fill in my Username as "Manoj"
            When I fill in my password as "password"
            When I click the Log In button
            Then I am navigated to the create profile page
