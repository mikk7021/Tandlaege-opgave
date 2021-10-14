const btn = document.querySelector('#submit2newsletter');

const errorWrapper = document.querySelector('#error-wrapper');

function removetext() {
errorWrapper.innerHTML = null;
}

let select = document.getElementById('selecter')
let email = document.getElementById('email')
let inputdate = document.getElementById('inputdate')
let number = document.getElementById('number')


//Kører function validate onclick som checker om inputs enten er tomme eller ikke har en gyldig længde/syntaks og herefter sætter en fejlbesked.
function validate () {

    
if (inputdate.value === ""){
errorWrapper.innerHTML = "Vælg en tid i kallender"
}
    
else if (select.value === ""){
errorWrapper.innerHTML = "Vælg en behandling"
}

else if (email.value === "" || !isValidEmail(email.value)){
errorWrapper.innerHTML = "Email er ikke korrekt"
}

else if (number.value === "" || !isValidNumber(number.value)){
errorWrapper.innerHTML = "TLF nummer er ikke korrekt"
}



else {
errorWrapper.innerHTML = " Formularen er afsendt"
}
}

//Tjekker om værdi har en gyldig email syntaks
function isValidEmail(value) {
let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
return pattern.test(value);
}

//Tjekker om værdi er 8 tal
function isValidNumber(value) {
let pattern = /[0-9]{8}/;
return pattern.test(value);
}
