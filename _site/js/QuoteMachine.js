function QuoteMachine() {
  this.visitedQuotes = [];
};

QuoteMachine.prototype = {
  getRandomQuote: function(){
    var quoteId = keys[Math.floor(Math.random() * keys.length)];
    // console.log(quotes[quoteId]);
    // return quotes[quoteId];
    if (this.visitedQuotes.indexOf(quoteId) == -1) {
      this.visitedQuotes.push(quoteId);
      return quotes[quoteId];
    } else {
      if (this.visitedQuotes.length == keys.length) {
        var quote = "Wow... You Saw All Of The Quotes... Andrew Is Impressed! Also, You Have Way Too Much Time On Your Hands...";
        return quote;
      } else {
        return this.getRandomQuote();
      }
    }
  }
}
