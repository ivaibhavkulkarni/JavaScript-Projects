function SwitchOff(){
    document.getElementById("Bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("Cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("Switchstatus").textContent = "Switch OFF";
    document.getElementById("OFFSwitch").style.backgroundColor= "#cbd2d9";
    document.getElementById("ONswitch").style.backgroundColor= "#22c55e";
}

function SwitchOn(){
    document.getElementById("Bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("Cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("Switchstatus").textContent = "Switch ON";
    document.getElementById("OFFSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("ONswitch").style.backgroundColor = "#cbd2d9";
}