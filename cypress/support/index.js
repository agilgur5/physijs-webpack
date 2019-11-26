require('./commands')
require('@cypress/code-coverage/support')

// nothing to screenshot here
Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false
})
