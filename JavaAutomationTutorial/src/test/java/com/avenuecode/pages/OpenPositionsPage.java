package com.avenuecode.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class OpenPositionsPage {

    @FindBy(xpath = "//div[@id='locationSelect']/div[@class='options']/div")
    private List<WebElement> cityItems;

    public int cityTotalCount() {
        return this.cityItems.size();
    }
}
