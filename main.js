var timeZoneDict = {
    "Honolulu": 3, 
    "Fiji": -19,
    "Australia": -17,
    "New Caledonia": -18,
    "Vanuatu": -18,
    "Honiara": -19,
    "Papua New Guinea": -17
}

changeTimeZone = function(time, timeZone) {
    rightTime = parseFloat(time.substring(0, 2)) + parseFloat(time.substring(3, 5));
}
