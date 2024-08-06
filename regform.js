document.getElementById('volu_registration').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous success message
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.remove();
    }

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
        document.getElementById('nameError').innerText = 'Please enter a valid name (at least 3 letters long per name)!';
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

    // Validate subjects
    const subjects = document.getElementById('subjects').value;
    if (subjects === '') {
        isValid = false;
        document.getElementById('subjectsError').innerText = 'You did not indicate your subject!';
    } else {
        document.getElementById('subjectsError').innerText = '';
    }

    // Validate level of teaching
    const teachingLevel = document.querySelector('input[name="teaching-level"]:checked');
    if (!teachingLevel) {
        isValid = false;
        document.getElementById('teachingLevelError').innerText = 'Please select your teaching level!';
    } else {
        document.getElementById('teachingLevelError').innerText = '';
    }

    // Validate level of education
    const educationLevel = document.getElementById('education_level').value;
    if (educationLevel === '') {
        isValid = false;
        document.getElementById('educationLevelError').innerText = 'Please indicate your level of education!';
    } else {
        document.getElementById('educationLevelError').innerText = '';
    }

    // Validate teaching experience
    const experience = document.getElementById('experience').value;
    if (experience === '' || isNaN(experience) || experience < 0) {
        isValid = false;
        document.getElementById('experienceError').innerText = 'Please enter a valid number of years!';
    } else {
        document.getElementById('experienceError').innerText = '';
    }

    // Validate TSC registration status
    const tscStatus = document.querySelector('input[name="tsc_status"]:checked');
    if (!tscStatus) {
        isValid = false;
        document.getElementById('tscStatusError').innerText = 'What is your TSC registration status!?';
    } else {
        document.getElementById('tscStatusError').innerText = '';
    }

    // Validate current institution
    const currentInstitution = document.getElementById('current_institution').value;
    if (currentInstitution === '') {
        isValid = false;
        document.getElementById('currentInstitutionError').innerText = 'Kindly indicate where you are teaching at the moment!';
    } else {
        document.getElementById('currentInstitutionError').innerText = '';
    }

    if (isValid) {
        const form = document.getElementById('volu_registration');
        const message = document.createElement('div');
        message.id = 'successMessage';
        message.innerText = 'Your Details Have Been Sent Successfully';
        message.style.color = '#01377d';
        message.style.marginTop = "20px";
        message.style.fontSize = "14px";
        message.style.fontWeight = "700";
        form.appendChild(message);

        setTimeout(function() {
            form.reset();
            message.remove();
        }, 5000);
    }
});