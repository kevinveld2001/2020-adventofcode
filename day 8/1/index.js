const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");
var accumulator =0;

var usedindexes = []

for(i=0;i<data.length;){
    console.log(data[i] + " - acc is:"+ accumulator);
    
    if(usedindexes.includes(i)){
        process.exit();
    }else{
        usedindexes.push(i);
    }
    
    


    if(data[i].includes("acc")){
        accumulator += parseInt( data[i].split(" ")[1].replace("+",""));
    }

    if(data[i].includes("jmp")){
       i += parseInt( data[i].split(" ")[1].replace("+",""));
    }else{
        i++;
    }

}


console.log(data);