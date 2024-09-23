// Function to reverse a string using existing functions
function reverseStringF1(inputString) {
    // Step 1: Split the string into an array of characters
    let splitString = inputString.split("");
    
    // Step 2: Reverse the array of characters
    let reversedArray = splitString.reverse();
    
    // Step 3: Join the array back into a string
    let reversedString = reversedArray.join("");
    
    // Return the reversed string
    return reversedString
}

// Take a sentence as input
let inputSentence1 = prompt("Enter a sentence to reverse:");

// Reverse the input sentence
let reversedSentence1 = reverseStringF1(inputSentence1);

// Log the reversed sentence
console.log("Reversed Sentence: " + reversedSentence1);



/* USING LOOP: {USE THIS: COMMENT ABOVE CODE, AND ADD // AT STARTING OF THIS LINE AND START OF LINE NO.51}
// Function to reverse a string using a loop
function reverseString(inputString) {
    let reversedString = "";

    // Loop through the string starting from the last character to the first
    for (let i = inputString.length - 1; i >= 0; i--) {
        // Append each character to the reversedString
        reversedString += inputString[i];
    }

    return reversedString;
}

// Take a sentence as input
let inputSentence = prompt("Enter a sentence to reverse:");

// Reverse the input sentence
let reversedSentence = reverseString(inputSentence);

// Log the reversed sentence
console.log("Reversed Sentence: " + reversedSentence);


*/ 