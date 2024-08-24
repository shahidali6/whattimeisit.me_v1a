function removeAllChildsOfElement() {
  let div = document.getElementById("card-row");

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function createAllTimeZoneCards() {
  const tableBody = document.getElementById("card-row");
  const cardTemplate = document.getElementById("first-card");
  const removeCard = document.getElementById("first-card");
  removeCard.remove();

  timeZonesAll1.forEach((timeZone, index) => {
    // Split time zone into region and city
    const region = timeZone.substring(0, timeZone.indexOf("/"));
    const city = timeZone
      .substring(timeZone.indexOf("/") + 1, timeZone.length)
      .replace(/\//g, "--")
      .replace(/_/g, "-"); // Replace '/' with ' - ' for better display
    //console.log(index + " Region:[" + region+ "] City:[" + city+"]");

    // Clone the card element
    const newCard = cardTemplate.cloneNode(true);
    newCard.id = ""; // Clear the id attribute to avoid duplicates
    newCard.querySelector("#time").id = "time" + city;

    // Update the card content
    const now = new Date();
    const options = {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const timeString = new Intl.DateTimeFormat("en-US", options).format(now);

    // Assuming the card has elements to display the time zone and current time
    newCard.querySelector(".time-zone-city").textContent = city;
    newCard.querySelector(".time-zone-region").textContent = region;
    newCard.querySelector(".current-time").textContent = timeString;
    newCard.querySelector(".current-time").textContent = timeString;

    // Append the cloned card to the table body
    tableBody.appendChild(newCard);
  });
}

function createCard(timeZone) {
  // Split time zone into region and city
  const region = timeZone.substring(0, timeZone.indexOf("/"));
  const city = timeZone
    .substring(timeZone.indexOf("/") + 1, timeZone.length)
    .replace(/\//g, "--")
    .replace(/_/g, "-");

  // Clone the card element
  const newCard = cardTemplate.cloneNode(true);
  newCard.id = ""; // Clear the id attribute to avoid duplicates
  newCard.querySelector("#time").id = "time" + city;

  // Update the card content
  const now = new Date();
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const timeString = new Intl.DateTimeFormat("en-US", options).format(now);

  // Assuming the card has elements to display the time zone and current time
  newCard.querySelector(".time-zone-city").textContent = city;
  newCard.querySelector(".time-zone-region").textContent = region;
  newCard.querySelector(".current-time").textContent = timeString;

  return newCard;
}

function createAllTimeZoneCards() {
  removeAllChildsOfElement();
  //const cardRow = document.getElementById("card-row");

  timeZonesAll.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createAsiaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAsia.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createEuropeTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesEurope.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createAfricaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAfrica.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createAmericaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAmerica.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createAntarcticaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAntarctica.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createArcticTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesArctic.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createAtlanticTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAtlantic.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createAustraliaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAustralia.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createIndianTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesIndian.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

function createPacificTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesPacific.forEach((timeZone) => {
    const newCard = createCard(timeZone);
    cardRow.appendChild(newCard);
  });
}

// function updatePacificZoneTime() {
//     timeZonesAll1.forEach(timeZone => {
//         const now = new Date();
//         const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
//         const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
//         const timeZoneId = `time${timeZone.replace(/\//g, '_')}`; // Replace '/' with '_' for valid HTML id
//         const timeCell = document.getElementById(timeZoneId);
//         if (timeCell) {
//             timeCell.textContent = timeString;
//         } else {
//             console.error(`Element with id ${timeZoneId} not found`);
//         }
//     });
// }

// Call the function to update the date and time immediately
//updatePacificZoneTime();
//createAllTimeZoneCards();

//setInterval(createAllTimeZoneCards, 1000);
createAsiaTimeZoneCards();
