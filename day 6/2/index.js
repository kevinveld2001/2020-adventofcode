const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");

var data = rawInput.toString().split("\r\n\r");

var groupcounts = []

for (i = 0; i < data.length; i++) {
    data[i] = data[i].replace(/\n/g, " ");
    data[i] = data[i].replace(/\r/g, "");

    data[i] =data[i].split(" ");
    for(a=0;a<data[i].length;a++){
        if(data[i][a] === ""){
            data[i].shift();
        }
    }

    var groupcount = 0;
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(check => {
        
        var answercheck = true;
        for (a = 0; a < data[i].length; a++) {

            
            if (!data[i][a].includes(check)) {
                answercheck= false;
            }
        }
        
        
        if(answercheck){
            groupcount++;
        }
    });
        console.log(groupcount)
        groupcounts.push(groupcount);
    
    

}

var end = 0;

groupcounts.forEach(num => {
    end += num
})
console.log("----")
console.log(end);
