package com.avenuecode;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public abstract class StepDefinition {
    protected static WebDriver driver;

    protected WebDriver getDriver() {
        if (driver == null) {
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
