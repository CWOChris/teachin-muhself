// I need a function to get the weather data from the US National Weather Service API based on the park code

function fetchWeatherAPILink(latWx, lonWx) {
    var requestUrl = "https://api.weather.gov/points/" + latWx + "," + lonWx;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var link = data.properties.forecast;
        fetchWeatherAPIData(link);
      });
  }
  
  function fetchWeatherAPIData(link) {
    fetch(link)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var weatherData = data.properties.periods[0];
        displayWeatherData(weatherData);
        // eventually call a function to display the data from here, pass weatherData
      });
  }
  
  var locationChris;
  
  function displayWeatherData(weatherData) {
    console.log("weather object", weatherData);
  
    // HELP HERE - I need to get the location from the search box and display it in the forecastLocation id
    var location = locationChris;
  
    var weatherIcon = weatherData.icon;
    var detailedForecast = weatherData.detailedForecast;
    var temperature = weatherData.temperature;
    var temperatureUnit = weatherData.temperatureUnit;
    var relativeHumidity = weatherData.relativeHumidity.value;
    if (weatherData.probabilityOfPrecipitation.value) {
      var precipitationProb = weatherData.probabilityOfPrecipitation.value;
    } else {
      var precipitationProb = 0;
    }
    var windSpeed = weatherData.windSpeed;
    var windDirection = weatherData.windDirection;
  
    var weatherString =
      '<h1 id="forecastLocation">' +
      locationChris +
      '</h1><img id="weatherIcon" src="' +
      weatherIcon +
      '" alt="" /><p id="forecastDescription">' +
      detailedForecast +
      '</p><p id="temperature">Temperature: ' +
      temperature +
      "°" +
      temperatureUnit +
      '</p><p id="humidity">Humidity: ' +
      relativeHumidity +
      '%</p><p id="precipitation">Precipitation Chance: ' +
      precipitationProb +
      '%</p><p id="windspeed">Wind: ' +
      windSpeed +
      " " +
      windDirection +
      "</p>";
  
    $("#weatherDataBlock").text("");
    $("#weatherDataBlock").append(weatherString);
  }
  
  // I need a function to get the park alerts from the NPS API based on the park code
  
  // //fetch ('https://developer.nps.gov/api/v1/parks?parkCode=&api_key=hF5P4Fdh7gMTX55MjO7q3M2XXfN7XDsfr6YWNvnU')
  // .then(response => response.json())
  //          .then(data => {
  //           for(i = 0; i < data.data)
  // output.innerHTML += 'fullname = ' + data.fullName + "<br/>";
  // //output.innerHTML += 'parkCode = ' + data.parkCode + "<br/>";
  
  //Go to https://developer.nps.gov/api/v1/parks?parkCode=&api_key=hF5P4Fdh7gMTX55MjO7q3M2XXfN7XDsfr6YWNvnU
  
  //fetch 'parkCode' depending on autocomplete or by searching it in
  
  //Display 'fullname' into resultsBox
  
  // I need a function to display the alerts in the alerts section of the page
  
  // I need a function to get the park news from the NPS API based on the park code
  
  // I need a function to store locations marked as favorites in local storage
  $(function () {
    saveButton1.addEventListener("click", function () {
      const text = textBox1.value;
      var favorite = $("#favorite").val(); // Need to update this to store the correct value here to use it later on, I think "val" needs to be the text contained in the textbox
      localStorage.setItem("favorite", text);
    });
  });
  
  //Need to update code so multiple values are saved when clicked on 'save to favorites'.
  //Right now there is only one value in local storage and everytime you click on the save button
  //it replaces the last saved location with the most recent one. Same thing with favorites.
  
  // I need an event listener function to display the favorites stored in local storage on page load
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var localStorageList = document.getElementById("favorite");
      for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var listItem = document.createElement("li");
        listItem.textContent = `${key}` + `: ` + `${value}`;
        listItem.setAttribute("class", "list-group-item");
        localStorageList.appendChild(listItem);
      }
      var listArray = Array.from(localStorageList.children);
      listArray.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
      });
      localStorageList.innerHTML = "";
      listArray.forEach((item) => localStorageList.appendChild(item));
    }, 25);
  });
  
  // I need a function to call the Google Maps API to display a map of the park
  $(function () {
    $("#mapBox").click(function () {
      var map = $("#mapBox").val();
      localStorage.setItem("map", map);
    });
  });
  
  // DONE I need a function to use Google Maps API to autocomplete with location suggestions
  
  // I need a function to get the latitude and longitude from the address entered in the search box
  
  var googleStateCode = "";
  
  document.getElementById("searchButton1").addEventListener("click", function () {
    var address = document.getElementById("textBox1").value;
  
    locationChris = document.getElementById("textBox1").value;
    console.log(locationChris);
  
    var stateCodeInput = address.match(/[A-Z]{2}/);
    if (stateCodeInput !== null) {
      googleStateCode = stateCodeInput[0];
      console.log("State Code: " + googleStateCode);
    }
    getLatLongFromAddress(address, function (lat, lng) {
      if (lat !== null && lng !== null) {
        console.log(
          "Latitude: " + lat.toFixed(4) + " Longitude: " + lng.toFixed(4)
        );
        fetchWeatherAPILink(lat.toFixed(4), lng.toFixed(4));
        updateMap(parseFloat(lat), parseFloat(lng));
        fetchPark();
      } else {
        console.log("Geocodeing was not successful");
      }
    });
    $(function fetchPark() {
      var parkURL =
        "https://developer.nps.gov/api/v1/parks?stateCode=" +
        googleStateCode +
        "&api_key=hF5P4Fdh7gMTX55MjO7q3M2XXfN7XDsfr6YWNvnU";
      console.log("parkURL", parkURL);
      fetch(parkURL)
        .then((response) => response.json())
        .then((data) => {
          resultsBox;
          console.log("data", data);
          for (var i = 0; i < data.data.length; i++) {
            var resultBox = $("<div>");
            resultBox.text(data.data[i].name);
            $("#resultsBox").append(resultBox);
            console.log(data.data[i].name);
          }
        })
        .catch((error) => {
          //Handle errors
          console.log(error);
        });
    });
  });
  
  // I need a function to get the park news from the NPS API based on the park code
  
  // There was stuff here that Riley, Chris and I went over.
  // Updating this code to get the state code as well
  function getLatLongFromAddress(address, callback) {
    var geocoder = new google.maps.Geocoder();
  
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var location = results[0].geometry.location;
        var lat = location.lat();
        var lng = location.lng();
        callback(lat, lng);
      } else {
        console.error("Geocoding Error: ", status);
        callback(null, null, null);
      }
    });
  }
  
  // $(function () {
  //   var latWx = lat;
  //   var lonWx = lng;
  //   fetchWeatherAPILink(latWx, lonWx);
  // }); //running to test - wait until JQuery is loaded tho
  
  // document.getElementById("searchButton1").addEventListener("click", function getLatLongFromAddress(adress, callback) {
  //     var geocoder = new google.maps.Geocoder();
  
  //     geocoder.geocode({ 'address': adress }, function (results, status) {
  //         if (status == google.maps.GeocoderStatus.OK) {
  //             var location = results[0].geometry.location;
  //             var lat = location.lat();
  //             var lng = location.lng();
  //             callback(lat, lng);
  //         } else {
  //             console.error('Geocoding Error: ', status);
  //             callback(null, null);
  //         }
  //     });
  // });
  
  // I need a function to call the Google Maps API to display a map of the park
  
  var map = {}
  
  function initMap() {
    map = new google.maps.Map(document.getElementById("mapBox"), {
      center: { lat: 29.7267, lng: -95.6683 },
      zoom: 14,
    });
  }
  
  function updateMap(lat, lng) {
    var mapLocation = {
      center: { lat: 0, lng: 0 },
      zoom: 14,
    };
  
    mapLocation.center.lat = lat;
    mapLocation.center.lng = lng;
  
    console.log(mapLocation)
  
    map.setCenter(mapLocation.center)
  }
  
  // Function to use Google Maps API to autocomplete with location suggestions
  function initAutocomplete() {
    var input = document.getElementById("textBox1");
    autocomplete = new google.maps.places.Autocomplete(input);
  
    google.maps.event.addListener(autocomplete, "place_changed", function () {
      var place = autocomplete.getPlace();
      // Need to add what to do with the place information
      console.log(
        "Selected Place: " + place.name + " " + place.formatted_address
      );
    });
  }
  
  // setTimeout(loadGoogleMap(), 5000)
  
  // function loadGoogleMap(){
  // google.maps.event.addDomListener(window, 'load', function() {
  //     initMap();
  //     initAutocomplete();
  // })}
  
  // I need to incorporate JSON into this somehow