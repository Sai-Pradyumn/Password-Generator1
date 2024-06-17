let rangeSlider = document.getElementById("rangee");
let inputRange = document.getElementById("slider-value");
let outputField = document.getElementById("output");
let empty_para = document.getElementById("empty");
let generateButton = document.querySelector(".generate");

rangeSlider.addEventListener('input', () => {
    inputRange.innerHTML = rangeSlider.value;
});

generateButton.addEventListener('click', () => {
    let length = parseInt(rangeSlider.value);
    let includeNumbers = document.getElementById("number").checked;
    let includeUppercase = document.getElementById("uppercase").checked;
    let includeLowercase = document.getElementById("lowercase").checked;
    let includeSymbols = document.getElementById("symbols").checked;

    let password = generatePassword(length, includeNumbers, includeUppercase, includeLowercase, includeSymbols);
    outputField.value = password;
});

function generatePassword(length, numbers, uppercase, lowercase, symbols) {
    const numberChars = '0123456789';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbolChars = '@#$%^&*()-_+=<>?';

    let allChars = '';
    if (numbers) allChars += numberChars;
    if (uppercase) allChars += upperChars;
    if (lowercase) allChars += lowerChars;
    if (symbols) allChars += symbolChars;

    if (allChars === '') {
        empty_para.innerHTML = '*Please select at least one character set';
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
