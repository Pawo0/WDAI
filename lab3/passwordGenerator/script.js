const minLength = document.getElementById("minLength")
const maxLength = document.getElementById("maxLength")
const capital = document.getElementById("capital")
const special = document.getElementById("special")
const generateBtn = document.getElementById("generateBtn")
let minLengthValue = 8;
let maxLengthValue = 12;

function updateMin() {
    if (minLength.value > maxLengthValue) {
        minLengthValue = maxLengthValue
        minLength.value = minLengthValue;
    } else if (minLength.value <= 2) {
        minLengthValue = 3
        minLength.value = minLengthValue;
    } else minLengthValue = minLength.value

}

function updateMax() {
    if (maxLength.value > 128) {
        maxLength.value = 128
        maxLengthValue = maxLength.value;
    } else if (maxLength.value <= 2) {
        maxLengthValue = 3
        maxLength.value = maxLengthValue;
    } else maxLengthValue = maxLength.value

    if (minLengthValue > maxLengthValue) {
        minLengthValue = maxLengthValue;
        minLength.value = maxLengthValue
    }
}

function generatePassword() {
    let length = Math.floor(Math.random() * (maxLengthValue - minLengthValue + 1)) + Number(minLengthValue);
    let password = "";
    const smallChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let chars = smallChars
    let specialChar = "";
    let capitalChar = "";
    if (special.checked) {
        specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
        password += specialChar;
        chars += specialChars
        length -= 1
    }
    if (capital.checked) {
        capitalChar = capitalChars[Math.floor(Math.random() * capitalChars.length)];
        password += capitalChar;
        chars += capitalChars
        length -= 1
    }
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return shuffle(password.split('')).join('');
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


minLength.addEventListener("change", updateMin)
maxLength.addEventListener("change", updateMax)

generateBtn.addEventListener("click", () => {
    const password = generatePassword();
    document.getElementById("generatedPassword").innerText = password;
})