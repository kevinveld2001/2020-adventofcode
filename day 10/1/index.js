const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");

var hightes = 0;
var myDevice;


console.log(data);
for(i=0;i<data.length;i++){
    data[i] = parseInt(data[i]);
    if(data[i] > hightes){
        hightes = data[i];
    }

}
myDevice = (hightes +3);
data =data.sort((a, b) => a - b);

var count1 = 0;
var count3 = 0;


data.forEach((value,i)=>{
    if(i!=0){
        if((value-1) === data[i-1]){
            count1++
        }
        if((value-3) === data[i-1]){
            count3++
        }
    }
})


console.log(data);

console.log(count1 +1);
console.log(count3 +1);
console.log((count1 +1)*(count3 +1));