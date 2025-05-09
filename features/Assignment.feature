Feature: ByteXL assignemnt


Scenario: As a user I should be able to Navigate to apps page from homepage
    Given Im on the landing page
    Then I click on apps from top navigation bar and navigate to apps page

Scenario: As a user I should be able to sort the apps with given options
    Given Im on the landing page
    Then I click on apps from top navigation bar and navigate to apps page
    Then I should see that top filter is selected by default
    Then I should count the number of cards showing in apps page
    Then I should click Recent filter
    Then I should count the number of cards showing in apps page when recent filter is applied
    Then I Verify the count of cards are same for both filters

Scenario: As a user I should be able to filter by free text
    Given Im on the landing page
    Then I click on apps from top navigation bar and navigate to apps page
    Then I click on search bar
    Then I enter the text "Apurva-Portfolio"
    Then Verify that there is atleast one cards
    Then I enter the text "Pickachoo"
    Then I verify that there are no matching cards 


Scenario: As a user I should be able to filter by free text
    Given Im on the landing page
    Then I click on apps from top navigation bar and navigate to apps page
    Then I should count the number of cards showing in apps page
    Then I select "JavaScript" filter from left menu
    Then I should see atleast one card with "JavaScript" mini text
    Then I select "PHP" filter from left menu
    Then Verify that there is atleast one cards
    Then I unselect "JavaScript" and "PHP" filters
    Then I see the total number of cards after filters are removed

    
    






