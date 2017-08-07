var quotes;
var keys;
var quoteNodes;
var quoteMachine = new QuoteMachine();
var typewriter = new Typewriter();

var films;
var backButton;

$(document).ready(function() {
  quoteNodes = $('.quote-content');
  backButton = $('.header-btn');

  quotesRef.once("value", function(snapshot) {
    typewriter.loop();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  films = $('.film .card-image');
  if ($(window).width() < 768) {
    $(window).scroll(function() {
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
    });
  }

  backButton.click(function(e) {
    e.preventDefault();
    window.history.back();
  });

});
