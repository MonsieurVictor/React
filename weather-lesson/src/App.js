import React from "react";
import Info from "./components/info";
import Weather from "./components/weather";
import Dictaphone from "./components/dictaphone";

const API_KEY = "2f776effac2ead4f0e22df37f62db36b";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault();
    var city=e.target.elements.city.value;
    if(city) {
      try {
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      
        const data = await api_url.json();
        console.log(data);

        var date = new Date();
        var sunrise = data.sys.sunrise*1000;
        date.setTime(sunrise);
        var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        var sunset = data.sys.sunset*1000;
        date.setTime(sunset);
        var sunset_date= date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        this.setState ({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunrise: sunrise_date,
          sunset: sunset_date,
          error: undefined
        });
      } 
      catch (e) {
        this.setState ({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Город не найден"
        })
      }
    } else {
      this.setState ({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"
      })
  }
};

  render () {
    return(
      <div className="wrapper">
        <div className="main">
            <div className="contaier">
              <div className="row"> 
                <div className="col-sm-5 info">
                  <Info />
                </div>
                <div classname="col-sm-7" >
                  <Dictaphone weatherMethod={this.getWeather}/>                  
                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                  />                  
              </div>
            </div>
          </div>
        </div>
      </div>    
    )
  }
}

export default App;