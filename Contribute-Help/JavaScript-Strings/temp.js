var button1 = document.getElementById(btn1)

function findSubstring() {
    // Prompt the user for the main string
    let mainString = prompt("Enter the main string:");

    // Prompt the user for the substring to search for
    let substring = prompt("Enter the substring to search for:");

    // Check if the substring exists in the main string
    let index = mainString.indexOf(substring);

    // Display the result in the output div
    let output = document.getElementById("output");
    if (index !== -1) {
        output.textContent = `The substring '${substring}' was found at index: ${index}`;
    } else {
        output.textContent = `The substring '${substring}' was not found.`;
    }
}

button1.addEventListener('click',findSubstring)
