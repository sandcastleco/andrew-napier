window.onload = function() {
  console.log("load");
  var pageTitle = document.getElementsByTagName("title")[0];
  pageTitle.innerText = getRandomQuote();
}
