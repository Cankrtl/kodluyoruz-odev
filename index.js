let fullName = prompt("Lutfen Adinizi Giriniz: ")
let myName = document.querySelector("#name")
myName.innerHTML = fullName
let myClock = document.querySelector("#myClock")

function dateOclock() {
    let today = new Date() 
    let day = today.toLocaleString('tr-TR', {weekday: 'long'})
    let time = today.toLocaleTimeString('tr-TR') 
    document.getElementById("myClock").innerHTML = time + " "+day; 
}
setInterval(dateOclock(), 1000); 