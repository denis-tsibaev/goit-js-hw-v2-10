const debounce = require('lodash.debounce');
import './css/styles.css';
// import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

const infoDiv = document.querySelector('.country-info');

function fetchCountries(e) {
  const countryName = e.target.value.trim();
  console.log(countryName);
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

  console.log(data);
}

// function render(query) {
//   console.log(query.capital);
// }

//sweden
