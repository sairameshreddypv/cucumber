package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Search {
    @Given("^user naviages to google search page$")
    public void user_naviages_to_google_search_page() throws Throwable {
        System.out.println("user naviages to google search page");
    }

    @When("^user enter automation in search box$")
    public void user_enter_automation_in_search_box() throws Throwable {
        System.out.println("user enter automation in search box");

    }

    @When("^user click on search button$")
    public void user_click_on_search_button() throws Throwable {
        System.out.println("user click on search button");

    }

    @Then("^search results should display$")
    public void search_results_should_display() throws Throwable {
        System.out.println("search results should display");

    }

}
