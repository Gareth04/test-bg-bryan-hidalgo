Feature: Transfer funds

  Scenario: Transfer between two accounts
    Given I am logged in
    When I transfer 100 dollars from account A to account B
    Then the transfer should be successful