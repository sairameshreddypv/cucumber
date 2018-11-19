Feature: Verify Google Search
 @test
    Scenario: verify google search
    Given user naviages to google search page
    When user enter automation in search box
    And  user click on search button
    Then search results should display