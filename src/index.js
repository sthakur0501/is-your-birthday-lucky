const dob = document.getElementById("lucky-dob");
const fab_number = document.getElementById("lucky-number");
const checkBtn = document.getElementById("lucky-check");
const checkMessage = document.getElementById("lucky-message");
const luckyNumberLabel = document.getElementById("labLN");

function isFloat(value) {
  let n = value;
  let res = n % 1 !== 0; //Number(n) === n &&
  if (!res) {
    return false;
  }
  return true;
}

function message(msg) {
  checkMessage.innerText = msg;
}

function checkDateOfBirth(dob) {
  if (!dob) {
    message("Enter your date of birth.");
    return false;
  }
  return true;
}

function checkLuckyNumber(luckyNumber) {
  if (luckyNumber === 0) {
    message("Lucky number cannot be zero.");
    return false;
  } else if (isNaN(luckyNumber)) {
    message("Lucky number cannot be words.");
    return false;
  } else if (luckyNumber < 0) {
    message("Lucky number cannot be negative number.");
    return false;
  } else if (isFloat(luckyNumber)) {
    message("Lucky number cannot be floating-point number.");
    return false;
  }
  return true;
}

function calculateDOBSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let xi = 0; xi < dob.length; ++xi) {
    sum += Number(dob.charAt(xi));
  }
  return sum;
}

function checkBirthdayLucky(sum, luckyNumber) {
  let res = sum % luckyNumber;
  console.log({ sum }, { luckyNumber });
  if (res !== 0) {
    return false;
  }
  console.log("pass2 cleared");
  return true;
}

function isYourBirthdayLucky() {
  message("");

  let birthDate = dob.value;
  let luckyNumber = Number(fab_number.value);

  console.log({ birthDate }, { luckyNumber });

  if (checkDateOfBirth(birthDate) && checkLuckyNumber(luckyNumber)) {
    message("");
    console.log("pass1 cleared");

    let sum = calculateDOBSum(birthDate);
    let resp = checkBirthdayLucky(sum, luckyNumber);
    if (resp) {
      message("Your Birthday is lucky. 🙇");
    } else {
      message("Your Birthday is not lucky. 🤣");
    }
  }
}

checkBtn.addEventListener("click", isYourBirthdayLucky);
