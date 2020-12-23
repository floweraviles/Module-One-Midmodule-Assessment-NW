/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessage(temp) {
  let temp = 32
  let i = 0 
  if (i <= temp) {
    console.log("It's freezing!")
  } else {
    console.log ("It's alright")
  }

}

/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperatur
* @returns {string} - A message about the temperature
*/
function temperatureMessageUsingTernary(temp) {
let temp = 32 
let i = num > 32
return i <= temp ? "It's freezing!" : "It's alright"
}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
function ageMessage(age) {
if (age >= 65) {
  return "You are a senior "
} else if (age >= 18){
  return "You are an adult"
} else {
  return "You are a minor"
}
}

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
