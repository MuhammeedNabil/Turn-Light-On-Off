var demo = document.getElementById("demo")
var img = document.getElementById("img")
var turnOnOffBtn = document.getElementById("turnOnOffBtn")

function turnOff() {
    demo.style.backgroundColor="yellow"
    img.src="img/lampoff.png"
    turnOnOffBtn.innerHTML="Turn on"
}

function turnOn(){
    demo.style.backgroundColor="red"
    img.src="img/lamp.png"
    turnOnOffBtn.innerHTML="Turn off"
}
function turnOnOff() {
    if (turnOnOffBtn.innerHTML=="Turn off") {
        turnOff()
    }
    else{
        turnOn()
    }
}
