document.addEventListener('DOMContentLoaded', function () {
    // Countdown Timer
    $('#countdown-timer').countdown('2024/03/02 18:00:00', function (event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Mapbox
    mapboxgl.accessToken = 'pk.eyJ1IjoicmVka2l0ZXMiLCJhIjoiY2xyeHV4aDltMWoyODJrbXVrMTJzN2ZuZCJ9.a4mfLOuDl4m-mC1ojL9yeA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // You can customize the map style
        center: [77.550867079031, 12.990046807227637],
        zoom: 14
    });

    // Add a marker to the map
    new mapboxgl.Marker()
        .setLngLat([77.550867079031, 12.990046807227637])
        .addTo(map);
});



// Add basic form validation using JavaScript
document.addEventListener('DOMContentLoaded', function () {
    var guestbookForm = document.getElementById('guestbookForm');

    guestbookForm.addEventListener('submit', function (event) {
        var guestName = document.getElementById('guestName').value;
        var message = document.getElementById('message').value;

        if (!guestName || !message) {
            alert('Please fill out all fields');
            event.preventDefault();
        }
    });
});


// Display a thank you message after submitting the form
document.addEventListener('DOMContentLoaded', function () {
    var guestbookForm = document.getElementById('guestbookForm');
    var thankYouMessage = document.getElementById('thankYouMessage');

    guestbookForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add logic to save the form data (send to server, store in a database, etc.)

        // Display thank you message and hide the form
        guestbookForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});


// Add a reset button to clear the form
document.addEventListener('DOMContentLoaded', function () {
    var resetButton = document.getElementById('resetButton');
    var guestbookForm = document.getElementById('guestbookForm');
    var thankYouMessage = document.getElementById('thankYouMessage');

    resetButton.addEventListener('click', function () {
        guestbookForm.reset();
        guestbookForm.style.display = 'block';
        thankYouMessage.style.display = 'none';
    });
});

var colors = ['#1e1e1e', '#ffeb3b', '#ff9800', '#e91e63', '#2196f3'];

document.addEventListener('DOMContentLoaded', function () {
    var guestbookForm = document.getElementById('guestbookForm');
    var thankYouMessage = document.getElementById('thankYouMessage');

    guestbookForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add logic to save the form data (send to server, store in a database, etc.)

        // Display thank you message and trigger confetti
        guestbookForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
        startConfetti();
    });

    // Function to trigger confetti animation
    function startConfetti() {
        var end = Date.now() + (15 * 1000); // Run for 15 seconds

        // Confetti settings
        var colors = ['#1e1e1e', '#ffeb3b', '#ff9800', '#e91e63', '#2196f3']; // Customize colors
        var interval = 100;

        // Confetti animation loop
        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.6 },
                colors: colors
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.6 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
});

	