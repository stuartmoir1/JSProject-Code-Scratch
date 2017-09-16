// View
var MainView = require('./views/main_view.js');

window.addEventListener('load', function(){

  // View
  var mainView = new MainView(document.querySelector('#main'));
  mainView.render();
});

