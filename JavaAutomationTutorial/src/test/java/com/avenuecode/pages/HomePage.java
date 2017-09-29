package com.avenuecode.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class HomePage {

    @FindBy(linkText = "Careers")
    private WebElement careerLink;

    public void navigateToCareersPage() {
        this.careerLink.click();
    }

    @FindBy(xpath = "//div[@class='blogs-content']/div[@class='sub-footer-container']/a")
    private List<WebElement> footerBlogsContent;

    @FindBy(id = "sub-footer-events")
    public WebElement footerEventsTitle;

    @FindBy(xpath = "//nav[@class='main-menu-items-list']/ul/li/a[@class='main-menu-item-link']")
    private List<WebElement> headerLinks;

    @FindBy(xpath = "//a[contains(text(), 'PT')]")
    private List<WebElement> ptLinks;

    public int footerBlogsContentTotalCount() {
        return this.footerBlogsContent.size();
    }

    public void navigateToFirstFooterBlogContent() {
        this.footerBlogsContent.get(0).click();
    }

    public void navigateToFirstEventDetails() {

    }

    public boolean linkIsDisplayed(String link) {
        for (WebElement element : headerLinks) {
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
