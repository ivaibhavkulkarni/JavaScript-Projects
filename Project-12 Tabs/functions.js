let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");

function aboutTab() {
    document.getElementById("aboutTab").classList.remove("d-none");
    document.getElementById("timeToVisitTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.add("d-none");

    aboutButton.classList.add("selected-button");
    timeToVisitButton.classList.remove("selected-button");
    attractionsButton.classList.remove("selected-button");
}
aboutTab();

function timeToVisitTab() {
  document.getElementById("aboutTab").classList.add("d-none");
  document.getElementById("timeToVisitTab").classList.remove("d-none");
  document.getElementById("attractionsTab").classList.add("d-none");

  aboutButton.classList.remove("selected-button");
  timeToVisitButton.classList.add("selected-button");
  attractionsButton.classList.remove("selected-button");
}

function attractionsTab() {
  document.getElementById("aboutTab").classList.add("d-none");
  document.getElementById("timeToVisitTab").classList.add("d-none");
  document.getElementById("attractionsTab").classList.remove("d-none");

  aboutButton.classList.remove("selected-button");
  timeToVisitButton.classList.remove("selected-button");
  attractionsButton.classList.add("selected-button");
}