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
        res.redirect("/redesigntest/templates/1-question/autocomplete/edit.html");
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
      response.redirect("/redesigntest/templates/1-question/information-type.html");
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
      response.redirect("/redesigntest/templates/1-question/information-type.html");
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
        res.redirect("/redesigntest/templates/more-than-1-question/autocomplete/edit.html");
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
        res.redirect("/redesigntest/templates/more-than-1-question/autocomplete/edit.html");
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
  res.redirect("/redesigntest/templates/1-question/information-type.html");  //
});

// Route to configure radio buttons (when the user is on the add page)
router.post('/configure-radio', function (req, res) {
  // Ensure radioList exists in the session
  req.session.data.radioList = req.session.data.radioList || [];

  // Create a new radio option
  const radioOption = {
    label: req.body.label, // Label for the radio button
    value: req.body.value, // Value of the radio button
    hint: req.body.hint,   // (Optional) hint for the radio button
  };

  // Append the new radio option to the list
  req.session.data.radioList.push(radioOption);

  // Redirect to the edit page after adding the new radio button
  res.redirect('/redesigntest/templates/1-question/radios/edit');
});

// Route to save the radio button option
router.post('/save-radio-option', (req, res) => {
  const index = parseInt(req.body.index, 10); // Get the index from the form
  const radioList = req.session.data.radioList; // Access the radioList array

  if (radioList && radioList[index]) {
    // Update the data at the specified index
    radioList[index].label = req.body['option-label'];
    radioList[index].hint = req.body['option-hint'];
    radioList[index].value = req.body['option-value'];
  }

  // Redirect back to the edit page for radio buttons
  res.redirect('/redesigntest/templates/1-question/radios/edit');
});

// Route to access the edit page for radio buttons
router.get('/redesigntest/templates/1-question/radios/edit', (req, res) => {
  const radioList = req.session.data?.radioList || [];

  // Check if the radioList is empty, redirect to the add page if so
  if (radioList.length === 0) {
    res.redirect('/redesigntest/templates/1-question/radios/add.html');
  } else {
    // Render the edit page if there are items in the list
    res.render('/redesigntest/templates/1-question/radios/edit.html', { radioList: radioList });
  }
});

// Route to configure checkboxes (when the user is on the add page)
router.post('/configure-checkbox', function (req, res) {
  // Ensure checkboxList exists in the session
  req.session.data.checkboxList = req.session.data.checkboxList || [];

  // Create a new checkbox option
  const checkboxOption = {
    label: req.body.label, // Label for the checkbox
    value: req.body.value, // Value of the checkbox
    hint: req.body.hint,   // (Optional) hint for the checkbox
  };

  // Append the new checkbox option to the list
  req.session.data.checkboxList.push(checkboxOption);

  // Redirect to the edit page after adding the new checkbox
  res.redirect('/redesigntest/templates/1-question/checkboxes/edit');
});

// Route to save the checkbox option
router.post('/save-option', (req, res) => {
  const index = parseInt(req.body.index, 10); // Get the index from the form
  const checkboxList = req.session.data.checkboxList; // Access the checkboxList array

  if (checkboxList && checkboxList[index]) {
    // Update the data at the specified index
    checkboxList[index].label = req.body['option-label'];
    checkboxList[index].hint = req.body['option-hint'];
    checkboxList[index].value = req.body['option-value'];
  }

  // Redirect back to the edit page for checkboxes
  res.redirect('/redesigntest/templates/1-question/checkboxes/edit');
});

