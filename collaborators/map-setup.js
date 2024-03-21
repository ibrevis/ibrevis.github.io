var map = L.map('map').setView([20.0, 0.0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

            // Your marker code and any additional JavaScript for the map
            // Add a marker for each collaborator
var marker1 = L.marker([-33.04, -71.60]).addTo(map) // London example
    .bindPopup('I. Muga')
    .openPopup();

var marker2 = L.marker([-33.04, -71.601]).addTo(map) // Buenos Aires example
    .bindPopup('P. Sepúlveda')
    .openPopup();