function validatePassword1(pass) {
    if (pass.length > 7) console.log("Strong");
    else console.log("Weak");
}
function validatePassword2(pass) {
    return pass.length > 7 ? console.log("Strong") : console.log("Weak");
}
function validatePassword3(pass) {
    pass.length > 7 && console.log("Strong");
    pass.length <= 7 && console.log("Weak");
}

validatePassword1("1234567");
validatePassword2("12345678");
validatePassword3("12345679");

console.log("-----");

function validatePasswordAdvanced(pass) {
    if (pass.length > 7 && pass.match(/[A-Z]/g)) return "Very Strong";
    else if (pass.length === 7) return "Strong";
    else return "Weak";
}
check = validatePasswordAdvanced("1234567A");
console.log(check);
