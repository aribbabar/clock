const clock = document.querySelector("#clock");

let time = new Date();

let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

hours = hours > 12 ? hours - 12 : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

clock.innerHTML = hours + ":" + minutes + ":" + seconds;

setInterval(updateClock, 1000);

function updateClock()
{
    time = new Date();
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}