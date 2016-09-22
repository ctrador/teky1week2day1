$(document).ready(function(){




$.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDfKPGIacJeWwwN52UYn_8hWzr-K_YO9yY") .done(function(data){
$("#city state").append(data.locality + "  "+ "," + "  " + data.political);
});
});