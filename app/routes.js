//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/duplicate-form-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var duplicateQuestion = req.session.data['duplicate-question']

    // Check whether the variable matches a condition
    if (duplicateQuestion == "no"){
      // Send user to next page
      res.redirect('/name-of-form')
    } else {
      // Send user to ineligible page
      res.redirect('/new-edition/choose-a-form.html')
    }

})

router.post("/prototype-answer", function (request, response) {
  var prototype = request.session.data["prototype"];
  switch (prototype) {
    case "editor":
      response.redirect("/editor0.html");
      break;
    case "overview":
      response.redirect("/index-overview.html");
      break;
    case "library":
      response.redirect("/library.html");
      break;
    case "signIn":
      response.redirect(
        "/form-designer-mvp2/onboarding/sign-in.html.html"
      );
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
      response.redirect("/cph-overview/draft.html");
      break;
    case "live":
      response.redirect("/cph-overview/live-success.html");
      break;
    case "draftLive":
      response.redirect("/cph-overview/live-draft-created.html");
      break;
    case "closed":
      response.redirect("/cph-overview/closed-success.html");
      break;
  }
});
