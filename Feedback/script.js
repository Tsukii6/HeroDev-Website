// Function to validate the form before submission
function validateForm() {
    console.log("Validation started");

    // Get form elements
    var name = document.getElementById("name").value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var subscribe = document.getElementById("subscribe").checked;
    var comments = document.getElementById("comments").value;

    // Clear any previous error messages
    clearErrorMessages();

    // Validate Name (must be at least 3 characters long and only alphabets and spaces)
    // Using regex: ^[A-Za-z\s]{3,}$ ensures only alphabets and spaces and minimum 3 characters.
    if (!/^[A-Za-z\s]{3,}$/.test(name)) {
        showError("name", "Please enter a valid name with at least 3 letters (alphabets only).");
        return false; // Prevent form submission
    }

    // Validate Rating (must select a rating between 1 and 5)
    if (!rating) {
        showError("rating", "Please select a rating.");
        return false; // Prevent form submission
    }

    // Validate Subscribe (checkbox must be checked for subscription)
    // If not checked, show an error
    if (!subscribe) {
        showError("subscribe", "Please check the box to subscribe to our newsletter.");
        return false; // Prevent form submission
    }

    // Validate Comments (optional, max 500 characters)
    // Ensuring the comment is not longer than 500 characters.
    if (comments.length > 500) {
        showError("comments", "Your comment must be less than 500 characters.");
        return false; // Prevent form submission
    }

    console.log("Form is valid. Submitting...");
    alert("Feedback submitted successfully!");
    return true; // Allow form submission
}

// Function to show error message near the field
function showError(field, message) {
    console.log(`Showing error for field: ${field} - ${message}`);
    var element = document.getElementById(field);
    var errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.innerText = message;
    
    // Insert the error message after the form element
    element.parentNode.insertBefore(errorMessage, element.nextSibling);
}

// Function to clear previous error messages before validating again
function clearErrorMessages() {
    var errors = document.getElementsByClassName("error");
    for (var i = errors.length - 1; i >= 0; i--) {
        errors[i].parentNode.removeChild(errors[i]);
    }
}
