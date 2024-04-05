
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const confirmationDiv = document.getElementById('confirmation');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(registrationForm);
        const registrationData = {};
        formData.forEach((value, key) => {
            registrationData[key] = value;
        });

        // Calculate fee based on status
        let fee = 0;
        switch (registrationData.status) {
            case 'student':
                fee = 10;
                break;
            case 'staff':
                fee = 50;
                break;
            case 'volunteer':
                fee = 0;
                break;
            default:
                fee = 0;
        }

        // Display confirmation notice
        confirmationDiv.classList.add('white-text');
        confirmationDiv.innerHTML = `<h3>Confirmation Notice</h3>
                                      <p><strong>ID:</strong> ${registrationData.id}</p>
                                      <p><strong>Full Name:</strong> ${registrationData['fullName']}</p>
                                      <p><strong>Address:</strong> ${registrationData.address}</p>
                                      <p><strong>Status:</strong> ${registrationData.status}</p>
                                      <p><strong>Fee:</strong> $${fee}</p>
                                      <button id="backButton">Back to Registration</button>`;

        
        // Hide the form
        registrationForm.style.display = 'none';
        confirmationDiv.style.display = 'block';

                // Add event listener for back button
                const backButton = document.getElementById('backButton');
                backButton.addEventListener('click', function() {
                    window.location.href = 'index.html'; 
                });
    });
});
