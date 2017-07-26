var quotes;
var keys;
var quoteNodes;
var quoteMachine = new QuoteMachine();
var typewriter = new Typewriter();

$(document).ready(function() {
  quoteNodes = $('.quote-content');

  quotesRef.once("value", function(snapshot) {
    typewriter.loop();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});
