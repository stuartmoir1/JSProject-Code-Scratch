// Constructor
var CountdownTimerView = function(){
  this.duration = 5;
}

// Methods

CountdownTimerView.prototype = {

  render: function(){

    var count = this.duration;

    var section = document.querySelector('#countdown-timer');
    while (section.firstChild){ section.removeChild(section.firstChild); };

    var display = document.createElement('p');
    display.innerText = count;
    section.appendChild(display);

    // Display countdown.
    var countdown = setInterval(function(){
      count--;
      display.innerText = count;
      if (count <= 0) clearInterval(countdown);
    }, 1000);

    // Display count complete message.
    var wait = setTimeout(function(){
      var message = document.createElement('p')
      message.innerText = 'Done!';
      section.appendChild(message)
    }, this.duration * 1000);
  }
}

module.exports = CountdownTimerView;