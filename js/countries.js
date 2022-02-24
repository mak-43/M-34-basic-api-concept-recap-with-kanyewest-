const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>display(data))
}
loadCountries()

const display=countries=>{
//     for(const i of countries){
//         console.log(i)
//     }
    const countriesDiv=document.getElementById('countries')
    countries.forEach(country=>{
        const div=document.createElement('div')
        div.classList.add('country')
        // const h3=document.createElement('h3')
        // div.appendChild(h3)
        // const p=document.createElement('p')
        // h3.innerText=country.name.common
        // p.innerText=country.capital
        // div.appendChild(p)
        div.innerHTML=`
        <h3> Country: ${country.name.common} </h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>`

        countriesDiv.appendChild(div)

        
    })
}
const loadCountryByName=(name)=>{

    const url=`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetail(data[0]))

   
}
const displayCountryDetail=country=>{
    const countryDiv=document.getElementById('country-detail')
    countryDiv.innerHTML=`
        <h5>${country.name.common}</h5>
        <p>population: ${country.population}</p>
        <img src="${country.flags.png}">

    `
    console.log(country.name)
}