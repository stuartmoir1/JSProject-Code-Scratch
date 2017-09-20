var TestView = function(data) {
  this.data = data;
}

TestView.prototype = {

  render: function(term) {
    var section = document.querySelector('#description-text');
    var button = document.querySelector('#test-button');
    var infoButton = document.querySelector('#info-button');

    // var testView = new TestView();
    this.fade(section, term);
    this.fade(button, term);
    this.fade(infoButton, term);
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

  repopulate: function(term) {

    
    // setTimeout(function(){
    //   self.unfade(section);
    // }, 0);
    // console.log(self);
    

    var section = document.querySelector('#description-section');
    while (section.firstChild){ section.removeChild(section.firstChild); };

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

    var self = this;

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
      + '<input type="image" id="submit" value="Check" src="/images/mark.png" alt="A Random Selection" style="width:50px;height:50px;">' + ' ' + '<input type="image" id="random-test" value="Die" src="/images/preview.png"></form>';

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

    console.log(this.data);

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

    var jsonString = localStorage.getItem('score');
    var savedScore = JSON.parse(jsonString);
    var newScore = savedScore + score;
    jsonString = JSON.stringify(newScore);
    localStorage.setItem('score', jsonString);

    jsonString = localStorage.getItem('testTaken');
    var savedTests = JSON.parse(jsonString);
    var numOfTests = savedTests + count;
    jsonString = JSON.stringify(numOfTests);
    localStorage.setItem('testTaken', jsonString);

    if (response === true){
      alert('Well done, Noobie! You got it right!');
    } else {
      alert('Doh, Noobie! That\`s the wrong answer! Try again');
    }
  }
}

module.exports = TestView;
