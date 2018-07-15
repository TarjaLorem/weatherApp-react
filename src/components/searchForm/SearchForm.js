import React from 'react';
import './SearchForm.css';

const SearchForm = props => (
  <form className="search-form" onSubmit={props.getWeatherData}>
		<input className="search-input" name="city" placeholder="City" type="text"></input>
		<button className="search-btn">Search</button>
  </form>
);
export default SearchForm;
