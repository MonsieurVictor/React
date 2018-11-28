import React, {Component} from 'react';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value:'', isLoading:false};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onFormSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if(this.state.value.length > 0) {
      this.setState({
        isLoading: true
      })
      this.props.onSearch(this.state.value);
    }
    else {
      alert('Enter Location');
    }
  }
  componentWillReceiveProps(nextProps) {

    console.log('componentWillReceiveProps: '+nextProps.isLoading);
    if(!nextProps.isLoading) {
      this.setState({
        value: '',
        isLoading: nextProps.isLoading
      })
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    // console.log(event.target.value.length);
    // if(event.target.value.length > 0) {
    //   this.setState({
    //     isEnabled:true
    //   })
    // }
    // else {
    //   this.setState({
    //     isEnabled: false
    //   })
    // }
  }
  render() {
    return (
      <form className="form-inline my-3" onSubmit={this.onFormSubmit}>
        <input type="text" className="form-control mr-3" placeholder="Enter location (ex: erode, coimbatore)" value={this.state.value} onChange={this.handleChange}/>
        <button type="submit" className="btn btn-primary" disabled={!this.state.value || this.state.isLoading}>Get Weather</button>
      </form>
    )
  }
}

export default WeatherForm;
