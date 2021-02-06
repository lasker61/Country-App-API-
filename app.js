fetch('https://restcountries.eu/rest/v2/all')
.then(response =>response.json())
.then(data => displayCountry(data));

const displayCountry = countries =>{
    console.log(countries);
}