function addNum(...a){
    console.log(`sum =${a.reduce((a,b)=>a+b,0)}`);
}
addNum(13,36,98,67,24)