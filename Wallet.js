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