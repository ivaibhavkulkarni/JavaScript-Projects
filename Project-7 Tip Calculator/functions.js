function calculateTip(){
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let percentageTip = parseFloat(document.getElementById("percentageTip").value);
    let tipAmount = document.getElementById("tipAmount");
    let totalAmount = document.getElementById("totalAmount");
    let errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    if ((isNaN(billAmount)) || (isNaN(percentageTip))){
        errorMessage.textContent = "Please Enter a Valid Input.";
    }

    else {
        let calculatedTip = (percentageTip / 100 ) * 100;
        let totalamount = calculatedTip + billAmount;
        tipAmount.value = calculatedTip.toFixed(2);
        totalAmount.value = totalamount.toFixed(2);
    }

}

