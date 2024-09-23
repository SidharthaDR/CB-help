function validatePhoneNumbers() {
    const phoneNumbers = [
        "(123) 456-7890",
        "(123)456-7890",    // No space after area code
        "123-456-7890",      // No parentheses
        "(123) 456-789",     // Incomplete
        "(123) 456-78901",   // Too many digits
        "(12) 3456-7890",    // Area code too short
        "(123) 4567-890",    // Exchange code too long
        "(987) 654-3210",    // Valid format
        "(987)654-3210"      // No space, but valid
    ];

    // Regular expression to match the phone number format (123) 456-7890
    const phoneRegex = /^\(\d{3}\)\s?\d{3}-\d{4}$/;

    const resultList = document.getElementById("results");
    resultList.innerHTML = ""; // Clear previous results

    phoneNumbers.forEach(phone => {
        const isValid = phoneRegex.test(phone);
        const listItem = document.createElement("li");
        listItem.textContent = `${phone} is ${isValid ? "valid" : "invalid"}`;
        resultList.appendChild(listItem);
    });
}