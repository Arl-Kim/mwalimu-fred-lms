document.getElementById('volu_registration').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value.trim();
    const nameParts = name.split(' ');
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').innerText = 'Your name is required!';
    } else if (nameParts.length < 2) {
        isValid = false;
        document.getElementById('nameError').innerText = 'Please enter at least two names (first and last name)!.';
    } else if (nameParts.some(part => part.length < 3)) {
        isValid = false;
        document.getElementById('nameError').innerText = 'Please enter a valid name (at least 3 letters long)!';
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        isValid = false;
        document.getElementById('emailError').innerText = 'Please provide your email address!';
    } else if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').innerText = 'Please enter a valid email address!';
    } else {
        document.getElementById('emailError').innerText = '';
    }
});