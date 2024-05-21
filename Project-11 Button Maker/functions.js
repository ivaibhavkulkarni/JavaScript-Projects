let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function onApplyProperties() {
    let backGroundValue = bgColorInputElement.value;
    let fontColorValue = fontColorInputElement.value;
    let fontSizeValue = parseInt(fontSizeInputElement.value);
    let fontWeightValue = parseInt(fontWeightInputElement.value);
    let paddingValue = parseInt(paddingInputElement.value);
    let borderRadiusValue = parseInt(borderRadiusInputElement.value);
    
    customButtonElement.style.backgroundColor = backGroundValue;
    customButtonElement.style.color = fontColorValue;
    customButtonElement.style.fontSize = fontSizeValue + "px";
    customButtonElement.style.fontWeight = fontWeightValue;
    customButtonElement.style.padding = paddingValue + "px";
    customButtonElement.style.borderRadius = borderRadiusValue + "px";
}
