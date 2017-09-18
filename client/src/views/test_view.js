var TestView = function() {

}

TestView.prototype = {

  render: function(term) {
    console.log(term.keywords);
    var section = document.querySelector('#description-text');
    var button = document.querySelector('#test-button');
    var testView = new TestView();
    testView.fade(section);
    testView.fade(button);
  },

  fade: function(keyWord){
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            keyWord.style.display = 'none';
        }
        keyWord.style.opacity = op;
        keyWord.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
    console.log("section faded");
  }
}

module.exports = TestView;
