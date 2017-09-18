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
        //console.log(jsonString);
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
    //console.log(data);

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
/***/ (function(module, exports) {

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
    section.appendChild(pName);

    var pDescription = document.createElement('p');
    pDescription.innerText = term.description;
    section.appendChild(pDescription);

    var testButton = document.createElement('button');
      section.appendChild(testButton);
      // Changed class attribute to id attribute.
      testButton.outerHTML = '<button type="button" id="test-button" alt="test understanding">Test Understanding</button>'
      // This is new; you need to select the test button separately.
      button = document.querySelector('#test-button');
      console.log(button);

      button.addEventListener('click', function(event){
        event.preventDefault();
        console.log("test button clicked");
        //link from here to another view which allows us to add the fade function
        var descriptionView = new DescriptionView();
        descriptionView.getKeyword(term);
      })

    // Load info button.
    this.moreInfoButton(term);
  },

  getKeyword: function(term) {
    console.log(term.keywords);
    var section = document.querySelector('#description-section');
    var descriptionView = new DescriptionView();
    descriptionView.fade(section)
  },

  fade: function(keyWord){
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            keyWord.style.display = 'none';
        }
        keyWord.style.opacity = op;
        keyWord.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    console.log("section faded");
  },

  // More info popup.
  moreInfoPopup: function(term){

    console.log(term);

    var anchor = document.querySelector('#popup-anchor');
    while (anchor.firstChild){ anchor.removeChild(anchor.firstChild); };

    var div1 = document.createElement('div');
    anchor.appendChild(div1);
    div1.outerHTML = '<div id="popup" class="overlay"></div>';

    var innerDiv1= document.querySelector('#popup');
    console.log(innerDiv1.outerHTML);

    var div2 = document.createElement('div');
    innerDiv1.appendChild(div2);
    div2.outerHTML = '<div class="popup"></div>';

    var innerDiv2 = document.querySelector('.popup');
    console.log(innerDiv2.outerHTML);

    var h2 = document.createElement('h2');
    innerDiv2.appendChild(h2);
    h2.innerHTML = term.name;

    var a = document.createElement('a');
    a.href = "#";
    a.innerHTML = "&times";
    a.classList.add('close');
    a.addEventListener('click', function(){
      while (anchor.firstChild){ anchor.removeChild(anchor.firstChild); };
    });
    innerDiv2.appendChild(a);

    var div3 = document.createElement('div');
    innerDiv2.appendChild(div3);
    div3.outerHTML = '<div class="description">' + term.add_info + '</div>';

    var div4 = document.createElement('div');
    div4.classList.add('webpages');
    innerDiv2.appendChild(div4);
    term.webpages.forEach(function(webpage){
      Object.keys(webpage).forEach(function eachKey(key){
        var a = document.createElement('a');
        div4.appendChild(a);
        a.outerHTML = '<a href="' + webpage[key] + '" target="_blank">' + key + '</a><br>';
      });
    });

    var div5 = document.createElement('div');
    div4.classList.add('videos');
    innerDiv2.appendChild(div5);
    term.videos.forEach(function(video){
      Object.keys(video).forEach(function eachKey(key){
        var a = document.createElement('a');
        div5.appendChild(a);
        a.outerHTML = '<a href="' + video[key] + '" target="_blank">' + key + '</a><br>';
      });
    });    
  },

  moreInfoButton: function(term){
    
    var section = document.querySelector('#description-section');
    var infoButton = document.createElement('button');
    section.appendChild(infoButton);
    infoButton.outerHTML = '<button type="button" id="info-button">Info</button>';

    var button = document.querySelector('#info-button');
    button.addEventListener('click', function(event){
      event.preventDefault();
      this.moreInfoPopup(term);
    }.bind(this));
  }
}

module.exports = DescriptionView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map