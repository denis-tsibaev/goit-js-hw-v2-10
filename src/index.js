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
    .then(data => {
      console.log(data);
      const country = data[0];
      const langs = Object.values(data[0].languages).join(', ');
      console.log('population: ', data[0].population);
      console.log('name official: ', data[0].name.official);
      console.log('capital: ', data[0].capital);
      console.log('languages: ', data[0].languages);
      infoDiv.innerHTML = `
	  <p>name official: ${country.name.official}</p>
	  <p>population: ${country.population}</p>
	  <p>capital: ${country.capital}</p>
	  <img width=320 src="${country.flags.svg}" alt ="${country.flags.alt}"/>
	  <p>languages: ${langs}</p>
		`;
    })
    .catch(error => console.log(error));
}

//sweden
