const loginCommands = {
    waitForPageLoaded: function (timeout) {
      const myTimeout = timeout || this.api.globals.timeout.medium
      return this
        .waitForElementVisible('@inputEmail', myTimeout)
        .waitForElementVisible('@inputPassword', myTimeout)
        .waitForElementVisible('@submit', myTimeout)
    }
  }




module.exports = {
    commands: [loginCommands],
    url: 'https://mediation.labcavegames.com/login',
    elements: {
      inputEmail: {
        selector: 'input[type=text]'
      },
      inputPassword: {
        selector: 'input[type=password]'
      },
      submit: {
        selector: 'button[type=submit]'
      }
    }
  }