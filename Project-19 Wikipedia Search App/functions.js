let searchInputEl = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

// Displaying the results from json data to HTML

function createAndAppend(result){

    // Creating a Result Item 
    
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResults.appendChild(resultItemEl);

    // getting into result object <------------------------------------------- 
    // Creating Title element

    let {link , title , description } = result; // <-------------------------------------- Getting data from JSON data
    let titleEl = document.createElement("a");
    titleEl.link = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);
 
    // Creating break el
    
    let breakEl = document.createElement("br");
    resultItemEl.appendChild(breakEl);

    // Creating URL
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    // Creating Break el
    let breakEl1 = document.createElement("br");
    resultItemEl.appendChild(breakEl1);

    // Creating description
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
}





function displayResults(searchResults){
    spinner.classList.toggle("d-none");
    for (let item of searchResults){
        createAndAppend(item);
    }
}




function searchWikiPedia(event){
    if (event.key === "Enter"){
        spinner.classList.toggle("d-none");
        searchResults.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        
        let options = {
            method : "GET"
        };

        fetch(url,options)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonData){
                let {search_results} = jsonData;
                displayResults(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown",searchWikiPedia);