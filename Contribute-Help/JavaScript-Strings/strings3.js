var button1 = document.getElementById(btn1)

// Function to check if a substring is present in a string
function findSubstring(mainString, substring) {

    let mainString = button1.onclick =  prompt("Enter the main string:");
    let substring = prompt("Enter the substring to search for:");

    // Use indexOf to find the first occurrence of the substring
    let index = mainString.indexOf(substring);

    console.log(index)
    // Check if the substring was found
    // If result of index is -1, then substring is absent   
    if (index !== -1) {
        return `The substring '${substring}' was found at index: ${index}`;
    } else {
        return `The substring '${substring}' was not found.`;
    }

}

button1.onclick = findSubstring()
// Find and log the result
// let result = findSubstring(mainString, substring);
// console.log(result);


