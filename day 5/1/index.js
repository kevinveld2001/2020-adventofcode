const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");

var data = rawInput.toString().split("\r\n");
var heighestID = 0;
data.forEach(ticked => {
    var seat = calcChars(ticked)
    
    if (seat.seatID > heighestID)
        heighestID = seat.seatID;


})
console.log(heighestID);
function calcChars(chars) {
    var cords = {
        rowheigh: 127,
        rowlow: 0,
        colLeft: 0,
        colRight: 7

    }


    for (i = 0; i < chars.length; i++) {
        if (chars[i] === "F") {
            cords.rowheigh -= Math.round((cords.rowheigh - cords.rowlow) / 2);
        }
        if (chars[i] === "B") {
            cords.rowlow += Math.round((cords.rowheigh - cords.rowlow) / 2);
        }
        if (chars[i] === "L") {
            cords.colRight -= Math.round((cords.colRight - cords.colLeft) / 2);
        }
        if (chars[i] === "R") {
            cords.colLeft += Math.round((cords.colRight - cords.colLeft) / 2);
        }

        if (cords.rowheigh === cords.rowlow && cords.colLeft === cords.colRight) {
            cords.seatID = (cords.rowheigh * 8) + cords.colLeft;

            return cords;
        }



    }

}