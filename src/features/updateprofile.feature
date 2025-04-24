Feature: Update profile

  Scenario: User updates address and phone
    Given I am a logged-in user
    When I update my address and phone number
    Then I should see a confirmation that my profile was updated
