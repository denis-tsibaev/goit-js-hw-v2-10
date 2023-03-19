export default function fetchCountries(name) {
  const url = 'https://restcountries.com/v3.1/name';
  fetch(url)
    .then(r => r.json)
    .then(console.log);
}
