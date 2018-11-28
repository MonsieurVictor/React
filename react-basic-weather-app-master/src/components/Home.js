import React, { Component } from 'react';

import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

import openWeatherMap from '../services/openWeatherMap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {items:[], isLoading:false};
    this.handleSearch = this.handleSearch.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(deletedItem) {
    console.log(deletedItem);
      var newItems = this.state.items.filter((_item) => {
        return _item != deletedItem;
      })
      // console.log(item);
      this.setState({
        items: newItems
      })
  }
  handleSearch(location) {
    // alert('handleSearch : '+location);
this.setState({
  isLoading:true
})

openWeatherMap.getTemp(location).then( (result) => {
console.log(result);
var newItem = {
  location: result.name,
  temp: result.main.temp,
  wind_speed: result.wind.speed,
  wind_deg: result.wind.deg,
  sunrise: result.sys.sunrise,
  sunset: result.sys.sunset,
  dt: result.dt,
};

this.setState((prevState) => ({
  items: prevState.items.concat(newItem)
}));
this.setState({
  isLoading:false
})
}, (error) => {
  console.log(error);
  this.setState({
    isLoading:true
  })
});

  }
  render() {
    return (
      <div className="container my-5">
        <WeatherForm onSearch={this.handleSearch} isLoading={this.state.isLoading}/>
        <WeatherMessage items={this.state.items} deleteItem={this.deleteItem}/>
        {/* <WeatherMessage temp={this.state.temp} location={this.state.location}/> */}
      </div>
    )
  }
}

export default Home;
