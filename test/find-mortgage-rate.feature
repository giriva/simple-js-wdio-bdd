Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide

  @Pending
  Scenario: Find mortgage rates
    Given I launch nbs applicaion with url "https://www.nationwide.co.uk"
    And I click on Mortgages
    And I click New mortgage customer
    And I select Morgagte rates
    And I select No button
    And I select changing lender button
    And I Input property value
    And I Input Morgage Amount
    And I Input Term value
    And I press find a mortgage rate button
    And I select Fixed rate
    And select mortgage type as fixed rate
    And I select Product fee
    Then I select Deal period
    And I select More info and apply link
    And I press apply button
    Then I expect to see Start your mortgage application text