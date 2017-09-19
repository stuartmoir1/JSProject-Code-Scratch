var TestView = function() {

}

TestView.prototype = {

  render: function(term) {
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
    var self = this;
    setTimeout(function(){
      self.repopulate(term);
    }, 1500);

  },

  repopulate: function(term) {
    var self = this;

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
      self.compare(testAnswers, term);

    })
  },

  compare: function(data, term){

    console.log(term);
    // if(data[0] === term.keywords[0] && data[1] === term.keywords[1]) {
    //   section = document.querySelector('#test-form')
    //   section.style.transform = "rotate(360deg)";
    // }


    if (data[0] === term.keywords[0]){
      var answ1 = document.getElementById('answer1');
      answ1.style.color = "Green";
      // answ1.style.transform = "rotate(360deg)";
      // answ1.style.transitionDuration = "5s";
    } else {
      var answ1 = document.getElementById('answer1');
      answ1.style.color = "Red";
    };

    if (data[1] == term.keywords[1]){
      var answ2 = document.getElementById('answer2');
      answ2.style.color = "Green";
      // answ2.style.transform = "rotate(360deg)";

    } else {
      var answ2 = document.getElementById('answer2');
      answ2.style.color = "Red";
    };
    }
  }



module.exports = TestView;
