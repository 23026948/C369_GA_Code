document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.logout').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        var logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'));
        logoutModal.show(); // Show the custom modal
    });
    document.getElementById('confirmLogout').addEventListener('click', function () {
        window.location.href = document.querySelector('.logout').href; // Redirect to the logout link if confirmed
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Example transaction data (replace with actual data fetching logic)
    const transactions = [
        { date: '2024-08-03', description: 'Online Subscription', sgd: '-$12.00' },
        { date: '2024-08-04', description: 'Grocery Store Purchase', sgd: '-$75.00' },
        { date: '2024-08-05', description: 'Utility Bill Payment', sgd: '-$120.00' },
        { date: '2024-08-06', description: 'Transfer from Friend', sgd: '+$30.00' },
        { date: '2024-08-07', description: 'Restaurant Dinner', sgd: '-$45.00' },
        { date: '2024-08-08', description: 'Freelance Job Payment', sgd: '+$250.00' },
        { date: '2024-08-09', description: 'Gym Membership', sgd: '-$55.00' },
        { date: '2024-08-10', description: 'Book Purchase', sgd: '-$22.00' },
        { date: '2024-08-11', description: 'Cash Deposit', sgd: '+$200.00' },
        { date: '2024-08-12', description: 'Coffee Shop Visit', sgd: '-$8.00' }
    ];
    const transactionsTableBody = document.getElementById('transactionsTableBody');
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.sgd}</td>
        `;
        transactionsTableBody.appendChild(row);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Set current date as default value for date input
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function () {
        const value = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length > 4) {
            phoneInput.value = `${value.slice(0, 4)} ${value.slice(4, 8)}`; // Format as XXXX XXXX
        } else {
            phoneInput.value = value;
        }
    });

    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const sgd = document.getElementById('sgd').value;
        const description = document.getElementById('description').value;

        // Log transaction details to the console
        console.log('Transaction submitted:', { phone, date, description, sgd });

        // Show a double confirmation message
        if (confirm('Are you sure you want to proceed with this transaction?')) {
            alert('Transaction has been made!');

            // Clear form fields after submission
            form.reset();
            // Reset date to current date
            document.getElementById('date').value = today;

            // Redirect to Wallet.html
            window.location.href = 'Wallet.html';
        }
    });
});
