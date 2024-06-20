let bookmarkForm = document.getElementById("bookmarkForm");
let siteNameInput = document.getElementById("siteNameInput");
let siteUrlInput = document.getElementById("siteUrlInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");
let bookmarksList = document.getElementById("bookmarksList");
let bookmarkDiv = document.getElementById("bookmarkDiv");
let showBookmarksBtn = document.getElementById("showBookmarksBtn");

function saveBookmarkToLocalStorage(siteName, siteUrl){
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
    bookmarks[siteName] = siteUrl;
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}


function addNewBookMark() {
    let siteName = siteNameInput.value;
    let siteUrl = siteUrlInput.value;

    bookmarkDiv.classList.remove("d-none");
    let newBookMark = document.createElement("li");
    newBookMark.classList.add("remove-dot" , "site-heading")
    let anchorEl = document.createElement("a");
    anchorEl.href = siteUrl;
    anchorEl.target = "_blank";
    anchorEl.innerHTML = `<h1 class="site-heading">${siteName}</h1>\n <p>${siteUrl}</p>`;

    newBookMark.appendChild(anchorEl);
    bookmarksList.appendChild(newBookMark);

    saveBookmarkToLocalStorage(siteName, siteUrl);
    bookmarkDiv.classList.remove("d-none");
}



function validateBookMarkForm() {
    let siteName = siteNameInput.value;
    let siteUrl = siteUrlInput.value;

    if (siteName === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
    if (siteUrl === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
    return !(siteName === "" || siteUrl === "");
}


bookmarkForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateBookMarkForm()) {
        addNewBookMark();
    }

});

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});


function displayBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
    bookmarksList.innerHTML = "";

    if (Object.keys(bookmarks).length === 0) {
        bookmarksList.innerHTML = "No Bookmarks Found";
    } else {
        for (let siteName in bookmarks) {
            let siteUrl = bookmarks[siteName];
            let newBookMark = document.createElement("li");
            newBookMark.classList.add("remove-dot", "site-heading");
            let anchorEl = document.createElement("a");
            anchorEl.href = siteUrl;
            anchorEl.target = "_blank";
            anchorEl.innerHTML = `<h1 class="site-heading">${siteName}</h1>\n <p>${siteUrl}</p>`;

            newBookMark.appendChild(anchorEl);
            bookmarksList.appendChild(newBookMark);
        }
    }

    bookmarkDiv.classList.remove("d-none");
}

showBookmarksBtn.addEventListener("click", displayBookmarks);