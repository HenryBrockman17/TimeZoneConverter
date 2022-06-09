function changeTimeZone(time, timeZone) {
    var timeZoneDict = {
        "Honolulu": 3, 
        "Fiji": -19,
        "Australia": -17,
        "New Caledonia": -18,
        "Vanuatu": -18,
        "Honiara": -19,
        "Papua New Guinea": -17
    }

    var minutes = time.substring(3, 5);
    var hours = parseInt(time.substring(0, 2))+timeZoneDict[timeZone];
    var newTime = "";

    if (hours<0) {
        hours+=24;
    }
    if (hours>12) {
        hours-=12;
        newTime+=hours+":"+minutes+" PM PST"

    } else {
        newTime=hours+":"+minutes+" AM PST"
    }

    //document.querySelector("#output").innerHTML = newTime;
    alert(newTime);
}