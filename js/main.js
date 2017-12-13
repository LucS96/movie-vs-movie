
$( document ).ready(function() {
    console.log( "ready!" );
  $('#generate-btn').on("click", function(){
   $('.movie-poster-one-bg').addClass('grow-left');
   $('.movie-poster-two-bg').addClass('grow-right');
    
    
    $('.movie-poster-one-bg').one('webitAnimationEnd oanimationend msAnimationEnd animationend',
function(e){
    console.log("left-finished");
      

        });

        
 $('.movie-poster-two-bg').one('webitAnimationEnd oanimationend msAnimationEnd animationend',
  function(e){
         console.log("right-finished");
   $('.vs').addClass('vs-anim');
     
      
  console.log("button has been clicked");
   
          
        
          });
        

});

   
   


});

// $('#generate-btn').on("click", function(){
//    $('.movie-poster-two-bg').addClass('grow-right');
// });

// $('#generate-btn').on("click", function(){
//    $('#vs').addClass('fadeIn');
// });

