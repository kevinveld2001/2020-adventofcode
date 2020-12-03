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
while(meheight < height){
    
    if(meright >= horizon){
        meright -= horizon;
    }
    
    if(data[meheight][meright] === "#"){
        treecount++;
    }
    meheight += 1;
    meright += 1;
    
    
}
console.log(treecount);
meheight = 0;
meright = 0;
while(meheight < height){
    
    if(meright >= horizon){
        meright -= horizon;
    }
    
    if(data[meheight][meright] === "#"){
        treecount1++;
    }
    meheight += 1;
    meright += 3;
    
    
}
console.log(treecount1);
meheight = 0;
meright = 0;
while(meheight < height){
    
    if(meright >= horizon){
        meright -= horizon;
    }
    
    if(data[meheight][meright] === "#"){
        treecount2++;
    }
    meheight += 1;
    meright += 5;
    
    
}
console.log(treecount2);
meheight = 0;
meright = 0;
while(meheight < height){
    
    if(meright >= horizon){
        meright -= horizon;
    }
    
    if(data[meheight][meright] === "#"){
        treecount3++;
    }
    meheight += 1;
    meright += 7;
    
    
}
console.log(treecount3);
meheight = 0;
meright = 0;
while(meheight < height){
    
    if(meright >= horizon){
        meright -= horizon;
    }
    
    if(data[meheight][meright] === "#"){
        treecount4++;
    }
    meheight += 2;
    meright += 1;
    
    
}
console.log(treecount4);

console.log("* = "+treecount * treecount1 * treecount2* treecount3 *treecount4)