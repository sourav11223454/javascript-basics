//            *
//         *     *
//      *     *     *
//   *      *     *     *

for(let row=1;row<=5;row++){
    rowcontent=""
    for(let s=5;s>row;s--){
        rowcontent+=" "
    }
    for(let col=1;col<=row;col++){
        rowcontent+= "* "
    }
    console.log(rowcontent);
    
}


//            *
//         *     *
//      *           *
//   *      *     *     *

for(let row=1;row<=4;row++){
    rowcontent=""
        for(let col=1;col<=7;col++){
        rowcontent+= "* "
    }
    if(row==4 ||row+col==5 || col-row==3){
        rowcontent+="*"
    }
    else{
        rowcontent+=" "
    }

    console.log(rowcontent); 
}

