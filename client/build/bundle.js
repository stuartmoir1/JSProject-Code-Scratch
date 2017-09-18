/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// 
var AjaxRequest = __webpack_require__(1);
var MainView = __webpack_require__(2);

var url = 'http://localhost:3000/api/main';

window.addEventListener('load', function(){

  var ajaxRequest = new AjaxRequest(url);
  var mainView = new MainView();

  ajaxRequest.getData(mainView.render);
  
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Constructor
var AjaxRequest = function(url){
  this.url = url;
  this.data = [];
}

// Methods

AjaxRequest.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText;
        console.log(jsonString);
        //localStorage.setItem('countries', jsonString);
        this.data = JSON.parse(jsonString);
        callback(this.data);
      }
    }.bind(this);
    request.send();
  }
}

module.exports = AjaxRequest;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var DescriptionView = __webpack_require__(3);

// Constructor
var MainView = function(){

}

// Methods

MainView.prototype = {

  render: function(data){
    console.log(data);

    var button = document.querySelector('#button-submit');
    button.addEventListener('click', function(event){
      event.preventDefault();
      
      var input = document.querySelector('#search-text').value;

      var term = data.find(function(element){
        return element.name === input;
      });

      var descriptionView = new DescriptionView();
      descriptionView.render(term);

    });
  }
}

module.exports = MainView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var TestView = __webpack_require__(4);

// Constructor
var DescriptionView = function(){

}

// Methods

DescriptionView.prototype = {

  render: function(term){

    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    var pName = document.createElement('p');
    pName.innerText = term.name;
    section.appendChild(pName)

    var pDescription = document.createElement('p');
    section.appendChild(pDescription);
    pDescription.outerHTML = '<p id="description-text">' + term.description + '</p>'
    // pDescription.innerText = term.description;

    var testButton = document.createElement('button');
      section.appendChild(testButton);
      // Changed class attribute to id attribute.
      testButton.outerHTML = '<button type="button" id="test-button" alt="test understanding">Test Understanding</button>'
      // This is new; you need to select the test button separately.
      button = document.querySelector('#test-button');
      button.addEventListener('click', function(event){
        event.preventDefault();
        console.log("test button clicked");
        //link from here to another view which allows us to add the fade function
        var testView = new TestView();
        testView.render(term);
      })
  }
}

module.exports = DescriptionView;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var TestView = function() {

}

TestView.prototype = {

  render: function(term) {
    console.log(term.keywords);
    var section = document.querySelector('#description-text');
    var button = document.querySelector('#test-button');
    var testView = new TestView();
    testView.fade(section, term);
    testView.fade(button, term);
  },

  fade: function(section, term){

    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            section.style.display = 'none';
        }
        section.style.opacity = op;
        section.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    console.log("section faded");
    var self = this;
    setTimeout(function(){
      self.repopulate(term);
    }, 1500);

  },

  repopulate: function(term) {
    var self = this;
    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    var form = document.createElement('form');
    section.appendChild(form);
    form.outerHTML = '<form id="test-form" alt="test question">'
      + term.testDescription[0] + ' '
      + '<input type="text" id="answer1" alt="Enter answer 1 here">' + ' '
      + term.testDescription[1] + ' '
      + '<input type="text" id="answer2" alt="Enter answer 2 here">' + ' '
      + term.testDescription[2] + ' '
      + '<input type="submit" id="submit" value="submit"' + ' ' + '</form>';
    var submitButton = document.querySelector('#submit');

    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      var testAnswers = [];
      var answ1 = document.getElementById('answer1').value;
      var answ2 = document.getElementById('answer2').value;
      testAnswers.push(answ1, answ2);
      self.compare(testAnswers, term);

    })
  },

  compare: function(data, term){
    console.log(term);
    if (data[0] === term.keywords[0]){
      console.log("Answer 1 correct");
    } else {
      console.log("Answer 1 incorrect");
    };

    if (data[1] == term.keywords[1]){
      console.log("Answer 2 correct");
    } else {
      console.log("Answer 2 incorrect");
    };
  }


}

module.exports = TestView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map