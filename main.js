function changeTimeZone(time, timeZone) {
    var oldTime = stringTimeToFloat(time);
    var timeZoneDict = {
        "Honolulu": 3, 
        "Fiji": -19,
        "Australia": -17,
        "New Caledonia": -18,
        "Vanuatu": -18,
        "Honiara": -19,
        "Papua New Guinea": -17
    }
    var newTime = oldTime + timeZoneDict[timeZone]; 
    if (newTime < 0) {
        newTime += 24;
    }
    if (newTime > 24) {
        newTime -= 24;
    }
    return floatToStringTime(newTime);
}

function stringTimeToFloat(time) {
    return parseFloat(time.substring(0, 2)) + parseFloat(time.substring(3, 5));
}

function floatToStringTime(flo) {
    var flag = false;
    var hour = parseInt(flo);
    if (hour >= 13) {
        hour %= 12;
        flag = true;
    }
    var minute = parseInt((flo - parseInt(flo))*60);
    var time = ""
    if (hour < 10) {
        time += "0";
    }
    time += hour.toString();
    time += ":";
    if (minute < 10) {
        time += "0";
    }
    time += minute;
    if (flag) {
        time += " PM";
    } else {
        time += " AM";
    }
    return time;
}
