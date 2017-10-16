package com.avenuecode;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.chrome.
import org.openqa.selenium.remote.DesiredCapabilities;;

public abstract class StepDefinition {
    protected static WebDriver driver;

    protected WebDriver getDriver() {
        if (driver == null) {
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/chromedriver");
            driver = new ChromeDriver();
        }
        return driver;
    }

    protected WebDriver quitDriver() {
        if (driver != null) {
            driver.quit();
        }
        return driver = null;
    }
}
