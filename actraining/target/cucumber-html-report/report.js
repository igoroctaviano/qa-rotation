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
  "duration": 6728292259,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.the_footer_display_the_top_three_blog_posts()"
});
formatter.result({
  "duration": 44689810,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.a_link_is_clicked()"
});
formatter.result({
  "duration": 91636902,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.i_should_redirect_to_the_content()"
});
formatter.result({
  "duration": 4700205228,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 69460685,
  "status": "passed"
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
  "duration": 3504181423,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.the_footer_display_the_latest_event()"
});
formatter.result({
  "duration": 29933,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.a_event_is_clicked()"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.i_should_redirect_to_the_events_page_with_event_details()"
});
formatter.result({
  "duration": 16077,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 65362556,
  "status": "passed"
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
  "duration": 4408326476,
  "status": "passed"
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
  "duration": 366434192,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 64770869,
  "status": "passed"
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
  "duration": 3540241622,
  "status": "passed"
});
formatter.match({
  "location": "HeaderSteps.i_switch_the_language_to_portuguese()"
});
formatter.result({
  "duration": 2379217541,
  "status": "passed"
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
  "duration": 390451502,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 65251485,
  "status": "passed"
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
  "duration": 3917996904,
  "status": "passed"
});
formatter.match({
  "location": "CareersSteps.i_navigate_to_Open_Positions_page()"
});
formatter.result({
  "duration": 4283922035,
  "status": "passed"
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
  "duration": 36895233,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_close_the_browser()"
});
formatter.result({
  "duration": 67128888,
  "status": "passed"
});
});