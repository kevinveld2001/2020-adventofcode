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
        ["byr","iyr","eyr","hgt","hcl","ecl","pid"].forEach(check=>{
            if(data[i][a].includes(check))
                eval(check +"= true");
        })
        

    }
    
    if (byr & iyr & eyr & hgt & hcl & ecl & pid) {
        console.log(i + ' is correct')
        passcount++
    }



}
console.log("=" + passcount);