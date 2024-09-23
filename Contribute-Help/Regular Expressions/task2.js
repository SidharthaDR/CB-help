function replaceWord() {
    // Get the sentence and the words to find and replace
    const sentence = document.getElementById("originalSentence").innerText;
    const findWord = document.getElementById("findWord").value;
    const replaceWord = document.getElementById("replaceWord").value;

    // Create a regular expression with the word to find, with 'g' flag for global matching and 'i' for case-insensitivity
    const regex = new RegExp(`\\b${findWord}\\b`, 'gi');

    // Replace the word in the sentence
    const modifiedSentence = sentence.replace(regex, replaceWord);

    // Display the modified sentence
    document.getElementById("modifiedSentence").innerText = modifiedSentence;
}