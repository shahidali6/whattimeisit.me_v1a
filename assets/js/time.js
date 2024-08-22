// script.js
const timeZonesAll = Intl.supportedValuesOf('timeZone');

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('currentDateTime').textContent = dateTimeString;
}

function getCurrentTimeZone() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('currentTimeZone').textContent = timeZone;
}

function updateCountryTimes() {
       const timeZones = {
        NewYork: 'America/New_York',
        London: 'Europe/London',
        Tokyo: 'Asia/Tokyo',
        Sydney: 'Australia/Sydney',
        Paris: 'Europe/Paris',
        Moscow: 'Europe/Moscow',
        Dubai: 'Asia/Dubai',
        Beijing: 'Asia/Shanghai'
    };

    for (const [city, timeZone] of Object.entries(timeZones)) {
        const now = new Date();
        const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
        document.getElementById(`time${city}`).textContent = timeString;
    }
}

function updateAsiaZoneTime() {
    
    const tableBody = document.getElementById('tableAsia');
    timeZonesAll.forEach(timeZone => {
        const row = document.createElement('tr');

        const timeZoneCell = document.createElement('td');
        timeZoneCell.textContent = timeZone;
        row.appendChild(timeZoneCell);

        const timeCell = document.createElement('td');
        timeCell.id = `time${timeZone.replace(/\//g, '_')}`; // Replace '/' with '_' for valid HTML id
        row.appendChild(timeCell);

        tableBody.appendChild(row);
    });
}

// Call the function to update the date and time immediately
updateDateTime();
getCurrentTimeZone();
updateCountryTimes();
updateAsiaZoneTime();

// Optionally, update the date and time every second
setInterval(updateDateTime, 1000);
setInterval(updateCountryTimes, 1000);