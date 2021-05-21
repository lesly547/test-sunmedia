module.exports = {
    url: 'https://mediation.labcavegames.com/panel/dashboard',
    elements: {
      menuHamburger: {
        selector: '//*[@id="app"]/div[34]/div/nav/div/div[4]/div/div/button/div/i',
        locateStrategy: 'xpath'
      },
      buttonLogOut: {
        selector: '.medicon-logout',
        locateStrategy: 'css selector'
      },
      buttonMenu:{
        selector: '//*[@id="app"]/div[7]/div/nav/div/button',
        locateStrategy: 'xpath'
      },
      menuApp:{
        selector: '//*[@id="app"]/div[7]/div/aside/div[1]/div[3]/a/div[2]',
        locateStrategy: 'xpath'
      }
    }
  }