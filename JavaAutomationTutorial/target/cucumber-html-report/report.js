$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("footer.feature");
formatter.feature({
  "line": 1,
  "name": "Footer",
  "description": "",
  "id": "footer",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1199684348,
  "status": "passed"
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
  "name": "I visit Avenue Code website2",
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
formatter.match({
  "location": "FooterSteps.i_visit_Avenue_Code_website2()"
});
formatter.result({
  "duration": 5727478147,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.the_footer_display_the_top_three_blog_posts()"
});
formatter.result({
  "duration": 10056297010,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.a_link_is_clicked()"
});
formatter.result({
  "duration": 104440391,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.i_should_redirect_to_the_content()"
});
formatter.result({
  "duration": 10247964085,
  "status": "passed"
});
formatter.after({
  "duration": 67400776,
  "status": "passed"
});
formatter.before({
  "duration": 645998035,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "As a user I want the footer to display the latest event, when a event is clicked it should redirect to the Events page displaying the modal with the event details",
  "description": "",
  "id": "footer;as-a-user-i-want-the-footer-to-display-the-latest-event,-when-a-event-is-clicked-it-should-redirect-to-the-events-page-displaying-the-modal-with-the-event-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I visit Avenue Code website2",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The footer display the latest event",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "A event is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "It should redirect to the events page with event details",
  "keyword": "Then "
});
formatter.match({
  "location": "FooterSteps.i_visit_Avenue_Code_website2()"
});
formatter.result({
  "duration": 6662817964,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.the_footer_display_the_latest_event()"
});
formatter.result({
  "duration": 23352,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.a_event_is_clicked()"
});
formatter.result({
  "duration": 13563,
  "status": "passed"
});
formatter.match({
  "location": "FooterSteps.i_should_redirect_to_the_events_page_with_event_details()"
});
formatter.result({
  "duration": 13685,
  "status": "passed"
});
formatter.after({
  "duration": 65525600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "As a Avenue Code website user, I want to see 6 locations for job positions in Careers Page",
  "description": "",
  "id": "as-a-avenue-code-website-user,-i-want-to-see-6-locations-for-job-positions-in-careers-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 757667080,
  "status": "passed"
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
formatter.match({
  "location": "CareersSteps.i_visit_Avenue_Code_website()"
});
formatter.result({
  "duration": 3372195921,
  "status": "passed"
});
formatter.match({
  "location": "CareersSteps.i_navigate_to_Open_Positions_page()"
});
formatter.result({
  "duration": 6813948118,
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
  "duration": 28900834,
  "status": "passed"
});
formatter.after({
  "duration": 68682043,
  "status": "passed"
});
});