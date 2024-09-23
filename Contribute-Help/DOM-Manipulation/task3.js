// Select the unordered list and the button
const myList = document.getElementById("myList");
const addButton = document.getElementById("addButton");

// Add event listener to the button for a click event
addButton.addEventListener("click", function() {
    // Create a new list item
    const newListItem = document.createElement("li");
    
    // Set the content of the new list item
    newListItem.textContent = `Item ${myList.children.length + 1}`;
    
    // Append the new list item to the unordered list
    myList.appendChild(newListItem);
});
