$(function() {
$.ajax("http://rest.learncode.academy/api/learncode/friends/57e2c0671ebec60100061853") .done(function(data){
$("#me").append(data.name + "  "+ "likes" + "  " + data.drink);
});

