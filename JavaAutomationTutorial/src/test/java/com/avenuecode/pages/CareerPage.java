package com.avenuecode.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CareerPage {

    @FindBy(linkText = "VIEW ALL OPENINGS")
    private WebElement viewOpenings;

    public void navigateToAllOpeningsPage() {
        viewOpenings.click();
    }
}
