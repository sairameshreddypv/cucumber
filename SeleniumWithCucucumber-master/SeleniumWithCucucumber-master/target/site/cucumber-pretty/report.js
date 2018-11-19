$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sample.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Google Search",
  "description": "",
  "id": "verify-google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8412524706,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify google search",
  "description": "",
  "id": "verify-google-search;verify-google-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user naviages to google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter automation in search box",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "search results should display",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.user_naviages_to_google_search_page()"
});
formatter.result({
  "duration": 3240278883,
  "status": "passed"
});
formatter.match({
  "location": "Search.user_enter_automation_in_search_box()"
});
formatter.result({
  "duration": 84243,
  "status": "passed"
});
formatter.match({
  "location": "Search.user_click_on_search_button()"
});
formatter.result({
  "duration": 73981,
  "status": "passed"
});
formatter.match({
  "location": "Search.search_results_should_display()"
});
formatter.result({
  "duration": 74408,
  "status": "passed"
});
formatter.after({
  "duration": 174474,
  "status": "passed"
});
});