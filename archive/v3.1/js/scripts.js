var squareLink = document.getElementById("square-link");

function hoverHandler() {
  console.log("hover");
  TweenLite.to(["#curfew", "#curfew-caption"], 1, {opacity: 1, ease: Power2.easeOut});
}

function offHandler() {
  console.log("off");
  TweenLite.to(["#curfew", "#curfew-caption"], 1, {opacity: 0, ease: Power2.easeOut});
}

squareLink.addEventListener("mouseover", hoverHandler);
squareLink.addEventListener("mouseout", offHandler);
