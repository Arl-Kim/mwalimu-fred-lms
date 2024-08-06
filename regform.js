document.getElementById('volu_registration').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').innerText = 'You did not enter your name!';
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