const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");
data[1] = data[1].split(",")
console.log(data);

var lowest = 10000000000000000;
var id;
data[1].forEach((value,i)=>{
    if(value != "x"){
        var busstop =0;
        while(busstop < parseInt(data[0])){

            busstop += parseInt(value);

            if(busstop > parseInt(data[0])){
                console.log("first time bus "+ busstop);
                if(busstop < lowest){
                    lowest = busstop;
                    id = value;
                }
            }
        }

    }
});

console.log(lowest - parseInt(data[0]));
console.log(id);
console.log(id * (lowest - parseInt(data[0])));

//12 is not correct
//13 is not correct