from flask import Flask, render_template, request
import requests
import os
app = Flask(__name__)
# API_KEY = os.getenv("e35f2c2f5ecbcbf8f9263b44988b7eee")
API_KEY = os.getenv("OPENWEATHERMAP_API_KEY")

@app.route('/', methods=['GET', 'POST'])
def home():

    weather = None

    if request.method == 'POST':

        city = request.form['city']

        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        



        response = requests.get(url)

        data = response.json()

        if data['cod'] == 200:

            weather = {
                'city': city,
                'temperature': data['main']['temp'],
                'humidity': data['main']['humidity'],
                'wind': data['wind']['speed'],
                'description': data['weather'][0]['description'],
                'icon': data['weather'][0]['icon']
            }

        else:
            weather = 'error'

    return render_template('index.html', weather=weather)

if __name__ == '__main__':
    app.run(debug=True)
