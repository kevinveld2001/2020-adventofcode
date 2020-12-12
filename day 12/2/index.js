const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");

console.log(data);
var x = 0,
    y = 0,
    waypoidx = 10,
    waypoidy = 1,
    dir = 1

data.forEach((value, i) => {

    switch (value[0]) {
        case "N":
            waypoidy += parseInt(value.substring(1));

            break;
        case "S":
            waypoidy -= parseInt(value.substring(1));

            break;
        case "E":
            waypoidx += parseInt(value.substring(1));

            break;
        case "W":
            waypoidx -= parseInt(value.substring(1));

            break;
        case "L":
            for (c = 0; c < (parseInt(value.substring(1)) / 90); c++) {
                var tempwaypointx = waypoidx;
                var tempwaypointy = waypoidy;
                
                waypoidy = tempwaypointx;
                waypoidx = -tempwaypointy;
            }


            break;
        case "R":
            for (c = 0; c < (parseInt(value.substring(1)) / 90); c++) {
                var tempwaypointx = waypoidx;
                var tempwaypointy = waypoidy;
                
                waypoidx = tempwaypointy;
                waypoidy = -tempwaypointx;
            }

            break;
        case "F":
            for (c = 0; c < (parseInt(value.substring(1))); c++) {
                x += waypoidx;
                y += waypoidy;
            }
           
            break;
    }
    console.log("x: " + x + " y: " + y);
    console.log("waypoitx: " + waypoidx + " waypoity: " + waypoidy);
})

