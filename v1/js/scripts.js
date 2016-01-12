window.onload = function() {
  var items = document.getElementsByClassName("item");
  // var section = document.getElementsByClassName("section");
  // var heading = document.getElementById("heading");
  //
  // function updateFlag(color) {
  //   TweenLite.to("#flag", 1, {fill: color});
  // }
  //
  // function toggleButton(element) {
  //   for (var i = 0; i < links.length; i++) {
  //     links[i].className = "link col-md-4";
  //   }
  //   element.className += " on";
  // }
  //
  // function showSocial(color) {
  //   TweenLite.to(".social", 1, {autoAlpha: 1});
  //   TweenLite.to(".social-link", 1, {color: color});
  // }
  //
  // function showPanel() {
  //   section[1].style.display = "block";
  //   TweenLite.to(section[0], 1, {height: "60vh", ease: Power2.easeOut});
  // }
  //
  // function updatePanel(color, currentHeading) {
  //   heading.innerHTML = currentHeading;
  //   TweenLite.to(section[1], 1, {autoAlpha: 1, backgroundColor: color, ease: Power2.easeOut});
  //   TweenLite.to("#button", 1, {color: color});
  // }

  var tl = new TimelineLite();

  tl.to("#nav-link", 1.5, {opacity: 1, ease: Power2.easeOut});
  tl.staggerFromTo(items, 1, {opacity: 0}, {opacity: 1, ease: Power2.easeOut}, 0.2);
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
