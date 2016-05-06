window.onload = function() {
  var quoteNode = document.getElementById("quote");

  function loopAgain(delay) {
    window.setTimeout(loop, delay || 2500);
  }

  function typeLetter(quote, index, timing) {
    window.setTimeout(function() {
      quoteNode.textContent += quote.charAt(index);
      if (index == quote.length - 1) {
        loopAgain();
      }
    }, index * timing);
  }

  function typeQuote(quote) {
    for (var i = 0; i < quote.length; i++) {
      typeLetter(quote, i, 50);
    }
  }

  function loop() {
    quoteNode.textContent = "";
    var quote = getRandomQuote();
    typeQuote(quote);
  }

  loop();

}
