const form = document.querySelector("#form");
const numList = document.querySelectorAll("#form > *[type='text']");
const hidCode = document.querySelector("#hid-code");
const visCode = document.querySelector("#vis-code");
const sms = Math.random().toString(36).slice(2, 8).toLowerCase();
visCode.value = sms;
numList[0].focus();

const fillCode = (el) => {
    // check 1 digit or 1 letter
    if (/^[a-zA-Z0-9]$/.test(el.value)) {
        // add all number to a code
        hidCode.value = Array.from(numList)
            .reduce((add, n) => add + n.value, "")
            .toLowerCase();
        // if has next sibling focus on it
        el.nextElementSibling?.focus();
    } else el.value = "";
};

const fillFromClipboard = (event) => {
    event.preventDefault();
    let paste = (event.clipboardData || window.clipboardData)
        .getData("text/plain")
        .toLowerCase();
    if (paste.length < numList.length) {
        console.log(paste);
        return false;
    }
    [...paste].forEach((ch, ind) => (numList[ind].value = ch));
};

const checkAndSubmit = () => {
    if (hidCode.value.length !== numList.length) return false;
    if ([...hidCode.value].some((n) => !/^[a-zA-Z0-9]$/.test(n))) return false;
    if (visCode.value !== hidCode.value) return false;
    form.submit();
};

const checkValue = (el) => {
    /^[a-zA-Z0-9]$/.test(el.value)
        ? el.classList.remove("error")
        : el.classList.add("error");
};

numList.forEach((el) => {
    el.addEventListener("keyup", (event) => fillCode(el));
    el.addEventListener("paste", (event) => fillFromClipboard(event), false);
    el.addEventListener("keyup", (event) => checkValue(el));
    el.addEventListener("keyup", (event) => checkAndSubmit());
});
