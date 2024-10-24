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

router.post("/overview-editor", function (request, response) {
  var editorChoice = request.session.data["editor"];
  switch (editorChoice) {
    case "old":
      response.redirect("/editor-pets/0.html");
      break;
    case "redesign":
      response.redirect("/redesigntest/listing.html");
      break;
    default:
      // Optionally, add a fallback in case no valid option is selected
      response.redirect("/overview-editor");
      break;
  }
});


// ROUTES FOR THE REDESIGN ITERATION 1

router.post("/page-type-answer", function (request, response) {
  // Retrieve the page type from session data
  const pagetype = request.session.data["pagetype"];

  // Check the page type and redirect accordingly
  switch (pagetype) {
    case "guidance":
      response.redirect("/september/guidance/edit.html");
      break;
    case "1":
      response.redirect("/september/single/info-type.html");
      break;
    case "morethan1":
      response.redirect("/september/Multi/info-type.html");
      break;
    default:
      response.redirect("/redesign/404");
      break;
  }
});

router.post("/info-type-1-answer", function (request, response) {
  // Retrieve the page type from session data
  const infotype1 = request.session.data["infotype1"];

  // Check the page type and redirect accordingly
  switch (infotype1) {
    case "date":
      response.redirect("/september/single/edit.html");
      break;
    // Add other cases as needed
    default:
      response.redirect("/error"); // Add a default case to handle unexpected values
      break;
  }
});

router.post("/info-type-2-answer", function (request, response) {
  // Retrieve the page type from session data
  const infotype2 = request.session.data["infotype2"];

  // Check the page type and redirect accordingly
  switch (infotype2) {
    case "date":
      response.redirect("/september/Multi/edit.html");
      break;
    // Add other cases as needed
    default:
      response.redirect("/error"); // Add a default case to handle unexpected values
      break;
  }
});

// ROUTES FOR THE REDESIGN iteration 2

router.post("/page-type-answer-2", function (request, response) {
  // Retrieve the page type from session data
  const pagetype = request.session.data["pagetype2"];

  // Check the page type and redirect accordingly
  switch (pagetype) {
    case "guidance":
      response.redirect("/september/guidance/edit.html");
      break;
    case "1":
      response.redirect("/september/single/edit.html");
      break;
    case "morethan1":
      response.redirect("/september/Multi/edit.html");
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
      response.redirect("/september/single/edit.html");
      break;
    case "text":
      response.redirect("/september/single/edit.html");
      break;
    default:
      response.redirect("/error");
      break;
  }
});

router.post("/response-type-answer", function (request, response) {
  // Retrieve the page type from session data
  const pagetype = request.session.data["responseType"];

  // Check the page type and redirect accordingly
  switch (pagetype) {
    case "once":
      response.redirect("/october/single/edit-default/overview.html");
      break;
    case "morethan1":
      response.redirect("/october/morethan1.html");
      break;

    default:
      response.redirect("/redesign/404");
      break;
  }
});

