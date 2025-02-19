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
      response.redirect("/redesigntest/listing.html");
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
      } else if (writtenType === "short-answer-nf") {
        res.redirect(
          "/redesigntest/templates/1-question/shorttext/edit-nf.html"
        );
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
        res.redirect(
          "/redesigntest/templates/1-question/autocomplete/edit.html"
        );
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
      response.redirect("/redesigntest/templates/guidance/settings.html");
      break;
    case "1":
      response.redirect(
        "/redesigntest/templates/1-question/information-type.html"
      );
      break;
    case "morethan1":
      response.redirect("/september/Multi/edit.html");
      break;
    default:
      response.redirect("/redesign/404");
      break;
  }
});

router.post("/output-method", function (request, response) {
  var outputMethod = request.session.data["outputMethod"];
  if (outputMethod == "email") {
    response.redirect("/form-output/in-defra/email-only.html");
  } else {
    response.redirect("/form-output/in-defra/email-and-sharepoint.html");
  }
});

router.post("/output-method-v2", function (request, response) {
  var outputMethodV2 = request.session.data["outputMethodV2"];
  if (outputMethodV2 == "email") {
    response.redirect("/form-output/in-defra-v2/email-only.html");
  } else {
    response.redirect("/form-output/in-defra-v2/email-details.html");
  }
});

// router.post("/question-number", function (request, response) {
//   // Retrieve the page type from session data
//   const questionnumber = request.session.data["questionnumber"];

//   // Check the page type and redirect accordingly
//   switch (questionnumber) {
//     case "once":
//       response.redirect(
//         "/redesigntest/templates/1-question/information-type.html"
//       );
//       break;
//     case "oncenf":
//       response.redirect(
//         "/redesigntest/templates/1-question/information-type-nf.html"
//       );
//       break;
//     case "morethan1":
//       response.redirect(
//         "/redesigntest/templates/more-than-1-question/settings.html"
//       );
//       break;
//     case "guidance":
//       response.redirect("/redesigntest/templates/guidance/settings.html"); // Adjust URL as needed for guidance-only option
//       break;
//     default:
//       response.redirect("/redesign/404");
//       break;
//   }
// });

router.post("/overview-0-shorttext", function (req, res) {
  // Access values from form data
  const overview0Shorttext = req.session.data["overview0Shorttext"];
  const setNameShorttext = req.session.data["setNameShorttext"];

  // Check the value of overview0Shorttext to control redirection
  if (overview0Shorttext === "morethan1") {
    res.redirect("/redesigntest/templates/1-question/shorttext/overview-0"); // Adjust to your actual route
  } else {
    res.redirect("/some-other-page"); // Change to the appropriate alternative page
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/shorttext/edit.html"
        );
      } else if (writtenType === "long-answer") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/textarea/edit.html"
        );
      } else if (writtenType === "numbers") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/numbers/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else if (dateType === "month-year") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }
  } else if (informationQuestion2 === "address") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/address/edit.html"
    );
  } else if (informationQuestion2 === "phone") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/phone/edit.html"
    );
  } else if (informationQuestion2 === "file") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/fileupload/edit.html"
    );
  } else if (informationQuestion2 === "email") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/email/edit.html"
    );
  } else if (informationQuestion2 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/yesno/edit.html"
        );
      } else if (listType === "checkboxes") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/checkboxes/edit.html"
        );
      } else if (listType === "radios") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/radios/edit.html"
        );
      } else if (listType === "select") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/autocomplete/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/shorttext/edit.html"
        );
      } else if (writtenType === "long-answer") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/textarea/edit.html"
        );
      } else if (writtenType === "numbers") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/numbers/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else if (dateType === "month-year") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }
  } else if (informationQuestion3 === "address") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/address/edit.html"
    );
  } else if (informationQuestion3 === "phone") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/phone/edit.html"
    );
  } else if (informationQuestion3 === "file") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/fileupload/edit.html"
    );
  } else if (informationQuestion3 === "email") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/email/edit.html"
    );
  } else if (informationQuestion3 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/yesno/edit.html"
        );
      } else if (listType === "checkboxes") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/checkboxes/edit.html"
        );
      } else if (listType === "radios") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/radios/edit.html"
        );
      } else if (listType === "select") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/select/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/shorttext/edit.html"
        );
      } else if (writtenType === "long-answer") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/textarea/edit.html"
        );
      } else if (writtenType === "numbers") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/numbers/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else if (dateType === "month-year") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }
  } else if (informationQuestion2 === "address") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/address/edit.html"
    );
  } else if (informationQuestion2 === "phone") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/phone/edit.html"
    );
  } else if (informationQuestion2 === "file") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/fileupload/edit.html"
    );
  } else if (informationQuestion2 === "email") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/email/edit.html"
    );
  } else if (informationQuestion2 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect(
          "/redesigntest/templates/more-than-1-questionn/yesno/edit.html"
        );
      } else if (listType === "checkboxes") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/checkboxes/edit.html"
        );
      } else if (listType === "radios") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/radios/edit.html"
        );
      } else if (listType === "select") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/select/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/shorttext/edit.html"
        );
      } else if (writtenType === "long-answer") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/textarea/edit.html"
        );
      } else if (writtenType === "numbers") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/numbers/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else if (dateType === "month-year") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/date/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
      }
    } else {
      console.log("Missing dateType, redirecting to default.");
      res.redirect("/redesigntest/templates/more-than-1-question/default.html");
    }
  } else if (informationQuestion3 === "address") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/address/edit.html"
    );
  } else if (informationQuestion3 === "phone") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/phone/edit.html"
    );
  } else if (informationQuestion3 === "file") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/fileupload/edit.html"
    );
  } else if (informationQuestion3 === "email") {
    res.redirect(
      "/redesigntest/templates/more-than-1-question/email/edit.html"
    );
  } else if (informationQuestion3 === "list") {
    const listType = req.body["listType"];
    console.log("List Type:", listType);

    if (listType) {
      if (listType === "yes-no") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/yesno/edit.html"
        );
      } else if (listType === "checkboxes") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/checkboxes/edit.html"
        );
      } else if (listType === "radios") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/radios/edit.html"
        );
      } else if (listType === "select") {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/select/edit.html"
        );
      } else {
        res.redirect(
          "/redesigntest/templates/more-than-1-question/default.html"
        );
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
  res.redirect("/redesigntest/templates/1-question/information-type.html"); //
});

