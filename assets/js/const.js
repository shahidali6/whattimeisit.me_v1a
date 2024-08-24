/**
 * Enum for days of the week.
 * @readonly
 * @enum {string}
 */
const DaysOfWeek = {
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
  SUNDAY: "Sunday",
};

/**
 * Enum for months of the year.
 * @readonly
 * @enum {string}
 */
const MonthsOfYear = {
  JANUARY: "January",
  FEBRUARY: "February",
  MARCH: "March",
  APRIL: "April",
  MAY: "May",
  JUNE: "June",
  JULY: "July",
  AUGUST: "August",
  SEPTEMBER: "September",
  OCTOBER: "October",
  NOVEMBER: "November",
  DECEMBER: "December",
};

/**
 * Enum for regions of the timezones.
 * @readonly
 * @enum {string}
 */
const TimeZoneRegions = {
  AFRICA: "Africa",
  AMERICA: "America",
  ANTARCTICA: "Antarctica",
  ARCTIC: "Arctic",
  ASIA: "Asia",
  ATLANTIC: "Atlantic",
  AUSTRALIA: "Australia",
  EUROPE: "Europe",
  INDIAN: "Indian",
  PACIFIC: "Pacific",
};

// Card template
const cardTemplate = document.getElementById("first-card");

// Card Row
const cardRow = document.getElementById("card-row");

// All time zone details
const timeZonesAll = Intl.supportedValuesOf("timeZone");

// Filter time zones of Africa only
const timeZonesAfrica = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.AFRICA + "/")
);

// Filter time zones of America only
const timeZonesAmerica = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.AMERICA + "/")
);

// Filter time zones of Antarctica only
const timeZonesAntarctica = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.ANTARCTICA + "/")
);

// Filter time zones of Arctic only
const timeZonesArctic = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.ARCTIC + "/")
);

// Filter time zones of Asia only
const timeZonesAsia = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.ASIA + "/")
);

// Filter time zones of Atlantic only
const timeZonesAtlantic = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.ATLANTIC + "/")
);

// Filter time zones of Australia only
const timeZonesAustralia = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.AUSTRALIA + "/")
);

// Filter time zones of Europe only
const timeZonesEurope = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.EUROPE + "/")
);

// Filter time zones of Indian only
const timeZonesIndian = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.INDIAN + "/")
);

// Filter time zones of Pacific only
const timeZonesPacific = timeZonesAll.filter((timeZone) =>
  timeZone.startsWith(TimeZoneRegions.PACIFIC + "/")
);
