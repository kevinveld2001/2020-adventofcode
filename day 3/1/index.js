const fs = require("fs");
const rawInput = fs.readFileSync(__dirname+"/data.txt");

var data = rawInput.toString().split("\r\n");
var horizon = data[0].length;
var height = data.length;


for(i=0;i<data.length;i++){
    data[i] = data[i].split('');
}



var meheight = 0;
var meright = 0;
var treecount = 0
console.log('horizon '+horizon);
while(meheight < height){
    
    if(meright >= horizon){
        meright -= horizon;
    }
    console.log(data[meheight][meright] +' ['+meheight+'] ['+meright+']');
    if(data[meheight][meright] === "#"){
        treecount++;
    }
    meheight += 1;
    meright += 3;
    
    
}

console.log(treecount);