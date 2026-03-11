const API_KEY = "86b7b3ca3b5aac490cd8f91f34341a79";

function getWeather() {

    const city = document.getElementById("cityInput").value;
    const weatherDiv = document.getElementById("weather");

    if (city === "") {
        weatherDiv.innerHTML = "Please enter city name";
        return;
    }

    fetch(https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${API_KEY})
    .then(response => response.json())
    .then(data => {

        weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>🌥 Condition: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    })
    .catch(() => {
        weatherDiv.innerHTML = "City not found";
    });

}