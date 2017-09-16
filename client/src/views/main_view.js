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

      var section = document.querySelector('#description-section');
      var pName = document.createElement('p');
      pName.innerText = term.name;
      section.appendChild(pName)
      var pDescription = document.createElement('p');
      pDescription.innerText = term.description;
      section.appendChild(pDescription);

    });
  }
}

module.exports = MainView;