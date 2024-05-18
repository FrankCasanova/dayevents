document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events');

    fetch('https://scrape-events-h6f9.onrender.com/api/events/today')
        .then(response => response.json())
        .then(data => {
            eventsContainer.innerHTML = '';
            if (data.length > 0) {
                data.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('event');
                    eventElement.textContent = event;
                    eventsContainer.appendChild(eventElement);
                });
            } else {
                eventsContainer.textContent = 'No events found for today.';
            }
        })
        .catch(error => {
            eventsContainer.textContent = 'Failed to load events. Please try again later.';
            console.error('Error fetching events:', error);
        });
});