// Route to configure radio buttons (when the user is on the add page)
router.post("/configure-radio", function (req, res) {
  // Ensure radioList exists in the session
  req.session.data.radioList = req.session.data.radioList || [];

  // Create a new radio option
  const radioOption = {
    label: req.body.label, // Label for the radio button
    value: req.body.value, // Value of the radio button
    hint: req.body.hint, // (Optional) hint for the radio button
  };

  // Append the new radio option to the list
  currentPage.radioList.push(radioOption);

  // Redirect to the edit page after adding the new radio button
  res.redirect("/redesigntest/templates/1-question/radios/edit");
});

// Route to save the radio button option
router.post("/save-radio-option", (req, res) => {
  const pageIndex = req.session.data["currentPageIndex"] || 0;
  const formPages = req.session.data["formPages"] || [];
  const currentPage = formPages[pageIndex] || { questions: [] };

  const questionIndex = req.session.data["currentQuestionIndex"];
  const optionIndex = parseInt(req.body.index, 10);

  if (questionIndex === undefined || optionIndex === undefined) {
    return res.redirect("/redesigntest/templates/1-question/radios-nf/edit");
  }

  const question = currentPage.questions[questionIndex];

  if (question && question.options && question.options[optionIndex]) {
    // Update the data at the specified index
    question.options[optionIndex].label = req.body["option-label"];
    question.options[optionIndex].hint = req.body["option-hint"];
    question.options[optionIndex].value = req.body["option-value"];
  }

  // Save back to session
  formPages[pageIndex] = currentPage;
  req.session.data["formPages"] = formPages;

  res.redirect("/redesigntest/templates/1-question/radios-nf/edit");
});

// Route to configure checkboxes (when the user is on the add page)
router.post("/configure-checkbox", function (req, res) {
  // Ensure checkboxList exists in the session
  req.session.data.checkboxList = req.session.data.checkboxList || [];

  // Create a new checkbox option
  const checkboxOption = {
    label: req.body.label, // Label for the checkbox
    value: req.body.value, // Value of the checkbox
    hint: req.body.hint, // (Optional) hint for the checkbox
  };

  // Append the new checkbox option to the list
  req.session.data.checkboxList.push(checkboxOption);

  // Redirect to the edit page after adding the new checkbox
  res.redirect("/redesigntest/templates/1-question/checkboxes/edit");
});

// Route to save the checkbox option
router.post("/save-option", (req, res) => {
  const index = parseInt(req.body.index, 10); // Get the index from the form
  const checkboxList = req.session.data.checkboxList; // Access the checkboxList array

  if (checkboxList && checkboxList[index]) {
    // Update the data at the specified index
    checkboxList[index].label = req.body["option-label"];
    checkboxList[index].hint = req.body["option-hint"];
    checkboxList[index].value = req.body["option-value"];
  }

  // Redirect back to the edit page for checkboxes
  res.redirect("/redesigntest/templates/1-question/checkboxes-nf/edit");
});

/// Route to access the edit page for checkboxes
router.get("/redesigntest/templates/1-question/checkboxes/edit", (req, res) => {
  const checkboxList = req.session.data?.checkboxList || []; // Check if the checkboxList is empty, redirect to the add page if so
  if (checkboxList.length === 0) {
    res.redirect("/redesigntest/templates/1-question/checkboxes/add.html");
  } else {
    // Render the edit page if there are items in the list
    res.render("/redesigntest/templates/1-question/checkboxes/edit.html", {
      checkboxList: checkboxList,
    });
  }
});

/* dictionary stuff */

const path = require("path");

// Import the JSON data for common terms
const terms = require("./data/dictionary.json");

// Middleware to make terms globally available in all routes
router.use(function (req, res, next) {
  res.locals.commonTerms = terms;
  next();
});

/* comments plugin */

const db = require("./db"); // Adjust path to where your db.js is located

// POST route to handle adding comments
router.post("/add-comment", async (req, res) => {
  const { project, feedback, url } = req.body;

  if (!project || !feedback || !url) {
    return res.status(400).send("Missing required fields");
  }

  const newComment = {
    id: Date.now(),
    project,
    feedback,
    url,
    status: "pending", // Default status
  };

  try {
    const comments = await db.getComments();
    comments.push(newComment);
    await db.updateComments(comments);

    console.log("New comment added:", newComment);
    res.status(200).send("Comment added successfully");
  } catch (err) {
    console.error("Error adding comment:", err.message, err.stack);
    res.status(500).send("An error occurred while adding the comment");
  }
});

router.post("/delete-comment", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    console.error("Delete request is missing the comment ID");
    return res.status(400).send("Missing comment ID");
  }

  try {
    const comments = await db.getComments();
    const updatedComments = comments.filter(
      (comment) => comment.id !== parseInt(id, 10)
    );

    if (comments.length === updatedComments.length) {
      console.warn(`No comment found with ID ${id}`);
      return res.status(404).send("Comment not found");
    }

    await db.updateComments(updatedComments);

    console.log(`Comment with ID ${id} deleted successfully`);

    // Redirect immediately after deletion
    res.redirect("/view-comments");
  } catch (err) {
    console.error("Error deleting comment:", err.message, err.stack);
    res.status(500).send("An error occurred while deleting the comment");
  }
});

router.post("/mark-done", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    console.error("Mark done request is missing the comment ID");
    return res.status(400).send("Missing comment ID");
  }

  try {
    const data = await db.readData();

    if (!data.comments || !Array.isArray(data.comments)) {
      console.error("Comments data is missing or invalid");
      return res.status(500).send("Comments data is missing or invalid");
    }

    const comment = data.comments.find(
      (comment) => comment.id === parseInt(id, 10)
    );

    if (!comment) {
      console.warn(`No comment found with ID ${id}`);
      return res.status(404).send("Comment not found");
    }

    comment.status = "done"; // Update the status
    await db.writeData(data);

    console.log(`Comment with ID ${id} marked as done`);
    res.redirect("/view-comments"); // Redirect back to the view comments page
  } catch (err) {
    console.error("Error in /mark-done route:", err.message, err.stack);
    res.status(500).send("An error occurred while marking the comment as done");
  }
});

// (Optional) Debugging route to view all comments
router.get("/comments", (req, res) => {
  const data = db.readData();
  res.json(data.comments);
});

router.get("/view-comments", async (req, res) => {
  try {
    const comments = await db.getComments();

    // Sort comments by id in descending order
    const sortedComments = comments.sort((a, b) => b.id - a.id);

    console.log("Sorted comments for view-comments:", sortedComments);
    res.render("view-comments", { comments: sortedComments });
  } catch (err) {
    console.error("Error in /view-comments route:", err.message, err.stack);
    res.status(500).send("An error occurred while loading the comments page");
  }
});

