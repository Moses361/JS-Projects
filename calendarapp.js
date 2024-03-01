// Define the events array
let events = [
    {
        title: 'Wedding',
        date: new Date('2024-03-01'),
        location: 'Nairobi Central SDA',
        attendees: new Set(['Caroline', 'Moses', 'Diana', 'Esther', 'Naeema'])
    },
    {
        title: 'Conference',
        date: new Date('2024-03-05'),
        location: 'Convention Center',
        attendees: new Set(['John', 'Alice', 'Bob'])
    },
    {
        title: 'Birthday Party',
        date: new Date('2024-03-10'),
        location: '123 Main St',
        attendees: new Set(['Jane', 'Sam', 'Emily'])
    }
];

// Function to add a new attendee to an event
function addAttendeeToEvent(eventTitle, attendeeName) {
    // finding the event with the given title
    let event = events.find(event => event.title === eventTitle);

    // if the event is found, add the attendee to its attendees
    if (event) {
        event.attendees.add(attendeeName);
        console.log(`${attendeeName} has been successfully added to the event "${eventTitle}".`);
    } else {
        console.log(`Event with title "${eventTitle}" not found.`);
    }
}

// Function to delete an event from the array
function deleteEvent(eventTitle) {
    // Find the index of the event with the given title
    let index = events.findIndex(event => event.title === eventTitle);

    // If the event is found, remove it from the array
    if (index !== -1) {
        events.splice(index, 1);
        console.log(`Event "${eventTitle}" has been successfully deleted.`);
    } else {
        console.log(`Event with title "${eventTitle}" not found.`);
    }
}

// Function to format date as "MM/DD/YYYY"
function formatDate(date) {
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// Function to convert events array to JSON string with custom property "formattedDate"
function convertEventsToJSON(eventsArray) {
    // Convert each event to JSON format
    let jsonEvents = eventsArray.map(event => {
        return {
            ...event,
            formattedDate: formatDate(event.date)
        };
    });

    // Convert the array of events to a JSON string
    return JSON.stringify(jsonEvents);
}

// Get the current date
let currentDate = new Date();

// Get the date 7 days from now
let futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 7);

// Filter events happening within the next 7 days
let upcomingEvents = events.filter(event => event.date >= currentDate && event.date <= futureDate);

// Map the necessary details of upcoming events using destructuring assignment
let upcomingEventDetails = upcomingEvents.map(({ title, date, location }) => {
    return { title, date: formatDate(date), location };
});

// Display the upcoming events in a table format
console.log("Events happening in the next 7 days:");
console.table(upcomingEventDetails);

// Example usage of the addAttendeeToEvent function
addAttendeeToEvent('Wedding', 'Grace');

// Convert events array to JSON with formatted date
let jsonString = convertEventsToJSON(events);
console.log(jsonString);

// Delete an event from the array
deleteEvent('Conference');

// Display the updated events array
console.table("Updated events array:");
console.table(events);
