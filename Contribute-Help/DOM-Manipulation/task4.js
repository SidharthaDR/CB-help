// Select the element and the button
const myElement = document.getElementById("myElement");
const startAnimationButton = document.getElementById("startAnimation");

// Function to animate the element
function animateElement() {
    let posX = 100; // Starting X position
    let posY = 100; // Starting Y position
    const interval = setInterval(() => {
        // Update position
        posX += 2; // Move 2px to the right
        posY += 2; // Move 2px down

        // Apply new position
        myElement.style.left = posX + 'px';
        myElement.style.top = posY + 'px';

        // Stop the animation when it reaches a certain position
        if (posX > 400 || posY > 400) {
            clearInterval(interval);
        }
    }, 20); // Update every 20ms
}

// Add event listener to the button
startAnimationButton.addEventListener("click", animateElement);
