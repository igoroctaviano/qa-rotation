Feature: As a Avenue Code website user, I want to see 6 locations for job positions in Careers Page

Scenario: Succesfully display job locations
    Given I visit Avenue Code website
    When I navigate to Open Positions page
    Then I should see at least "3" job locations