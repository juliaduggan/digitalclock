function currentTime() {
    let theTime = new Date();

    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    let AmPm = "AM";

    if(theHour > 12) {
        AmPm = "PM";
        theHour = theHour % 12;
    }

    if(theHour < 10){
        theHour = "0" + theHour
    }
    if(theMinutes < 10){
        theMinutes = "0" + theMinutes
    }
    if(theSeconds < 10){
        theSeconds = "0" + theSeconds
    }

    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minute').innerHTML = theMinutes;
    document.getElementById('seconds').innerHTML = theSeconds;


}
setInterval(() => {
    currentTime();
}, 1000);
