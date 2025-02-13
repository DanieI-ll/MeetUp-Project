const eventsStore = [
  {
    title: 'INFJ Personality Type- Coffee Shop Meet & Greet',
    description: 'Being an INFJ',
    date: new Date(2024, 2, 23, 15),
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ',
    type: 'offline',
    attendees: 99,
    category: 'Hobbies and Passions',
    distance: 50,
  },
  {
    title: 'NYC AI Users- AI Tech Talks, Demo & Social: RAG Search and CustomerExperience',
    description: 'New York AI Users',
    date: new Date(2024, 2, 23, 11, 30),
    image: 'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
    type: 'offline',
    attendees: 43,
    category: 'Technology',
    distance: 25,
  },
  {
    title: 'Book 40+ Appointments Per Month Using AI and Automation',
    description: 'New Jersey Business Network',
    date: new Date(2024, 2, 16, 14),
    image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    category: 'Technology',
    distance: 10,
  },
  {
    title: 'Dump writing group weekly meetup',
    description: 'Dump writing group',
    date: new Date(2024, 2, 13, 11),
    image: 'https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 77,
    category: 'Business',
    distance: 100,
  },
  {
    title: 'Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community',
    description: 'Over 40s, 50s, 60s Singles Chat, Meet & Dating Community',
    date: new Date(2024, 2, 14, 11),
    image: 'https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'online',
    attendees: 140,
    category: 'Social Activities',
    distance: 75,
  },
  {
    title: 'All Nations- Manhattan Missions Church Bible Study',
    description: 'Manhattan Bible Study Meetup Group',
    date: new Date(2024, 2, 14, 11),
    image: 'https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'offline',
    category: 'Health and Wellbeing',
    distance: 15,
  },
];

const eventsList = document.getElementById('eventsList');
const typeFilter = document.getElementById('typeFilter');
const distanceFilter = document.getElementById('distanceFilter');
const categoryFilter = document.getElementById('categoryFilter');
const dayFilter = document.getElementById('dayFilter');

function loadEvents(events) {
  eventsList.innerHTML = '';

  events.forEach((event) => {
    const formattedDate = event.date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    const formattedTime = event.date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const eventHTML = `
      <div class="events-content media-upcoming-box">
        <img src="${event.image}" alt="${event.title}" />
        <div class="media-event-box">
        <div class="events-date-box">
          <p>${formattedDate} · ${formattedTime} PDT</p>
        </div>
          <h3>${event.title}</h3>
          <p>${event.category} ${event.distance > 0 ? `(${event.distance} km)` : ''}</p>
          <div class="events-status-box">
            <p>${event.attendees}</p>
          </div>
        </div>
      </div>
    `;
    eventsList.insertAdjacentHTML('beforeend', eventHTML);
  });
}

function filterEvents() {
  let filteredEvents = [...eventsStore];

  const type = typeFilter.value.toLowerCase();
  const distance = parseInt(distanceFilter.value);
  const category = categoryFilter.value;
  const selectedDay = dayFilter.value;

  const distanceOptions = distanceFilter.querySelectorAll('option');
  if (type === 'online') {
    distanceOptions.forEach((option) => {
      option.disabled = true;
    });
  } else {
    distanceOptions.forEach((option) => {
      option.disabled = false;
    });
  }

  if (type !== 'any type') {
    filteredEvents = filteredEvents.filter((event) => event.type.toLowerCase() === type);
  }

  if (!isNaN(distance) && distanceFilter.value !== 'any distance') {
    filteredEvents = filteredEvents.filter((event) => event.distance === distance);
  }

  if (category !== 'Any category') {
    filteredEvents = filteredEvents.filter((event) => event.category === category);
  }

  if (selectedDay !== 'Any day') {
    filteredEvents = filteredEvents.filter((event) => {
      const formattedSelectedDay = selectedDay.split(', ')[1];
      const formattedEventDay = event.date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      return formattedEventDay === formattedSelectedDay;
    });
  }

  loadEvents(filteredEvents);
}

[typeFilter, distanceFilter, categoryFilter, dayFilter].forEach((filter) => {
  filter.addEventListener('change', filterEvents);
});

loadEvents(eventsStore);

document.getElementById('browseMapBtn').addEventListener('click', function () {
  document.getElementById('mapFrame').style.filter = 'none';
  document.getElementById('mapFrame').style.pointerEvents = 'auto';
  this.style.display = 'none';
  document.getElementById('closeMapBtn').style.display = 'block';
});

document.getElementById('closeMapBtn').addEventListener('click', function () {
  document.getElementById('mapFrame').style.filter = 'blur(10px)';
  document.getElementById('mapFrame').style.pointerEvents = 'none';
  document.getElementById('browseMapBtn').style.display = 'flex';
  this.style.display = 'none';
});
