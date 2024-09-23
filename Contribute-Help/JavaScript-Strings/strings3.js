function checkSubstring() {
    const mainString = prompt("Please enter any string:");
    const substring = prompt(`YOUR STRING: ${mainString} \n\nPlease enter the substring to search for:`);
    
    if (substring === null) {
        // User canceled the prompt
        document.getElementById("result").innerText = "Search canceled.";
        return;
    }

    const index = mainString.indexOf(substring);
    if (index !== -1) {
        document.getElementById("result").innerText = `Substring found at index: ${index}`;
    } else {
        document.getElementById("result").innerText = "Substring not found.";
    }
}