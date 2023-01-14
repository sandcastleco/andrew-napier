var breakpoint = 1024;
var quotes;
var keys;
var quoteNodes;
var quoteMachine = new QuoteMachine();
var typewriter = new Typewriter();

var films;
var backButton;

function checkFilmHighlight() {
  var scrollPosition = $(document).scrollTop();
  for (var i = 0; i < films.length; i++) {
    var film = $(films[i]);
    var top = film.offset().top - 150;
    var bottom = top + film.height();
    if (scrollPosition > top && scrollPosition < bottom && !film.hasClass('view')) {
      film.addClass('view');
    } else if ((scrollPosition < top || scrollPosition > bottom) && film.hasClass('view')) {
      film.removeClass('view');
    }
  }
}

function goBack(e) {
  e.preventDefault();
  window.history.back();
}

$(document).ready(function() {
  quoteNodes = $('.quote-content');
  backButton = $('.header-btn');
  films = $('.film .card-image');

  quotesRef.once("value", function(snapshot) {
    typewriter.loop();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  if ($(window).width() <= breakpoint) {
    checkFilmHighlight();
    $(window).scroll(checkFilmHighlight);
  }

  backButton.click(goBack);

});
