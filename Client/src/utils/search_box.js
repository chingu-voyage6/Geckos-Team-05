// BACKGROUND COLOUR

$(document).ready(function getStylesheet() {
      var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 5) {
       $("body").append("<link rel='stylesheet' href='../src/night.css' type='text/css'>");
      }
      if (5 <= currentTime&&currentTime < 11) {
       $("body").append("<link rel='stylesheet' href='../src/morning.css' type='text/css'>");
      }
      if (11 <= currentTime&&currentTime < 16) {
       $("body").append("<link rel='stylesheet' href='../src/day.css' type='text/css'>");
      }
      if (16 <= currentTime&&currentTime < 22) {
       $("body").append("<link rel='stylesheet' href='../src/evening.css' type='text/css'>");
      }
      if (22 <= currentTime&&currentTime <= 24) {
       $("body").append("<link rel='stylesheet' href='../src/night.css' type='text/css'>");
      }
})


// Function to add animation to the search box
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

    
// POPUP PAGE 
    // Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");

   // Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};

