const emptyDiv = document.getElementById ("list")
const input = document.getElementById ("input")
const btn = document.getElementById ("button")

btn.addEventListener('click', () => { 
    if(input.value.trim()){
    fetch('https://restcountries.com/v3.1/name/' + input.value)
    .then ((res)=> res.json ())
    .then((country) => {
        renderCard(country)
    })
    }
})
function renderCard(data){
    emptyDiv.innerHTML = ''
    for (let i = 0; i < data.length; i++) {
        emptyDiv.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${data[i].flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].name.official}</h5>
            <p class="card-text"> Population: <b>${data[i].population}</b> </p>
            <a href="${data[i].maps.openStreetMaps}" 
            target="_blank"
            class="btn btn-primary">
            Посмотреть на картe
            </a>
          </div>
        </div>
        `
    }
}

function fetchCountries(){
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countryData) => {
        console.log(countryData);
        renderCard(countryData)
    })
}
fetchCountries();