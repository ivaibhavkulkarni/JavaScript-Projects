// Schedulers used to schedule the execution od a call back function

//setInterval(function,1000);


let counter = 0;

function counterNum(){
    console.log(counter);
    counter = counter +1;
}

setInterval(counterNum,10000);

setInterval();
clearInterval();
clearTimeout();
setTimeout();
