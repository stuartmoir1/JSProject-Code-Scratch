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
    }, 50);
    console.log("section faded");
    var self = this;
    setTimeout(function(){
      self.repopulate(term);
    }, 1500);

  },

  repopulate: function(term) {

    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    var form = document.createElement('form');
    section.appendChild(form);
    form.outerHTML = '<form id="test-form" alt="test question">'
      + term.testDescription[0] + ' '
      + '<input type="text" id="answer1" alt="Enter answer 1 here">' + ' '
      + term.testDescription[1] + ' '
      + '<input type="text" id="answer2" alt="Enter answer 2 here">' + ' '
      + term.testDescription[2] + ' '
      + '<input type="submit" id="submit" value="submit"' + ' ' + '</form>';
    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      var testAnswers = [];
      var answ1 = document.getElementById('answer1').value;
      var answ2 = document.getElementById('answer2').value;
      testAnswers.push(answ1, answ2);
      console.log(testAnswers);

    })
  }


}

module.exports = TestView;
