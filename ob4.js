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
console.log(accounts.filter(d=>d.acno))

// 2.print acount number whose account type is savings

// 3.print balance of account number 1000

// 4.print all gpay transactions

// 5.print all transactions whose amount>5000

// 6.print credit transaction of account 1002

// 7.print total credit amount to the account 1002

// 8.print debit transaction of account 1002

// 9.print total debit amount from the account 1002

//10. print transaction history of 1002

//11.current balance of 1002

//12. print highest balance account details