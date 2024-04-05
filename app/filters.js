const { resolve } = require('path')
const { cwd } = require('process')

//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const { addFilter, addFunction } = govukPrototypeKit.views

// Add your filters here

addFunction('require', (path) => {
  try {
    return require(resolve(cwd(), 'app', path))
  } catch {
    return {}
  }
})
