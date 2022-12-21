// Create the button element
var button = document.createElement("button");

// Set the button text
button.innerHTML = "Product";

// Add an event listener to the button
button.addEventListener("click", function() {
  // When the button is clicked, navigate to the home page
  window.location.href = "/public/product";
});

// Append the button to the document
document.body.appendChild(button);