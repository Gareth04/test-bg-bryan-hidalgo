Feature: User registration

  Scenario: Successful registration
    Given I am on the Parabank home page
    When I register with valid random data
    Then I should see a successful registration message
