// Select the element and the button
const myElement = document.getElementById("myElement");
const colorButton = document.getElementById("colorButton");

// Add event listener to the button for a click event
colorButton.addEventListener("click", function() {
    // Change the background color of the element
    myElement.style.backgroundColor = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
