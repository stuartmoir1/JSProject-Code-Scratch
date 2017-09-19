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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var TestView = __webpack_require__(4);

// Constructor
var DescriptionView = function(){

}

// Methods

DescriptionView.prototype = {

  render: function(term){

    //console.log(term);
    
    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    // var pName = document.createElement('p');
    // pName.innerText = term.name;
    // section.appendChild(pName);

    var pDescription = document.createElement('p');
    section.appendChild(pDescription);
    pDescription.outerHTML = '<p id="description-text">' + term.description + '</p>'
    // pDescription.innerText = term.description;

    var testButton = document.createElement('button');
      section.appendChild(testButton);
      // Changed class attribute to id attribute.
      testButton.outerHTML = '<button type="button" class="button" id="test-button" alt="test understanding">Test</button>'
      // This is new; you need to select the test button separately.
      button = document.querySelector('#test-button');
      console.log(button);

      button.addEventListener('click', function(event){
        event.preventDefault();
        // console.log("test button clicked");
        //link from here to another view which allows us to add the fade function
        var testView = new TestView();
        testView.render(term);
      })


    // Load info button.
    this.moreInfoButton(term);
  },

  moreInfoButton: function(term){
    
    var section = document.querySelector('#description-section');
    var infoButton = document.createElement('button');
    section.appendChild(infoButton);
    infoButton.outerHTML = '<button type="button" class="button" id="info-button">Info</button>';

    var button = document.querySelector('#info-button');
    button.addEventListener('click', function(event){
      event.preventDefault();
      this.moreInfoPopup(term);
    }.bind(this));
  },

  moreInfoPopup: function(term){

    // console.log(term);
    var anchor = this.popupRemoveChildren();
    var div1 = this.createPopupDiv(anchor);
    this.createPopupInnerDiv();

    div2 = this.createPopupName(term);
    this.createPopupClose(anchor, div2);
    this.createPopupDescription(term, div2);
    this.createPopupList(term, div2, 'webpages',);
    this.createPopupList(term, div2, 'videos');
    
    //this.createPopupImage(term, div2);
    this.createPopupVideo(term, div2);
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

  createPopupClose: function(anchor, div){
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

  createPopupList: function(term, outerDiv, item){
    var div = document.createElement('div');
    div.classList.add(item);
    outerDiv.appendChild(div);
    term[item].forEach(function(obj){
      Object.keys(obj).forEach(function eachKey(key){
        var a = document.createElement('a');
        div.appendChild(a);
        a.outerHTML = '<a href="' + obj[key] + '" target="_blank">' + key + '</a><br>';
      });
    });
  },

  createPopupImage: function(term, outerDiv){
    var div = document.createElement('div');
    div.classList.add('image');
    outerDiv.appendChild(div);
    div.innerHTML = '<img src="' + term.image + '" alt="Image">';
  },

  createPopupVideo: function(term, outerDiv){
    var div = document.createElement('div');
    div.classList.add('video');
    outerDiv.appendChild(div)
    div.innerHTML = '<iframe src="' + term.embed_video + '"></iframe>';
  }
}

module.exports = DescriptionView;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// 
var AjaxRequest = __webpack_require__(2);
var MainView = __webpack_require__(3);
var DropdownView = __webpack_require__(5)

var url = 'http://localhost:3000/api/main';

window.addEventListener('load', function(){

  var ajaxRequest = new AjaxRequest(url);
  var mainView = new MainView();
  var dropdownView = new DropdownView()

  ajaxRequest.getData(mainView.render);
  ajaxRequest.getData(dropdownView.render);
  
});

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var DescriptionView = __webpack_require__(0);

// Constructor
var MainView = function(){
}

// Methods

MainView.prototype = {

  render: function(data){

    var button = document.querySelector('#button-go');
    button.addEventListener('click', function(event){
      event.preventDefault();
  
      var input = document.querySelector('#search-text').value.toLowerCase();
      var term = data.find(function(element,){
        return element.name === input;
      });

      if (term === undefined) { alert('Doh, Noobie! That term is not supported! Try again.') };

      var descriptionView = new DescriptionView();
      descriptionView.render(term);
    });
  }
}

module.exports = MainView;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var TestView = function() {

}

TestView.prototype = {

  render: function(term) {
    var section = document.querySelector('#description-text');
    var button = document.querySelector('#test-button');
    var infoButton = document.querySelector('#info-button');

    var testView = new TestView();
    testView.fade(section, term);
    testView.fade(button, term);
    testView.fade(infoButton, term);
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
    var self = this;
    setTimeout(function(){
      self.repopulate(term);
    },2000 );
  },

  repopulate: function(term) {

    
    // setTimeout(function(){
    //   self.unfade(section);
    // }, 0);
    // console.log(self);
    

    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    var op = 0.01;  // initial opacity
    section.style.opacity = 0.01;
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        section.style.opacity = op;
        section.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);

    var self = this;

    var questionText = [];
    var count = 0;

    var form = document.createElement('form');
    section.appendChild(form);

    for (var i = 0; i < term.keywords.length; i++) {
      var text = term.testDescription[i] + ' ' + '<input type="text" id="answer' +(i+1)+'" alt="Enter answer ' +(i+1)+' here">';
      questionText.push(text);
    }
    var joinedText = questionText.join(' ');
    var lastElement = term.testDescription[term.testDescription.length-1];

    form.outerHTML = '<form id="test-form" alt="test question">' + joinedText + lastElement + ' '
      + '<input type="submit" id="submit" value="Check"' + ' ' + '</form>';

    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      var testAnswers = [];
      for (var i = 0; i < term.keywords.length; i++) {
        var element = document.getElementById('answer'+(i+1)).value;
        testAnswers.push(element);
      };

      self.compare(testAnswers, term);

    })
  },

  compare: function(data, term){

    var count = 0;
    data.forEach(function(element) {
      if(element === term.keywords[count]){
          var answer = document.getElementById('answer'+(count+1));
          answer.style.color = "Green";
          alert('Well done, Noobie! You got it right!');
        } else {
          var answer = document.getElementById('answer'+(count+1));
          answer.style.color = "Red";
          alert('Doh, Noobie! That\`s the wrong answer! Try again');
        };
        count ++;
    })

  }
}



module.exports = TestView;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DescriptionView = __webpack_require__(0);

// Constructor
var DropdownView = function(){

}

// Methods
DropdownView.prototype = {

  render: function(data){
    console.log(data);
    
    var descriptionView = new DescriptionView();
    var dropDown = document.querySelector("#dropdown-content");
    while (dropDown.firstChild){ dropDown.removeChild(dropDown.firstChild); };
    for (var element of data){  
      var anchor = document.createElement('a')
      anchor.innerText = element.name;
      anchor.href = "#"
      anchor.addEventListener('click', function(e){
        e.preventDefault();
        for (var object of data){
          if (object.name === this.innerText){
            descriptionView.render(object);
          }
        }
        
      })
      var section = dropDown.appendChild(anchor)
    }


      // Close the dropdown menu if the user clicks outside of it
      // window.onclick = function(event) {
      //   if (!event.target.matches('.dropbtn')) {

      //     // var dropdowns = document.getElementsByClassName("dropdown-content");
      //     var i;
      //     for (i = 0; i < dropdowns.length; i++) {
      //       var openDropdown = dropdowns[i];
      //       if (openDropdown.classList.contains('show')) {
      //         openDropdown.classList.remove('show');
      //       }
      //     }
      //   }
      // }
    }
  }

    // ******================================================================

   
 

module.exports = DropdownView;






/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map