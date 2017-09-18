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
    var testView = new TestView();
    testView.repopulate(term)
  },

  repopulate: function(term) {
    var section = document.querySelector('#description-section');
    var p = document.createElement('p');
    p.innerText = term.testDescription;

    section.appendChild(p);


    console.log(term.testDescription);
  }
}

module.exports = TestView;