// import lists stuff

router.get("/redesigntest/new-list", (req, res) => {
  res.render("redesigntest/new-list");
});
router.post("/redesigntest/new-list", require("./routes/lists.js").post);
router.get("/redesigntest/list-manager", require("./routes/lists.js").get);
router.get(
  "/redesigntest/edit-list/:name",
  require("./routes/lists.js").editGet
);
router.post(
  "/redesigntest/update-list/:name",
  require("./routes/lists.js").editPost
);
router.post(
  "/redesigntest/delete-list/:name",
  require("./routes/lists.js").delete
);

// New route to get predefined lists from the lists.js file
router.get("/redesigntest/api/lists", require("./routes/lists.js").getListsAPI);

// New route to get a specific list by name
router.get(
  "/redesigntest/api/list/:name",
  require("./routes/lists.js").getListAPI
);

// Preview lists
router.get(
  "/redesigntest/view-list/:name",
  require("./routes/lists.js").viewGet
);

module.exports = router;

// routes.js
const express = require("express");

// **** LISTING AND SETUP ROUTES ****************************************************
//--------------------------------------
// 2. GET /redesigntest/listing.html
//    Show the initial listing page
//--------------------------------------
router.get("/redesigntest/listing.html", function (req, res) {
  const formPages = req.session.data["formPages"] || [];

  // Ensure each question inside each page has its own options array
  formPages.forEach((page) => {
    page.questions.forEach((question) => {
      if (question.subType === "radios" || question.subType === "checkboxes") {
        // Add checkboxes here
        question.options = question.options || [];
      }
    });
  });

  console.log(
    "✅ Passing formPages with radio and checkbox options:",
    formPages
  );

  res.render("redesigntest/listing.html", {
    formPages,
  });
});

//--------------------------------------
// 3. GET /questiontype
//    Show the page type selection form
//--------------------------------------
router.get("/questiontype", function (req, res) {
  // Renders questiontype.html (the page with radio buttons:
  // "Question page" or "Guidance page")
  res.render("redesigntest/questiontype.html");
});

// **** CREATE A NEW PAGE (QUESTION OR GUIDANCE) ****************************************************

//--------------------------------------
// 4. POST /question-number
//    Handle user's choice: question page or guidance page
//--------------------------------------
router.post("/question-number", function (req, res) {
  // E.g. 'oncenf' means "Question page", 'guidance' means "Guidance page"
  const pageType = req.session.data["questionnumber"];

  // Make sure we have an array to store pages
  if (!req.session.data["formPages"]) {
    req.session.data["formPages"] = [];
  }

  // Create a new page object
  const newPage = {
    pageId: Date.now(), // unique ID
    pageType: pageType === "guidance" ? "guidance" : "question",
    questions: [],
  };

  // Push it into formPages
  const formPages = req.session.data["formPages"];
  formPages.push(newPage);

  // Keep track of which page index we're editing
  // (the newly added page is always at formPages.length - 1)
  req.session.data["currentPageIndex"] = formPages.length - 1;

  // Decide where to go next
  if (pageType === "oncenf") {
    // If user chose "question" page
    return res.redirect(
      "/redesigntest/templates/1-question/information-type-nf.html"
    );
  } else if (pageType === "guidance") {
    // If user chose "guidance" page
    return res.redirect(
      "/redesigntest/templates/1-question/guidance-configuration.html"
    );
  } else {
    // If user somehow chose nothing, redirect back or show an error
    return res.redirect("/questiontype");
  }
});

// **** Choose Question Type / Subtype ****************************************************

//--------------------------------------
// 5. POST /information-type-answer-nf
//    Handle user picking the specific question type (e.g. "text", "date")
//--------------------------------------
router.post("/information-type-answer-nf", function (req, res) {
  // 1. The main question type (e.g. "text", "date", "list")
  const mainType = req.body["informationQuestion1"];

  // 2. Subtypes for each category:
  const writtenSubType = req.body["written"];
  const dateSubType = req.body["dateType"];
  const listSubType = req.body["listType"];

  // Ensure `formPages` exists
  const formPages = req.session.data["formPages"] || [];

  // Get the current page index - DO NOT CREATE NEW PAGE
  const pageIndex = req.session.data["currentPageIndex"];
  if (pageIndex === undefined || !formPages[pageIndex]) {
    console.error("❌ Current page not found in session");
    return res.redirect("/redesigntest/listing.html");
  }

  // Get the current page
  const currentPage = formPages[pageIndex];

  // 3. Store question type and subtypes in session
  req.session.data["currentQuestionType"] = mainType;
  req.session.data["writtenSubType"] = writtenSubType;
  req.session.data["dateSubType"] = dateSubType;
  req.session.data["listSubType"] = listSubType;

  // 4. Create and add the new question
  const newQuestion = {
    questionId: Date.now(),
    type: mainType,
    subType: listSubType || dateSubType || writtenSubType,
    label: "New question",
    options: [], // Initialize empty options array
  };

  // Add the question to the current page
  currentPage.questions.push(newQuestion);

  // Store the question index
  req.session.data["currentQuestionIndex"] = currentPage.questions.length - 1;

  // 5. Save back to session
  req.session.data["formPages"] = formPages;

  // 6. Redirect to the question configuration route
  res.redirect("/question-configuration");
});

