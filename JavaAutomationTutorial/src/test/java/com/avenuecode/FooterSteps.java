package com.avenuecode;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.Before;
import cucumber.api.java.After;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

// PageFactory library dependency
import org.openqa.selenium.support.PageFactory;

// Page Objects
import com.avenuecode.pages.HomePage;
import com.avenuecode.pages.BlogPage;

// Hamcrest dependencies
import java.util.ArrayList;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class FooterSteps {

    private WebDriver driver;

    @Before
    public void start() {
        this.driver = new ChromeDriver();
    }

    @After
    public void tearDown() {
        this.driver.quit();
    }

    @Given("^I visit Avenue Code website2$")
    public void i_visit_Avenue_Code_website2() throws Throwable {
        this.driver.get("https://www.avenuecode.com/");
    }

    // Blog posts
    @Given("^The footer display the top three blog posts$")
    public void the_footer_display_the_top_three_blog_posts() throws Throwable {
        HomePage homePage = PageFactory.initElements(this.driver, HomePage.class);
        assertThat(homePage.footerBlogsContentTotalCount(), equalTo(3));
    }

    @When("^A link is clicked$")
    public void a_link_is_clicked() throws Throwable {
        HomePage homePage = PageFactory.initElements(this.driver, HomePage.class);
        homePage.navigateToFirstFooterBlogContent();
    }

    @Then("^It should redirect to the content$")
    public void i_should_redirect_to_the_content() throws Throwable {
        // Switch to new blog post tab
        ArrayList<String> tabs = new ArrayList<String>(this.driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));

        // Verify if the title of the post is displayed
        BlogPage blogPage = PageFactory.initElements(this.driver, BlogPage.class);
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
