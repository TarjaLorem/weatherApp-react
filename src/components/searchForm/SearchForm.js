import React from 'react';
import './SearchForm.css';

const SearchForm = props => (
  <form className="search-form" onSubmit={props.getWeatherData}>
		<input name="city" placeholder="City"></input>
		<button>Search</button>
  </form>
);
export default SearchForm;
