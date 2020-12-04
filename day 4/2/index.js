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

        if (data[i][a].includes("byr")) {

            if (data[i][a].split(":")[1] >= 1920 && data[i][a].split(":")[1] <= 2002) {
                byr = true;
            }
        }

        if (data[i][a].includes("iyr")) {

            if (data[i][a].split(":")[1] >= 2010 && data[i][a].split(":")[1] <= 2020) {
                iyr = true;
            }
        }

        if (data[i][a].includes("eyr")) {

            if (data[i][a].split(":")[1] >= 2020 && data[i][a].split(":")[1] <= 2030) {
                eyr = true;
            }
        }

        if (data[i][a].includes("hgt")) {

            if (data[i][a].split(":")[1].includes("cm") && data[i][a].split(":")[1].replace("cm", "") >= 150 && data[i][a].split(":")[1].replace("cm", "") <= 193) {
                hgt = true;
            }
            if (data[i][a].split(":")[1].includes("in") && data[i][a].split(":")[1].replace("in", "") >= 59 && data[i][a].split(":")[1].replace("in", "") <= 76) {
                hgt = true;
            }
        }

        if (data[i][a].includes("hcl")) {
            if (data[i][a].split(":")[1].includes("#")) {
                var num = data[i][a].split(":")[1].replace("#", "");


                if (num.length == 6 && !isNaN(Number('0x' + num))) {
                    hcl = true;
                }
            }

        }

        if (data[i][a].includes("ecl")) {
            ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].forEach(collor => {
                if (data[i][a].split(":")[1].includes(collor)) {
                    ecl = true;
                }
            })

        }

        if (data[i][a].includes("pid")) {

            if (typeof parseInt(data[i][a].split(":")[1]) == 'number') {
                console.log("number: "+data[i][a].split(":")[1].length)
                if(data[i][a].split(":")[1].length === 9){
                    pid = true;
                }
               
            }


        }


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