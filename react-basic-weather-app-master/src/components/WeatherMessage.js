import React, { Component } from 'react';
import moment from 'moment';

class WeatherMessage extends Component {
  constructor(props) {
    super(props);
  //  this.deleteItem = this.deleteItem.bind(this);
  }
  // deleteItem(deletedItem) {
  //   var newItems = this.props.items.filter((_item) => {
  //     return _item != deletedItem;
  //   })
  //   // console.log(item);
  //   this.props.items(newItems);
  // }
  render() {
    return (
      <div>
        {this.props.items.length <= 0 &&
          <div className="alert alert-info" role="alert">
  Enter location name and press search button.
</div>
          }
{this.props.items.length > 0 &&
      <table className="table table-bordered">
        <thead>
  <tr>
    <th>Location</th>
    <th>Temperature (Celsius)</th>
    <th>Wind speed (meter/sec)</th>
    <th>Wind direction (degrees)</th>
    <th>Sunrise</th>
    <th>Sunset</th>
    <th>Delete</th>
  </tr>
</thead>

 {this.props.items.map(item => (
  <tbody >
   <tr>
  <td >{item.location}</td>
  <td >{item.temp}</td>
  <td >{item.wind_speed}</td>
  <td >{item.wind_deg}</td>
  <td >{item.sunrise && moment.unix(item.sunrise).format('h:mm:ss a')}</td>
  <td >{item.sunset && moment.unix(item.sunset).format('h:mm:ss a')}</td>
  <td>
    <button type="button" className="btn btn-danger btn-sm" onClick={this.props.deleteItem.bind(this, item)}>Delete</button>
  </td>
</tr>
</tbody>
 ))}

</table>
}
</div>
    )
  }
}

export default WeatherMessage;
