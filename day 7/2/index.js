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






var end = rec("shinygold", (data,lefel) => {
    console.log(" └ ".repeat(lefel) +data.num +" - "+data.kleur);
    
    
},0);
console.log(end);



function rec(kleurinput, callback,lefel) {

    // if (objdata[kleurinput].length === 0) {

    //     callback(0);
    // }
    var allfound = [];
    objdata[kleurinput].forEach(i => {

        callback(i,lefel)
        allfound.push(parseInt( i.num));




        allfound.push(parseInt( i.num) * parseInt(rec(i.kleur, callback,lefel +1)));


    });
    var foundcount = 0;
    allfound.forEach(found=>{
        foundcount += parseInt( found );
    });
    return foundcount;
}