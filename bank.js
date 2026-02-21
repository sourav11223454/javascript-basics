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
    fundTransfer(FromAcc,ToAcc,password,amount){
        let sender=this.accountDetails[FromAcc]
        let receiver=this.accountDetails[ToAcc]

        if(sender==false){
            console.log("the account is not found");
        }
        if(receiver==false){
            console.log("the receiver's account is not found");
        }
        if(sender.password!==password){
            console.log("password incorrect");
        }
        if(sender.blance>amount){
            console.log("insufficient bank balance");
        }
        sender.blance-=amount
        receiver.blance+=amount

        console.log("transaction successfull");
        console.log("sender balance",sender.blance);
        console.log("receiver balance",receiver.blance);
    }
}
const accntHolder=new Bank
console.log(accntHolder.validateAccount(1002)?"Valid Account":"Invalid Account");
accntHolder.authenticate(1002,"userthree")
accntHolder.balance(1003)
accntHolder.fundTransfer(1000,1001,"userone",1000)