const API_KEY = '86599028c6e27c1d34fbcf7dd2e44b43';

async function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();

    if (location) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
        // const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    } else {
        alert('Please enter a location.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
        <div class="weather-description">${data.weather[0].description}</div>
        <div class="weather-data">Temperature: ${data.main.temp}°C</div>
        <div class="weather-data">Humidity: ${data.main.humidity}%</div>
        <div class="weather-data">Wind Speed: ${data.wind.speed} m/s</div>
    `;
}
