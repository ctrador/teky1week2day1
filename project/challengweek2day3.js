



for(var i=0; i < data.length; i++){
    var text = data[i];
    $("#list").append("<li>" + text + "</li>";)
}
var url ="http://rest.learncode.academy/api/learncode/friends.done(function(data)";

$.ajax(url, {method: "get"}).done(function(data) {
    $("friend").html(data.name)
}));