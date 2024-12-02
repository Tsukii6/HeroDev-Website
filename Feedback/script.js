// Function to validate the form before submission
function validateForm() {
    // Get form elements
    var name = document.getElementById("name").value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var subscribe = document.getElementById("subscribe").checked;
    var comments = document.getElementById("comments").value;
    
    // Clear any previous error messages
    clearErrorMessages();

    // Validate Name (must be at least 3 characters long and only alphabets)
    if (!/^[A-Za-z\s]{3,}$/.test(name)) {
        showError("name", "Please enter a valid name with at least 3 letters.");
        return false;
    }

    // Validate Rating (must select a rating)
    if (!rating) {
        showError("rating", "Please select a rating.");
        return false;
    }

    // Validate Subscribe (checkbox must be checked)
    if (!subscribe) {
        showError("subscribe", "Please check the box to subscribe to our newsletter.");
        return false;
    }

    // Validate Comments (optional, max 500 characters)
    if (comments.length > 500) {
        showError("comments", "Your comment must be less than 500 characters.");
        return false;
    }

    // If all validations pass
    alert("Feedback submitted successfully!");
    return true; // Allow form submission
}

// Function to show error message
function showError(field, message) {
    var element = document.getElementById(field);
    var errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.innerText = message;
    element.parentNode.insertBefore(errorMessage, element.nextSibling);
}

// Function to clear error messages
function clearErrorMessages() {
    var errors = document.getElementsByClassName("error");
    for (var i = errors.length - 1; i >= 0; i--) {
        errors[i].parentNode.removeChild(errors[i]);
    }
}
