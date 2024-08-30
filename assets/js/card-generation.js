function removeAllChildsOfElement() {
  let div = document.getElementById("card-row");

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function createCard(timeZone, index) {
  // Split time zone into region and city
  const region = timeZone.substring(0, timeZone.indexOf("/"));
  const city = timeZone
    .substring(timeZone.indexOf("/") + 1, timeZone.length)
    .replace(/\//g, "--")
    .replace(/_/g, "-");

  // Clone the card element
  const newCard = cardTemplate.cloneNode(true);
  newCard.id = ""; // Clear the id attribute to avoid duplicates
  newCard.querySelector(".counter").textContent=++index;
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
  newCard
  .querySelector(".time-zone-city-link")
  .setAttribute("href", "/city/" + city + ".html");
  newCard.querySelector(".time-zone-region").textContent = region;
  newCard
    .querySelector(".time-zone-region")
    .setAttribute("href", "/region/" + region + ".html");
  newCard.querySelector(".current-time").textContent = timeString;
  newCard
    .querySelector(".flag")
    .setAttribute("src", "/flags/32/" + CityToCountryCode[city] + ".png");
  newCard
    .querySelector(".flag-link")
    .setAttribute("href", "/country/" + CityToCountryName[city] + ".html");

  return newCard;
}

function createAllTimeZoneCards() {
  removeAllChildsOfElement();
  //const cardRow = document.getElementById("card-row");

  timeZonesAll.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createAsiaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAsia.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createEuropeTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesEurope.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createAfricaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAfrica.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createAmericaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAmerica.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createAntarcticaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAntarctica.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createArcticTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesArctic.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createAtlanticTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAtlantic.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createAustraliaTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesAustralia.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createIndianTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesIndian.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

function createPacificTimeZoneCards() {
  removeAllChildsOfElement();

  timeZonesPacific.forEach((timeZone, index) => {
    const newCard = createCard(timeZone, index);
    cardRow.appendChild(newCard);
  });
}

//setInterval(createAllTimeZoneCards, 1000);
createAsiaTimeZoneCards();
