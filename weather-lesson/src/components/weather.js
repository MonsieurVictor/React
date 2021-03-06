import React from "react";

const Weather = (props) => (
        <div className="weather">
            {props.city &&
                <div>
                   
                    <p> Местоположение: {props.city}, {props.country}</p>
                    <p> Температура, °C: {props.temp}</p>
                    <p> Давление, мбар: {props.pressure}</p>
                    <p> Восход солнца: {props.sunrise}</p>
                    <p> Закат солнца: {props.sunset}</p>
                </div>
            }
            <p>{props.error}</p>
         </div>  
);

export default Weather;