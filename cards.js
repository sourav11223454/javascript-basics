moves1=["place ace","place king","remove","place queen"]
moves2=["remove","place jack","remove","remove"]

function cardStack(moves){
    let cards=[]
    for(let move of moves){
        if(move.startsWith("place")){
            let card=move.split(" ")[1]
            cards.push(card)
        }else if(move=="remove"){
            if(cards.length>0){
                cards.pop()
            }
        }
    }
    return cards.length>0?cards[cards.length-1]:"no cards left"
}
console.log(cardStack(moves1));