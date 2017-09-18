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
      button.addEventListener('click', function(event){
        event.preventDefault();
        console.log("test button clicked");
        //link from here to another view which allows us to add the fade function
        var descriptionView = new DescriptionView();
        descriptionView.getKeyword(term);
      })

    // Load pop-up
    this.moreInfo();
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
  moreInfo: function(){
    console.log('In moreInfo...');

    var anchor = document.querySelector('#popup-anchor');
    while (anchor.firstChild){ anchor.removeChild(anchor.firstChild); };

    var div1 = document.createElement('div');
    anchor.appendChild(div1);
    div1.outerHTML = '<div id="popup" class="overlayX"></div>';

    var innerDiv1= document.querySelector('#popup');
    console.log(innerDiv1.outerHTML);

    var div2 = document.createElement('div');
    innerDiv1.appendChild(div2);
    div2.outerHTML = '<div class="popup"></div>';

    var innerDiv2 = document.querySelector('.popup');
    console.log(innerDiv2.outerHTML);

    var h2 = document.createElement('h2');
    innerDiv2.appendChild(h2);
    h2.innerHTML = 'Name';

    var a = document.createElement('a');
    innerDiv2.appendChild(a);
    a.outerHTML = '<a class="close" href="#">&times</a>';

    var div3 = document.createElement('div');
    innerDiv2.appendChild(div3);
    div3.outerHTML = '<div class="description">Description</div>';
  }  
}

module.exports = DescriptionView;
