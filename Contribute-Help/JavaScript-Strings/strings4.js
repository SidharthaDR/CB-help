function compareStrings(str1, str2) {
    // Check if strings are equal
    if (str1 === str2) {
        console.log("The strings are equal.");
    } else {
        console.log("The strings are not equal.");

        // Find the length of the longer string
        const maxLength = Math.max(str1.length, str2.length);

        console.log("Differences:");
        for (let i = 0; i < maxLength; i++) {
            const char1 = str1[i] || "(empty)";
            const char2 = str2[i] || "(empty)";

            if (char1 !== char2) {
                console.log(`At index ${i}: '${char1}' !== '${char2}'`);
            }
        }
    }
}

// Example usage:
let st1 = prompt("Enter string 1")
let st2 = prompt("Enter string 2")
const string1 = st1
const string2 = st2
// const string1 = "hello world";
// const string2 = "helpo word";

compareStrings(string1, string2);
