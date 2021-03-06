var DescriptionView = require('./description_view.js');

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
      var term = data.find(function(element){
        return element.name === input;
      });

      if (term === undefined) { alert('Doh, Noobie! That term is not supported! Try again.') };

      var descriptionView = new DescriptionView(data);
      descriptionView.render(term);
    }.bind(this));

    var randomButton = document.querySelector('#button-random');
    randomButton.addEventListener('click', function(event){
      event.preventDefault();

      var number = data.length;
      var randomTerm = data[Math.floor(Math.random() * number)];

      var searchValue = document.querySelector('#search-text');
      searchValue.value = randomTerm.name;

      var descriptionView = new DescriptionView(data);
      descriptionView.render(randomTerm);
    });
  },
}

module.exports = MainView;