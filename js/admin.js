var quotes = {};
var quoteList;
var submitButton;
var formInput;
var deleteButtons;
var editButtons;
var isEditing;
var quoteToEdit;

var rootRef = new Firebase('https://andrew-napier.firebaseio.com');
var quotesRef = rootRef.child("quotes");

function updateQuoteList() {
  quoteList.innerHTML = "";
  for (var quote in quotes) {
    quoteList.innerHTML += "<li><span class='content'>" + quotes[quote] + "</span><span class='controls' data-key=" + quote + "><i class='fa fa-pencil'></i><i class='fa fa-trash'></i></span></li>";
  }
}

function startEditing() {
  isEditing = true;
  submitButton.innerText = "Update quote";
}

function stopEditing() {
  isEditing = false;
  submitButton.innerText = "Add quote";
}

function createEditButtons() {
  editButtons = document.getElementsByClassName("fa-pencil");
  for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("mousedown", function() {
      startEditing();
      var key = this.parentElement.dataset.key;
      var quote = quotes[key];
      quoteToEdit = quotesRef.child(key);
      formInput.value = quote;
    });
  }
}

function createDeleteButtons() {
  deleteButtons = document.getElementsByClassName("fa-trash");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("mousedown", function() {
      var key = this.parentElement.dataset.key;
      quotesRef.child(key).remove();
      updateQuoteList();
      createDeleteButtons();
    });
  }
}

window.onload = function() {
  quoteList = document.getElementById("quote-list");
  submitButton = document.getElementById("submit");
  formInput = document.getElementById("quote-input");

  // quotesRef.push("test");

  // Get the data from firebase and populate the list
  quotesRef.on("value", function(snapshot) {
    console.log(snapshot.val());
    quotes = snapshot.val();
    updateQuoteList();
    createDeleteButtons();
    createEditButtons();
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  // Set up an event listener to send the data to firebase when the form is submitted and update the list
  submitButton.addEventListener("mousedown", function() {
    if (isEditing) {
      quoteToEdit.set(formInput.value);
      formInput.value = "";
      stopEditing();
    } else {
      quotesRef.push(formInput.value);
      formInput.value = "";
    }
  });

  updateQuoteList();
}
