var southWest = L.latLng(-89.98155760646617, -180), // Define the southwest corner
    northEast = L.latLng(89.99346179538875, 180), // Define the northeast corner
    bounds = L.latLngBounds(southWest, northEast); // Set the bounds

var map = L.map('map',{
    maxBounds: bounds,
    minZoom: 2,
    maxZoom: 11
}).setView([20.0, 0.0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

// Example locations (add more as needed)
var locations = [
    { name: "I. Muga", lat: -33.0472, lng: -71.6127 },
    { name: "P. Sepúlveda", lat: -33.0472, lng: -71.6127 },
    { name: "C. Montoya", lat: 6.2476, lng: -75.5658 },
    { name: "D. Pardo", lat: 43.2630, lng: -2.9350 },
    { name: "M. Bezares", lat: 52.9540, lng: -1.1550 },
    { name: "K. van der Zee", lat: 52.9540, lng: -1.1550 }
];    

// Create a marker for each location
var markers = locations.map(function(location) {
    return L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(location.name);
});

// Function to highlight marker
function highlightMarker(index) {
    map.setView([locations[index].lat, locations[index].lng], 2);
    markers[index].openPopup();
}    

// Add event listeners to list items
var listItems = document.querySelectorAll('#nameList li');
listItems.forEach(function(item, index) {
    item.addEventListener('mouseover', function() {
        highlightMarker(index);
    });
});

/*
var southWest = L.latLng(-89.98155760646617, -180), // Define the southwest corner
    northEast = L.latLng(89.99346179538875, 180), // Define the northeast corner
    bounds = L.latLngBounds(southWest, northEast); // Set the bounds

var map = L.map('map',{
    maxBounds: bounds,
    minZoom: 4,
    maxZoom: 10
}).setView([20.0, 0.0], 5); // Center of the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example locations (add more as needed)
var locations = [
    { name: "Location 1", lat: 51.505, lng: -0.09 },
    { name: "Location 2", lat: 48.8566, lng: 2.3522 }
];

// Create a marker for each location
var markers = locations.map(function(location) {
    return L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(location.name);
});

// Function to highlight marker
function highlightMarker(index) {
    map.setView([locations[index].lat, locations[index].lng], 10);
    markers[index].openPopup();
}

// Add event listeners to list items
var listItems = document.querySelectorAll('#nameList li');
listItems.forEach(function(item, index) {
    item.addEventListener('mouseover', function() {
        highlightMarker(index);
    });
});
*/