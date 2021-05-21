module.exports = {

    before: function (user) {
      console.log('before: Open page');
      user
        .page.labcavegames.home.login()
        .navigate();
  
      user.maximizeWindow();
    },
  
    after: function (user) {
      console.log('after: close page');
      user.end();
    },

    beforeEach: function () {
      console.log('beforeEach: Execute step');
    },
  
    afterEach: function () {
      console.log('afterEach: Step executed!');
    },

    "Step  1: login in page cavegames": function (client) {
      var login = client.page.labcavegames.home.login();
        login.waitForPageLoaded()
        .setValue('@inputEmail', client.globals.variables.user)
        .setValue('@inputPassword', client.globals.variables.password)
        .click('@submit')
    },
    
    "Step  2: open menu apps": function (client) {
      var openMenu = client.page.labcavegames.home.menu();
      openMenu
        .click('@buttonMenu')
        .assert.visible('@menuApp')
        .click('@menuApp')
        .pause(2000)
    },

    "Step  3: create app": function (client) {
      var createApp = client.page.labcavegames.home.app();
      createApp
        .assert.visible('@buttonNewApp')
        .click('@buttonNewApp')
        .pause(1000)
        .assert.visible('@radioNoAppStore')
        .click('@radioNoAppStore')
        .assert.visible('@inputNameApp')
        .setValue('@inputNameApp', 'myappexample')
        .assert.visible('@inputIdApp')
        .setValue('@inputIdApp', 'myappexample1234556566')
        .assert.visible('@radioCoppaCompliance')
        .click('@radioCoppaCompliance')
        .pause(1000)
        .assert.visible('@buttonCreate')
        .click('@buttonCreate')
        .pause(1000)
      
    },
    "Step  4: logout in page cavegames": function (client) {
      var logout = client.page.labcavegames.home.menu();
        logout
        .click('@menuHamburger')
        .assert.visible('@buttonLogOut')
        .click('@buttonLogOut')
    },
}