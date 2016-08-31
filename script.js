$document.ready(function(){

  var poems = [
    {
    poet: "Michael Robins",
    poem: "His Passion is Doves",
    book: "Ladies & Gentlemen",
    publisher: "Saturnalia Books, 2011"
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
    lines: ["wake: outside the frame beyond his 'fit'", "wake: frothed a blankness in the passage of what", "wake: we waited     (and scilence)"]
  }
  ]

  var counter = 60;
  var lines;
  var timedMode = false;

  // Buttons


  function getPoem() {
    var index = Math.floor(Math.random * (poems.length))-1;
    lines = poems[index].lines;
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
        $('#timer').html(count--);
      }
    })
  }

  function gutMode() {
    timedMode = true;
    $('#timer').removeClass('disable');
    $('.buttons').addClass('disable');
    timer();
  }

  function nextPoem() {
    getPoem();
    populateLines();
    if(timedMode == true;) {
      count = 60;
      timer();
    }
  }

})
