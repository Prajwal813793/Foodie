// Get references to the form elements
var form = document.querySelector("form");
var nameInput = document.querySelector("#name");
var addressInput = document.querySelector("#address");
var mealSelect = document.querySelector("#meal");

// Listen for the submit event on the form
form.addEventListener("submit", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values from the form inputs
  var name = nameInput.value;
  var address = addressInput.value;
  var meal = mealSelect.value;

  // Log the values to the console for testing purposes
  console.log("Name: " + name);
  console.log("Address: " + address);
  console.log("Meal: " + meal);

  // Clear the form inputs
  nameInput.value = "";
  addressInput.value = "";
  mealSelect.value = "pizza";

  // Show the alert message
  alert("Thank you for ordering, food will be at your doorsteps within 30 minutes!");
});
