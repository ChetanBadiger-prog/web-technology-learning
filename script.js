let balance = 10000
let correct_pin = 1234

alert("welcome to ATM machine")
alert("please insert the card")

let card = prompt("Enter 1 (card is insertd successfully) or Enter 2(insert the card properly)")

if (card=="1")
{
    alert("card inserted successfully")

    alert("select the langusge: \n1. English\n2. kannada\n3. hindi")
    let lang = prompt("Enter your choice")
    
    if(lang==1){
        alert("Continue with the english")

        let pin = prompt("Enter Pin")
        
        if(parseInt(pin)==correct_pin){
            let choice = prompt("select option:\n1. Balance Enquiry \n2. withdraw amount")
            if (choice=="1"){
                 alert("your balance is "+balance)
            }else if(choice=="2"){
                let amount = prompt("Enter Amount to withdraw")
                amount = parseInt(amount)

                if (amount%100 === 0){
                    
                    if(amount<=balance){
                        balance -= amount
                        alert("collect cash" +amount)
                        alert("Remaining balance is :"+balance)
                    }else{
                        alert("Insufficient balance")
                    }
                }else{
                    alert("amount must be multiple of 100")
                }
            } else{
                alert("thank you please visit again.")
            } 
        }else{
            alert("Enter a valid pin")
        }
    }else{
        alert("continue in only English")
    }   
}else{
    alert("insert the properly")
}