//--------------------------------------
// 6. GET /question-configuration
//    Render different templates depending on the user's choice
//--------------------------------------
router.get("/question-configuration", function (req, res) {
  // Retrieve the stored type choices from session
  const mainType = req.session.data["currentQuestionType"];
  const writtenSubType = req.session.data["writtenSubType"];
  const dateSubType = req.session.data["dateSubType"];
  const listSubType = req.session.data["listSubType"];

  // Decide which template to render
  let templateToRender = "/redesigntest/templates/1-question/default.html";

  // Decide which template to render based on mainType & subType
  if (mainType === "text") {
    // Choose the template based on writtenSubType
    if (writtenSubType === "short-answer-nf") {
      templateToRender =
        "/redesigntest/templates/1-question/shorttext/edit-nf.html";
    } else if (writtenSubType === "long-answer") {
      templateToRender =
        "/redesigntest/templates/1-question/textarea/edit-nf.html";
    } else if (writtenSubType === "numbers") {
      templateToRender =
        "/redesigntest/templates/1-question/numbers/edit-nf.html";
    } else {
      // Fallback for an unknown sub-type
      templateToRender = "/redesigntest/templates/1-question/default.html";
    }
  } else if (mainType === "date") {
    if (dateSubType === "day-month-year") {
      templateToRender = "/redesigntest/templates/1-question/date/edit-nf.html";
    } else if (dateSubType === "month-year") {
      templateToRender =
        "/redesigntest/templates/1-question/date-mmyy/edit-nf.html";
    } else {
      templateToRender = "/redesigntest/templates/1-question/default.html";
    }
  } else if (mainType === "address") {
    templateToRender =
      "/redesigntest/templates/1-question/address/edit-nf.html";
  } else if (mainType === "phone") {
    templateToRender = "/redesigntest/templates/1-question/phone/edit-nf.html";
  } else if (mainType === "file") {
    templateToRender =
      "/redesigntest/templates/1-question/fileupload/edit-nf.html";
  } else if (mainType === "email") {
    templateToRender = "/redesigntest/templates/1-question/email/edit-nf.html";
  } else if (mainType === "list") {
    if (listSubType === "yes-no") {
      templateToRender =
        "/redesigntest/templates/1-question/yesno/edit-nf.html";
    } else if (listSubType === "checkboxes") {
      templateToRender =
        "/redesigntest/templates/1-question/checkboxes-nf/add.html";
    } else if (listSubType === "radios") {
      templateToRender =
        "/redesigntest/templates/1-question/radios-nf/add.html";
    } else if (listSubType === "select") {
      templateToRender =
        "/redesigntest/templates/1-question/autocomplete-nf/edit.html";
    } else {
      templateToRender = "/redesigntest/templates/1-question/default.html";
    }
  }

  // Finally, render the chosen template
  res.render(templateToRender);
});

// **** SAVING QUESTION CONFIGURATION ****

// POST /question-configuration-save
router.post("/question-configuration-save", function (req, res) {
  // 1. Ensure formPages is initialized
  if (!req.session.data["formPages"]) {
    req.session.data["formPages"] = [];
  }

  // 2. Identify current page
  const pageIndex = req.session.data["currentPageIndex"] || 0;
  const formPages = req.session.data["formPages"];
  const currentPage = formPages[pageIndex] || { questions: [] };

  if (!currentPage.questions) {
    currentPage.questions = [];
  }

  // 3. Read the question type & subtypes from session
  const questionType = req.session.data["currentQuestionType"];
  const writtenSubType = req.session.data["writtenSubType"];
  const dateSubType = req.session.data["dateSubType"];
  const listSubType = req.session.data["listSubType"];

  // 4. Determine the subtype
  let finalSubType = null;
  if (questionType === "text") {
    finalSubType = writtenSubType;
  } else if (questionType === "date") {
    finalSubType = dateSubType;
  } else if (questionType === "list") {
    finalSubType = listSubType;
  }

  // 5. Capture the question label
  let questionLabel = "";
  switch (questionType) {
    case "phone":
      questionLabel = req.body["questionLabelInputPhone"] || "Phone number";
      break;
    case "text":
      if (writtenSubType === "short-answer-nf") {
        questionLabel =
          req.body["questionLabelInputShortText"] || "Short answer";
      } else if (writtenSubType === "long-answer") {
        questionLabel = req.body["questionLabelInputTextArea"] || "Long answer";
      } else if (writtenSubType === "numbers") {
        questionLabel = req.body["questionLabelInputNumbers"] || "Numbers only";
      } else {
        questionLabel = req.body["questionLabelInputText"] || "Text question";
      }
      break;
    case "email":
      questionLabel = req.body["questionLabelInputEmail"] || "Email address";
      break;
    case "date":
      questionLabel = req.body["questionLabelInputDate"] || "Date question";
      break;
    case "address":
      questionLabel = req.body["questionLabelInputAddress"] || "Address";
      break;
    case "file":
      questionLabel = req.body["multiQuestionLabelInputFile"] || "File upload";
      break;
    case "list":
      if (listSubType === "yes-no") {
        questionLabel =
          req.body["questionLabelInputYesno"] || "Yes/No question";
      } else if (listSubType === "checkboxes") {
        questionLabel =
          req.body["multiQuestionLabelInputCheckboxes"] ||
          "Checkboxes question";
      } else if (listSubType === "radios") {
        questionLabel =
          req.body["multiQuestionLabelInputRadios"] || "Radios question";
      } else if (listSubType === "select") {
        questionLabel =
          req.body["questionLabelInputAutocomplete"] || "Select an option";
      } else {
        questionLabel = req.body["questionLabelInputList"] || "List question";
      }
      break;
    default:
      questionLabel = "Test question"; // Fallback
      break;
  }

  // 6. Capture the question hint
  let questionHint = req.body["questionHintInput"] || "";

  // 7. Capture the options (For Radio and Checkbox lists)
  let questionOptions = [];

  if (questionType === "list" && listSubType === "radios") {
    // Copy from currentPage.radioList
    questionOptions = [...(currentPage.radioList || [])];
  } else if (questionType === "list" && listSubType === "checkboxes") {
    // Copy from the question's existing .options array
    const existingQuestionIndex = req.session.data["currentQuestionIndex"];
    const existingQuestion = currentPage.questions[existingQuestionIndex];

    questionOptions = existingQuestion.options || [];
  }

  // 8. Create or update the question
  let existingQuestionIndex = req.session.data["currentQuestionIndex"];
  if (
    existingQuestionIndex !== undefined &&
    currentPage.questions[existingQuestionIndex]
  ) {
    // Update existing question
    currentPage.questions[existingQuestionIndex].label = questionLabel;
    currentPage.questions[existingQuestionIndex].hint = questionHint;
    currentPage.questions[existingQuestionIndex].options = questionOptions; // ✅ Save options
  } else {
    // Create new question
    const newQuestion = {
      questionId: Date.now(),
      label: questionLabel,
      hint: questionHint,
      type: questionType,
      subType: finalSubType,
      options: questionOptions, // ✅ Attach options
    };
    currentPage.questions.push(newQuestion);
  }

  // 9. Save back to session
  formPages[pageIndex] = currentPage;
  req.session.data["formPages"] = formPages;

  console.log(
    "✅ Updated formPages (saved options):",
    JSON.stringify(formPages, null, 2)
  );

  // 10. Redirect to the page overview
  res.redirect("/page-overview");
});

// **** PAGE OVERVIEW AND EDITING ****************************************************

