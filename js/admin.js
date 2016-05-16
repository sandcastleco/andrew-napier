window.onload = function() {
  var rootRef = new Firebase('https://andrew-napier.firebaseio.com');
  console.log(rootRef);
  var quotesRef = rootRef.child("quotes");
  var quoteList = document.getElementById("quote-list");

  // quotesRef.push("test");

  // Get the data from firebase and populate the list
  quotesRef.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  // Set up an event listener to send the data to firebase when the form is submitted and update the list

  quoteList.innerHTML = "";

  for (var i = 0; i < quotes.length; i++) {
    quoteList.innerHTML += "<li><span class='content'>" + quotes[i] + "</span><span class='controls'><i class='fa fa-pencil'></i><i class='fa fa-trash'></i></span></li>";
  }
}
