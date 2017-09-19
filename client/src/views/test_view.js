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

    var questionText = [];
    var count = 0;

    var form = document.createElement('form');
    section.appendChild(form);

    for (var i = 0; i < term.keywords.length; i++) {
      var text = term.testDescription[i] + ' ' + '<input type="text" id="answer' +(i+1)+'" alt="Enter answer ' +(i+1)+' here">';
      questionText.push(text);
    }
    var joinedText = questionText.join(' ');
    var lastElement = term.testDescription[term.testDescription.length-1];

    form.outerHTML = '<form id="test-form" alt="test question">' + joinedText + lastElement + ' '
      + '<input type="submit" id="submit" value="submit"' + ' ' + '</form>';

    console.log(form.outerHTML);

    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      var testAnswers = [];
      for (var i = 0; i < term.keywords.length; i++) {
        var element = document.getElementById('answer'+(i+1)).value;
        testAnswers.push(element);
      };

      self.compare(testAnswers, term);

    })
  },

  compare: function(data, term){

    var count = 0;
    data.forEach(function(element) {
      if(element === term.keywords[count]){
          var answer = document.getElementById('answer'+(count+1));
          answer.style.color = "Green";
        } else {
          var answer = document.getElementById('answer'+(count+1));
          answer.style.color = "Red";
        };
        count ++;
    })

  }
}



module.exports = TestView;
