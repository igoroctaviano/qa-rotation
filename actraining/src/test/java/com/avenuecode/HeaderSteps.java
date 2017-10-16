package com.avenuecode;

import com.avenuecode.pages.HomePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class HeaderSteps extends StepDefinition {

    WebDriver driver = getDriver();

    @Given("^I switch the language to portuguese$")
    public void i_switch_the_language_to_portuguese() throws Throwable {
        HomePage homePage = PageFactory.initElements(driver, HomePage.class);
        homePage.switchLanguageToPortuguese();
    }

    @Then("^I want the Home Page header to display the link \"([^\"]*)\"$")
    public void i_want_the_home_page_header_to_display_the_link(String link) throws Throwable {
        HomePage homePage = PageFactory.initElements(driver, HomePage.class);
        assertThat(homePage.linkIsDisplayed(link), equalTo(true));
    }
}
