function QuoteMachine() {};

QuoteMachine.prototype = {
  getRandomQuote: function(){
    var quoteId = keys[Math.floor(Math.random() * keys.length)];
    console.log(quotes[quoteId]);
    return quotes[quoteId];
    // if (visitedQuotes.indexOf(quoteId) == -1) {
    //   visitedQuotes.push(quoteId);
    //   return quotes[quoteId];
    // } else {
    //   if (visitedQuotes.length == keys.length) {
    //     var quote = "Wow... You Saw All Of The Quotes... Andrew Is Impressed! Also, You Have Way Too Much Time On Your Hands...";
    //     return quote;
    //   } else {
    //     return getRandomQuote();
    //   }
    // }
  }
}
