import React from "react";

const Weather = ({weather}) => {
    return ( 
    <tr key={weather.latitude}>
        <td>Longitude
            <div>{weather.latitude}</div>
        </td>
        <td>Latitude
        <div>{weather.longitude}</div>
        </td>
        <td>Temperature
        <div>{weather.temperature_2m}</div>
        </td>
        <td>Rain
        <div>{weather.rain}</div>
        </td>
        <td>Windspeed 
            <div>{weather.windspeed_10m}</div>
            </td>
        <td>Wind Direction 
            <div>{weather.wind_direction_10m}</div>
        </td>
    </tr>)

};
 export default Weather;