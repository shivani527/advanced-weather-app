# 🌦️ Advanced Weather App

## 📌 Project Overview

The **Advanced Weather App** is a Python Flask-based web application that provides real-time weather information for different cities using the OpenWeatherMap API.

Users can enter a city name and retrieve current weather details, including temperature, humidity, wind speed, and weather conditions.

The application features a modern glassmorphism-style interface with a gradient background and a simple search functionality.

## 🎯 Project Objectives

- Retrieve real-time weather information using an external API.
- Build a dynamic web application using Flask.
- Display weather information based on the entered city.
- Integrate the OpenWeatherMap API.
- Create a responsive and user-friendly interface.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Flask | Web application framework |
| Requests | API communication |
| OpenWeatherMap API | Weather data provider |
| HTML | Frontend structure |
| CSS | Styling and UI design |
| Jinja2 | Dynamic HTML rendering |

## ✨ Features

- Search weather by city name.
- Display current temperature in Celsius.
- Show humidity percentage.
- Display wind speed.
- Show weather descriptions.
- Display dynamic weather icons.
- Handle invalid city names.
- Modern gradient background.
- Glassmorphism-style weather card.

## 📂 Project Structure

```text
Advanced-Weather-App/
│
├── static/
│   └── style.css
│
├── templates/
│   └── index.html
│
├── app.py
├── requirements.txt
└── README.md
```

## 🌐 API Integration

This project uses the **OpenWeatherMap Current Weather API** to retrieve weather information.

API Endpoint:

```text
https://api.openweathermap.org/data/2.5/weather
```

The application retrieves:

- City name
- Temperature
- Humidity
- Wind speed
- Weather description
- Weather icon

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd "Advance wheather app"
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

For Windows:

```bash
venv\Scripts\activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Configure OpenWeatherMap API Key

1. Create an account on [OpenWeatherMap](https://openweathermap.org/api).
2. Generate an API key.
3. Configure the API key in your application.

In `app.py`, replace the API key placeholder with your own key.

```python
API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"
```

For better security, use environment variables instead of hardcoding the API key.

### 7. Run the Application

```bash
python app.py
```

### 8. Open in Browser

Visit:

```text
http://127.0.0.1:5000
```

## 💻 How to Use

1. Open the Weather App in your browser.
2. Enter a city name in the search field.
3. Click the **Search** button.
4. View the current weather information.
5. Search for another city whenever required.

## 📊 Sample Weather Information

| Parameter | Description |
|---|---|
| City | Selected city name |
| Temperature | Current temperature in °C |
| Humidity | Current humidity percentage |
| Wind | Wind speed |
| Description | Weather condition |
| Icon | Weather condition icon |

## ⚠️ Error Handling

- Displays an error message when the entered city is not found.
- Requires a valid city name.
- Requires an active internet connection.
- Requires a valid OpenWeatherMap API key.

## 🚀 Future Enhancements

- Add a 5-day weather forecast.
- Display sunrise and sunset times.
- Add weather-based background changes.
- Include location-based weather detection.
- Add weather charts and visualizations.
- Improve mobile responsiveness.
- Add recent city search history.

## 👩‍💻 Author

**Shivani Kokkula**

AI/ML | Python | Full-Stack Developer | Data Analyst

## 📜 License

This project is developed for educational and learning purposes.