const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");

console.log(data);
var x = 0,
    y = 0,
    dir = 1

data.forEach((value, i) => {

    switch (value[0]) {
        case "N":
            x += parseInt(value.substring(1));

            break;
        case "S":
            x -= parseInt(value.substring(1));

            break;
        case "E":
            y += parseInt(value.substring(1));

            break;
        case "W":
            y -= parseInt(value.substring(1));

            break;
        case "L":
            for (c = 0; c < (parseInt(value.substring(1)) / 90); c++) {
                dir--;
                if (dir < 0) {
                    dir = 3;
                }
            }


            break;
        case "R":
            for (c = 0; c < (parseInt(value.substring(1)) / 90); c++) {
                dir++;
                if (dir > 3) {
                    dir = 0;
                }
            }

            break;
        case "F":

            forward(parseInt(value.substring(1)));
            break;
    }
    console.log("x: " + x + " y: " + y);
})


function forward(amount) {

    switch (dir) {
        case 0:
            x += amount;
            break;
        case 1:
            y += amount;
            break;
        case 2:
            x -= amount;
            break;
        case 3:
            y -= amount;
            break;
    }

}