function Typewriter() {};
Typewriter.prototype = {
  loop: function() {
    var quote = quoteMachine.getRandomQuote();
    this.typeQuote(quote);
    // typeQuote(quote);
  },
  typeQuote: function(quote) {
    for (var i = 0; i < quoteNodes.length; i++) {
      quoteNodes[i].textContent = "";
    }
    for (var j = 0; j < quote.length; j++) {
      this.typeLetter(quote, j, 50);
    }
  },
  typeLetter: function (quote, index, timing) {
    window.setTimeout(function() {
      for (var i = 0; i < quoteNodes.length; i++) {
        quoteNodes[i].textContent += quote.charAt(index);
      }
      if (index == quote.length - 1) {
        window.setTimeout(function() {
          typewriter.loop();
        }, 2500);
      }
    }, index * timing);
  }
}
