var DescriptionView = require('./description_view.js');

// Constructor
var DropdownView = function(){

}

// Methods
DropdownView.prototype = {

  render: function(data){
    console.log(data);
    
    var descriptionView = new DescriptionView();
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
            descriptionView.render(object);
          }
        }
        
      })
      var section = dropDown.appendChild(anchor)
    }


      // Close the dropdown menu if the user clicks outside of it
      // window.onclick = function(event) {
      //   if (!event.target.matches('.dropbtn')) {

      //     // var dropdowns = document.getElementsByClassName("dropdown-content");
      //     var i;
      //     for (i = 0; i < dropdowns.length; i++) {
      //       var openDropdown = dropdowns[i];
      //       if (openDropdown.classList.contains('show')) {
      //         openDropdown.classList.remove('show');
      //       }
      //     }
      //   }
      // }
    }
  }

    // ******================================================================

   
 

module.exports = DropdownView;




