products=[
    {pid:100,pName:'Apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'Samsung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'Blueberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'Nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'Motorola',band:'4g',price:10000,display:'lcd'},
]
// 1.print product name only
console.log("-----PRODUCT NAMES-----");
products.forEach(item=>console.log(item.pName))
// 2.print all mobile details whose display is lcd
console.log("-----MOBILE-DETAILS------");
console.log(products.filter(item=>item.display=='lcd'));
// 3.print 5g mobile phone name
console.log("-----5G MOBILES-----");
let five=products.filter(item=>item.band=='5g')
five.forEach(item=>console.log(item.pName))
// 4.dispaly mobiles based on price
console.log("-----MOBILE PRICE-----");
let rate=products.sort((a,b)=>a.price-b.price)
rate.forEach(item=>console.log(item.pName,item.price))
// 5.print costly mobile
console.log("-----HIGH-COST-----");
console.log(products.reduce((a,b)=>a.price>b.price?a:b).pName);
// 6.print low cost mobile
console.log("-----LOW-COST-----");
console.log(products.reduce((a,b)=>a.price<b.price?a:b).pName);

