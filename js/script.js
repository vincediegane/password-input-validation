let password = document.querySelector("#password");
let size = document.querySelector("#size");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let symbol = document.querySelector("#symbol");
let tooltip = document.querySelector("#tooltip");

let satisfiedCondition = false;

function validate(pattern) {
  if(pattern.length >= 8) {
    satisfiedCondition = true;
    size.style.display = "block";
  } else {
    satisfiedCondition = false;
    size.style.display = "none";
  }
  if(patternContainUpper(pattern)) {
    satisfiedCondition = true;
    upper.style.display = "block";
  } else {
    satisfiedCondition = false;
    upper.style.display = "none";
  }
  if(patternContainLower(pattern)) {
    satisfiedCondition = true;
    lower.style.display = "block";
  } else {
    satisfiedCondition = false;
    lower.style.display = "none";
  }
  let Regex = /[^a-z\d]/i;
  if(Regex.test(pattern)) {
    satisfiedConditions = true;
    symbol.style.display = "block";
  } else {
    satisfiedCondition = false;
    symbol.style.display = "none";
  }
}

password.addEventListener("focus", () => {
  if(satisfiedCondition) {
    hideValidations();
  } else {
    showValidations();
  }
});

password.addEventListener("blur", () => {
  hideValidations();
});

password.addEventListener("keyup", () => {
  validate(password.value);
  if(satisfiedCondition) {
    hideValidations();
  } else {
    showValidations();
  }
});

function hideValidations() {
  tooltip.style.display = "none";
}

function showValidations() {
  tooltip.style.display = "block";
}

function isLower(character) {
  return (character === character.toLowerCase()) && (character !== character.toUpperCase());
}

function isUpper(character) {
  return (character !== character.toLowerCase()) && (character === character.toUpperCase());
}

function patternContainUpper(pattern) {
  let bool = false;
  if(!pattern.length) return false;
  let patternArray = pattern.split("");
  for(let i = 0; i < patternArray.length; i++) {
    if (isUpper(patternArray[i])) {
      bool = true;
      break;
    }
  }
  return bool;
}

function patternContainLower(pattern) {
  let bool = false;
  if(!pattern.length) return false;
  let patternArray = pattern.split("");
  for(let i = 0; i < patternArray.length; i++) {
    if (isLower(patternArray[i])) {
      bool = true;
      break;
    }
  }
  return bool;
}

