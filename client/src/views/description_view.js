// Constructor
var DescriptionView = function(){

}

// Methods

DescriptionView.prototype = {

  render: function(term){

    var section = document.querySelector('#description-section');
    var pName = document.createElement('p');
    pName.innerText = term.name;
    section.appendChild(pName)
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
  },

  getKeyword: function(term) {
    console.log(term.keywords);
    var section = document.querySelector('#description-section');
    var descriptionView = new DescriptionView();
    descriptionView.fade(section)
  },



}

module.exports = DescriptionView;
