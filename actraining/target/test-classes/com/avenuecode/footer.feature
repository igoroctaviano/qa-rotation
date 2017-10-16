Feature: Footer

    Scenario: As a user I want the footer to display the top three blog posts, when a link is clicked it should redirect to the content
        Given I visit Avenue Code website
            And The footer display the top three blog posts
        When A link is clicked
        Then It should redirect to the content
        Then I close the browser

    Scenario: As a user I want the footer to display the latest event, when a event is clicked it should redirect to the Events page displaying the modal with the event details
        Given I visit Avenue Code website
            And The footer display the latest event
        When A event is clicked
        Then It should redirect to the events page with event details
        Then I close the browser