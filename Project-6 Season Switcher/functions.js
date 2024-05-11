let smallImage = document.getElementById("seasonSmallImage");
let mdImage = document.getElementById("seasonMediumImage");

let xsSpring = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let mdSpring = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let xsSummer = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let mdSummer = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let xsAutumn = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let mdAutumn = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let xsWinter = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let mdWinter = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";


function onSpring(){
    smallImage.src = xsSpring;
    mdImage.src = mdSpring;
}

function onSummer(){
    smallImage.src = xsSummer;
    mdImage.src = mdSummer;
}

function onAutumn(){
    smallImage.src = xsAutumn;
    mdImage.src = mdAutumn;
}

function onWinter(){
    smallImage.src = xsWinter;
    mdImage.src = mdWinter;
}