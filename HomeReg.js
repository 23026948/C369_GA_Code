document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize and show login modal
    document.getElementById('showModalButton').addEventListener('click', () => {
        let myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
        myModal.show();
    });

    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        if (username && password) {
            window.location.href = 'Wallet.html'; // Change this to your target page
        } else {
            alert('Please enter both username and password');
        }
    });

    // Handle registration form submission
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

        localStorage.setItem('user', JSON.stringify({
            username: username,
            email: email,
            password: password
        }));

        const successModalElement = document.getElementById('successModal');
        const successModal = new bootstrap.Modal(successModalElement);

        document.getElementById('modalUsername').innerText = `Username: ${username}`;
        document.getElementById('modalEmail').innerText = `Email: ${email}`;

        // Logging to check if the modal is being initialized
        console.log('Attempting to show the success modal');
        
        successModal.show();

        successModalElement.addEventListener('hidden.bs.modal', function () {
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        });
    });
});

// Card number formatting
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 16) {
        value = value.slice(0, 16);
    }
    let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    input.value = formattedValue;
}
