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
      var term = data.find(function(element,){
        return element.name === input;
      });

      if (term === undefined) { alert('Doh, Noobie! That term is not supported! Try again.') };

      var descriptionView = new DescriptionView();
      descriptionView.render(term);

      var audioButton = document.querySelector("#button-audio");
      while (audioButton.firstChild){ audioButton.removeChild(audioButton.firstChild); };
        // var audioElement = ""
        audioElement = document.createElement('audio');
        audioElement.setAttribute('src', term.audio)
        audioButton.addEventListener('click', function(event){
        event.preventDefault();
        audioElement.play();
        
        
      });

    });
  },

}

module.exports = MainView;