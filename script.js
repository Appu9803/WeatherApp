const apiKey = "b392938927d136c928f66a56b892c111"; // Replace with your API key
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weather-info").innerHTML = "City not found!";
        } else {
            document.getElementById("weather-info").innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("weather-info").innerHTML = "Error fetching weather data!";
    }
}
