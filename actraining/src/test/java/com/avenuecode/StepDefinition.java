package com.avenuecode;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;;

public abstract class StepDefinition {
    protected static WebDriver driver;

    protected WebDriver getDriver() {
        if (driver == null) {
            // System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/chromedriver");

            final ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("--headless");
            chromeOptions.addArguments("--disable-gpu");

            final DesiredCapabilities dc = new DesiredCapabilities();
            dc.setJavascriptEnabled(true);
            dc.setCapability(ChromeOptions.CAPABILITY, chromeOptions);

            driver = new ChromeDriver(dc);
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