//--------------------------------------
// 8. GET /page-overview
//    Display a summary of the questions on the current page
//--------------------------------------
router.get("/page-overview", function (req, res) {
  const pageIndex = req.session.data["currentPageIndex"] || 0;
  const formPages = req.session.data["formPages"] || [];

  if (!formPages[pageIndex]) {
    console.log("⚠️ No current page found, redirecting...");
    return res.redirect("/redesigntest/listing.html");
  }

  const currentPage = formPages[pageIndex];

  // Ensure the page has an ID
  if (!currentPage.pageId) {
    currentPage.pageId = Date.now(); // Generate an ID if one doesn't exist
    formPages[pageIndex] = currentPage;
    req.session.data["formPages"] = formPages;
  }

  // 🔍 Debugging: Log the questions and options before rendering
  currentPage.questions.forEach((question, index) => {
    console.log(
      `📌 Question #${index + 1}:`,
      JSON.stringify(question, null, 2)
    );
    if (question.type === "list" && question.subType === "radios") {
      console.log("✅ Radio Options:", question.options || []);
    }
  });

  console.log("📌 Current Page ID:", currentPage.pageId); // Debug log for page ID

  res.render("redesigntest/templates/1-question/page-overview", {
    currentPage,
  });
});

//--------------------------------------
// Edit page
//--------------------------------------
router.get("/edit-page/:pageId", function (req, res) {
  const pageId = req.params.pageId;
  const formPages = req.session.data["formPages"] || [];
  // Find the page to edit by matching pageId as a string
  const pageIndex = formPages.findIndex(
    (page) => String(page.pageId) === pageId
  );
  if (pageIndex === -1) {
    // If the page isn't found, redirect back to the listing page (or show an error)
    return res.redirect("/redesigntest/listing.html");
  }
  // Set this page as the current page for editing
  req.session.data["currentPageIndex"] = pageIndex;

  // Redirect to the appropriate edit interface.
  const pageToEdit = formPages[pageIndex];
  if (pageToEdit.pageType === "question") {
    res.redirect("/page-overview");
  } else if (pageToEdit.pageType === "guidance") {
    res.redirect(
      "/redesigntest/templates/1-question/guidance-configuration.html"
    );
  } else {
    // Fallback
    res.redirect("/redesigntest/listing.html");
  }
});

//--------------------------------------
// Edit an existing question
//--------------------------------------
router.get("/edit-question", function (req, res) {
  const questionId = (req.query.questionId || "").trim();
  console.log("Editing question with ID:", questionId);
  if (!questionId) {
    console.log("No questionId provided – redirecting to page overview.");
    return res.redirect("/page-overview");
  }

  // Retrieve formPages from session
  const formPages = req.session.data["formPages"] || [];

  // Search across all pages to find the matching question
  let foundPageIndex = -1;
  let foundQuestionIndex = -1;
  for (let i = 0; i < formPages.length; i++) {
    const qIndex = formPages[i].questions.findIndex(
      (q) => String(q.questionId) === questionId
    );
    if (qIndex !== -1) {
      foundPageIndex = i;
      foundQuestionIndex = qIndex;
      break;
    }
  }

  if (foundPageIndex === -1) {
    console.log("Question not found – redirecting to page overview.");
    return res.redirect("/page-overview");
  }

  // Set the found page as the current page for editing
  req.session.data["currentPageIndex"] = foundPageIndex;
  req.session.data["currentQuestionIndex"] = foundQuestionIndex;

  const question = formPages[foundPageIndex].questions[foundQuestionIndex];
  console.log("Editing question details:", question);

  // Also store the question type and its subtype
  req.session.data["currentQuestionType"] = question.type;
  if (question.type === "text") {
    req.session.data["writtenSubType"] = question.subType;
  } else if (question.type === "date") {
    req.session.data["dateSubType"] = question.subType;
  } else if (question.type === "list") {
    req.session.data["listSubType"] = question.subType;
  }

  res.redirect("/question-configuration");
});

// **** SAVING PAGE LEVEL CHANGES ****************************************************

//--------------------------------------
// 8a. POST /page-overview
//     Handle the user clicking "Save changes" on page-overview
//--------------------------------------
router.post("/page-overview", function (req, res) {
  console.log("req.body:", req.body);

  const pageIndex = req.session.data["currentPageIndex"] || 0;
  const formPages = req.session.data["formPages"] || [];
  const currentPage = formPages[pageIndex] || { questions: [] };

  // The page heading & guidance text
  const pageHeading = req.body.pageHeading || "";
  const guidanceTextarea = req.body.guidanceTextarea || "";

  // If "guidance" checkbox is checked, req.body.guidance === "guidance"
  if (req.body.guidance === "guidance") {
    currentPage.hasGuidance = true;
  } else {
    currentPage.hasGuidance = false;
  }

  // The rest of your multiple responses logic
  let allowMultipleResponses = req.body.allowMultipleResponses;
  const questionSetName = req.body.questionSetName || "";
  const minResponseCount = req.body.minResponseCount || "";
  const maxResponseCount = req.body.maxResponseCount || "";

  if (Array.isArray(allowMultipleResponses)) {
    if (allowMultipleResponses.includes("true")) {
      allowMultipleResponses = "true";
    } else {
      allowMultipleResponses = "false";
    }
  }

  currentPage.pageHeading = pageHeading;
  currentPage.guidanceTextarea = guidanceTextarea;

  if (allowMultipleResponses === "true") {
    currentPage.allowMultipleResponses = true;
    currentPage.setName = questionSetName;
    currentPage.minResponseCount = minResponseCount;
    currentPage.maxResponseCount = maxResponseCount;
  } else {
    currentPage.allowMultipleResponses = false;
    currentPage.setName = "";
    currentPage.minResponseCount = "";
    currentPage.maxResponseCount = "";
  }

  formPages[pageIndex] = currentPage;
  req.session.data["formPages"] = formPages;

  console.log("Updated currentPage:", currentPage);
  res.redirect("/page-overview");
});

//--------------------------------------
// Test form (not specifically used in flow)
//--------------------------------------
router.post("/test-form", (req, res) => {
  // Grab the posted value(s)
  let allowMultipleResponses = req.body.allowMultipleResponses;

  // If it's an array of values, check if "true" is included
  if (Array.isArray(allowMultipleResponses)) {
    if (allowMultipleResponses.includes("true")) {
      allowMultipleResponses = "true";
    } else {
      allowMultipleResponses = "false";
    }
  }

  console.log("Final allowMultipleResponses:", allowMultipleResponses);
  res.send("Check your console for output");
});

