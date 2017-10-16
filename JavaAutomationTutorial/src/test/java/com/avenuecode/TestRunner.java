package com.avenuecode;

// Cucumber and JUnit dependencies
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;

// Configure JUnit to use Cucumber (Annotations)
@RunWith(Cucumber.class)

// Configure Cucumber to generate out HTML report
// This annotation sets the path where the feature files are located
// and configures the cucumber port file.
@CucumberOptions(
    plugin = { "pretty", "html:target/cucumber-html-report" },
    features = "src/test/resources"
)

public class TestRunner {
}
