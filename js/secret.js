function type(quote) {
  console.log("hello");
}

window.onload = function() {
  var quoteNode = document.getElementById("quote");

  function myCallback() {
    quoteNode.textContent = " ";
    var quote = getRandomQuote();
    for (var i = 0; i < quote.length; i++) {
      (function(i) {
        window.setTimeout(function() {
          quoteNode.textContent += quote.charAt(i);
        }, i * 50);
      })(i);
    }
  }

  myCallback();

  var intervalID = window.setInterval(myCallback, 7000);
}
