const minLength = document.getElementById("minLength");
const maxLength = document.getElementById("maxLength");
const capital = document.getElementById("capital");
const special = document.getElementById("special");
const generateBtn = document.getElementById("generateBtn");
const minLengthRange = document.getElementById("minLengthRange");
const maxLengthRange = document.getElementById("maxLengthRange");
let minLengthValue = Number(minLength.placeholder);
let maxLengthValue = Number(maxLength.placeholder);

window.addEventListener("load", () => {
  minLength.value = minLengthValue;
  maxLength.value = maxLengthValue;
  minLengthRange.value = minLengthValue;
  maxLengthRange.value = maxLengthValue;
});

function generatePassword() {
  let length =
    Math.floor(Math.random() * (maxLengthValue - minLengthValue + 1)) +
    Number(minLengthValue);
  let password = "";
  const smallChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const capitalChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let chars = smallChars;
  let specialChar = "";
  let capitalChar = "";
  if (special.checked) {
    specialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
    password += specialChar;
    chars += specialChars;
    length -= 1;
  }
  if (capital.checked) {
    capitalChar = capitalChars[Math.floor(Math.random() * capitalChars.length)];
    password += capitalChar;
    chars += capitalChars;
    length -= 1;
  }
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return shuffle(password.split("")).join("");
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

function manualChangedMin() {
  let value = Number(minLength.value);
  if (value > maxLengthValue) {
    value = maxLengthValue;
  } else if (value <= 2) {
    value = 3;
  } else if (value > 128) {
    value = 128;
  }
  minLengthValue = value;
  minLength.value = value;
}

function manualChangedMax() {
  let value = Number(maxLength.value);
  if (value < minLengthValue) {
    value = minLengthValue;
  } else if (value > 128) {
    value = 128;
  }
  maxLengthValue = value;
  maxLength.value = value;
}

minLength.addEventListener("input", manualChangedMin);
maxLength.addEventListener("input", manualChangedMax);
minLengthRange.addEventListener("input", () => {
  minLength.value =
    minLengthRange.value < maxLengthValue
      ? minLengthRange.value
      : maxLengthValue;
  manualChangedMin();
  minLengthRange.value =
    minLengthRange.value < maxLengthValue
      ? minLengthRange.value
      : maxLengthValue;
});
maxLengthRange.addEventListener("input", () => {
  maxLength.value =
    maxLengthRange.value > minLengthValue
      ? maxLengthRange.value
      : minLengthValue;
  manualChangedMax();
  maxLengthRange.value =
    maxLengthRange.value > minLengthValue
      ? maxLengthRange.value
      : minLengthValue;
});

generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  window.alert(password);
});
