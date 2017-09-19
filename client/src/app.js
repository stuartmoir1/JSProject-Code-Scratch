// 
var AjaxRequest = require('./services/ajax_request.js');
var MainView = require('./views/main_view.js');
var DropdownView = require('./views/dropdown_view.js')

var url = 'http://localhost:3000/api/main';

window.addEventListener('load', function(){

  var ajaxRequest = new AjaxRequest(url);
  var mainView = new MainView();
  var dropdownView = new DropdownView()

  ajaxRequest.getData(mainView.render);
  ajaxRequest.getData(dropdownView.render);
  
});