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
var treecount = 0;
var treecount1 = 0;
var treecount2 = 0;
var treecount3 = 0;
var treecount4 = 0;
console.log('horizon '+horizon);

function calcslope (y,x) {
     meheight = 0;
     meright = 0;

     treecount = 0;
    while(meheight < height){
    
        if(meright >= horizon){
            meright -= horizon;
        }
        
        if(data[meheight][meright] === "#"){
            treecount++;
        }
        meheight += y;
        meright += x;
        
        
    }
    return treecount;
}



console.log("* = "+calcslope(1,1) * calcslope(1,3) * calcslope(1,5)* calcslope(1,7) *calcslope(2,1));