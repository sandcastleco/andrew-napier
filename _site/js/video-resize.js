// Find all YouTube videos
var $allVideos = $("iframe");

// The element that is fluid width
var $fluidEl = $(".main");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

function resizeVideos() {
  var newWidth = $fluidEl.width();
  console.log(newWidth);

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {
    console.log(this);
    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });
}

// When the window is resized
$(window).resize(resizeVideos).resize();
