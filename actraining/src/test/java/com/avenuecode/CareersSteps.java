package com.avenuecode;

import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.avenuecode.pages.HomePage;
import com.avenuecode.pages.CareersPage;
import com.avenuecode.pages.OpenPositionsPage;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class CareersSteps extends StepDefinition {

    WebDriver driver = getDriver();

    @When("^I navigate to Open Positions page$")
    public void i_navigate_to_Open_Positions_page() throws Throwable {
        HomePage homePage = PageFactory.initElements(driver, HomePage.class);
        homePage.navigateToCareersPage();
        CareersPage careerPage = PageFactory.initElements(driver, CareersPage.class);
        careerPage.navigateToAllOpeningsPage();
    }

    @Then("^I should see at least \"([^\"]*)\" job locations$")
    public void i_should_see_at_least_job_locations(int jobLocationsAmount) throws Throwable {
        OpenPositionsPage openPositionsPage = PageFactory.initElements(driver, OpenPositionsPage.class);
        assertThat(openPositionsPage.cityTotalCount(), greaterThanOrEqualTo(jobLocationsAmount));
    }
}
