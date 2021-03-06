package com.avenuecode;

// Selenium WebDriver
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

// Cucumber
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.Before;
import cucumber.api.java.After;

// PageFactory Library
import org.openqa.selenium.support.PageFactory;

// Page Objects
import com.avenuecode.pages.HomePage;
import com.avenuecode.pages.CareersPage;
import com.avenuecode.pages.OpenPositionsPage;

// Hamcrest Matchers
import java.util.concurrent.TimeUnit;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class CareersSteps {

    private WebDriver driver;

    @Before
    public void setUp() {
        this.driver = new ChromeDriver();
        this.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @Given("^I visit Avenue Code website$")
    public void i_visit_Avenue_Code_website() throws Throwable {
        this.driver.get("https://www.avenuecode.com/");
    }

    @When("^I navigate to Open Positions page$")
    public void i_navigate_to_Open_Positions_page() throws Throwable {
        HomePage homePage = PageFactory.initElements(this.driver, HomePage.class);
        homePage.navigateToCareersPage();
        CareersPage careerPage = PageFactory.initElements(this.driver, CareersPage.class);
        careerPage.navigateToAllOpeningsPage();
    }

    @Then("^I should see at least \"([^\"]*)\" job locations$")
    public void i_should_see_at_least_job_locations(int jobLocationsAmount) throws Throwable {
        OpenPositionsPage openPositionsPage = PageFactory.initElements(this.driver, OpenPositionsPage.class);
        assertThat(openPositionsPage.cityTotalCount(), greaterThanOrEqualTo(jobLocationsAmount));
    }

    @After
    public void tearDown() {
        this.driver.quit();
    }
}
