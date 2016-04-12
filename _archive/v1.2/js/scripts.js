window.onload = function() {
  var menu = document.getElementsByClassName("menu");
  var navLink = document.getElementById("nav-link");

  var tl = new TimelineLite();

  tl.to("#nav-link", 1, {opacity: 1, ease: Power2.easeOut});

  navLink.addEventListener("click", function() {
    console.log("Click");
    tl.to(".cover", 1, {height: "20vh"});
    menu[0].style.display = "block";
    tl.to(".menu", 5, {opacity: 1, ease: Power2.easeOut});

  });
  //tl.staggerFromTo(items, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeOut}, 0.2);
  //
  // for (var i = 0; i < links.length; i++) {
  //   links[i].addEventListener("click", function() {
  //     var color = this.dataset.color;
  //     var currentHeading = this.dataset.heading;
  //
  //     toggleButton(this);
  //     updateFlag(color);
  //     showSocial(color);
  //     showPanel();
  //     updatePanel(color, currentHeading);
  //   });
  // }
}


// var navLink = document.getElementById("nav-link");
//
// function clickHandler() {
//   console.log("click");
// }
//
// navLink.addEventListener("mousedown", clickHandler);