// **** CHECKBOXES (ADD/EDIT/FINALIZE) ****************************************************
// Configure checkbox option route
router.post("/configure-checkbox-nf", function (req, res) {
  const currentPageIndex = req.session.data["currentPageIndex"];
  const questionIndex = req.session.data["currentQuestionIndex"];
  const formPages = req.session.data["formPages"];
  const currentPage = formPages[currentPageIndex];
  const currentQuestion = currentPage.questions[questionIndex];

  // Get the values from the form
  const label = req.body.label;
  const hint = req.body.hint;
  const value = req.body.value || label;

  // **Add a unique optionId here**
  const newOption = {
    optionId: Date.now(), // <---- UNIQUE ID
    label: req.body.label,
    value: value,
    hint: hint,
  };

  // Initialize options array if it doesn't exist
  if (!currentQuestion.options) {
    currentQuestion.options = [];
  }

  // Add the option to the question's options array
  currentQuestion.options.push(newOption);

  // Save back to session
  req.session.data["formPages"] = formPages;

  console.log("✅ Added checkbox option:", {
    questionId: currentQuestion.questionId,
    newOption,
    allOptions: currentQuestion.options,
  });

  res.redirect("/redesigntest/templates/1-question/checkboxes-nf/edit");
});

// Route to save the checkbox option
router.post("/save-checkbox-option", (req, res) => {
  const optionId = parseInt(req.body.optionId, 10); // The unique ID from the form
  const currentPageIndex = req.session.data["currentPageIndex"];
  const questionIndex = req.session.data["currentQuestionIndex"];
  const formPages = req.session.data["formPages"];
  const currentQuestion = formPages[currentPageIndex].questions[questionIndex];

  // Find the matching option by `optionId`
  const foundIndex = currentQuestion.options.findIndex(
    (opt) => opt.optionId === optionId
  );
  if (foundIndex !== -1) {
    currentQuestion.options[foundIndex].label = req.body["option-label"];
    currentQuestion.options[foundIndex].hint = req.body["option-hint"];
    currentQuestion.options[foundIndex].value = req.body["option-value"];
  }

  // Save back to session
  req.session.data["formPages"] = formPages;

  res.redirect("/redesigntest/templates/1-question/checkboxes-nf/edit");
});

// Route to save the checkbox option
router.post("/save-option", (req, res) => {
  const index = parseInt(req.body.index, 10); // Get the index from the form
  const checkboxList = req.session.data.checkboxList; // Access the checkboxList array

  if (checkboxList && checkboxList[index]) {
    // Update the data at the specified index
    checkboxList[index].label = req.body["option-label"];
    checkboxList[index].hint = req.body["option-hint"];
    checkboxList[index].value = req.body["option-value"];
  }

  // Redirect back to the edit page for checkboxes
  res.redirect("/redesigntest/templates/1-question/checkboxes-nf/edit");
});

/// Route to access the edit page for checkboxes
router.get(
  "/redesigntest/templates/1-question/checkboxes-nf/edit",
  function (req, res) {
    const formPages = req.session.data["formPages"] || [];
    const pageIndex = req.session.data["currentPageIndex"];
    const questionIndex = req.session.data["currentQuestionIndex"];

    console.log("Loading edit page:", {
      pageIndex,
      questionIndex,
      formPages,
    });

    const currentPage = formPages[pageIndex];
    if (!currentPage) {
      console.error("Page not found");
      return res.redirect("/redesigntest/listing.html");
    }

    const currentQuestion = currentPage.questions[questionIndex];
    if (!currentQuestion) {
      console.error("Question not found");
      return res.redirect(
        "/redesigntest/templates/1-question/checkboxes-nf/add.html"
      );
    }

    res.render("redesigntest/templates/1-question/checkboxes-nf/edit.html", {
      currentPageIndex: pageIndex,
      currentQuestionIndex: questionIndex,
      formPages: formPages,
    });
  }
);

// -------------
//  /checkboxes-finalize
// -------------
router.post("/checkboxes-finalize", function (req, res) {
  const formPages = req.session.data["formPages"] || [];
  const pageIndex = req.session.data["currentPageIndex"];
  const questionIndex = req.session.data["currentQuestionIndex"];

  console.log(
    "Before finalize - Current question:",
    formPages[pageIndex].questions[questionIndex]
  );

  // Get the current question
  const currentQuestion = formPages[pageIndex].questions[questionIndex];

  // IMPORTANT: Keep the existing options array
  const existingOptions = currentQuestion.options || [];

  // Update the question with final values while preserving options
  formPages[pageIndex].questions[questionIndex] = {
    ...currentQuestion,
    label: req.body.multiQuestionLabelInputCheckboxes || "Checkboxes question",
    hint: req.body.questionHintTextInputCheckboxes || "",
    options: existingOptions, // Preserve the options array
  };

  // Save back to session
  req.session.data["formPages"] = formPages;

  console.log(
    "After finalize - Updated question:",
    formPages[pageIndex].questions[questionIndex]
  );

  res.redirect("/page-overview");
});

// **** RADIOS ROUTES (ADD/EDIT/FINALIZE) ****************************************************

// Update the configure-radio-nf route to ensure options are being saved properly
router.post("/configure-radio-nf", function (req, res) {
  const formPages = req.session.data["formPages"] || [];
  const pageIndex = req.session.data["currentPageIndex"];

  // Ensure we have a valid page
  if (!formPages[pageIndex]) {
    formPages[pageIndex] = { questions: [], radioList: [] };
  }

  const currentPage = formPages[pageIndex];

  // Ensure radioList exists on the page object
  if (!currentPage.radioList) {
    currentPage.radioList = [];
  }

  // Create new radio option
  const radioOption = {
    label: req.body.label,
    value: req.body.value || req.body.label.toLowerCase().replace(/\s+/g, "-"),
    hint: req.body.hint || "",
  };

  // Add to radioList
  currentPage.radioList.push(radioOption);

  // Save back to session
  formPages[pageIndex] = currentPage;
  req.session.data["formPages"] = formPages;

  // Log the state after adding option
  console.log("✅ Added radio option:", {
    radioOption,
    currentPage,
    radioList: currentPage.radioList,
  });

  res.redirect("/redesigntest/templates/1-question/radios-nf/edit");
});

