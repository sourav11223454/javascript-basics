class parent{
    showmodel(){
        console.log("duke");
    }
}
class child extends parent{

}
const obj=new child()
obj.showmodel()

const baleno={
    model:"hatch-back",
    price:'13 L',
    manufacturer:'toyota'
}
const glanza={
    price:'14 L',
    manufacturer:'toyota'
}
console.log(`manufacturer: ${glanza.manufacturer}`);
glanza.__proto__=baleno
console.log(`mode: ${glanza.model}`);
