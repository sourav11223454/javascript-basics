// [id,name,price,stock]
product=[
    [1,'hide & seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]
// display all product name
console.log("-----PRODUCT-NAME--------");
product.forEach(d=>console.log(d[1]))

// display products whose price<50
console.log("-----PRODUCT PRICE>50--------");
// product.forEach(d=>d[2]>50 && console.log(d[1],d[2]))
product.filter(p=>p[2]>50).forEach(p=>console.log(p[1],p[2]))


// print price of oreo
console.log("-----OREO PRICE--------");
console.log(product.find(d=>d[1]=='oreo')[2]);

// print costly product name
console.log("-----COSTLY-PRODUCT--------");
console.log(product.reduce((a,b)=>a[2]>b[2]?a[1]:b[1]));

// display out of stock product
console.log("-----OUT_OF_STOCK------");
console.log(product.find(d=>d[3]==0)[1]);

// display products based on stock in descending order
console.log("-----DESCENDING_ORDER------");
product.sort((a,b)=>b[3]-a[3]).forEach(d=>console.log(d[1],d[3]))

// display product having maximum available stock
console.log("-----MAX-STOCK------");
console.log(product.reduce((a,b)=>a[3]>b[3]?a:b)[1]);

// is there is any product can be purchased by rs:50
console.log("-----PRODUCT:RS-50------");
console.log(product.some(d=>d[2]<=50)?'YES':'NO');

// is there is any product in the range of 10 to 30
console.log("-----PRODUCT btw 10 to 30------");
console.log(product.some(d=>d[2]>10 && d[2]<30)?'YES':'NO');

// display all products in the range of 10-30
console.log("-----PRODUCT btw 10 to 30------");
product.filter(d=>d[2]>10 && d[2]<30).forEach(d=>console.log(d[1],d[2]));
