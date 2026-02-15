// w a p to print the following pattern
// #   #   #   #
// #   #   #   #
// #   #   #   #
// #   #   #   #

// for generating rows
for(let row=0;row<4;row++){
    rowcontent=""
    for(let col=0;col<4;col++){
        rowcontent+="# "
    }
    console.log(rowcontent);
}
console.log("-------------------------");



for(let row=1;row<=4;row++){
    rowcontent=""

    for(let col=1;col<=4;col++){
        rowcontent+=row+" "
        
    }
    console.log(rowcontent);   
}
console.log("-------------------------");


for(let row=1;row<=4;row++){
    rowcontent=""

    for(let col=1;col<=4;col++){
        rowcontent+=col+" "
        
    }
    console.log(rowcontent);   
}
console.log("-------------------------");