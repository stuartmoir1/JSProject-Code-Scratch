var DescriptionView = require('./description_view.js');

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

      var term = data.find(function(element,){
        return element.name === input;
      });

      var descriptionView = new DescriptionView();
      descriptionView.render(term);

    });
  }
}


module.exports = MainView;



