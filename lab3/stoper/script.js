const minCnt = document.getElementById("minCnt");
const minUnit = document.getElementById("minUnit");
const secCnt = document.getElementById("secCnt");
const secUnit = document.getElementById("secUnit");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let time = 0;
let run = null;

function displayTime() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    minCnt.innerText = min;
    secCnt.innerText = sec;
    const showMinutes = min >= 1
    minCnt.classList.toggle("hidden", !showMinutes)
    minUnit.classList.toggle("hidden", !showMinutes)
}

function start() {
    if (!run) {
        run = setInterval(() => {
            time += 1;
            displayTime();
        }, 100) // 1000 is too slow xd
    }
}

function stop() {
    if (run) {
        clearInterval(run);
        run = null;
    }
}

function reset() {
    stop();
    time = 0;
    displayTime();
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);