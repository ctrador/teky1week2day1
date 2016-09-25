$(function() {

    $ ("h1")
    .css("color", "red")
    
    $("body")
    .css("text-align", "center")
         
          $('.buttons').click(function(ev){
            var myValue = $(this).html();
            show(myValue)
            $('ol').append('myValue'); 
       
       
     });  
 });
    // $(document).ready(function(){

        
    }