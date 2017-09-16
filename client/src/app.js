// 
var AjaxRequest = require('./services/ajax_request.js');
var MainView = require('./views/main_view.js');

var url = 'http://localhost:3000/api/main';

window.addEventListener('load', function(){

  console.log('Hello, World!');

  var ajaxRequest = new AjaxRequest(url);
  var mainView = new MainView();
  ajaxRequest.getData(mainView.render);
  
});