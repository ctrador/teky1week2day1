$(function() {

    $ ("h1")
    .css("color", "red")
    
    $("body")
    .css("text-align", "center")
         
          $('.buttons').click(function(){
            var myValue = $(this).html();
            show(myValue)
            $('ol').append('myValue'); 
       
       
     });  
 });
    