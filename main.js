var counter = 1;

function printcounter(){
    console.clear();
    document.getElementById("counter").textContent = counter;
    counter = counter + 1;
}

setInterval(printcounter, 1000);
