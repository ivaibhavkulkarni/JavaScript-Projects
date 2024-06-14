let searchInput = document.getElementById("searchInput");
let resultCountries = document.getElementById("resultCountries");
let spinner = document.getElementById("spinner");

function createAndAppend(country) {
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card","col-lg-3" ,"col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row","ml-2");
    resultCountries.appendChild(countryEl);

    let countryFlagEl = document.createElement("img");
    countryFlagEl.src = country.flag;
    countryFlagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild(countryFlagEl);

    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4","p-2");
    countryEl.appendChild(countryInfoEl);

    let countryNameEl = document.createElement("p");
    countryNameEl.textContent = country.name;
    countryNameEl.classList.add("country-name",);
    countryInfoEl.appendChild(countryNameEl);

    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = `Population: ${country.population}`;
    countryPopulationEl.classList.add("country-population");
    countryInfoEl.appendChild(countryPopulationEl);
}


function search() {
    let url = "https://apis.ccbp.in/countries-data";
    let option = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            resultCountries.innerHTML = "";
            let searchInputValue = searchInput.value.toLowerCase();

            for (let country of jsonData) {
                if (country.name.toLowerCase().includes(searchInputValue)) {
                    createAndAppend(country);
                }
            }


        });
}

search();
searchInput.addEventListener("keyup", search);