const startStopBtn = document.querySelector("#start-stop");
const resetLapBtn = document.querySelector("#reset-lap");
const watchBtn = document.querySelector("#stopwatch");
const laps = document.querySelector("#laps ul");
const mUi = document.querySelector("#m");
const sUi = document.querySelector("#s");
const msUi = document.querySelector("#ms");

startStopBtn.addEventListener("click", toggleWatch);
resetLapBtn.addEventListener("click", resetLapWatch);

let running = false;
let interval;
let m = (s = ms = 0);

function toggleWatch() {
    running = !running;
    if (running) {
        // every 60 milliseconds. 1 millisecond is 1/1000 if a second
        interval = setInterval(progressWatchTime, 1000 / 60);
    } else clearInterval(interval);
}

function progressWatchTime() {
    if (m >= 60) {
        // Stop at 60 minutes
        clearInterval(interval);
        return;
    }
    ms += 1;
    if (ms >= 60) {
        ms = 0;
        s += 1;
    }
    if (s >= 60) {
        s = 0;
        m += 1;
    }
    // update UI but leave leading 0
    updateUI();
}

function resetLapWatch() {
    if (!running) {
        m = s = ms = 0;
        updateUI();
        const newLaps = laps.cloneNode();
        laps.replaceWith(newLaps);
        return;
    }
    const newLap = document.createElement("li");
    newLap.textContent =
        leadingZeroNumber(m) +
        ":" +
        leadingZeroNumber(s) +
        ":" +
        leadingZeroNumber(ms);
    laps.appendChild(newLap);
}

function updateUI() {
    msUi.textContent = leadingZeroNumber(ms);
    sUi.textContent = leadingZeroNumber(s);
    mUi.textContent = leadingZeroNumber(m);
}

function leadingZeroNumber(t) {
    return t < 10 ? "0" + t : t;
}
