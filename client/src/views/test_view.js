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

      var form = document.createElement('form');
      // var answer1 = document.createElement('input');
      // var answer2 = document.createElement('input');

      section.appendChild(form);

      // form.appendChild(answer1);
      // form.appendChild(answer2);

      form.outerHTML = '<form id="test-form" alt="test question">' + term.testDescription[0] + ' ' + '<input type="text" id="answer1" alt="Enter answer 1 here">' + ' ' + term.testDescription[1] + ' ' + '<input type="text" id="answer2" alt="Enter answer 2 here">' + ' ' + term.testDescription[2] +'</form>';


      // answer1.outerHTML = '<input type="text" id="answer1" alt="Enter answer 1 here">';
      // answer2.outerHTML = '<input type="text" id="answer2" alt="Enter answer 2 here">';




      var elementArray = term.testDescription
      for(element of elementArray){
        var p = document.createElement('p');
        p.innerText = element;
        section.appendChild(p);
      };
    }

      // var answerDiv1 = document.createElement('div');
      // answerDiv1.outerHTML =





}

module.exports = TestView;
