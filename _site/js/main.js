var quotes;
var keys;
var quoteNodes;
var quoteMachine = new QuoteMachine();
var typewriter = new Typewriter();

window.onload = function() {
  quoteNodes = document.getElementsByClassName("quote-content");
  console.log(quoteNodes);

  quotesRef.once("value", function(snapshot) {
    typewriter.loop();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}
