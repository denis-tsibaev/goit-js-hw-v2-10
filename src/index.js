// Задание - поиск стран
//
// Создай фронтенд часть приложения поиска данных о стране по её частичному или
// полному имени.Посмотри демо видео работы приложения.
//
// HTTP-запросы
// Используй публичный API Rest Countries, а именно ресурс name, возвращающий массив
// объектов стран удовлетворивших критерий поиска.Добавь минимальное оформление
// элементов интерфейса.
// Напиши функцию fetchCountries(name) которая делает HTTP - запрос на ресурс name
// и возвращает промис с массивом стран - результатом запроса.Вынеси её в отдельный
// файл fetchCountries.js и сделай именованный экспорт.
//
// Фильтрация полей
// В ответе от бэкенда возвращаются объекты, большая часть свойств которых тебе не пригодится.
// Чтобы сократить объем передаваемых данных добавь строку параметров запроса - так этот
// бэкенд реализует фильтрацию полей.Ознакомься с документацией синтаксиса фильтров.
// Тебе нужны только следующие свойства:
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
//
// Поле поиска
// Название страны для поиска пользователь вводит в текстовое поле input#search - box.
// HTTP - запросы выполняются при наборе имени страны, то есть по событию input.
// Но, делать запрос при каждом нажатии клавиши нельзя, так как одновременно
// получится много запросов и они будут выполняться в непредсказуемом порядке.
// Необходимо применить приём Debounce на обработчике события и делать HTTP - запрос
// спустя 300мс после того, как пользователь перестал вводить текст.Используй пакет
// lodash.debounce.
// Если пользователь полностью очищает поле поиска, то HTTP - запрос не выполняется,
// а разметка списка стран или информации о стране пропадает.
// Выполни санитизацию введенной строки методом trim(), это решит проблему когда в
// поле ввода только пробелы или они есть в начале и в конце строки.
//
// Интерфейс
// Если в ответе бэкенд вернул больше чем 10 стран, в интерфейсе пояляется уведомление
// о том, что имя должно быть более специфичным.Для уведомлений используй библиотеку
// notiflix и выводи такую строку "Too many matches found. Please enter a more specific name.".
// Если бэкенд вернул от 2 - х до 10 - х стран, под тестовым полем отображается список найденных стран.
// Каждый элемент списка состоит из флага и имени страны.
// Если результат запроса это массив с одной страной, в интерфейсе отображается разметка карточки с
// данными о стране: флаг, название, столица, население и языки.
//
// ⚠️ Достаточно чтобы приложение работало для большинства стран.Некоторые страны, такие как
// Sudan, могут создавать проблемы, поскольку название страны является частью названия другой
// страны, South Sudan.Не нужно беспокоиться об этих исключениях.
//
// Обработка ошибки
// Если пользователь ввёл имя страны которой не существует, бэкенд вернёт не пустой массив,
// а ошибку со статус кодом 404 - не найдено.Если это не обработать, то пользователь никогда
// не узнает о том, что поиск не дал результатов.Добавь уведомление "Oops, there is no country
// with that name" в случае ошибки используя библиотеку notiflix.
//
// ⚠️ Не забывай о том, что fetch не считает 404 ошибкой, поэтому необходимо явно отклонить промис
// чтобы можно было словить и обработать ошибку.

import Notiflix from 'notiflix';
const debounce = require('lodash.debounce');
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 500;

const inputEl = document.querySelector('input#search-box');
inputEl.addEventListener('input', debounce(onInputHandler, DEBOUNCE_DELAY));

const infoDiv = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

function onInputHandler(e) {
  countryList.innerHTML = '';
  infoDiv.innerHTML = '';
  const countryName = e.target.value.trim();
  if (countryName === '') {
    return;
  } else console.log('countryName: ', countryName);
  fetchCountries(countryName).then(renderCountries).catch(onFetchError);
}

function renderCountries(data) {
  console.log('data: ', data);
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
  for (const country of data) {
    // console.log('country: ', country);
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
}

function onFetchError(error) {
  console.log('error.message: ', error.message);
  Notiflix.Notify.failure('Fetch Error');
}
