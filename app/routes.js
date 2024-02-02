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