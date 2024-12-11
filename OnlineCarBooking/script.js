// Sample data for reservations
let reservations = [
    
];

// Function to display reservations
function displayReservations() {
    const activeContainer = document.getElementById('activeReservations');
    const pastContainer = document.getElementById('pastReservations');

    activeContainer.innerHTML = ''; // Clear existing content
    pastContainer.innerHTML = ''; // Clear existing content

    reservations.forEach(reservation => {
        const reservationDiv = document.createElement('div');
        reservationDiv.classList.add('reservation-item', 'mb-2');
        reservationDiv.innerHTML = `
            <p><strong>Date:</strong> ${reservation.date}, <strong>Location:</strong> ${reservation.location}, <strong>Time:</strong> ${reservation.time}</p>
            <button class="btn btn-warning btn-sm" onclick="editReservation(${reservation.id})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteReservation(${reservation.id})">Delete</button>
        `;
        activeContainer.appendChild(reservationDiv);
    });
}

// Function to edit reservation
function editReservation(id) {
    const reservation = reservations.find(res => res.id === id);
    if (reservation) {
        // Redirect to reservation page or open a modal to edit
        alert(`Editing Reservation ID: ${id}`);
        // Logic to populate form fields with reservation data can be added here
    }
}

// Function to delete reservation
function deleteReservation(id) {
    reservations = reservations.filter(res => res.id !== id);
    displayReservations(); // Refresh the reservation display
}

// Initial call to display reservations
displayReservations();