router.post("/information-type-answer1", function (req, res) {
  console.log("Request body:", req.body);

  const informationQuestion1 = req.body["informationQuestion1"];
  console.log("Information Question 1:", informationQuestion1);

  // Handle the main options based on what the user selected
  if (informationQuestion1 === "text") {
    const writtenType = req.body["written"];
    console.log("Written Type:", writtenType);

    if (writtenType) {
      if (writtenType === "short-answer") {
        res.redirect("/redesigntest/templates/1-question/shorttext/edit.html");
      } else if (writtenType === "long-answer") {
        res.redirect("/redesigntest/templates/1-question/textarea/edit.html");
      } else if (writtenType === "numbers") {
        res.redirect("/redesigntest/templates/1-question/numbers/edit.html");
      } else {
        res.redirect("/redesigntest/templates/1-question/default.html");
      }
    } else {
      console.log("Missing writtenType, redirecting to default.");
      res.redirect("/redesigntest/templates/1-question/default.html");
    }


  } else if (informationQuestion1 === "date") {
    const dateType = req.body["dateType"];
    console.log("Date Type:", dateType);

    if (dateType) {
      if (dateType === "day-month-year") {
        res.redirect("/redesigntest/templates/1-question/date/edit.html");
      } else if (dateType === "month-year") {
        res.redirect("/redesigntest/templates/1-question/date/edit.html");
      } else {
        res.redirect("/redesigntest/templates/1-question/default.html");
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/1-question/default.html");
    }

  } else if (informationQuestion1 === "address") {
    res.redirect("/redesigntest/templates/1-question/address/edit.html");

  } else if (informationQuestion1 === "phone") {
    res.redirect("/redesigntest/templates/1-question/phone/edit.html");

  } else if (informationQuestion1 === "file") {
    res.redirect("/redesigntest/templates/1-question/fileupload/edit.html");

  } else if (informationQuestion1 === "email") {
    res.redirect("/redesigntest/templates/1-question/email/edit.html");

  } else if (informationQuestion1 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect("/redesigntest/templates/1-question/yesno/edit.html");
      } else if (listType === "checkboxes") {
        res.redirect("/redesigntest/templates/1-question/checkboxes/edit.html");
      } else if (listType === "radios") {
        res.redirect("/redesigntest/templates/1-question/radios/edit.html");
      } else if (listType === "select") {
        res.redirect("/redesigntest/templates/1-question/select/edit.html");
      } else {
        res.redirect("/redesigntest/templates/1-question/default.html");
      }
    } else {
      console.log("Missing listType, redirecting to default.");
      res.redirect("/redesigntest/templates/1-question/default.html");
    }

  } else {
    console.log("Unknown informationQuestion1, redirecting to 404.");
    res.redirect("/redesigntest/templates/404.html");
  }
});

// ROUTES FOR THE REDESIGN November

router.post("/page-type-answer-3", function (request, response) {
  // Retrieve the page type from session data
  const pagetype3 = request.session.data["pagetype3"];

  // Check the page type and redirect accordingly
  switch (pagetype3) {
    case "guidance":
      response.redirect("/september/guidance/edit.html");
      break;
    case "1":
      response.redirect("/redesigntest/templates/1-question/settings.html");
      break;
    case "morethan1":
      response.redirect("/september/Multi/edit.html");
      break;
    default:
      response.redirect("/redesign/404");
      break;
  }
});


router.post('/output-method', function(request, response) {

  var outputMethod = request.session.data['outputMethod']
  if (outputMethod == "email"){
      response.redirect("/form-output/in-defra/email-only.html")
  } else {
      response.redirect("/form-output/in-defra/email-and-sharepoint.html")
  }
})


router.post('/output-method-v2', function(request, response) {

  var outputMethodV2 = request.session.data['outputMethodV2']
  if (outputMethodV2 == "email"){
      response.redirect("/form-output/in-defra-v2/email-only.html")
  } else {
      response.redirect("/form-output/in-defra-v2/email-details.html")
  }
})

router.post("/question-number", function (request, response) {
  // Retrieve the page type from session data
  const questionnumber = request.session.data["questionnumber"];

  // Check the page type and redirect accordingly
  switch (questionnumber) {
    case "once":
      response.redirect("/redesigntest/templates/1-question/settings.html");
      break;
    case "morethan1":
      response.redirect("/redesigntest/templates/more-than-1-question/settings.html");
      break;
    case "guidance":
      response.redirect("/redesigntest/templates/guidance/settings.html"); // Adjust URL as needed for guidance-only option
      break;
    default:
      response.redirect("/redesign/404");
      break;
  }
});

router.post("/overview-0-shorttext", function (req, res) {
  // Access values from form data
  const overview0Shorttext = req.session.data["overview0Shorttext"];
  const setNameShorttext = req.session.data["setNameShorttext"];

  // Check the value of overview0Shorttext to control redirection
  if (overview0Shorttext === "morethan1") {
    res.redirect("/redesigntest/templates/1-question/shorttext/overview-0");  // Adjust to your actual route
  } else {
    res.redirect("/some-other-page");  // Change to the appropriate alternative page
  }
});

