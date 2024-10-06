document.getElementById('contactForm').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const submitButton = document.getElementById('submitButton');
    const buttonText = document.getElementById('buttonText');
    const buttonSpinner = document.getElementById('buttonSpinner');

    // Disable button and show spinner
    submitButton.disabled = true;
    buttonText.textContent = 'Sending...';
    buttonSpinner.classList.remove('d-none');

    // Simulate form submission
    setTimeout(() => {
        // Enable button and hide spinner
        submitButton.disabled = false;
        buttonText.textContent = 'Send Message';
        buttonSpinner.classList.add('d-none');

        // Show success message
        showAlert('Success! Your message was submitted.', 'success');

        // Reset form
        form.reset();
    }, 2000);

    return false;
}

function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);

    // Remove alert after 5 seconds
    setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(wrapper.firstElementChild);
        alert.close();
    }, 5000);
}
