fetch('https://restcountries.eu/rest/v2/all')
.then(response =>response.json())
.then(data => displayCountry(data));

const displayCountry = countries =>{
    const countriesDiv =document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries [i];
        const countryDiv = document.createElement('div');

        /** this is one way */
        // const h3= document.createElement('h3');
        // const p = document.createElement('p');
        // h3.innerText = country.name;
        // p.innerText = country.capital;
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);

        /**this is another way of doing */
        countryDiv.className = 'country';
        const countryInfo =`<h3 class ="country-name">${country.name}</h3> 
                            <p>${country.capital}</p>
                            <button class ="btn" onClick="displayCountryDetail('${country.name}')">Details</button>
         
        `
        countryDiv.innerHTML =countryInfo;
        countriesDiv.appendChild(countryDiv);
        
    }
}
const displayCountryDetail = name =>{
    const url =`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(data => renderCountryInfo(data[0]));
}
const renderCountryInfo = country =>{
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML =` <h3>${country.name}</h3>
                            <p>Population: ${country.population}</p> 
                            <p>Area: ${country.area}</p> 
                            <img src="${country.flag}">
                           
    `
}