class Bank{
    accountDetails={
        1000:{acno:1000,username:"userone",password:"userone",blance:50000},
        1001:{acno:1001,username:"usertwo",password:"usertwo",blance:5000},
        1002:{acno:1002,username:"userthree",password:"userthree",blance:10000},
        1003:{acno:1003,username:"userfour",password:"userfour",blance:6000},
    }
    // validate account number function
    validateAccount(accno){
        return this.accountDetails.hasOwnProperty(accno)
    }

    // authenticate account function 
    authenticate(accno,pswd){
        if(this.validateAccount(accno)){
             console.log(this.accountDetails[accno].password==pswd?'Authentication Successfull':'Invalid Password');
             
        }else{
            console.log("Invalid Account");
            
        }
    }
   
    // balance enquiry function
    balance(accno){
        if(this.validateAccount(accno)){
            console.log("Available Balance :",this.accountDetails[accno].blance);
        }else{
            console.log("Invalid Account Number");
            
        }
    }
    // function for fund transfer 
    fundTransfer(FromAcc,ToAcc,amount){
        if(this.accountDetails[FromAcc]&& this.accountDetails[ToAcc]){
            if(this.accountDetails[FromAcc].blance>=amount){
                console.log(`before transaction fromacc${FromAcc} and balance${this.accountDetails[FromAcc].blance} and toacc
                    ${ToAcc} balance ${this.accountDetails[ToAcc].blance} `);
                    this.accountDetails[FromAcc].blance-=amount
                    this.accountDetails[ToAcc].blance+=amount
                    console.log('transaction successfull');
                    console.log(`after transaction fromacc${FromAcc} and balance${this.accountDetails[FromAcc].blance} and toacc
                    ${ToAcc} balance ${this.accountDetails[ToAcc].blance} `);
            }else{
                console.log('insufficient bank balance');
                
            }
        }else{
            console.log("invalid account");
            
        }
    }
}
const accntHolder=new Bank
console.log(accntHolder.validateAccount(1002)?"Valid Account":"Invalid Account");
accntHolder.authenticate(1002,"userthree")
accntHolder.balance(1003)
accntHolder.fundTransfer(1000,1001,1000)