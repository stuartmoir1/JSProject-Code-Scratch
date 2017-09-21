var TestView = function(data) {
  this.data = data;
}

TestView.prototype = {

  render: function(term) {
    var section = document.querySelector('#description-text');
    var button = document.querySelector('#test-button');
    var infoButton = document.querySelector('#info-button');
    var audioButton = document.querySelector('.speak')
    
    this.fade(section, term);
    this.fade(button, term);
    this.fade(infoButton, term);
    this.fade(audioButton, term);
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
    },2000 );
  },

  fadeUp: function(section){
    var op = 0.01;  // initial opacity
    section.style.opacity = 0.01;
    var timer = setInterval(function () {
      if (op >= 1){
        clearInterval(timer);
      }
      section.style.opacity = op;
      section.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
    }, 50);
  },

  repopulate: function(term) {

    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    this.fadeUp(section);
    this.createInputForm(section, term);
    this.testSubmitButtonAction(term);
    this.randomTestButtonAction();
    savedScore = this.getSavedScore();
    savedTests = this.getSavedTest();
    var self = this;

    var testResult = document.createElement('div');
    testResult.setAttribute("id", "test-result");
    section.appendChild(testResult);

    testResult.innerText = "Test Results:   " + savedScore + "/" + savedTests;      
  },

  createInputForm: function(section, term){
    var questionText = [];
    var count = 0;

    var form = document.createElement('form');
    section.appendChild(form);

    for (var i = 0; i < term.keywords.length; i++) {
      var text = term.testDescription[i] + ' ' + '<input type="text" id="answer' +(i+1)+'" alt="Enter answer ' +(i+1)+' here" autofocus="answer1">';
      questionText.push(text);
    }
    var joinedText = questionText.join(' ');
    var lastElement = term.testDescription[term.testDescription.length-1];

    form.outerHTML = '<form id="test-form" alt="test question">' + joinedText + lastElement + ' '
      + '<br><br><input type="text" id="submit" value="Check" alt="Check answers" ' + ' ' + '><input type="text" id="random-test" value="Next" alt="Next test"></form>';
  },

  testSubmitButtonAction: function(term){
    var submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      var testAnswers = [];
      for (var i = 0; i < term.keywords.length; i++) {
        var element = document.getElementById('answer'+(i+1)).value;
        testAnswers.push(element);
      };
      this.compare(testAnswers, term);
    }.bind(this));
  },

  randomTestButtonAction: function(){
    var randomTestButton = document.querySelector('#random-test');
    randomTestButton.addEventListener('click', function(e){
      e.preventDefault();
      var number = this.data.length;
      var randomTerm = this.data[Math.floor(Math.random() * number)];
      var searchValue = document.querySelector('#search-text');
      searchValue.value = randomTerm.name;
      this.repopulate(randomTerm);
    }.bind(this));
  },

  getSavedScore: function(){
    var jsonString = localStorage.getItem('score');
    var savedScore = JSON.parse(jsonString);
    return savedScore;
  },

  getSavedTest: function(){
    jsonString = localStorage.getItem('testTaken');
    var savedTests = JSON.parse(jsonString);
    return savedTests;
  },

  saveScore: function(score){
    jsonString = JSON.stringify(score);
    localStorage.setItem('score', jsonString);
  },

  saveTests: function(tests){
    jsonString = JSON.stringify(tests);
    localStorage.setItem('testTaken', jsonString);
  },

  compare: function(data, term){
    var count = 0;
    var score = 0
    var response = true;
    data.forEach(function(element) {
      if(element === term.keywords[count]){
        var answer = document.getElementById('answer' + (count + 1));
        answer.style.color = "Green";
        score++; 
      } else {
        var answer = document.getElementById('answer' + (count + 1));
        answer.style.color = "Red";
        response = false;
      };
      count++;
    });

    var savedScore = this.getSavedScore();
    var newScore = savedScore + score;
    this.saveScore(newScore);

    var savedTests = this.getSavedTest();
    var numOfTests = savedTests + count;
    this.saveTests(numOfTests);

    var testResult = document.querySelector('#test-result');
    testResult.innerText = "Test Results:   " + newScore + "/" + numOfTests;
  }
}

module.exports = TestView;