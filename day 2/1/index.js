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
    

    var lettercount = 0;
    for(l=0;l<inputArray[i].password.length;l++){
        
        if(inputArray[i].password[l] === inputArray[i].letter){
            lettercount++
        }
    }
    

    
    
    if(lettercount >= parseInt( inputArray[i].startnum )&& lettercount <= parseInt( inputArray[i].endnum)){
        
        corectpassword++
    }
}

console.log(corectpassword);