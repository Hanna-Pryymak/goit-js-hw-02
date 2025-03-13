function checkForSpam(message) {
  let mesLower = message.toLowerCase();
  let wordFirst = "spam";
  let wordSecond = "sale";
  if (mesLower.includes(wordFirst)) {
    return true;
  } else if (mesLower.includes(wordSecond)) {
    return true;
  } else return false;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
