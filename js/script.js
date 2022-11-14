let password = document.querySelector("#password");
let size = document.querySelector("#size");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let symbol = document.querySelector("#symbol");
let tooltip = document.querySelector("#tooltip");

let satisfiedConditions = [];

function validate(pattern) {
  satisfiedConditions = [];
  if(patternContainUpper(pattern)) {
    satisfiedConditions.push(true);
    upper.style.display = "block";
  } else {
    satisfiedConditions.push(false);
    upper.style.display = "none";
  }
  if(patternContainLower(pattern)) {
    satisfiedConditions.push(true);
    lower.style.display = "block";
  } else {
    satisfiedConditions.push(false);
    lower.style.display = "none";
  }
  let Regex = /[^a-z\d]/i;
  if(Regex.test(pattern)) {
    satisfiedConditions.push(true);
    symbol.style.display = "block";
  } else {
    satisfiedConditions.push(false);
    symbol.style.display = "none";
  }
  if(pattern.length >= 8) {
    satisfiedConditions.push(true);
    size.style.display = "block";
  } else {
    satisfiedConditions.push(false);
    size.style.display = "none";
  }
}

function isAllConditionsPassed() {
  let test = true;
  for(let t of satisfiedConditions) {
    if(t == false) {
      test = t;
      break;
    }
  }
  return test;
}

function hideOrShowValidations() {
  validate(password.value);
  if(isAllConditionsPassed()) {
    hideValidations();
  } else {
    showValidations();
  }
}

password.addEventListener("focus", () => {
  hideOrShowValidations();
});

password.addEventListener("blur", () => {
  hideValidations();
});

password.addEventListener("keyup", () => {
  hideOrShowValidations();
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

