function validateEmails() {
    const emailList = [
        "test@example.com",
        "user@domain",
        "user.name@domain.com",
        "user@sub.domain.com",
        "user@domain.co.in",
        "user@domain@domain.com",
        "@missingusername.com",
        "invalid@domain.",
        "another.test@domain.com"
    ];

    // Regular Expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const resultList = document.getElementById("results");
    resultList.innerHTML = ""; // Clear previous results

    emailList.forEach(email => {
        const isValid = emailRegex.test(email);
        const listItem = document.createElement("li");
        listItem.textContent = `${email} is ${isValid ? "valid" : "invalid"}`;
        resultList.appendChild(listItem);
    });
}