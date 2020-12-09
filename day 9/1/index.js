const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");

var numlist5 = [];
for (i = 0; i < 25; i++) {
    numlist5.push(data[i]);
}
console.log(numlist5);

for (i = 25; i < data.length; i++) {
    var valid = false
    for (a = 0; a < numlist5.length; a++) {
        for (x = 0; x < numlist5.length; x++) {


            if ((parseInt(numlist5[a]) + parseInt(numlist5[x])) === parseInt(data[i])) {

                valid = true;
            }

        }
    }
    if (valid) {
        numlist5.push(data[i]);
        numlist5.shift();
    } else {
        console.log(data[i] + " =false");
        process.exit();
    }
    console.log(valid);
}



//het is niet 8