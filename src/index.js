const debounce = require('lodash.debounce');
import './css/styles.css';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));
