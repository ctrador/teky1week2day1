//$(document).ready(function())
$(function() {

    $("#para").click(function(ev) {
        //$ ("#para"). fadeout('slow' , 'linear');
        //$(this).fadeOut('slow', 'linear')
        $(ev.target).fadeOut('slow','linear');
    });
    //$("h3"){text-decorattion: underline;}
    $("h3")
    .css("text-decoration" , "underline")
    .css("fount-weight" , "normal");
//$("ul li: first-child")
$("ul").find("li:first-child")
.css("color", "red");

$("ul").append("<li>Item 2</li>");

$(".remove").click(function(ev){
    console.log(ev);
    $(ev.target.parent()
    .fadeOut()//remove();



$(#name).blur(function(ev) {

   // var name = $("name").val();
//var name = ev.target.value;
var name = $(ev.target).val();

    alert("Hello," + name);
})

$("#showName".click(function(ev)
{
    name = $("#name").val();
    ("hello," + name);
}

});



