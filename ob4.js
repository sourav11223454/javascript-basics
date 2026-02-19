accounts=[
    {
       acno:1000,ac_type:'savings',balance:45000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1001,ac_type:'current',balance:30000,transaction:[
           {
               to:1000,amount:1000,msg:'grossary',mode:'gpay'
           },
           {
               to:1002,amount:7000,msg:'gift',mode:'phonePay'
           },
           {
               to:1003,amount:10000,msg:'emi',mode:'neft'
           },
       ]
   
    },
    {
       acno:1002,ac_type:'fixed',balance:100000,transaction:[
           {
               to:1000,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1001,amount:2000,msg:'emi',mode:'neft'
           },
           {
               to:1003,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    {
       acno:1003,ac_type:'savings',balance:30000,transaction:[
           {
               to:1001,amount:5000,msg:'ebill',mode:'gpay'
           },
           {
               to:1002,amount:2000,msg:'emi',mode:'n ef'
           },
           {
               to:1000,amount:1000,msg:'recharge',mode:'phonePay'
           },
       ]
   
    },
    
   ]

// 1.print total number of accounts
console.log('----TOTAL-NO.OF-ACC-----');
console.log(accounts.length);

// 2.print acount number whose account type is savings
console.log('----SAVINGS-ACC-----');
let acc=accounts.filter(d=>d.ac_type=='savings')
acc.forEach(d=>console.log(d.acno))

// 3.print balance of account number 1000
console.log('----BALANCE-----');
let bal=accounts.find(d=>d.acno==1000)
console.log(bal.balance);

// 4.print all gpay transactions
console.log('----GPAY-TRANSACTIONS-----');
console.log(accounts.map(c=>c.transaction).flat().filter(d=>d.mode=='gpay'));


// 5.print all transactions whose amount>5000
console.log('----TRANSACTIONS>5K-----');
console.log(accounts.map(c=>c.transaction).flat().filter(d=>d.amount>5000));


// 6.print credit transaction of account 1002
console.log('----CREDIT TRANSACTIONS OF ACC-1002-----');
let credit=accounts.map(d=>d.transaction).flat().filter(d=>d.to==1002)
console.log(credit);


// 7.print total credit amount to the account 1002
console.log('----CREDIT AMT TO 1002-----');
console.log(credit.reduce((sum,b)=>sum+b.amount,0));


// 8.print debit transaction of account 1002
console.log('----DEBIT transaction OF 1002-----');
let debit=accounts.filter(d=>d.acno==1002)
debit.filter(c=>console.log(c.transaction))

// 9.print total debit amount from the account 1002
console.log('----TOTAL DEBIT AMT FROM 1002-----');
let deb=accounts.find(d=>d.acno==1002)
console.log(deb.transaction.reduce((sum,b)=>sum+b.amount,0));

//10. print transaction history of 1002
console.log('---- TRANSACTION HISTORY OF 1002-----');
let his=accounts.find(d=>d.acno==1002);
console.log(his.transaction);

//11.current balance of 1002
console.log('----BALANCE OF 1002-----');
let ac=accounts.filter(d=>d.acno==1002)
ac.forEach(c=>console.log(c.balance))

//12. print highest balance account details
console.log('----HIGHEST-BALANCE ACC----');
console.log(accounts.reduce((a,b)=>a.balance>b.balance?a:b).balance);

