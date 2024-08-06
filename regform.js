document.getElementById('volu_registration').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').innerText = 'Name is required.';
    } else {
        document.getElementById('nameError').innerText = '';
    }
});