const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
loadCountries();


const displayCountries = (countries) => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');


        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;



        // const h3  = document.createElement('h3');
        // h3.innerText = country.name.common;
        // div.appendChild(h3);

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);


        countriesDiv.appendChild(div);
    });
};

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountryDetailes(data[0]));
};

const displayCountryDetailes = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
        <h5>${country.name.common}</h5>
        <p>Population: ${country.population}</p>
        <img src="${country.flags.png}">

    `
}
