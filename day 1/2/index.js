const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");

var data = rawInput.toString().split("\r\n");

for (i = 0; i < data.length; i++) {
    data[i] = parseInt(data[i]);
}

for (i = 0; i < data.length; i++) {
    for (a = 0; a < data.length; a++) {
        for (x = 0; x < data.length; x++) {
            
            if ((data[i] + data[a]+data[x]) === 2020) {
                console.log("======>  " + data[i] * data[a] * data[x]);
                process.exit()
            }
        }
    }
}