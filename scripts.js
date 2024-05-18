document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events');

    fetch('https://scrape-events-h6f9.onrender.com/api/events/today')
        .then(response => response.json())
        .then(data => {
            eventsContainer.innerHTML = '';
            if (data.events && data.events.length > 0) {
                data.events.forEach(event => {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('event');

                    const titleElement = document.createElement('div');
                    titleElement.classList.add('event-title');
                    titleElement.textContent = event.title;

                    const dateElement = document.createElement('div');
                    dateElement.classList.add('event-date');
                    dateElement.textContent = event.date;

                    eventElement.appendChild(titleElement);
                    eventElement.appendChild(dateElement);

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
