window.onload = function() {
  var quoteNode = document.getElementById("quote1");
  var quoteNode2 = document.getElementById("quote2");

  function loopAgain(delay) {
    window.setTimeout(loop, delay || 2500);
  }

  function typeLetter(quote, index, timing) {
    window.setTimeout(function() {
      if (quoteNode != null) {
        quoteNode.textContent += quote.charAt(index);
      }
      quoteNode2.textContent += quote.charAt(index);
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
    if (quoteNode != null) {
      quoteNode.textContent = "";
    }
    quoteNode2.textContent = "";
    var quote = getRandomQuote();
    typeQuote(quote);
  }

  quotesRef.on("value", function(snapshot) {
    loop();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

}
