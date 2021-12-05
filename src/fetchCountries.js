export default function fetchCountries(countryName) {
 
     return fetch(`https://restcountries.com//v3.1/name/${countryName}?fields=name,capital,population,flags,languages`).then(response =>
     {
         if (response.ok) {
         
             return response.json()
             
     }
         else {
            throw new Error("no country with such name exists")
         }
})
}
 
