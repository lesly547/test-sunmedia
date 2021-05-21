module.exports = {

    before: function (user) {
      console.log('before: Open page');
      user
        .page.labcavegames.home.login()
        .navigate();
  
      user.maximizeWindow();
    },
  
    after: function (user) {
      console.log('after: Cerrando el navegador');
      user.end();
    }

}