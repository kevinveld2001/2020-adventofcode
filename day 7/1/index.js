const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");


var objdata = {};



data.forEach(item => {

    item = item.replace(/bags/g, '');
    item = item.replace(/bag/g, '');

    var thing = item.split("contain");
    objdata[thing[0].replace(/ /g, "")] = thing[1].split(",");

    var kleurenarrayobj = [];

    objdata[thing[0].replace(/ /g, "")].forEach(kleurenarray => {

        if (kleurenarray.includes('no other')) {
            objdata[thing[0].replace(/ /g, "")] = [];
            return;
        }

        kleurenarray = kleurenarray.replace(".", "");
        kleurenarray = kleurenarray.replace(/ /g, '');


        var obj = {
            num: kleurenarray[0],
            kleur: kleurenarray.substring(1)
        }
        kleurenarrayobj.push(obj);

    });
    objdata[thing[0].replace(/ /g, "")] = kleurenarrayobj;



})

console.log(objdata);
var countall = 0
for (var item in objdata) {
    // objdata[item].forEach(subitem => {
            var calltest = false;
            rec(item, (data) => {
                
                if(data === 1){
                    calltest = true;
                }
            })
            if(calltest){
                countall++;
            }
        
    // })



};

console.log(countall);


function rec(kleurinput, callback) {

    // if (objdata[kleurinput].length === 0) {

    //     callback(0);
    // }

    objdata[kleurinput].forEach(i => {
        if (i.kleur === "shinygold") {

            callback(1);
        }


        
        rec(i.kleur, callback);


    });


}

//5767 is too high
//956 is too high
//30 is het ook niet
//418 is het ook niet
//479