/// Route to access the edit page for checkboxes
router.get('/redesigntest/templates/1-question/checkboxes/edit', (req, res) => {
  const checkboxList = req.session.data?.checkboxList || [];  // Check if the checkboxList is empty, redirect to the add page if so
  if (checkboxList.length === 0) {
    res.redirect('/redesigntest/templates/1-question/checkboxes/add.html');
  } else {
    // Render the edit page if there are items in the list
    res.render('/redesigntest/templates/1-question/checkboxes/edit.html', { checkboxList: checkboxList });
  }
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

/* comments plugin */

const db = require('./db'); // Adjust path to where your db.js is located

// POST route to handle adding comments
router.post('/add-comment', async (req, res) => {
  const { project, feedback, url } = req.body;

  if (!project || !feedback || !url) {
    return res.status(400).send('Missing required fields');
  }

  const newComment = {
    id: Date.now(),
    project,
    feedback,
    url,
    status: 'pending', // Default status
  };

  try {
    const comments = await db.getComments();
    comments.push(newComment);
    await db.updateComments(comments);

    console.log('New comment added:', newComment);
    res.status(200).send('Comment added successfully');
  } catch (err) {
    console.error('Error adding comment:', err.message, err.stack);
    res.status(500).send('An error occurred while adding the comment');
  }
});

router.post('/delete-comment', async (req, res) => {
  const { id } = req.body;

  if (!id) {
    console.error('Delete request is missing the comment ID');
    return res.status(400).send('Missing comment ID');
  }

  try {
    const comments = await db.getComments();
    const updatedComments = comments.filter(comment => comment.id !== parseInt(id, 10));

    if (comments.length === updatedComments.length) {
      console.warn(`No comment found with ID ${id}`);
      return res.status(404).send('Comment not found');
    }

    await db.updateComments(updatedComments);

    console.log(`Comment with ID ${id} deleted successfully`);

    // Redirect immediately after deletion
    res.redirect('/view-comments');
  } catch (err) {
    console.error('Error deleting comment:', err.message, err.stack);
    res.status(500).send('An error occurred while deleting the comment');
  }
});

router.post('/mark-done', async (req, res) => {
  const { id } = req.body;

  if (!id) {
    console.error('Mark done request is missing the comment ID');
    return res.status(400).send('Missing comment ID');
  }

  try {
    const data = await db.readData();

    if (!data.comments || !Array.isArray(data.comments)) {
      console.error('Comments data is missing or invalid');
      return res.status(500).send('Comments data is missing or invalid');
    }

    const comment = data.comments.find(comment => comment.id === parseInt(id, 10));

    if (!comment) {
      console.warn(`No comment found with ID ${id}`);
      return res.status(404).send('Comment not found');
    }

    comment.status = 'done'; // Update the status
    await db.writeData(data);

    console.log(`Comment with ID ${id} marked as done`);
    res.redirect('/view-comments'); // Redirect back to the view comments page
  } catch (err) {
    console.error('Error in /mark-done route:', err.message, err.stack);
    res.status(500).send('An error occurred while marking the comment as done');
  }
});

// (Optional) Debugging route to view all comments
router.get('/comments', (req, res) => {
  const data = db.readData();
  res.json(data.comments);
});

router.get('/view-comments', async (req, res) => {
  try {
    const comments = await db.getComments();

    // Sort comments by id in descending order
    const sortedComments = comments.sort((a, b) => b.id - a.id);

    console.log('Sorted comments for view-comments:', sortedComments);
    res.render('view-comments', { comments: sortedComments });
  } catch (err) {
    console.error('Error in /view-comments route:', err.message, err.stack);
    res.status(500).send('An error occurred while loading the comments page');
  }
});

// import lists stuff 

router.get('/redesigntest/new-list', (req, res) => {
  res.render('redesigntest/new-list')
})
router.post('/redesigntest/new-list', require('./routes/lists.js').post)
router.get('/redesigntest/list-manager', require('./routes/lists.js').get)
router.get('/redesigntest/edit-list/:name', require('./routes/lists.js').editGet)
router.post('/redesigntest/update-list/:name', require('./routes/lists.js').editPost)
router.post('/redesigntest/delete-list/:name', require('./routes/lists.js').delete)

// New route to get predefined lists from the lists.js file
router.get('/redesigntest/api/lists', require('./routes/lists.js').getListsAPI);

// New route to get a specific list by name
router.get('/redesigntest/api/list/:name', require('./routes/lists.js').getListAPI);

// Preview lists
router.get('/redesigntest/view-list/:name', require('./routes/lists.js').viewGet)

module.exports = router;


