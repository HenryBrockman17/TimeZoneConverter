function stringTimeToFloat(time) {
    return parseFloat(time.substring(0, 2)) + parseFloat(time.substring(3, 5));
}

function stringToStringTime24(str) {
    var flag = str.substring(str.length() - 2) === "PM"
    var hour = parseInt(str.substring(0, 2));
    if (flag) { 
        hour += 12;
    }
    var minute = str.substring(3, 5);
    var time = "";
    if (hour < 10) {
        time += "0";
    }
    time += hour;
    time += ":";
    if (minute < 10) {
        time += "0";
    }
    time += minute;
    return time;
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


function inverseChangeTimeZone(time, timeZone) {
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
    var newTime = oldTime - timeZoneDict[timeZone]; 
    if (newTime < 0) {
        newTime += 24;
    }
    if (newTime > 24) {
        newTime -= 24;
    }
    return floatToStringTime(newTime);
}

function getTimeZones(time, timeZone) {
    var timeZoneDict = {
        "Honolulu": 3, 
        "Fiji": -19,
        "Australia": -17,
        "New Caledonia": -18,
        "Vanuatu": -18,
        "Honiara": -19,
        "Papua New Guinea": -17
    }
    
    var all_times = ""
    $.each(timeZoneDict, function(key, value) {
        var pst_time = changeTimeZone(stringToStringTime24(time), timeZone);
        all_times += inverseChangeTimeZone(stringToStringTime24(pst_time), key) + "\n";
    });
    return all_times;
}
