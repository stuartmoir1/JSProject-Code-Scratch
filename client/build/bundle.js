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

    // console.log(term);

    var anchor = this.popupRemoveChildren();
    var div1 = this.createPopupDiv(anchor);
    this.createPopupInnerDiv();

    div2 = this.createPopupName(term);
    this.createPopupClose(div2);
    this.createPopupDescription(term, div2);
    this.createPopupWebpagesList(term, div2);
    this.createPopupVideosList(term, div2);

    var div6 = document.createElement('div');
    div6.classList.add('image');
    div2.appendChild(div6);
    div6.outerHTML = '<img src="' + term.image + '" alt="Image">';

    var div7 = document.createElement('div');
    div7.classList.add('video');
    div2.appendChild(div7);
    div7.outerHTML = '<iframe src="' + term.embed_video + '</iframe>';
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
  },

  popupRemoveChildren: function(){
    var anchor = document.querySelector('#popup-anchor');
    while (anchor.firstChild){ anchor.removeChild(anchor.firstChild); };
    return anchor;
  },

  createPopupDiv: function(anchor){
    var div = document.createElement('div');
    anchor.appendChild(div);
    div.outerHTML = '<div id="popup" class="overlay"></div>';
    return div;
  },

  createPopupInnerDiv: function(){
    var outerDiv = document.querySelector('#popup');
    var innerDiv = document.createElement('div');
    outerDiv.appendChild(innerDiv);
    innerDiv.outerHTML = '<div class="popup"></div>';
  },

  createPopupName: function(term){
    var div = document.querySelector('.popup');
    var h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.innerHTML = term.name;
    return div;
  },

  createPopupClose: function(div){
    var a = document.createElement('a');
    a.href = "#";
    a.innerHTML = "&times";
    a.classList.add('close');
    a.addEventListener('click', function(){
      while (anchor.firstChild){ anchor.removeChild(anchor.firstChild); };
    });
    div.appendChild(a);
  },

  createPopupDescription: function(term, outerDiv){
    var div = document.createElement('div');
    outerDiv.appendChild(div);
    div.outerHTML = '<div class="description">' + term.add_info + '</div>';
  },

  createPopupWebpagesList: function(term, outerDiv){
    var div = document.createElement('div');
    div.classList.add('webpages');
    outerDiv.appendChild(div);
    term.webpages.forEach(function(webpage){
      Object.keys(webpage).forEach(function eachKey(key){
        var a = document.createElement('a');
        div.appendChild(a);
        a.outerHTML = '<a href="' + webpage[key] + '" target="_blank">' + key + '</a><br>';
      });
    });
  },

  createPopupVideosList: function(term, outerDiv){
    var div = document.createElement('div');
    div.classList.add('videos');
    outerDiv.appendChild(div);
    term.videos.forEach(function(video){
      Object.keys(video).forEach(function eachKey(key){
        var a = document.createElement('a');
        div.appendChild(a);
        a.outerHTML = '<a href="' + video[key] + '" target="_blank">' + key + '</a><br>';
      });
    });
  },


}

module.exports = DescriptionView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map