router.post("/information-type-answer2", function (req, res) {
  console.log("Request body:", req.body);

  const informationQuestion2 = req.body["informationQuestion2"];
  console.log("Information Question 1:", informationQuestion2);

  // Handle the main options based on what the user selected
  if (informationQuestion2 === "text") {
    const writtenType = req.body["written"];
    console.log("Written Type:", writtenType);

    if (writtenType) {
      if (writtenType === "short-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/shorttext/edit.html");
      } else if (writtenType === "long-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/textarea/edit.html");
      } else if (writtenType === "numbers") {
        res.redirect("/redesigntest/templates/more-than-1-question/numbers/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing writtenType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }


  } else if (informationQuestion1 === "date") {
    const dateType = req.body["dateType"];
    console.log("Date Type:", dateType);

    if (dateType) {
      if (dateType === "day-month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else if (dateType === "month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else if (informationQuestion2 === "address") {
    res.redirect("/redesigntest/templates/more-than-1-question/address/edit.html");

  } else if (informationQuestion2 === "phone") {
    res.redirect("/redesigntest/templates/more-than-1-question/phone/edit.html");

  } else if (informationQuestion2 === "file") {
    res.redirect("/redesigntest/templates/more-than-1-question/fileupload/edit.html");

  } else if (informationQuestion2 === "email") {
    res.redirect("/redesigntest/templates/more-than-1-question/email/edit.html");

  } else if (informationQuestion2 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect("/redesigntest/templates/more-than-1-question/yesno/edit.html");
      } else if (listType === "checkboxes") {
        res.redirect("/redesigntest/templates/more-than-1-question/checkboxes/edit.html");
      } else if (listType === "radios") {
        res.redirect("/redesigntest/templates/more-than-1-question/radios/edit.html");
      } else if (listType === "select") {
        res.redirect("/redesigntest/templates/more-than-1-question/select/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing listType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else {
    console.log("Unknown informationQuestion1, redirecting to 404.");
    res.redirect("/redesigntest/templates/404.html");
  }
});

router.post("/information-type-answer3", function (req, res) {
  console.log("Request body:", req.body);

  const informationQuestion3 = req.body["informationQuestion3"];
  console.log("Information Question 1:", informationQuestion3);

  // Handle the main options based on what the user selected
  if (informationQuestion3 === "text") {
    const writtenType = req.body["written"];
    console.log("Written Type:", writtenType);

    if (writtenType) {
      if (writtenType === "short-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/shorttext/edit.html");
      } else if (writtenType === "long-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/textarea/edit.html");
      } else if (writtenType === "numbers") {
        res.redirect("/redesigntest/templates/more-than-1-question/numbers/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing writtenType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }


  } else if (informationQuestion3 === "date") {
    const dateType = req.body["dateType"];
    console.log("Date Type:", dateType);

    if (dateType) {
      if (dateType === "day-month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else if (dateType === "month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else if (informationQuestion3 === "address") {
    res.redirect("/redesigntest/templates/more-than-1-question/address/edit.html");

  } else if (informationQuestion3 === "phone") {
    res.redirect("/redesigntest/templates/more-than-1-question/phone/edit.html");

  } else if (informationQuestion3 === "file") {
    res.redirect("/redesigntest/templates/more-than-1-question/fileupload/edit.html");

  } else if (informationQuestion3 === "email") {
    res.redirect("/redesigntest/templates/more-than-1-question/email/edit.html");

  } else if (informationQuestion3 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect("/redesigntest/templates/more-than-1-question/yesno/edit.html");
      } else if (listType === "checkboxes") {
        res.redirect("/redesigntest/templates/more-than-1-question/checkboxes/edit.html");
      } else if (listType === "radios") {
        res.redirect("/redesigntest/templates/more-than-1-question/radios/edit.html");
      } else if (listType === "select") {
        res.redirect("/redesigntest/templates/more-than-1-question/select/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing listType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else {
    console.log("Unknown informationQuestion1, redirecting to 404.");
    res.redirect("/redesigntest/templates/404.html");
  }
});

router.post("/information-type-answer2", function (req, res) {
  console.log("Request body:", req.body);

  const informationQuestion2 = req.body["informationQuestion2"];
  console.log("Information Question 1:", informationQuestion2);

  // Handle the main options based on what the user selected
  if (informationQuestion2 === "text") {
    const writtenType = req.body["written"];
    console.log("Written Type:", writtenType);

    if (writtenType) {
      if (writtenType === "short-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/shorttext/edit.html");
      } else if (writtenType === "long-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/textarea/edit.html");
      } else if (writtenType === "numbers") {
        res.redirect("/redesigntest/templates/more-than-1-question/numbers/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing writtenType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }


  } else if (informationQuestion1 === "date") {
    const dateType = req.body["dateType"];
    console.log("Date Type:", dateType);

    if (dateType) {
      if (dateType === "day-month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else if (dateType === "month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else if (informationQuestion2 === "address") {
    res.redirect("/redesigntest/templates/more-than-1-question/address/edit.html");

  } else if (informationQuestion2 === "phone") {
    res.redirect("/redesigntest/templates/more-than-1-question/phone/edit.html");

  } else if (informationQuestion2 === "file") {
    res.redirect("/redesigntest/templates/more-than-1-question/fileupload/edit.html");

  } else if (informationQuestion2 === "email") {
    res.redirect("/redesigntest/templates/more-than-1-question/email/edit.html");

  } else if (informationQuestion2 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect("/redesigntest/templates/more-than-1-questionn/yesno/edit.html");
      } else if (listType === "checkboxes") {
        res.redirect("/redesigntest/templates/more-than-1-question/checkboxes/edit.html");
      } else if (listType === "radios") {
        res.redirect("/redesigntest/templates/more-than-1-question/radios/edit.html");
      } else if (listType === "select") {
        res.redirect("/redesigntest/templates/more-than-1-question/select/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing listType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else {
    console.log("Unknown informationQuestion1, redirecting to 404.");
    res.redirect("/redesigntest/templates/404.html");
  }
});

router.post("/information-type-answer3", function (req, res) {
  console.log("Request body:", req.body);

  const informationQuestion3 = req.body["informationQuestion3"];
  console.log("Information Question 1:", informationQuestion3);

  // Handle the main options based on what the user selected
  if (informationQuestion3 === "text") {
    const writtenType = req.body["written"];
    console.log("Written Type:", writtenType);

    if (writtenType) {
      if (writtenType === "short-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/shorttext/edit.html");
      } else if (writtenType === "long-answer") {
        res.redirect("/redesigntest/templates/more-than-1-question/textarea/edit.html");
      } else if (writtenType === "numbers") {
        res.redirect("/redesigntest/templates/more-than-1-question/numbers/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing writtenType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }


  } else if (informationQuestion3 === "date") {
    const dateType = req.body["dateType"];
    console.log("Date Type:", dateType);

    if (dateType) {
      if (dateType === "day-month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else if (dateType === "month-year") {
        res.redirect("/redesigntest/templates/more-than-1-question/date/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else if (informationQuestion3 === "address") {
    res.redirect("/redesigntest/templates/more-than-1-question/address/edit.html");

  } else if (informationQuestion3 === "phone") {
    res.redirect("/redesigntest/templates/more-than-1-question/phone/edit.html");

  } else if (informationQuestion3 === "file") {
    res.redirect("/redesigntest/templates/more-than-1-question/fileupload/edit.html");

  } else if (informationQuestion3 === "email") {
    res.redirect("/redesigntest/templates/more-than-1-question/email/edit.html");

  } else if (informationQuestion3 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect("/redesigntest/templates/more-than-1-question/yesno/edit.html");
      } else if (listType === "checkboxes") {
        res.redirect("/redesigntest/templates/more-than-1-question/checkboxes/edit.html");
      } else if (listType === "radios") {
        res.redirect("/redesigntest/templates/more-than-1-question/radios/edit.html");
      } else if (listType === "select") {
        res.redirect("/redesigntest/templates/more-than-1-question/select/edit.html");
      } else {
        res.redirect("/redesigntest/templates/more-than-1-question/default.html");
      }
    } else {
      console.log("Missing listType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }

  } else {
    console.log("Unknown informationQuestion1, redirecting to 404.");
    res.redirect("/redesigntest/templates/404.html");
  }
});

router.post("/overview-0", function (req, res) {
  // Save form data to session
  req.session.data["setName"] = req.body.setName || "";
  req.session.data["overview0"] = req.body["overview0"] || "";
  res.redirect("/redesigntest/templates/1-question/overview-0.html");  //
});

/* dictionary stuff */

const path = require('path');

// Import the JSON data for common terms
const terms = require('./data/dictionary.json');

// Middleware to make terms globally available in all routes
router.use(function (req, res, next) {
  res.locals.commonTerms = terms;
  next();
});

module.exports = router;
