package com.avenuecode;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.avenuecode.pages.HomePage;
import com.avenuecode.pages.BlogPage;

import java.util.ArrayList;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class FooterSteps extends StepDefinition {

    WebDriver driver = getDriver();

    // Blog posts
    @Given("^The footer display the top three blog posts$")
    public void the_footer_display_the_top_three_blog_posts() throws Throwable {
        HomePage homePage = PageFactory.initElements(driver, HomePage.class);
        assertThat(homePage.footerBlogsContentTotalCount(), equalTo(3));
    }

    @When("^A link is clicked$")
    public void a_link_is_clicked() throws Throwable {
        HomePage homePage = PageFactory.initElements(driver, HomePage.class);
        homePage.navigateToFirstFooterBlogContent();
    }

    @Then("^It should redirect to the content$")
    public void i_should_redirect_to_the_content() throws Throwable {
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));

        BlogPage blogPage = PageFactory.initElements(driver, BlogPage.class);
        assertThat(blogPage.blogPostTitle.isDisplayed(), equalTo(true));
    }

    // Events
    @Given("^The footer display the latest event$")
    public void the_footer_display_the_latest_event() throws Throwable {
    }

    @When("^A event is clicked$")
    public void a_event_is_clicked() throws Throwable {
    }

    @Then("^It should redirect to the events page with event details$")
    public void i_should_redirect_to_the_events_page_with_event_details() throws Throwable {
    }
}
