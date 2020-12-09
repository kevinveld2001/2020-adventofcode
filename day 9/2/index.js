const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


var data = rawInput.toString().split("\r\n");

var small;
var big;
for(i=0;i<data.length;i++){
    var count = 0;
    // console.log("--------")
    for(a=i;a<data.length;a++){
        count+= parseInt(data[a])  
        // console.log(count +" - "+ i+" - "+ a)
        if (count >= (41682220 +1)){
            break;
        }
        if(count === 41682220 && (a-i) >=2){
            console.log("jo hier i got it "+ i +" - "+ a);
            small = parseInt(data[i]);
            big = parseInt(data[i]);
            for(x= i; x< a;x++){
                if(parseInt(data[x]) < small){
                    small = parseInt(data[x]);
                }
                if(parseInt(data[x]) > big){
                    big = parseInt(data[x]);
                }
            }
            console.log("small: "+ small);
            console.log("big: "+ big);
            console.log("sum: "+ (small +big));
        }
    }
}





//het is niet 8
//86174416936754 is niet goed
//209928455 is niet
//195164314 is niet goed
//983038797 is niet goed