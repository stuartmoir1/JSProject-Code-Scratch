var TestView = require('./test_view.js');

// Constructor
var DescriptionView = function(){

}

// Methods

DescriptionView.prototype = {

  render: function(term){

    
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
      testButton.outerHTML = '<button type="button" id="test-button" alt="test understanding">Test Understanding</button>'
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
    infoButton.outerHTML = '<button type="button" id="info-button">Info</button>';

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
    
    this.createPopupImage(term, div2);
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
