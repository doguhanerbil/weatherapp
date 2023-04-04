import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import { useCity } from "./GetCoordinates";

const WeatherContext = createContext();

function WeatherProvider({ children }) {

    const { cityName } = useCity();

    const [weather, setWeather] = useState();

    const values = {
        weather,
        setWeather,
    }

    useEffect(() => {
        const getWeatherDataCity = async (cityName) => {
            const key = process.env.REACT_APP_WEATHER_API_KEY;

            try {
                const { data } = await axios.get(`api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={key}`);
                setWeather(data);
            } catch {
                alert("Veri Alınırken Bir hata oluştu.");
            }
        }
        cityName && getWeatherDataCity(cityName);       
    }, [cityName])

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}
const useWeather = () => useContext(WeatherContext);

export { WeatherProvider, useWeather }