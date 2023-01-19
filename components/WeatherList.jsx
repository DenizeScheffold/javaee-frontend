import {React, useState, useEffect} from "react";
import styles from "@/styles/Weather.module.css"
import Weather from "@/components/Weather";

export const getServerSideProps = async () => {
    console.log("Fetch data...");
    const res = await fetch('http://localhost:8080/api/getUsers');
    const json = await res.json();
    return { props: {
        courses: json
      }
    }
  };
const WeatherList = () => {
   
   // const WEATHER_API_BASE_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m";
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
                       // key={weather.latitude}
                        /> 
                    ) )}
        
                </tbody>
                )}
            </table>
        </div>
    </div>

)};
export default WeatherList;