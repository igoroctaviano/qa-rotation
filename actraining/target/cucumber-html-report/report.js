$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/avenuecode/footer.feature");
formatter.feature({
  "line": 1,
  "name": "Footer",
  "description": "",
  "id": "footer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "As a user I want the footer to display the top three blog posts, when a link is clicked it should redirect to the content",
  "description": "",
  "id": "footer;as-a-user-i-want-the-footer-to-display-the-top-three-blog-posts,-when-a-link-is-clicked-it-should-redirect-to-the-content",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The footer display the top three blog posts",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "A link is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "It should redirect to the content",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 810799735,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.avenuecode.CommonSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\n\t... 31 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: no chrome binary at /path/to/google-chrome-stable\n  (Driver info: chromedriver\u003d2.32.498513 (2c63aa53b2c658de596ed550eb5267ec5967b351),platform\u003dLinux 4.4.0-97-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 256 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027dumbledore\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-97-generic\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:138)\n\tat com.avenuecode.StepDefinition.getDriver(StepDefinition.java:24)\n\tat com.avenuecode.CommonSteps.\u003cinit\u003e(CommonSteps.java:10)\n\t... 36 more\n",
  "status": "failed"
});
formatter.match({
  "location": "FooterSteps.the_footer_display_the_top_three_blog_posts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FooterSteps.a_link_is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FooterSteps.i_should_redirect_to_the_content()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "As a user I want the footer to display the latest event, when a event is clicked it should redirect to the Events page displaying the modal with the event details",
  "description": "",
  "id": "footer;as-a-user-i-want-the-footer-to-display-the-latest-event,-when-a-event-is-clicked-it-should-redirect-to-the-events-page-displaying-the-modal-with-the-event-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The footer display the latest event",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "A event is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "It should redirect to the events page with event details",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 30285103,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.avenuecode.CommonSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\n\t... 31 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: no chrome binary at /path/to/google-chrome-stable\n  (Driver info: chromedriver\u003d2.32.498513 (2c63aa53b2c658de596ed550eb5267ec5967b351),platform\u003dLinux 4.4.0-97-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 16 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027dumbledore\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-97-generic\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:138)\n\tat com.avenuecode.StepDefinition.getDriver(StepDefinition.java:24)\n\tat com.avenuecode.CommonSteps.\u003cinit\u003e(CommonSteps.java:10)\n\t... 36 more\n",
  "status": "failed"
});
formatter.match({
  "location": "FooterSteps.the_footer_display_the_latest_event()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FooterSteps.a_event_is_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FooterSteps.i_should_redirect_to_the_events_page_with_event_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("com/avenuecode/header.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want the Home Page header to display the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers. In Portuguese version it should display: Home, Quem Somos Nós, O Que Fazemos, Portfólio, Parceiros, Carreiras.",
  "description": "",
  "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user I want the Home Page header to display the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers.",
  "description": "",
  "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I want the Home Page header to display the link \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.;",
  "rows": [
    {
      "cells": [
        "link"
      ],
      "line": 9,
      "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.;;1"
    },
    {
      "comments": [
        {
          "line": 10,
          "value": "#| Home       |"
        },
        {
          "line": 11,
          "value": "#| Who We Are |"
        }
      ],
      "cells": [
        "What We Do"
      ],
      "line": 12,
      "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#| Home       |"
    },
    {
      "line": 11,
      "value": "#| Who We Are |"
    }
  ],
  "line": 12,
  "name": "As a user I want the Home Page header to display the following links: Home, Who We Are, What We Do, Portfolio, Partners, Careers.",
  "description": "",
  "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I want the Home Page header to display the link \"What We Do\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 31333653,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.avenuecode.CommonSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\n\t... 49 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: no chrome binary at /path/to/google-chrome-stable\n  (Driver info: chromedriver\u003d2.32.498513 (2c63aa53b2c658de596ed550eb5267ec5967b351),platform\u003dLinux 4.4.0-97-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 16 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027dumbledore\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-97-generic\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:138)\n\tat com.avenuecode.StepDefinition.getDriver(StepDefinition.java:24)\n\tat com.avenuecode.CommonSteps.\u003cinit\u003e(CommonSteps.java:10)\n\t... 54 more\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "What We Do",
      "offset": 49
    }
  ],
  "location": "HeaderSteps.i_want_the_home_page_header_to_display_the_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 13,
      "value": "#| Portifolio |"
    },
    {
      "line": 14,
      "value": "#| Partners   |"
    },
    {
      "line": 15,
      "value": "#| Careers    |"
    }
  ],
  "line": 17,
  "name": "As a user I want the Home Page header to display the following links: Home, Quem Somos Nós, O Que Fazemos, Portfólio, Parceiros, Carreiras.",
  "description": "",
  "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I switch the language to portuguese",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I want the Home Page header to display the link \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;",
  "rows": [
    {
      "cells": [
        "link"
      ],
      "line": 24,
      "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;;1"
    },
    {
      "comments": [
        {
          "line": 25,
          "value": "#| Home           |"
        },
        {
          "line": 26,
          "value": "#| Quem Somos Nós |"
        }
      ],
      "cells": [
        "O Que Fazemos"
      ],
      "line": 27,
      "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#| Home           |"
    },
    {
      "line": 26,
      "value": "#| Quem Somos Nós |"
    }
  ],
  "line": 27,
  "name": "As a user I want the Home Page header to display the following links: Home, Quem Somos Nós, O Que Fazemos, Portfólio, Parceiros, Carreiras.",
  "description": "",
  "id": "as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-who-we-are,-what-we-do,-portfolio,-partners,-careers.-in-portuguese-version-it-should-display:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;as-a-user-i-want-the-home-page-header-to-display-the-following-links:-home,-quem-somos-nós,-o-que-fazemos,-portfólio,-parceiros,-carreiras.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I switch the language to portuguese",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I want the Home Page header to display the link \"O Que Fazemos\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 32836136,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.avenuecode.CommonSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\n\t... 49 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: no chrome binary at /path/to/google-chrome-stable\n  (Driver info: chromedriver\u003d2.32.498513 (2c63aa53b2c658de596ed550eb5267ec5967b351),platform\u003dLinux 4.4.0-97-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 19 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027dumbledore\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-97-generic\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:138)\n\tat com.avenuecode.StepDefinition.getDriver(StepDefinition.java:24)\n\tat com.avenuecode.CommonSteps.\u003cinit\u003e(CommonSteps.java:10)\n\t... 54 more\n",
  "status": "failed"
});
formatter.match({
  "location": "HeaderSteps.i_switch_the_language_to_portuguese()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "O Que Fazemos",
      "offset": 49
    }
  ],
  "location": "HeaderSteps.i_want_the_home_page_header_to_display_the_link(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("com/avenuecode/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a Avenue Code website user, I want to see 6 locations for job positions in Careers Page",
  "description": "",
  "id": "as-a-avenue-code-website-user,-i-want-to-see-6-locations-for-job-positions-in-careers-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Succesfully display job locations",
  "description": "",
  "id": "as-a-avenue-code-website-user,-i-want-to-see-6-locations-for-job-positions-in-careers-page;succesfully-display-job-locations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I visit Avenue Code website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I navigate to Open Positions page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see at least \"3\" job locations",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 30761805,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.avenuecode.CommonSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:46)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:32)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\n\t... 31 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: no chrome binary at /path/to/google-chrome-stable\n  (Driver info: chromedriver\u003d2.32.498513 (2c63aa53b2c658de596ed550eb5267ec5967b351),platform\u003dLinux 4.4.0-97-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 17 milliseconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027dumbledore\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-97-generic\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:138)\n\tat com.avenuecode.StepDefinition.getDriver(StepDefinition.java:24)\n\tat com.avenuecode.CommonSteps.\u003cinit\u003e(CommonSteps.java:10)\n\t... 36 more\n",
  "status": "failed"
});
formatter.match({
  "location": "CareersSteps.i_navigate_to_Open_Positions_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "CareersSteps.i_should_see_at_least_job_locations(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});