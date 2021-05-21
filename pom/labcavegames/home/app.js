module.exports = {
    url: 'https://mediation.labcavegames.com/panel/apps',
    elements: {
      buttonNewApp: {
        selector: '.btn-new-app',
        locateStrategy: 'css selector'
      },
      radioNoAppStore: {
        selector: '//*[@id="app"]/div[31]/div/div[1]/div[2]/div/div[2]/div[2]/div/div/div/div/div/div/label[2]/span',
        locateStrategy: 'xpath'
      },
      inputNameApp:{
        selector: '//*[@id="app"]/div[34]/div/div[1]/div[2]/div/div[3]/form/div[2]/div[2]/span/span/div/div/div/div/div/input',
        locateStrategy: 'xpath'
      },
      inputIdApp:{
        selector: '//*[@id="app"]/div[34]/div/div[1]/div[2]/div/div[3]/form/div[3]/div[2]/span/span/div/div/div/div/div/input',
        locateStrategy: 'xpath'
      },
      radioCoppaCompliance:{
        selector: '//*[@id="app"]/div[34]/div/div[1]/div[2]/div/div[3]/form/div[4]/div[2]/div',
        locateStrategy: 'xpath'
      },
      buttonCreate: {
        selector: '.js-apps-newAppCreateButton',
        localStrategy: 'css selector'
      }
    }
  }