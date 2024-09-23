// Create a string object
let myString = "Hello World of JavaScript"
console.log("Original string: " + myString)

// Get the length of the string, note: strings include blank spaces too.
let length = myString.length;
console.log("Length of String: " + length);

// Note: Don't forget to put "()" while using functions

// Convert the string to uppercase
let upCaseStr = myString.toUpperCase();
console.log("Upper case of String: "+ upCaseStr)

// Convert the string to lowercase
let lwCaseStr = myString.toLowerCase();
console.log("Lower case of string: "+ lwCaseStr)

// Find the index of a specific word, [CASE SENSITIVE, gives o/p -1 if missing]
let indexOfJavaScript = myString.indexOf("JavaScript");
console.log("Index of 'JavaScript': " + indexOfJavaScript);

// Extract a substring, (Start: includes, End: includes upto previous index)
let substring = myString.substring(0, 5);
console.log("Substring (7, 17): " + substring);

// Replace a word in the string, [CASE SENSITIVIE]
let replacedString = myString.replace("World", "Universe");
console.log("Replaced String: " + replacedString);

// Check if the string includes a specific word
let includesHello = myString.includes("Hello");
console.log("Includes 'Hello': " + includesHello);

// Split the string into an array of words, here we splitted by space (" ")
let wordsArray = myString.split(" ");
console.log("Array of Words: ", wordsArray);

// Trim whitespace (though this string has no extra whitespace), removes extra whitespace from both ends.
let trimmedString = myString.trim();
console.log("Trimmed String: " + trimmedString);

// Concatenate with another string
let concatenatedString = myString.concat(" Let's code!");
console.log("Concatenated String: " + concatenatedString);

console.log("\n===============================================================\n")