// Edit page for radio options
router.get("/redesigntest/templates/1-question/radios-nf/edit", (req, res) => {
  const formPages = req.session.data["formPages"] || [];
  const pageIndex = req.session.data["currentPageIndex"] || 0;

  // Ensure current page exists
  if (!formPages[pageIndex]) {
    console.log("⚠️ No current page found, redirecting...");
    return res.redirect(
      "/redesigntest/templates/1-question/radios-nf/add.html"
    );
  }

  const currentPage = formPages[pageIndex];

  // Ensure radioList exists
  currentPage.radioList = currentPage.radioList || [];

  console.log("Current radio options:", currentPage.radioList);

  // Pass the radioList to the template
  res.render("redesigntest/templates/1-question/radios-nf/edit.html", {
    radioList: currentPage.radioList,
  });
});

// Route to access the edit page for radio buttons
router.get("/redesigntest/templates/1-question/radios-nf/edit", (req, res) => {
  const radioList = req.session.data?.radioList || [];

  // Check if the radioList is empty, redirect to the add page if so
  if (radioList.length === 0) {
    res.redirect("/redesigntest/templates/1-question/radios-nf/add.html");
  } else {
    // Render the edit page if there are items in the list
    res.render("/redesigntest/templates/1-question/radios-nf/edit.html", {
      radioList: radioList,
    });
  }
});

router.post("/update-radio-label", function (req, res) {
  // Update the session with the provided label
  req.session.data.currentRadioQuestionLabel = req.body.label || "";
  res.json({ success: true });
});

// -------------
//  /radios-finalize
// -------------
router.post("/radios-finalize", (req, res) => {
  const questionLabel = req.body.questionLabelInputRadios || "Radios question";

  // Ensure formPages exist
  req.session.data["formPages"] = req.session.data["formPages"] || [];

  // Ensure currentPage exists
  const pageIndex = req.session.data["currentPageIndex"];
  if (pageIndex === undefined || !req.session.data["formPages"][pageIndex]) {
    console.log("⚠️ No current page found, creating a new one...");
    req.session.data["formPages"].push({
      pageId: Date.now(),
      pageType: "question",
      questions: [],
      radioList: [],
    });
    req.session.data["currentPageIndex"] =
      req.session.data["formPages"].length - 1;
  }

  const currentPage =
    req.session.data["formPages"][req.session.data["currentPageIndex"]];

  // 🔥 Ensure `radioList` is defined for this page
  currentPage.radioList = currentPage.radioList || [];

  // ✅ Move `radioList` into the new question
  const newQuestion = {
    questionId: Date.now(),
    label: questionLabel,
    hint: "",
    type: "list",
    subType: "radios",
    options: [...currentPage.radioList], // ✅ FIX: Store options properly
  };

  // Push the new question into the questions array
  currentPage.questions.push(newQuestion);

  // ✅ Save back to session
  req.session.data["formPages"] = req.session.data["formPages"];

  // ✅ Clear `radioList` **only after** assigning it to `options`
  currentPage.radioList = [];

  console.log(
    "✅ Final Question Object (with options):",
    JSON.stringify(newQuestion, null, 2)
  );

  res.redirect("/page-overview");
});

// **** CONDITIONS ROUTES ****************************************************

//--------------------------------------
// GET /conditions
// Show conditions for the current page
//--------------------------------------

// Helper function to find a question by ID
function findQuestionById(formPages, questionId) {
  for (const page of formPages) {
    if (page.questions) {
      for (const question of page.questions) {
        if (question.questionId.toString() === questionId.toString()) {
          return {
            ...question,
            label: question.label || question.text, // Ensure we have a label
          };
        }
      }
    }
  }
  return null;
}

router.get("/conditions/:pageId", function (req, res) {
  const pageId = parseInt(req.params.pageId, 10);
  const formPages = req.session.data["formPages"] || [];

  // Find the current page
  const currentPage = formPages.find((page) => page.pageId === pageId);

  if (!currentPage) {
    console.log("Page not found:", pageId);
    return res.redirect("/redesigntest/listing.html");
  }

  // Get the page index and create a label
  const pageIndex = formPages.indexOf(currentPage);

  // Get the page heading or first question label
  let pageLabel;
  if (currentPage.pageHeading) {
    pageLabel = `Page ${pageIndex + 1}: ${currentPage.pageHeading}`;
  } else if (currentPage.questions && currentPage.questions.length > 0) {
    pageLabel = `Page ${pageIndex + 1}: ${currentPage.questions[0].label}`;
  } else {
    pageLabel = `Page ${pageIndex + 1}`;
  }

  // Get available questions for conditions
  let availableQuestions = [];
  formPages.forEach((page) => {
    if (page.questions) {
      page.questions.forEach((question) => {
        if (["yes-no", "radios", "checkboxes"].includes(question.subType)) {
          availableQuestions.push({
            value: question.questionId,
            text: question.label,
            type: question.subType,
            options: question.options || [],
          });
        }
      });
    }
  });

  // Collect all conditions from all pages except current page
  let allConditions = [];
  formPages.forEach((page) => {
    if (page.conditions && page.pageId !== pageId) {
      page.conditions.forEach((condition) => {
        allConditions.push({
          value: condition.id,
          text: condition.conditionName,
          hint: condition.rules
            .map(
              (rule) => `${rule.questionText} ${rule.operator} ${rule.value}`
            )
            .join(" AND "),
        });
      });
    }
  });

  // For the dropdowns
  const defaultExistingOption = {
    value: "",
    text: "Select an existing condition",
    selected: true,
  };
  const defaultNewOption = {
    value: "",
    text: "Select a question",
    selected: true,
  };

  const combinedExistingConditions = [defaultExistingOption, ...allConditions];
  const combinedQuestions = [defaultNewOption, ...availableQuestions];

  // Store current page ID in session
  req.session.data["currentPageId"] = pageId;

  res.render("redesigntest/templates/1-question/conditions.html", {
    currentPage: currentPage,
    pageId: pageId,
    question: {
      label: pageLabel,
    },
    availableQuestions: combinedQuestions,
    availableConditions: combinedExistingConditions,
    conditions: currentPage.conditions || [],
  });
});

