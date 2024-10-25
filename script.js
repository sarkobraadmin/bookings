document.addEventListener("DOMContentLoaded", function() {
    fetch('view_bookings.php')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('bookings-table');

            data.forEach(booking => {
                const row = table.insertRow();
                row.insertCell(0).textContent = booking.name;
                row.insertCell(1).textContent = booking.phone;
                row.insertCell(2).textContent = booking.barber;
                row.insertCell(3).textContent = booking.appointment_date;
                row.insertCell(4).textContent = booking.appointment_time;
            });
        })
        .catch(error => {
            console.error('Error fetching booking data:', error);
            const table = document.getElementById('bookings-table');
            const row = table.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 5;
            cell.textContent = 'Fehler beim Laden der Buchungen.';
            cell.style.color = 'red';
        });
});
