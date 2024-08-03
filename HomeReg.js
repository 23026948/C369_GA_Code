document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('showModalButton').addEventListener('click', () => {
        let myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
        myModal.show();
    });
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way
        // Retrieve the values from the input fields
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;
        // Perform validation if needed
        if (username && password) {
            // Redirect to another page
            window.location.href = 'Wallet.html'; // Change this to your target page
        } else {
            alert('Please enter both username and password');
        }
    });
});
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!username || username.length < 3 || username.length > 20) {
        alert('Username must be between 3 and 20 characters.');
        return;
    }
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please confirm your password.');
        return;
    }
    // Save data to local storage
    localStorage.setItem('user', JSON.stringify({
        username: username,
        email: email,
        password: password
    }));
    // Show the modal
    const modalElement = document.getElementById('successModal');
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    document.getElementById('modalUsername').innerText = `Username: ${username}`;
    document.getElementById('modalEmail').innerText = `Email: ${email}`;
    modal.show();
    // Show loginModal after modal is closed
    modalElement.addEventListener('hidden.bs.modal', function () {
        let myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
        myModal.show();
    });
});
function formatCardNumber(input) {
    // Remove all non-digit characters
    let value = input.value.replace(/\D/g, '');
    // Limit to 16 digits
    if (value.length > 16) {
        value = value.slice(0, 16);
    }
    // Insert a space every 4 digits
    let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Set the formatted value back to the input field
    input.value = formattedValue;
}
