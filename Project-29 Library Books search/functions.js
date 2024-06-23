let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function searchElement(event) {
    if (event.key === "Enter") {
        let searchValue = event.target.value;
        let option = {
            method: "GET"
        };
        spinner.classList.remove("d-none");
        let url = "https://apis.ccbp.in/book-store?title=" + searchValue;
        fetch(url, option)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let jsoNdata = jsonData.search_results;
                searchResults.innerHTML = "";
                if (jsoNdata.length === 0) {
                    let noResultEl = document.createElement("p");
                    noResultEl.classList.add("result", "text-center");
                    noResultEl.textContent = "No Results found";
                    searchResults.appendChild(noResultEl);
                } else {
                    
                    spinner.classList.add("d-none");
                    let ResultEl = document.createElement("p");
                    ResultEl.classList.add("result","col-12");
                    ResultEl.textContent = "Popular Books";
                    searchResults.appendChild(ResultEl);
                    for (let result of jsoNdata) {
                        let divEl = document.createElement("div");
                        divEl.classList.add("col-md-3", "col-sm-6", "mb-3");
                        let imageEl = document.createElement("img");
                        imageEl.src = result.imageLink;
                        let authorName = document.createElement("p");
                        authorName.classList.add("author-name");
                        authorName.textContent = result.author;
                        searchResults.appendChild(divEl);
                        divEl.appendChild(imageEl);
                        divEl.appendChild(authorName);
                    }
                }
            });
    }
}

searchInput.addEventListener("keydown", searchElement);