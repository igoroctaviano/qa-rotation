package com.avenuecode;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.openqa.selenium.WebDriver;

public class CommonSteps extends StepDefinition {

    WebDriver driver = getDriver();

    @Given("^I visit Avenue Code website$")
    public void i_visit_Avenue_Code_website() throws Throwable {
        driver.get("https://www.avenuecode.com/");
    }

    @Then("^I close the browser$")
    public void i_close_the_browser() throws Throwable {
        quitDriver();
    }
}
