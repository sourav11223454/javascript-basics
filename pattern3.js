// w a p to print the following pattern
// # 
// #   # 
// #   #   #  
// #   #   #   #
// #   #   #   #  #

for(let row=1;row<=5;row++){
    rowcontent=""
    for(let col=1;col<=row;col++){
        rowcontent+="#"
    }
    console.log(rowcontent);
    
}
console.log("-------------------------");



for(let row=1;row<=5;row++){
    rowcontent=""
    for(let col=1;col<=row;col++){
        rowcontent+=row+" "
    }
    console.log(rowcontent);
    
}
console.log("-------------------------");



for(let row=1;row<=5;row++){
    rowcontent=""
    for(let col=1;col<=row;col++){
        rowcontent+=col+" "
    }
    console.log(rowcontent);
    
}
console.log("-------------------------");
