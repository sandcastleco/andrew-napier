(function() {

  var loginButton;
  var loginInput;

  rootRef.onAuth(function(authdata) {
    if (authdata) {
      window.location.href = "/dashboard";
    }
  });

  function login() {
    rootRef.authWithPassword({
      email    : 'andrewnapier@gmail.com',
      password : loginInput.value
    });
  }

  window.onload = function() {
    loginInput = document.getElementById("password-input");
    loginButton = document.getElementById("login-button");

    loginInput.addEventListener("keypress", function(event) {
      if (event.keyCode == 13) {
        event.preventDefault();
        login();
      }
    });

    loginButton.addEventListener("mousedown", login);

  }

  // var quoteList;
  // var quoteForm;
  // var submitButton;
  // var formInput;
  // var deleteButtons;
  // var editButtons;
  // var isEditing;
  // var quoteToEdit;
  // var emailInput;
  // var passwordInput;
  // var loginButton;
  // var loggedIn;
  //
  // function updateQuoteList() {
  //   quoteList.innerHTML = "";
  //   for (var quote in quotes) {
  //     quoteList.innerHTML += "<li><span class='content'>" + quotes[quote] + "</span><span class='controls' data-key=" + quote + "><i class='fa fa-pencil'></i><i class='fa fa-trash'></i></span></li>";
  //   }
  // }
  //
  // function startEditing() {
  //   isEditing = true;
  //   submitButton.innerText = "Update quote";
  // }
  //
  // function stopEditing() {
  //   isEditing = false;
  //   submitButton.innerText = "Add quote";
  // }
  //
  // function createEditButtons() {
  //   editButtons = document.getElementsByClassName("fa-pencil");
  //   for (var i = 0; i < editButtons.length; i++) {
  //     editButtons[i].addEventListener("mousedown", function() {
  //       startEditing();
  //       var key = this.parentElement.dataset.key;
  //       var quote = quotes[key];
  //       quoteToEdit = quotesRef.child(key);
  //       formInput.value = quote;
  //     });
  //   }
  // }
  //
  // function createDeleteButtons() {
  //   deleteButtons = document.getElementsByClassName("fa-trash");
  //   for (var i = 0; i < deleteButtons.length; i++) {
  //     deleteButtons[i].addEventListener("mousedown", function() {
  //       var key = this.parentElement.dataset.key;
  //       quotesRef.child(key).remove();
  //       updateQuoteList();
  //       createDeleteButtons();
  //     });
  //   }
  // }
  //
  // function hideLogin() {
  //   var loginForm = document.getElementById("login-form");
  //   loginForm.style.display = "none";
  // }
  //
  // function showOtherStuff() {
  //   quoteForm.style.display = "initial";
  //   quoteList.style.display = "initial";
  // }
  //
  // window.onload = function() {
  //
  //   quoteList = document.getElementById("quote-list");
  //   submitButton = document.getElementById("submit");
  //   quoteForm = document.getElementById("quote-form");
  //   formInput = document.getElementById("quote-input");
  //   loginButton = document.getElementById("login-submit");
  //   passwordInput = document.getElementById("password-input");
  //
  //   quoteForm.style.display = "none";
  //   quoteList.style.display = "none";
  //
  //   loginButton.addEventListener("mousedown", function() {
  //     rootRef.authWithPassword({
  //       email    : 'andrewnapier@gmail.com',
  //       password : passwordInput.value
  //     });
  //   });
  //
  //   rootRef.onAuth(function(authdata) {
  //     if (authdata) {
  //       loggedIn = true;
  //       hideLogin();
  //       showOtherStuff();
  //     }
  //   });
  //
  //   // Get the data from firebase and populate the list
  //   quotesRef.on("value", function(snapshot) {
  //     if (loggedIn) {
  //       updateQuoteList();
  //       createDeleteButtons();
  //       createEditButtons();
  //     }
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  //
  //   // Set up an event listener to send the data to firebase when the form is submitted and update the list
  //   submitButton.addEventListener("mousedown", function() {
  //     if (formInput.value != "") {
  //       if (isEditing) {
  //         quoteToEdit.set(formInput.value);
  //         formInput.value = "";
  //         stopEditing();
  //       } else {
  //         quotesRef.push(formInput.value);
  //         formInput.value = "";
  //       }
  //     }
  //   });
  //
  //   updateQuoteList();
  // }
})();
