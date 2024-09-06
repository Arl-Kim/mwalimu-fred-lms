(function(){
    emailjs.init('NVBnrBxRIIRg9DVIP');
})();

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

    // Validate phone
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]\d{9,14}$/;
    if (phone === '') {
        isValid = false;
        document.getElementById('phoneError').innerText = 'Please provide your phone number!';
    } else if(!phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number!';
    } else {
        document.getElementById('phoneError').innerText = '';
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
        const formData = {
            name: name,
            email: email,
            phone: phone,
            subjects: subjects,
            teachingLevel: teachingLevel.value,
            educationLevel: educationLevel,
            experience: experience,
            tscStatus: tscStatus.value,
            currentInstitution: currentInstitution
        };

        emailjs.send('service_vioa6tm', 'template_e3gkf4s', formData)
            .then(function(response) {
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
            }, function(error) {
                console.log('FAILED...', error);
            });
    }
});

// Real-time validation
document.getElementById('name').addEventListener('input', function() {
    const name = this.value.trim();
    const nameParts = name.split(' ');
    if (name !== '' && nameParts.length >= 2 && !nameParts.some(part => part.length < 3)) {
        document.getElementById('nameError').innerText = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value !== '' && emailPattern.test(this.value)) {
        document.getElementById('emailError').innerText = '';
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const phonePattern = /^[0-9]\d{9,14}$/;
    if (this.value !== '' && phonePattern.test(this.value)) {
        document.getElementById('phoneError').innerText = '';
    }
});

document.getElementById('subjects').addEventListener('change', function() {
    if (this.value !== '') {
        document.getElementById('subjectsError').innerText = '';
    }
});

document.querySelectorAll('input[name="teaching-level"]').forEach(function(input) {
    input.addEventListener('change', function() {
        if (document.querySelector('input[name="teaching-level"]:checked')) {
            document.getElementById('teachingLevelError').innerText = '';
        }
    });
});

document.getElementById('education_level').addEventListener('change', function() {
    if (this.value !== '') {
        document.getElementById('educationLevelError').innerText = '';
    }
});

document.getElementById('experience').addEventListener('input', function() {
    if (this.value !== '' && !isNaN(this.value) && this.value >= 0) {
        document.getElementById('experienceError').innerText = '';
    }
});

document.querySelectorAll('input[name="tsc_status"]').forEach(function(input) {
    input.addEventListener('change', function() {
        if (document.querySelector('input[name="tsc_status"]:checked')) {
            document.getElementById('tscStatusError').innerText = '';
        }
    });
});

document.getElementById('current_institution').addEventListener('input', function() {
    if (this.value !== '') {
        document.getElementById('currentInstitutionError').innerText = '';
    }
});