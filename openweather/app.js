function weather( city ) 
    {
    var key = 'd47d8ec51b85c87dc466fb665098eee0';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
    } 

  function kelvinToCelcius( kelvin )
  {
    return Math.round(parseFloat(kelvin)-273.15);
  }

  function drawWeather( d ) 
  {
    var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = kelvinToCelcius(d.main.temp) + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('temp_min').innerHTML = `min temp: ${kelvinToCelcius(d.main.temp_min)}` + '&deg;';
    document.getElementById('temp_max').innerHTML = `max temp: ${kelvinToCelcius(d.main.temp_max)}` + '&deg;';
    document.getElementById('pressure').innerHTML = `pressure: ${d.main.pressure}` + ' hPa';
    document.getElementById('humidity').innerHTML = `humidity: ${d.main.humidity}` + '%';
    document.getElementById('wind_speed').innerHTML = `wind speed: ${d.wind.speed}` + ' k/h';
    
    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
  }
      
  window.onload = function() 
  {
    weather( 'Urdinarrain' );
    }
