//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post("/duplicate-form-answer", function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var duplicateQuestion = req.session.data["duplicate-question"];

  // Check whether the variable matches a condition
  if (duplicateQuestion == "no") {
    // Send user to next page
    res.redirect("/name-of-form");
  } else {
    // Send user to ineligible page
    res.redirect("/new-edition/choose-a-form.html");
  }
});

router.post("/prototype-answer", function (request, response) {
  var prototype = request.session.data["prototype"];
  switch (prototype) {
    case "editor":
      response.redirect("/editor/0.html");
      break;
    case "overview":
      response.redirect("/index-overview.html");
      break;
    case "library":
      response.redirect("/library.html");
      break;
    case "newForm":
      response.redirect("/new-form/form-name.html");
      break;
    case "signIn":
      response.redirect("/onboarding/sign-in.html.html");
      break;
    default:
      response.redirect("/ineligible-country");
      break;
  }
});
router.post("/overview-answer", function (request, response) {
  var overviewValue = request.session.data["overview"];
  switch (overviewValue) {
    case "draft":
      response.redirect("/cph-overview/draft/complete-clean.html");
      break;
    case "live":
      response.redirect("/cph-overview/live/01-clean.html");
      break;
    case "draftLive":
      response.redirect("/cph-overview/live+draft/01.html");
      break;
    case "closed":
      response.redirect("/cph-overview/closed/01-clean.html");
      break;
  }
});

// ROUTES FOR THE REDESIGN

router.post("/page-type-answer", function (request, response) {
  // Retrieve the page type from session data
  const pagetype = request.session.data["pagetype"];

  // Check the page type and redirect accordingly
  switch (pagetype) {
    case "guidance":
      response.redirect("/redesign/guidance");
      break;
    case "1":
      response.redirect("/redesign/single-q/info-type");
      break;
    case "morethan1":
      response.redirect("/redesign/multiple-q/info-type");
      break;
    default:
      response.redirect("/redesign/404");
      break;
  }
});

router.post("/info-type-2-answer", function (request, response) {
  // Retrieve the page type from session data
  const infotype2 = request.session.data["infotype2"];

  // Check the page type and redirect accordingly
  switch (infotype2) {
    case "date":
      response.redirect("/redesign/multiple-q/page1");
      break;
    // Add other cases as needed
    default:
      response.redirect("/error"); // Add a default case to handle unexpected values
      break;
  }
});
