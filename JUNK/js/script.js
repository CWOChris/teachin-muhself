const apiKey = '442fc2578f087c163d126cb7d628bf5d';

document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value;

    // Make a GET request to OpenWeather API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Process the weather data and display it on the website
            displayWeatherForecast(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function displayWeatherForecast(data) {
    const forecastContainer = document.querySelector('.weather-forecast');
    forecastContainer.innerHTML = ''; // Clear previous data

    // Loop through the weather data and display it
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const temperatureKelvin = item.main.temp;
        const temperatureCelcius = (temperatureKelvin - 273.15).toFixed(1);
        const description = item.weather[0].description;
        const icon = item.weather[0].icon;
        const humidity = item.main.humidity;
        const wind = item.wind.speed;
        const sunset = new Date(data.city.sunset * 1000);
        const pressure = item.main.pressure;
        const city1 = data.city.name;
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
        <div class="forecast-item__header">
        <div class="forecast-item__city">${city1}</div>
        <div class="forecast-item__date">${date}</div>
        <div class="forecast-item__temperature">Temp: ${temperatureCelcius}°C</div>
    </div>
    <div class="forecast-item__body">
        <div class="forecast-item__description">Weather: ${description}</div>
        <div class="forecast-item__icon"><img src="http://openweathermap.org/img/w/${icon}.png" /></div>
        <div class="forecast-item__humidity">Humidity: ${humidity}%</div>
        <div class="forecast-item__wind">Wind Speed: ${wind}m/s</div>
        <div class="forecast-item__sunset">Sunset: ${sunset}</div>
        <div class="forecast-item__pressure">Pressure: ${pressure}hPa</div>
    </div>
        `;

        forecastContainer.appendChild(forecastItem);
    });
}


//<p>Date: ${date.toDateString()}</p>
//<p>Temperature: ${temperature}°C</p>
//<p>Description: ${description}</p>