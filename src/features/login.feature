Feature: User login

  Scenario: Login with valid credentials
    Given I have an existing user
    When I log in with those credentials
    Then I should see the accounts overview
