// script.js
const timeZonesAll = Intl.supportedValuesOf("timeZone");

// Filter time zones of Africa only
const timeZonesAfrica = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Africa/")
);

// Filter time zones of America only
const timeZonesAmerica = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("America/")
);

// Filter time zones of Antarctica only
const timeZonesAntarctica = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Antarctica/")
);

// Filter time zones of Arctic only
const timeZonesArctic = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Arctic/")
);

// Filter time zones of Asia only
const timeZonesAsia = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Asia/")
);

// Filter time zones of Atlantic only
const timeZonesAtlantic = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Atlantic/")
);

// Filter time zones of Australia only
const timeZonesAustralia = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Australia/")
);

// Filter time zones of Europe only
const timeZonesEurope = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Europe/")
);

// Filter time zones of Indian only
const timeZonesIndian = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Indian/")
);

// Filter time zones of Pacific only
const timeZonesPacific = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith("Pacific/")
);

function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  document.getElementById("currentDateTime").textContent = dateTimeString;
}

function getCurrentTimeZone() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  document.getElementById("currentTimeZone").textContent = timeZone;
}

function updateCountryTimes() {
  const timeZones = {
    NewYork: "America/New_York",
    London: "Europe/London",
    Tokyo: "Asia/Tokyo",
    Sydney: "Australia/Sydney",
    Paris: "Europe/Paris",
    Moscow: "Europe/Moscow",
    Dubai: "Asia/Dubai",
    Beijing: "Asia/Shanghai",
  };

  for (const [city, timeZone] of Object.entries(timeZones)) {
    const now = new Date();
    const options = {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
    document.getElementById(`time${city}`).textContent = timeString;
  }
}

// function updateAsiaZoneTime() {
//   const tableBody = document.getElementById("tableAsia");
//   timeZonesAsia.forEach((timeZone, index) => {
//     const row = document.createElement("tr");

//     // Serial number cell
//     const serialNumberCell = document.createElement("td");
//     serialNumberCell.textContent = index + 1;
//     row.appendChild(serialNumberCell);

//     // Time zone cell
//     const timeZoneCell = document.createElement("td");
//     timeZoneCell.textContent = timeZone;
//     row.appendChild(timeZoneCell);

//     // Time cell
//     const timeCell = document.createElement("td");
//     timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
//     row.appendChild(timeCell);

//     tableBody.appendChild(row);
//   });
// }

function updateAfricaZoneTime() {
  const tableBody = document.getElementById("tableAfrica");
  timeZonesAfrica.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updateAmericaZoneTime() {
  const tableBody = document.getElementById("tableAmerica");
  timeZonesAmerica.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}
//
function updateAntarcticaZoneTime() {
  const tableBody = document.getElementById("tableAntarctica");
  timeZonesAntarctica.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updateArcticZoneTime() {
  const tableBody = document.getElementById("tableArctic");
  timeZonesArctic.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updateAtlanticZoneTime() {
  const tableBody = document.getElementById("tableAtlantic");
  timeZonesAtlantic.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updateAustraliaZoneTime() {
  const tableBody = document.getElementById("tableAustralia");
  timeZonesAustralia.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updateEuropeZoneTime() {
  const tableBody = document.getElementById("tableEurope");
  timeZonesEurope.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updateIndianZoneTime() {
  const tableBody = document.getElementById("tableIndian");
  timeZonesIndian.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updatePacificZoneTime() {
  const tableBody = document.getElementById("tablePacific");
  timeZonesPacific.forEach((timeZone, index) => {
    const row = document.createElement("tr");

    // Serial number cell
    const serialNumberCell = document.createElement("td");
    serialNumberCell.textContent = index + 1;
    row.appendChild(serialNumberCell);

    // Time zone cell
    const timeZoneCell = document.createElement("td");
    timeZoneCell.textContent = timeZone;
    row.appendChild(timeZoneCell);

    // Time cell
    const timeCell = document.createElement("td");
    timeCell.id = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    row.appendChild(timeCell);

    tableBody.appendChild(row);
  });
}

function updateAllTimeZones() {
  timeZonesAll.forEach((timeZone) => {
    const now = new Date();
    const options = {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
    const timeZoneId = `time${timeZone.replace(/\//g, "_")}`; // Replace '/' with '_' for valid HTML id
    const timeCell = document.getElementById(timeZoneId);
    if (timeCell) {
      timeCell.textContent = timeString;
    } else {
      console.error(`Element with id ${timeZoneId} not found`);
    }
  });
}

// Call the function to update the date and time immediately
updateDateTime();
getCurrentTimeZone();
// updateCountryTimes();
// updateAsiaZoneTime();
// updateAfricaZoneTime();
// updateAmericaZoneTime();
// updateAntarcticaZoneTime();
// updateArcticZoneTime();
// updateAtlanticZoneTime();
// updateAustraliaZoneTime();
// updateEuropeZoneTime();
// updateIndianZoneTime();
// updatePacificZoneTime();

// Optionally, update the date and time every second
setInterval(updateDateTime, 1000);
//setInterval(updateCountryTimes, 1000);
setInterval(updateAllTimeZones, 1000);
