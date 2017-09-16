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

      console.log(term);
      console.log(term.name);
      console.log(term.description);

      var section = document.querySelector('#description-section');
      var p = document.createElement('p');
      p.innerText = term.description;
      section.appendChild(p);

    });
  }
}

module.exports = MainView;