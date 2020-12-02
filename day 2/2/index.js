const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt").toString();

var rawInputArray = rawInput.split("\r\n")


var inputArray = [];
for (i = 0; i < rawInput.length; i++) {
    if (rawInput != undefined) {
        
        try{
        var startnum = rawInputArray[i].split("-")[0];
        var endnum = rawInputArray[i].split(" ")[0].split("-")[1];
        var letter = rawInputArray[i].split(" ")[1].split("")[0];
        var password = rawInputArray[i].split(" ")[2];
        
        inputArray.push({
            startnum: startnum,
            endnum: endnum,
            letter: letter,
            password:password

        });
    }catch(err){
        var errcatch = err;
    }
    }
}

var corectpassword = 0;
for (i = 0; i < inputArray.length; i++) {
    

    
    
        if((inputArray[i].password[inputArray[i].startnum -1] === inputArray[i].letter && inputArray[i].password[inputArray[i].endnum -1] != inputArray[i].letter) || (inputArray[i].password[inputArray[i].endnum -1] === inputArray[i].letter && inputArray[i].password[inputArray[i].startnum -1] != inputArray[i].letter)){
            corectpassword++
        }
        
    
    
}

console.log(corectpassword);