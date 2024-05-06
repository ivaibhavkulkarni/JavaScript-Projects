function onDecrement(){
    let counterElement = document.getElementById("counterValue");
    let currentValue = parseInt(counterElement.textContent);
    currentValue = currentValue - 1 ;
    counterElement.textContent = currentValue

    if (currentValue > 0) {
        counterElement.style.color = "green";
    }
    else if (currentValue < 0) {
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }

}

function onReset(){
    let counterElement = document.getElementById("counterValue");
    counterElement.textContent = 0
    counterElement.style.color = "black"
}

function onIncrement() {
    let counterElement = document.getElementById("counterValue");
    let currentValue = parseInt(counterElement.textContent);
    currentValue = currentValue + 1;
    counterElement.textContent = currentValue;

    if (currentValue > 0) {
        counterElement.style.color = "green";
    }
    else if (currentValue < 0) {
        counterElement.style.color = "red";
    }
    else {
        counterElement.style.color = "black";
    }
}
