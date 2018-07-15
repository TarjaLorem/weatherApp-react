import React, { Component } from 'react';
import Header from './components/header/Header';
import OutputWeather from './components/outputWeather/OutputWeather';
import SearchForm from './components/searchForm/SearchForm';
import './App.css';

const API_key = "240f1238d82bd897c0ff0885ffe8b4f1";

class App extends Component {

  getWeatherData = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}&units=metric`);//get response
    const api_data = await api_call.json();//get promise object
    console.log(api_data);
  }
  render() {
    return (
      <div>
        <Header />
        <OutputWeather />
        <SearchForm getWeatherData={this.getWeatherData} />
      </div>
    );
  }
}

export default App;
