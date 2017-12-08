
$( document ).ready(function() {
    console.log( "ready!" );
  $('#generate-btn').on("click", function(){
   $('.movie-poster-one-bg').addClass('grow-left');
   $('.movie-poster-two-bg').addClass('grow-right');
   $('.vs-btn').addClass('fade-in');
    
    
  console.log("button has been clicked");
});

});

// $('#generate-btn').on("click", function(){
//    $('.movie-poster-two-bg').addClass('grow-right');
// });

// $('#generate-btn').on("click", function(){
//    $('#vs').addClass('fadeIn');
// });

