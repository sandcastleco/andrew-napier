var rootRef = new Firebase('https://andrew-napier.firebaseio.com');
var quotesRef = rootRef.child("quotes");

quotesRef.on("value", function(snapshot) {
  quotes = snapshot.val();
  keys = Object.keys(quotes);
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
