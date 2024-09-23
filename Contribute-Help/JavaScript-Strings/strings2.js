// Select the button and the result paragraph
const reverseButton = document.getElementById("reverseButton");
const resultParagraph = document.getElementById("result");

// Function to reverse the input sentence
function reverseSentence() {
    // Prompt the user for input
    const userInput = prompt("Enter a sentence:");

    if (userInput) {
        // Reverse the string
        const reversedString = userInput.split('').reverse().join('');
        
        // Display the reversed string
        resultParagraph.textContent = `Reversed: ${reversedString}`;
    } else {
        resultParagraph.textContent = "No input provided.";
    }
}

// Add event listener to the button
reverseButton.addEventListener("click", reverseSentence);
