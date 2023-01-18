import {React, useState, useEffect} from "react";
import styles from "@/styles/Weather.module.css"

const Weather = () => {
    const WEATHER_API_BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (weather) => {
            setLoading(true);
            try{
                const response = await fetch(WEATHER_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }); 

                const weatherData = await response.json();
                
                setWeatherData(weatherData);
            
            } catch (error){
                console.log(error);
            }
            setLoading(false);
        }; 
       fetchData(); 
    });
    return (
    <div className = {styles.container}>
        <div className={styles.div}>
            <table className={styles.table}>
                <thead className={styles.header}>
                </thead>
                {!loading && (
                <tbody>
                    {weatherData?.map((weather) => (
                        <Weather 
                        weather={weather} 
                        key={weather.latitude}
                        /> 
                    ) )}
        
                </tbody>
                )}
            </table>
        </div>
    </div>

)};
export default Weather;