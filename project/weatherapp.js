$(function() {

      // ***************************
      // **  Google Web Services  **
      // ***************************

      function lookupLatLong_Complete(result) {
          var latitude = result.results[0].geometry.location.lat;
          var longitude = result.results[0].geometry.location.lng;
          var local = latitude + "," + longitude;
          
          console.log("The lat and long is " + latitude + ", " + longitude);
      }

      function lookupLatLong(city, state, postalCode) {
          // Create the address.
          var address = "";
          if (postalCode.length != 0) {
              address = postalCode.trim();
          }
          else if (city.length != 0 && state != 0) {
              address = city.trim() + ", " + state;
          }
          else {
              return; // they didn't give me anything valid, so exit
          }

          // Call Google's API.
          var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAQsMF6GQMAD_JlBLibE1ZprVVwxK0kfac";

          var request = {
              url: googleUrl,
              success: lookupLatLong_Complete
          };

          $.ajax(request); 
      }

      // **********************
      // **  Event Handlers  **
      // **********************
      function lookupWeatherForPostalCode_Click() {
          var pcode = $("#postalCode").val();
          lookupLatLong("", "", pcode);
      }
      function tellMeWeather() {
          var local = $("latitude + ',' + longitude");
      }

      // ***********************
      // **  Document ready.  **
      // ***********************

      $(function() {
          $("#lookupWeatherForPostalCode").on("click", lookupWeatherForPostalCode_Click)
      });
      $(document).ready(function() {
function darksky_Complete(result) {
  console.log(result.currently.summary);
   
}

$(function() {
  
  var request = {
url:"https://api.darksky.net/forecast/18ed8459484711603ec79b3586a698bc/" + "37.8267,-122.4233",
dataType: "jsonp", // mostly needed with darksky //
success: darksky_Complete


}

  $.ajax(request);
  
});
      });


    
        var darkSkyKey = "4c56466ac874b73c5e175c9928813bbb";  
var currentTemp = function(id){   
   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233").done(function() {   
            var div = $("<div></div>");
            div.append(result.currently.temperature);
            $("#currentTemp").append(div);
   
   });
   $.get("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", {callback : "?" }, "jsonp",  function(data) {
    $('#currentTemp').text(data.result);
});
    
    $("#currentTemp").click(function() {
        var temp = $("#currentTemp").val();
        currentTemp();
    });
};
});

        //temp
   var darkSkyKey = "4c56466ac874b73c5e175c9928813bbb";  
   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {   
            var div = $("<div></div>");
            div.append(data.currently.temperature)
            div.append( " _ "+ " _ ")
            .append("F" + " is the Current Temp");
            div.append( " _ "+ " ")
            console.log(data.currently.temperature);
            div.append( " "+ " ")
            $("#currentTemp").append(div);
            div.append( " _ "+ " _")
             div.append(data.daily.data[0].temperatureMax)
             .append("F"+"     is   Todays    High");
             div.append( " _ "+ " _ ")
            console.log(data.daily.data[0].temperatureMax);
            $("#todaysHigh").append(div);
            div.append(data.daily.data[0].temperatureMin)
            .append("this is Todays Low Temp")
            div.append( " _ "+ " _ ")
            console.log(data.daily.data[0].temperatureMin);
            div.append( "  "+ " ")
            $("#todaysLow").append(div)
            div.append( " "+ "  ")
             div.append(data.daily.data[0].precipProbability)
             .append(" % Chance of Rain today")
            console.log(data.daily.data[0].precipProbability);
            $("#ChanceOfRain").append(div);  

        });//https://maps.googleapis.com/maps/api/geocode/json?address=+paintsville,+ky&key=AIzaSyDfKPGIacJeWwwN52UYn_8hWzr-K_YO9yY
   //  var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="
//var googleApiKey = "AIzaSyDfKPGIacJeWwwN52UYn_8hWzr-K_YO9yY"

   //$.ajax(googleUrl+address++googleApiKey, { dataType: "json"}).done(function(data) {   
   //         var div = $("<div></div>");
        /*    div.append(data.results[0].address_components[2].long_name);
            console.log(data.results[0].address_components[2].long_name)
            $("#cityState").append(div);
            div.append(data.results["0"].address_components[4].short_name)
            console.log(data.results["0"].address_components[4].short_name)
            $("#cityState").append(div)
        });
   

        //todays high
   
  /* var darkSkyKey = "4c56466ac874b73c5e175c9928813bbb";  
   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {   
            var div = $("<div></div>");
            div.append(data.daily.data[0].temperatureMax);
            console.log(data.daily.data[0].temperatureMax);
            $("#todaysHigh").append(div);
        
   
    
   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {   
            var div = $("<div></div>");
            div.append(data.daily.data[0].temperatureMin)
            .append("this is Todays Low ")
            console.log(data.daily.data[0].temperatureMin);
            $("#todaysLow").append(div)
             div.append(data.daily.data[0].precipProbability)
             .append("Chance of Rain today")
            console.log(data.daily.data[0].precipProbability);
            $("#ChanceOfRain").append(div);  

        });

/*var darkSkyKey = "4c56466ac874b73c5e175c9928813bbb";  
   $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType: "jsonp"}).done(function(data) {   
            var div = $("<div></div>");
            div.append(data.daily.data[0].precipProbability);
            console.log(data.daily.data[0].precipProbability);
            $("#ChanceOfRain").append(div);        
   
   });
   
    
    


//dericks api code up from hear
/*$(document).ready(function () {

  $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=612+Euclid+Ave+Paintsvill,+KY&key=AIzaSyDfKPGIacJeWwwN52UYn_8hWzr-K_YO9yY").done(function (data) {
      console.log(data); 

  });

*/
var darkSkyKey = "4c56466ac874b73c5e175c9928813bbb";  

 /*  $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233", { dataType:"jsonp"}).done(function(data) {
      console.log(data);

   });
   
});hear up working api code

 var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?"
var googleApiKey = "AIzaSyDfKPGIacJeWwwN52UYn_8hWzr-K_YO9yY"

var longlat = function(logatude, latatuide){ $.ajax(googleApiUrl + "address=" + "41222" + "&key=" + googleApiKey).done(function (data) {var div= $("<div></div>"); 

  
    div.append(data.results[0].address_components[2].long_name);
    console.log(data.results[0].address_components[2].long_name);
     div.append(data.results[0].address_components[4].short_name);
     console.log(data.results[0].address_components[4].short_name);              
    $("#cityState").append(div);
});
/*
                darksky path   
   current temp path=  .currently.temperature
// postal_code
   todays high = .daily.data["0"].temperatureMax

   todays loe = .daily.data["0"].temperatureMin

   chance of rain = .daily.data["0"].precipProbability

    google api path

    lat .results["0"].geometry.location.lat

    lon .results["0"].geometry.location.lng
    city =.results["0"].address_components[2].long_name
    state = data.results["0"].address_components[4].short_name)
     */







   





//  var googleid = key=AIzaSyDfKPGIacJeWwwN52UYn_8hWzr-K_YO9yY

  //   var getlatitudelongitude = function(id) {
    //    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?" + "#city" + "," + "#state" + googleid).done(function(data) {
      //      var div = $("<div></div>");
        //    div.append(data.name)
          //     .append(data.drink);
 //           $("#friend").append(div);
    


 
   









