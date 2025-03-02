document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;

    const confirmationMessage = `
        Vielen Dank, ${name}!<br>
        Ihre Buchung für ${service} am ${date} wurde bestätigt.<br>
        Eine Bestätigungsemail wurde an ${email} gesendet.
    `;

    document.getElementById('confirmation').innerHTML = confirmationMessage;
});