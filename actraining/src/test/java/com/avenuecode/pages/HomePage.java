package com.avenuecode.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class HomePage {

    @FindBy(id = "sub-footer-events")
    public WebElement footerEventsTitle;
    @FindBy(linkText = "Careers")
    private WebElement careerLink;
    @FindBy(xpath = "//div[@class='blogs-content']/div[@class='sub-footer-container']/a")
    private List<WebElement> footerBlogsContent;
    @FindBy(xpath = "//nav[@class='main-menu-items-list']/ul/li/a[@class='main-menu-item-link']")
    private List<WebElement> headerLinks;
    @FindBy(xpath = "//a[contains(text(), 'PT')]")
    private List<WebElement> ptLinks;

    public void navigateToCareersPage() {
        this.careerLink.click();
    }

    public int footerBlogsContentTotalCount() {
        return this.footerBlogsContent.size();
    }

    public void navigateToFirstFooterBlogContent() {
        this.footerBlogsContent.get(0).click();
    }

    public boolean linkIsDisplayed(String link) {
        for (WebElement element : this.headerLinks) {
            if (element.getText().equals(link) && element.isDisplayed()) {
                return true;
            }
        }
        return false;
    }

    public void switchLanguageToPortuguese() {
        this.ptLinks.get(0).click();
    }
}
