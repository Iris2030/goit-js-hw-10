import './css/styles.css';
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix'
import template from './template.hbs'
// import fetchCountries from './fetchCountries'

const countriesList = document.querySelector('.country-list')
const DEBOUNCE_DELAY = 300;
console.log(countriesList);


 function fetchCountries(countryName){
    fetch(`https://restcountries.com/v3.1/name/Ukraine`).then(response =>
{ return response.json()
})
}
 
fetchCountries().then(renderMarkup).catch(error => {
    console.log(error);
})
 
function renderMarkup(country) {
        const markup = template(country)
     countriesList.innerHTML = markup
}