var TestView = require('./test_view.js');

// Constructor
var DescriptionView = function(data){
  this.data = data;
}

// Methods

DescriptionView.prototype = {

  render: function(term){
    
    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    // Description
    // var pDescription = document.createElement('p');
    // section.appendChild(pDescription);
    // pDescription.outerHTML = '<p id="description-text">' + term.description + '</p>'
    
    this.setDescription(section, term);
    this.setTestButton(section, term, this.data);
    this.setAudioButton(section, term);

    // Test
    // var testButton = document.createElement('button');
    // section.appendChild(testButton);
    // testButton.outerHTML = '<button type="button" class="button" id="test-button" alt="test understanding" >Test</button>'
    // button = document.querySelector('#test-button');
    // console.log(button);

    // button.addEventListener('click', function(event){
    //   event.preventDefault();
    //   var testView = new TestView(this.data);
    //   testView.render(term);
    // }.bind(this));

    // Audio
    // var audioButton = document.createElement('button')
    // section.appendChild(audioButton);
    // audioButton.className += "speak";

    // audioElement = document.createElement('audio');
    // audioElement.setAttribute('src', term.audio);
    // audioButton.addEventListener('click', function(event){
    //   event.preventDefault();
    //   audioElement.play();
    // });

    this.moreInfoButton(term);
  },

  setDescription: function(section, term){
    var pDescription = document.createElement('p');
    section.appendChild(pDescription);
    pDescription.outerHTML = '<p id="description-text">' + term.description + '</p>'
  },

  setTestButton: function(section, term, data){

    var testButton = document.createElement('button');
    section.appendChild(testButton);
    testButton.outerHTML = '<button type="button" class="button" id="test-button" alt="test understanding" >Test</button>'
    button = document.querySelector('#test-button');
    console.log(button);

    button.addEventListener('click', function(event){
      event.preventDefault();
      var testView = new TestView(data);
      testView.render(term);
    }.bind(this));
  },

  setAudioButton: function(section, term){
    var audioButton = document.createElement('button')
    section.appendChild(audioButton);
    audioButton.className += "speak";

    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', term.audio);
    audioButton.addEventListener('click', function(event){
      event.preventDefault();
      audioElement.play();
    });
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
    var p = document.createElement('p');
    outerDiv.appendChild(p);
    var text = item.charAt(0).toUpperCase() + item.slice(1);
    console.log(text);
    p.innerHTML = '<strong>' + text + '<strong>';
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