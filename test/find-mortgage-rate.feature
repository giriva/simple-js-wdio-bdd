Feature: Find a mortgage rate
  As a new customer
  I want to find the mortgage rates available
  So that I can decide whether to switch my mortgage to Nationwide
  
  Scenario Outline: Find mortgage rates
    Given we launch the homepage
    And click on Mortgages
    And click New mortgage customer
    And click Mortgage rates
    And select Nationwide mortgage to No
    And select lender to Changing lender
    And set property value as <property_value>
    And set mortgage amount as <mortgage_amount>
    And set term year as <terms>
    And select mortgage type as fixed rate
    And select product fee as with fee
    Then select 5 years fixed from the result
    And click More info and apply
    And click Apply button
    Then next page heading is displayed as "Start your remortgage application"

    Examples:
    |property_value  |mortgage_amount  |terms|
    |300,000         |150000         | 30  |