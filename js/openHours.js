var d = new Date()

if (d.getDay() == 4) { //Thu
    if (d.getHours() >= 9 && d.getHours() < 15) {
        document.getElementById("thuxx").className = "circle green";
        document.getElementById("messageHours").innerHTML = "Yes, we're open!";
    } else {
        document.getElementById("thuxx").className = "circle grey";
        document.getElementById("messageHours").innerHTML = "Sorry, we're closed!";
    }
    document.getElementById("frixx").className = "hide";
    document.getElementById("restxx").className = "hide";
} else if (d.getDay() == 5) { //Fri
    document.getElementById("frixx").className = "circle grey";
    document.getElementById("thuxx").className = "hide";
    document.getElementById("restxx").className = "hide";
    document.getElementById("messageHours").innerHTML = "Sorry, we're closed!";
} else {
    if (d.getHours() >= 9 && d.getHours() < 18) {
        document.getElementById("restxx").className = "circle green";
        document.getElementById("messageHours").innerHTML = "Yes, we're open!";
    } else {
        document.getElementById("restxx").className = "circle grey";
        document.getElementById("messageHours").innerHTML = "Sorry, we're closed!";
    }
    document.getElementById("thuxx").className = "hide";
    document.getElementById("frixx").className = "hide";
}