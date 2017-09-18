var TestView = function() {

}

TestView.prototype = {

  render: function(term) {
    console.log(term.keywords);
    var section = document.querySelector('#description-text');
    var button = document.querySelector('#test-button');
    var testView = new TestView();
    testView.fade(section, term);
    testView.fade(button, term);
  },

  fade: function(section, term){

    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            section.style.display = 'none';
        }
        section.style.opacity = op;
        section.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
        // var testView = new TestView();
        // callback(term);
    }, 50);
    console.log("section faded");
    var self = this;
    // var testView = new TestView();
    setTimeout(function(){
      self.repopulate(term);
    }, 1500);

  },

  repopulate: function(term) {

    console.log(term);
      var section = document.querySelector('#description-section');
      while (section.firstChild){ section.removeChild(section.firstChild); };
      var elementArray = term.testDescription
      for(element of elementArray){
        var p = document.createElement('p');
        p.innerText = element;
        section.appendChild(p);
      }
  }


}

module.exports = TestView;
