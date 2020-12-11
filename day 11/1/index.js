const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");

data.forEach((value, i) => {
    data[i] = value.split("");
    data[i].unshift(".");
    data[i].push(".")
});
var arrayadd = [];
for (x = 0; x < data[0].length; x++) {
    arrayadd.push(".");
}
data.push(arrayadd);
data.unshift(arrayadd)

var lastocc = 0
let chance = true
while(chance){
    

    let datacoppy = data.slice();
    let datacoppycheck = []
    data.forEach((valuey, y) => {
        datacoppycheck[y] = [];
        data.forEach((valuex, x) => {
            datacoppycheck[y].push(data[y][x]);
        })
    })
    

    datacoppy.forEach((colum, y) => {
        colum.forEach((row, x) => {

            if (row === "L") {
                if (datacoppy[y - 1][x - 1] != "#" &&
                    datacoppy[y - 1][x] != "#" &&
                    datacoppy[y - 1][x + 1] != "#" &&
                    datacoppy[y][x - 1] != "#" &&
                    datacoppy[y][x + 1] != "#" &&
                    datacoppy[y + 1][x - 1] != "#" &&
                    datacoppy[y + 1][x] != "#" &&
                    datacoppy[y + 1][x + 1] != "#"
                ) {
                    data[y][x] = "O";
                }
            }
            let occupiedcount = 0;
            if (row === "#") {
                if (datacoppy[y - 1][x - 1] === "#" || datacoppy[y - 1][x - 1] === "P") {
                    occupiedcount++;
                }
                if (datacoppy[y - 1][x] === "#" || datacoppy[y - 1][x] === "P") {
                    occupiedcount++;
                }
                if (datacoppy[y - 1][x + 1] === "#" || datacoppy[y - 1][x + 1] === "P") {
                    occupiedcount++;
                }
                if (datacoppy[y][x - 1] === "#" || datacoppy[y][x - 1] === "P") {
                    occupiedcount++;
                }
                if (datacoppy[y][x + 1] === "#" || datacoppy[y][x + 1] === "P") {
                    occupiedcount++;
                }
                if (datacoppy[y + 1][x - 1] === "#" || datacoppy[y + 1][x - 1] === "P") {
                    occupiedcount++;
                }
                if (datacoppy[y + 1][x] === "#" || datacoppy[y + 1][x] === "P") {
                    occupiedcount++;
                }
                if (datacoppy[y + 1][x + 1] === "#" || datacoppy[y + 1][x + 1] === "P") {
                    occupiedcount++;
                }
                if (occupiedcount >= 4) {
                    data[y][x] = "P";
                }

            }

        })
    })
    data = datacoppy.slice();
    let equalcheck = true;
    let occupied = 0
  
    data.forEach((valuey, y) => {
        valuey.forEach((valuex, x) => {


            data[y][x] = data[y][x].replace("O", "#");
            data[y][x] = data[y][x].replace("P", "L");

            if(data[y][x] !== datacoppycheck[y][x]){
                equalcheck = false;
            }
            if(data[y][x] === "#"){
                occupied++
            }


        })
    })

    
     
    console.log(occupied);
    if(lastocc === occupied){
        chance = false;
        console.log("=====>"+occupied);
    }
    lastocc = occupied
    
}


//2136 is too low