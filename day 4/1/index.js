const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");

var data = rawInput.toString().split("\r\n\r");

var passcount = 0


for (i = 0; i < data.length; i++) {
    data[i] = data[i].replace(/[\r\n]/g, " ");
    
    data[i] = data[i].split(" ")

    var byr = false;
    var iyr = false;
    var eyr = false;
    var hgt = false;
    var hcl = false;
    var ecl = false;
    var pid = false;
    for (a = 0; a < data[i].length; a++) {

        if (data[i][a].includes("byr"))
            byr = true;
        if (data[i][a].includes("iyr"))
            iyr = true;
        if (data[i][a].includes("eyr"))
            eyr = true;
        if (data[i][a].includes("hgt"))
            hgt = true;
        if (data[i][a].includes("hcl"))
            hcl = true;
        if (data[i][a].includes("ecl"))
            ecl = true;
        if (data[i][a].includes("pid"))
            pid = true;

    }
    console.log("-------");
    console.log(byr);
    console.log(iyr);
    console.log(eyr);
    console.log(hgt);
    console.log(ecl);
    console.log(pid);
    if (byr & iyr & eyr & hgt & hcl & ecl & pid) {
        console.log(i + ' is correct')
        passcount++
    }



}
console.log("=" + passcount);