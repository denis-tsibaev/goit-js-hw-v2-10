import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
import './css/styles.css';
// import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 500;

const inputEl = document.querySelector('input#search-box');
inputEl.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

const infoDiv = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

function fetchCountries(e) {
  countryList.innerHTML = '';
  infoDiv.innerHTML = '';
  const countryName = e.target.value.trim();
  console.log(countryName);
  const url = `https://restcountries.com/v3.1/name/${countryName}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.status === 404) {
        Notiflix.Notify.failure('Oops, there is no country with that name', {
          fontSize: '20px',
          width: '450px',
        });
        return;
      }
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.',
          {
            fontSize: '20px',
            width: '450px',
          }
        );
        return;
      }
      console.log(data);
      for (const country of data) {
        console.log(country);
        countryList.insertAdjacentHTML(
          'beforeend',
          `
		 <li class="item-list">
		 	<img width=50 src="${country.flags.svg}" alt ="${country.flags.alt}"/>
			<p class="country-name">${country.name.official}</p>
		 </li> 
		  `
        );
      }

      if (data.length === 1) {
        const country = data[0];
        const langs = Object.values(data[0].languages).join(', ');
        countryList.innerHTML = '';
        infoDiv.innerHTML = `
			<img width=200 src="${country.flags.svg}" alt ="${country.flags.alt}"/> 
			<p class="title-name">${country.name.official}</p>
			<p><span class="title-span">capital</span>: ${country.capital}</p>
			<p><span class="title-span">population:</span> ${country.population.toLocaleString(
        'de-DE'
      )}</p>
			<p><span class="title-span">languages:</span> ${langs}</p>
			`;
      }
    })
    .catch(error => {
      console.log(error.message);
    });
}
