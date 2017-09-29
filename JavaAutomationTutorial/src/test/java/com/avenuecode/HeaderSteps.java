package com.avenuecode;

import com.avenuecode.pages.HomePage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class HeaderSteps {

    private WebDriver driver;

    @Before
    public void start() {
        System.setProperty("webdriver.chrome.driver", "../drivers/chromedriver");
        this.driver = new ChromeDriver();
    }

    @After
    public void tearDown() {
        this.driver.quit();
    }

    @Given("^I visit Avenue Code website3$")
    public void i_visit_Avenue_Code_website3() throws Throwable {
        this.driver.get("https://www.avenuecode.com/");
    }

    @Given("^I switch the language to portuguese$")
    public void i_switch_the_language_to_portuguese() throws Throwable {
        HomePage homePage = PageFactory.initElements(this.driver, HomePage.class);
        homePage.switchLanguageToPortuguese();
    }

    @Then("^I want the Home Page header to display the link \"([^\"]*)\"$")
    public void i_want_the_home_page_header_to_display_the_link(String link) throws Throwable {
        HomePage homePage = PageFactory.initElements(this.driver, HomePage.class);
        assertThat(homePage.linkIsDisplayed(link), equalTo(true));
    }
}
