var DescriptionView = require('./description_view.js');

// Constructor
var DropdownView = function(){
}

// Methods

DropdownView.prototype = {

  render: function(data){
    
    var descriptionView = new DescriptionView(data);
    var dropDown = document.querySelector("#dropdown-content");
    while (dropDown.firstChild){ dropDown.removeChild(dropDown.firstChild); };
    for (var element of data){  
      var anchor = document.createElement('a')
      anchor.innerText = element.name;
      anchor.href = "#"
      anchor.addEventListener('click', function(e){
        e.preventDefault();
        for (var object of data){
          if (object.name === this.innerText){
            var searchValue = document.querySelector('#search-text');
            searchValue.value = object.name;
            descriptionView.render(object);
          }
        }
      });
      var section = dropDown.appendChild(anchor)
    }
  }
}

module.exports = DropdownView;




