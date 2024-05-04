function On_Switch(){
    document.getElementById("bulb-Image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("Cat-Image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("on-button").style.backgroundColor="gray";
    document.getElementById("Off-button").style.backgroundColor = "red";
    document.getElementById("switch_Status").textContent= "Switch ON";
}


function Off_Switch(){
    document.getElementById("bulb-Image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("Cat-Image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("on-button").style.backgroundColor = "green";
    document.getElementById("Off-button").style.backgroundColor = "gray";
    document.getElementById("switch_Status").textContent = "Switch OFF";
}