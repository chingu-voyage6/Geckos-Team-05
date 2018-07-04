$(document).ready(function(){
    
    $(".search-icon").click(function(){
        let userInput = $(".search-box").val();
        doWiki(userInput);
    });

    
    $("search-input").on('keypress',function(event){
        if (event.which == 13){
            let userInput = $(".search-box").val();
            doWiki(userInput);

            // event.preventDefault();
            return false;
        }

    });

});



// Function to add animatio to the search box
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

    // Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");

   // Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};