//--------------------------------------
// 2. POST /conditions-add
//    Add a new condition to the page
//--------------------------------------
router.post("/conditions-add", function (req, res) {
  console.log("Current conditions:", req.session.data.conditions || []);
  console.log("Adding condition - Debug info:", {
    pageId: req.session.data.currentPageId,
    availablePages: req.session.data.formPages?.map((p) => p.pageId),
    body: req.body,
  });

  // Get the current page
  const pageId = req.session.data.currentPageId;
  const formPages = req.session.data.formPages || [];
  const currentPage = formPages.find((page) => page.pageId === pageId);

  if (!currentPage) {
    console.error("Current page not found");
    return res.redirect("back");
  }

  // Initialize conditions array if it doesn't exist
  currentPage.conditions = currentPage.conditions || [];

  if (req.body.conditionType === "existing") {
    // Handle existing condition
    const existingConditionId = parseInt(req.body.existingConditionId);

    // Find the existing condition from all pages
    let existingCondition = null;
    for (const page of formPages) {
      if (page.conditions) {
        const found = page.conditions.find((c) => c.id === existingConditionId);
        if (found) {
          existingCondition = found;
          break;
        }
      }
    }

    console.log("Found existing condition:", existingCondition);

    if (existingCondition) {
      // Create a deep copy of the existing condition with a new ID
      const newCondition = {
        id: Date.now(),
        conditionName: existingCondition.conditionName,
        rules: existingCondition.rules.map((rule) => ({
          questionText: rule.questionText,
          operator: rule.operator,
          value: rule.value,
          logicalOperator: rule.logicalOperator,
        })),
        text: existingCondition.text,
      };

      console.log("New condition created from existing:", newCondition);
      currentPage.conditions.push(newCondition);
    } else {
      console.error(
        "Could not find existing condition with ID:",
        existingConditionId
      );
    }
  } else {
    // Handle new condition
    let rules;
    try {
      rules = JSON.parse(req.body.rules);
    } catch (e) {
      console.error("Error parsing rules:", e);
      rules = [];
    }

    // Create the new condition
    const newCondition = {
      id: Date.now(),
      conditionName: req.body.conditionName,
      rules: rules.map((rule) => ({
        questionText: rule.questionText,
        operator: rule.operator,
        value: rule.value,
        logicalOperator: rule.logicalOperator,
      })),
      text: rules
        .map((rule) => `${rule.questionText} ${rule.operator} ${rule.value}`)
        .join(" AND "),
    };

    console.log("New condition created:", newCondition);
    currentPage.conditions.push(newCondition);
  }

  console.log("Updated page conditions:", currentPage.conditions);

  // Save back to session
  req.session.data.formPages = formPages;

  res.redirect("back");
});

//--------------------------------------
// 3. POST /conditions-remove
//    Remove a condition
//--------------------------------------
router.post("/conditions-remove", function (req, res) {
  const pageId = req.session.data["currentPageId"]; // Get the stored page ID
  const formPages = req.session.data["formPages"] || [];

  // Find the specific page by ID
  const pageIndex = formPages.findIndex((page) => page.pageId === pageId);

  if (pageIndex === -1) {
    console.log("⚠️ Page not found:", pageId);
    return res.redirect("/redesigntest/listing.html");
  }

  // Remove condition by ID
  const conditionId = req.body.conditionId;
  formPages[pageIndex].conditions = formPages[pageIndex].conditions.filter(
    (c) => c.id.toString() !== conditionId
  );

  // Save back to session
  req.session.data["formPages"] = formPages;

  console.log("✅ Removed condition from page:", pageId);
  console.log("Current conditions:", formPages[pageIndex].conditions);

  res.redirect(`/conditions/${pageId}`);
});

// **** PAGE REORDERING ****************************************************

router.get("/redesigntest/reorder/main.html", function (req, res) {
  const formPages = req.session.data["formPages"] || [];
  res.render("redesigntest/reorder/main.html", { formPages: formPages });
});

router.post("/update-page-order", function (req, res) {
  const orderedIds = req.body.orderedIds;
  if (!orderedIds || !Array.isArray(orderedIds)) {
    return res.json({ success: false, message: "Invalid order provided" });
  }

  // Get the existing pages from session
  const formPages = req.session.data["formPages"] || [];

  // Build a new array in the order specified by orderedIds
  const newOrder = [];
  orderedIds.forEach((id) => {
    const page = formPages.find((page) => String(page.pageId) === id);
    if (page) {
      newOrder.push(page);
    }
  });

  // If we have a valid new order, update the session and respond with success
  if (newOrder.length > 0) {
    req.session.data["formPages"] = newOrder;
    console.log(
      "Updated formPages order:",
      newOrder.map((page) => page.pageId)
    );
    return res.json({ success: true });
  } else {
    return res.json({
      success: false,
      message: "No pages found for the new order",
    });
  }
});

// Add this route to handle the delete confirmation page
router.get("/redesigntest/templates/delete/:pageId", function (req, res) {
  const pageId = parseInt(req.params.pageId, 10);
  const formPages = req.session.data["formPages"] || [];

  console.log("Delete confirmation page:", {
    requestedPageId: pageId,
    availablePages: formPages.map((p) => p.pageId),
  });

  const currentPage = formPages.find((page) => page.pageId === pageId);

  if (!currentPage) {
    console.log("Page not found:", pageId);
    return res.redirect("/redesigntest/listing.html");
  }

  console.log("Found page to delete:", {
    pageId: currentPage.pageId,
    heading: currentPage.pageHeading,
  });

  res.render("redesigntest/templates/delete.html", {
    currentPage: currentPage,
    pageTitle: currentPage.pageHeading || "Untitled page",
  });
});

// Add this route to handle the actual deletion
router.post("/delete-page", function (req, res) {
  const formPages = req.session.data["formPages"] || [];

  // More robust pageId parsing
  let pageId = req.body.pageId;
  if (typeof pageId === "string") {
    pageId = parseInt(pageId.trim(), 10);
  }

  const confirmDelete = req.body.confirmDelete;

  console.log("Delete request received:", {
    rawPageId: req.body.pageId,
    parsedPageId: pageId,
    confirmDelete,
    currentPages: formPages.length,
  });

  if (confirmDelete === "yes" && !isNaN(pageId)) {
    // Find the page index
    const pageIndex = formPages.findIndex((page) => page.pageId === pageId);

    console.log("Found page index:", pageIndex);
    console.log("Page to delete:", formPages[pageIndex]);

    if (pageIndex !== -1) {
      // Remove the page
      formPages.splice(pageIndex, 1);
      req.session.data["formPages"] = formPages;

      console.log("Page deleted. Remaining pages:", formPages.length);
    }

    // Redirect to the listing page
    res.redirect("/redesigntest/listing.html");
  } else {
    // If user selected "No" or invalid pageId, return to page overview
    res.redirect(`/page-overview?pageId=${pageId}`);
  }
});

// Finally, export the router
module.exports = router;
