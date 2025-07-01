// You can add JavaScript here to handle form submissions,
// validate input, or add other interactive features.
// For example, you could use a library like jQuery to simplify DOM manipulation
// and AJAX requests to send the message to a server-side script.

// Here's a basic example using plain JavaScript:
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send the data to a server-side script (e.g., using AJAX)
    // ...

    // Display a success message or error message
    alert('Message sent successfully!');
    form.reset();
});
// Replace with your actual Google Maps API key
const apiKey = 'YOUR_API_KEY';

function initMap() {
  // Define map options (center coordinates, zoom level)
  const mapOptions = {
    zoom: 15, // Adjust zoom level as needed
    center: { lat: 13.021568, lng: 77.589691 }, // Example coordinates (replace with desired location)
  };

  // Create a new map element
  const map = new google.maps.Map(document.querySelector('.interactive-map'), mapOptions);

  // Add a marker to the map (optional)
  const marker = new google.maps.Marker({
    position: { lat: 13.021568, lng: 77.589691 }, // Same coordinates as the map center
    map: map,
    title: 'Yellow Gate Girls Hostel'
  });
}

// Load the Google Maps API with your API key
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
document.head.appendChild(script);