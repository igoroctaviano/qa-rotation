package com.avenuecode.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CareersPage {

    final WebDriver driver;
    @FindBy(linkText = "VIEW ALL OPENINGS")
    private WebElement viewOpenings;

    public CareersPage(WebDriver driver) {
        this.driver = driver;
    }

    public void navigateToAllOpeningsPage() {
        viewOpenings.click();
    }
}