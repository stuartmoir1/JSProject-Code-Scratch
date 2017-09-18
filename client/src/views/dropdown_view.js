var DescriptionView = require('./description_view.js');

// Constructor
var DropdownView = function(){

}

// Methods

DropdownView.prototype = {

  render: function(data){
    console.log(data);

      // ******=============================================================

      /* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
      
      var dropDown = document.querySelector("#dropdown-content");
      for (var element of data){  
        var section = dropDown.appendChild(document.createElement('a'))
        section.outerHTML = '<a href=" ">' + element.name + '</a>'
      }

      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

          // var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
    }
  }

    // ******================================================================

   
 

module.exports = DropdownView;




