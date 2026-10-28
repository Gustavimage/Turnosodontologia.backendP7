const socket = io();

socket.on('update_services', (data) => {
    console.log("Servicios actualizados:", data);
    window.location.reload();
});

socket.on('update_bookings', (data) => {
    console.log("Reservas actualizadas:", data);
    window.location.reload();
});