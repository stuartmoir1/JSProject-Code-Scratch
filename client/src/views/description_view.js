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
    testButton.outerHTML = '<button type="button" class="test-button" alt="test understanding">Test Understanding</button>'
  }
}

module.exports = DescriptionView;
