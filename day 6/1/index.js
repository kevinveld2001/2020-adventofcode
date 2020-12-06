const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");

var data = rawInput.toString().split("\r\n\r");

var groupcounts = [] 

for(i=0;i<data.length;i++){
    data[i] = data[i].replace(/\n/g," ");
    data[i] = data[i].replace(/\r/g,"")

    var groupcount = 0;
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(check=>{
        if(data[i].includes(check)){
            groupcount++;
        }

    });
    
    groupcounts.push(groupcount)

}

var end = 0;

groupcounts.forEach(num=>{
    end += num
})

console.log(end);