const fs = require("fs");
const rawInput = fs.readFileSync(__dirname + "/data.txt");


const originaldata = rawInput.toString().split("\r\n");
var data = originaldata
for (x = 0; x < originaldata.length; x++) {

    data = [...originaldata];
    if (data[x].includes("nop")) {
        

            data[x] = "jmp " + data[x].split(" ")[1];
            
        
        var answer = runscript()
 
            console.log(answer)
            

    }

    data = [...originaldata];
    if (data[x].includes("jmp")) {
        
            data[x] = "nop " + data[x].split(" ")[1];
            
        var answer = runscript()

        console.log(answer)
            
        

    }


}



function runscript() {
    var accumulator = 0;

    

    var usedindexes = []

    for (i = 0; i < data.length;) {
        // console.log(data[i] + " - acc is:" + accumulator + " index: "+i);

        if (usedindexes.includes(i)) {

            
                return "failed: "+ accumulator;
            


        } else {
            usedindexes.push(i);
        }




        if (data[i].includes("acc")) {
            accumulator += parseInt(data[i].split(" ")[1].replace("+", ""));
        }

        if (data[i].includes("jmp")) {
            
            i += parseInt(data[i].split(" ")[1].replace("+", "")) ;
        } else {
            i++;
        }

    }
    return "----------------------> "+ accumulator;
}


//1594 is too high