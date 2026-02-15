// const globalData ="GlobalData"
// function parent(){
//     var parentData="parentData"
//     console.log(`inside parent function global data=${globalData} parentData=${parentData}`);
    
//     function child(){
//         var childData="childData"
//         console.log(`inside parent function global data=${globalData} childData=${childData} and parentData=${parentData}`);
        
//     }
//     child()
// }
// parent()
// ---OR-----
const globalData ="GlobalData"
function parent(){
    var parentData="parentData"
    console.log(`inside parent function global data=${globalData} parentData=${parentData}`);
    
    return function child(){
        var childData="childData"
        console.log(`inside parent function global data=${globalData} childData=${childData} and parentData=${parentData}`);
        
    }

}
nested=parent()
nested()


function printNum(num){
    console.log(num);
    num--
    if(num>0){
        printNum(num)
    }
    
}
printNum(10)
