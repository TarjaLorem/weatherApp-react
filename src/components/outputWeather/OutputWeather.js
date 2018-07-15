import React from 'react';
import './OutputWeather.css';

const OutputWeather = props => (
  <div className="output-weather">
		{ props.city && <p className="output-desc">City: {props.city}</p> }
		{ props.temperature && <p className="output-desc">Temperature: {props.temperature} &deg;С</p> }
		{ props.humidity && <p className="output-desc">Humidity: {props.humidity} %</p> }
  </div>
);

export default OutputWeather;
