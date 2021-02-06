fetch('https://restcountries.eu/rest/v2/all')
.then(response =>response.json())
.then(data => displayCountry(data));

const displayCountry = countries =>{
    const countriesDiv =document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries [i];
        const countryDiv = document.createElement('div');
        const h3= document.createElement('h3');
        const p = document.createElement('p');
        h3.innerText = country.name;
        p.innerText = country.capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);
        countriesDiv.appendChild(countryDiv);
        
    }
}