import { useState } from "react";

interface WeatherData {
    lat: number,
    lon: number,
    tz: string,
    date: string,
    units: string,
    weather_overview: string
}

export default function Weather() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const PTA_pos = {
        lat: -25.731340,
        lon: 28.218370
    }

    const JHB_pos = {
        lat: 6384,
        lon: 4775
    }


    const URL = `https://api.openweathermap.org/data/3.0/onecall/overview?lon=${PTA_pos.lon}&lat=${PTA_pos.lat}&appid=${API_KEY}`; // how to hide this in console errors


    function getWeather() {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                return (
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Attempt to fetch Current Weather in PTA</h1>
                        <p>API call has failed me :( </p>
                    </div>
                )
            });
    }

    //getWeather(); // no useeffect yet

    if (!weatherData) {
        return (
            <div className=" p-4 rounded-lg">
                <h1 className="text-4xl font-bold mb-4">Attempt to fetch Current Weather in PTA</h1>
                <p>Weather API call has failed me :( </p>
            </div>)
    }

    return (
        <div className="flex items-center justify-center mt-10 bg-zinc-950 text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Current Weather in PTA</h1>
                {weatherData && (
                    <div className="bg-zinc-800 p-4 rounded-lg">
                        <p> {weatherData.date}</p>
                        <p>Description: {weatherData.weather_overview}</p>
                    </div>
                )}
            </div>
        </div>
    )
}