package com.avenuecode.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BlogPage {

    final WebDriver driver;

    public BlogPage(WebDriver driver) {
        this.driver = driver;
    }

    @FindBy(id = "hs_cos_wrapper_name")
    public WebElement blogPostTitle;
}
