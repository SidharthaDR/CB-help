function validateAlphanumeric() {
    // Get the input string
    const inputString = document.getElementById("inputString").value;
    
    // Regular expression to match alphanumeric characters only
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if the string matches the regex
    const isValid = alphanumericRegex.test(inputString);

    // Display the result
    document.getElementById("result").innerText = isValid
        ? `"${inputString}" contains only alphanumeric characters.`
        : `"${inputString}" contains non-alphanumeric characters.`;
}