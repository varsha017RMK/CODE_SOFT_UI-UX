document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    clearErrorMessages();


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const location = document.getElementById('location').value.trim();
    const interest = document.getElementById('interest').value.trim();

    let valid = true;


    if (name === '') {
        showError('name', 'Full Name is required');
        valid = false;
    }

   
    if (email === '' || !validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        valid = false;
    }

    
    if (password === '' || password.length < 6) {
        showError('password', 'Password must be at least 6 characters long');
        valid = false;
    }

    
    if (location === '') {
        showError('location', 'Location is required');
        valid = false;
    }

    
    if (interest === '') {
        showError('interest', 'Interest is required');
        valid = false;
    }

    
    if (valid) {
        alert('Signup successful!');
        
        document.getElementById('signup-form').reset();
    }
});


function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = message;
    field.parentElement.appendChild(errorMessage);
}


function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach((message) => message.remove());
}


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
