export function validateText(text) {
  if (text.length < 2) {
    return "Input is Invalid";
  }
}

export function validateEmail(email) {
  if (!email) {
    return "Email cannot be empty";
  } else if (
    (typeof email === "string" && email.length > 3 && email.includes("@")) !==
    true
  ) {
    return "Invalid email";
  }
}

export function validatePhone(phone) {
  // if (typeof phone !== "string" || phone.length < 10) {
  //   return 'Phone number is invalid';
  // }
  let safariomRegex =
    /^(?:254|\+254|0)?([71](?:(?:0[0-8])|(?:[12][0-9])|(?:9[0-9])|(?:4[0-3])|(?:4[68]))[0-9]{6})$/;

  let airtelRegex =
    /^(?:254|\+254|0)?(7(?:(?:3[0-9])|(?:5[0-6])|(?:8[0-2])|(?:8[6-9]))[0-9]{6})$/;

  let telkomRegex = /^(?:254|\+254|0)?(77[0-9][0-9]{6})$/;

  if (
    !phone.match(safariomRegex) &&
    !phone.match(airtelRegex) &&
    !phone.match(telkomRegex)
  ) {
    return "Phone number is invalid";
  }
}
export function validateMessage(message) {
  if (!message) {
    return "Message cannot be empty";
  } else if (typeof message !== "string") {
    return "Message must be a string";
  }
}
