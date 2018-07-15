import React, { Component } from 'react';
import Header from './components/header/Header';
import OutputWeather from './components/outputWeather/OutputWeather';
import SearchForm from './components/searchForm/SearchForm';
import './App.css';

const API_key = "240f1238d82bd897c0ff0885ffe8b4f1";

class App extends Component {

  state = {
    city: undefined,
    temperature: undefined,
    humidity: undefined
  }

  getWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = "ua";
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`);//get response
    const api_data = await api_call.json();//get promise object

    if (city === api_data.name) {
    console.log(api_data);
    this.setState ({
      city: api_data.name,
      temperature: api_data.main.temp,
      humidity: api_data.main.humidity
    })
  } else { 
    alert("Oops, something went wrong")
  }
}
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SearchForm getWeatherData={this.getWeatherData} />
        <OutputWeather 
        city={this.state.city}
        temperature={this.state.temperature}
        humidity={this.state.humidity}
        />
      </div>
    );
  }
}

export default App;
