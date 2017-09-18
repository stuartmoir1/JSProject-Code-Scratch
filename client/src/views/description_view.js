var TestView = require('./test_view.js');

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
