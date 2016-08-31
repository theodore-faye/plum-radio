$(document).ready(function(){

  var poems = [
    {
    poet: "Michael Robins",
    poem: "His Passion is Doves",
    book: "Ladies & Gentlemen",
    publisher: "Saturnalia Books, 2011",
    lines: ["Bewildered, our pigeons flew ashore long ago", "The mull the rooms of old, coastal motels"]
   },
   {
    poet: "C.D. Wright",
    poem: "from Just Whistle, a valentine",
    book: "Steal Away",
    publisher: "Copper Canyon Press, 2002",
    lines: ["The body, alive, not dead, but dormant, like a cave that had stopped growing, stirred up, awakened"]
  },
  {
    poet: "Elizabeth Hughey",
    poem: "What Bird",
    book: "Sunday Houses The Sunday House",
    publisher: "University of Iowa Press, 2007",
    lines: ["Bulbs, gravel driveway.", "I had hyacinth on my mouth."]
  },
  {
    poet: "Laura Miller",
    poem: "Wake",
    book: "Subject",
    publisher: "University of California Press, 2005",
    lines: ["wake: outside the frame beyond his 'fit'", "wake: frothed a blankness in the passage of what", "wake: we waited &nbsp&nbsp(and silence)"]
  }
  ]

  var counter = 60;
  var lines;
  var timedMode = false;
  var usedPoems = [];
  var userText;
  var poemCount = 0;

  // Buttons
  $('#gutModeStart').click(function() {
    gutStart();
  })

  $('#zenModeStart').click(function() {
    start();
  })

  $('#zenMode').click(function() {
    zenMode();
  })

  $('#pastTab').click(function() {
    pastLines();
  })

  $('#inputTab').click(function() {
    pastLinesBack();
  })

  $('#next').click(function() {
    nextPoem();
    addUserText();
  })


  function start() {
    $('.start').addClass('disable');
    $('.main').removeClass('disable');
    getPoem();
    populateLines();
  }

  function gutStart() {
    $('#minutes').removeClass('disable');
    $('#zenModeStart').addClass('disable');
    $('#ten').click(function() {
      poemCount = 10;
      start();
      gutMode();
    })
    $('#five').click(function() {
      poemCount = 5;
      start();
      gutMode();
    })
  }

  function getPoem() {
    var index = Math.floor(Math.random() * (poems.length));
    if(usedPoems.length === poems.length) {
      usedPoems = [];
      getPoem();
    } else if(usedPoems.indexOf(index) === -1) {
      lines = poems[index].lines;
      usedPoems.push(index);
    } else {
      getPoem();
    }
  }

  function populateLines() {
    for(var i = 0; i < lines.length; i ++) {
      $('#lines').append("<h2>"+lines[i]+"</h2>");
    }
  }

  function timer() {
    setInterval(function(){
      if(counter == 0) {
        nextPoem();
        clearInterval(timer);
      } else {
        $('#timer').html(counter--);
      }
    }, 1000)
  }

  function gutMode() {
    timedMode = true;
    $('#timer').removeClass('disable');
    $('.buttons').addClass('disable');
    timer();
  }

  function zenMode() {
    timedMode = false;
    $('#timer').addClass('disable');
    $('#next').removeClass('disable');
    clearInterval(timer);
  }

  function nextPoem() {
    $('#lines').empty();
    getPoem();
    populateLines();
    addUserText();
    if(timedMode == true) {
      counter = 60;
      poemCount --;
      console.log(poemCount);
    }
  }

  function pastLines() {
    $('#pastTab, .form-group').addClass('disable');
    $('#inputTab, #pastLines').removeClass('disable');
    if(timedMode = true) {
        clearInterval(timer);
    }
  }
  function pastLinesBack() {
    $('#pastTab, .form-group').removeClass('disable');
    $('#inputTab, #pastLines').addClass('disable');
    if(timedMode = true) {
      timer();
    }
  }

  function addUserText() {
    var inputValue = $('textarea').val();
    console.log(inputValue);
    userText = "<p>"+inputValue+"</p>"
    $('#pastLines').append(userText);
    $('textarea').val("");
  }

})
