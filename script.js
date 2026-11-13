
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const message = document.getElementById("message");
const weatherInfo = document.getElementById("weatherInfo");

const weatherCodes = {
    0: ["Clear sky", "☀️"],
    1: ["Mainly clear", "🌤️"],
    2: ["Partly cloudy", "⛅"],
    3: ["Overcast", "☁️"],
    45: ["Foggy", "🌫️"],
    48: ["Depositing rime fog", "🌫️"],
    51: ["Light drizzle", "🌦️"],
    53: ["Moderate drizzle", "🌦️"],
    55: ["Dense drizzle", "🌧️"],
    56: ["Freezing drizzle", "🌧️"],
    57: ["Heavy freezing drizzle", "🌧️"],
    61: ["Slight rain", "🌧️"],
    63: ["Moderate rain", "🌧️"],
    65: ["Heavy rain", "🌧️"],
    66: ["Freezing rain", "🌧️"],
    67: ["Heavy freezing rain", "🌧️"],
    71: ["Slight snowfall", "🌨️"],
    73: ["Moderate snowfall", "❄️"],
    75: ["Heavy snowfall", "❄️"],
    77: ["Snow grains", "❄️"],
    80: ["Slight rain showers", "🌦️"],
    81: ["Moderate rain showers", "🌧️"],
    82: ["Violent rain showers", "⛈️"],
    85: ["Slight snow showers", "🌨️"],
    86: ["Heavy snow showers", "❄️"],
    95: ["Thunderstorm", "⛈️"],
    96: ["Thunderstorm with hail", "⛈️"],
    99: ["Thunderstorm with heavy hail", "⛈️"]
};

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        showMessage("Please enter a city name.");
        return;
    }

    searchButton.disabled = true;
    searchButton.textContent = "Searching...";
    weatherInfo.hidden = true;
    showMessage("Fetching weather information...");

    try {
        // Step 1: Find the city's coordinates
        const geoParams = new URLSearchParams({
            name: city,
            count: "1",
            language: "en",
            format: "json"
        });

        const geoResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?${geoParams}`
        );

        if (!geoResponse.ok) {
            throw new Error("Unable to search for the city.");
        }

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found. Please try another city.");
        }

        const location = geoData.results[0];

        // Step 2: Get current weather
        const weatherParams = new URLSearchParams({
            latitude: location.latitude,
            longitude: location.longitude,
            current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
            temperature_unit: "celsius",
            wind_speed_unit: "kmh",
            timezone: "auto"
        });

        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?${weatherParams}`
        );

        if (!weatherResponse.ok) {
            throw new Error("Unable to retrieve weather information.");
        }

        const weatherData = await weatherResponse.json();
        const current = weatherData.current;

        if (!current) {
            throw new Error("Weather information is unavailable.");
        }

        // Step 3: Display weather information
        const [description, icon] =
            weatherCodes[current.weather_code] || ["Unknown weather", "🌡️"];

        document.getElementById("cityName").textContent =
            `${location.name}, ${location.country}`;

        document.getElementById("weatherIcon").textContent = icon;

        document.getElementById("temperature").textContent =
            `${Math.round(current.temperature_2m)} °C`;

        document.getElementById("description").textContent = description;

        document.getElementById("humidity").textContent =
            `${current.relative_humidity_2m}%`;

        document.getElementById("wind").textContent =
            `${current.wind_speed_10m} km/h`;

        document.getElementById("updatedTime").textContent =
            `Updated: ${current.time.replace("T", " ")}`;

        weatherInfo.hidden = false;
        showMessage("");

    } catch (error) {
        weatherInfo.hidden = true;
        showMessage(error.message || "Something went wrong. Please try again.");
    } finally {
        searchButton.disabled = false;
        searchButton.textContent = "Search";
    }
});

function showMessage(text) {
    message.textContent = text;
}
