let balance = 10000
let correct_pin = 1234

alert("welcome to ATM machine")
alert("please insert the card")

let card = prompt("Enter 1 (card is insertd successfully) or Enter 2(insert the card properly)")

if (card=="1")
{
    alert("card inserted successfully")
let balance = 10000;
let correct_pin = 1234;

alert("Welcome to ATM");
alert("Please insert the card");

let card = prompt("Enter 1 (card inserted successfully) or 2 (insert properly):");

if (card === "1") {
    alert("Card inserted successfully");

    alert("Select language:\n1. English\n2. Kannada\n3. Telugu");
    let lang = prompt("Enter your choice:");

    if (lang === "1") {
        alert("Continue with English");

        let pin = prompt("Enter your PIN:");

        if (parseInt(pin) === correct_pin) {

            let choice = prompt("Select option:\n1. Balance enquiry\n2. Withdraw");

            if (choice === "1") {
                alert("Your balance is ₹" + balance);

            } else if (choice === "2") {

                let amount = prompt("Enter amount to withdraw:");
                amount = parseInt(amount);

                if (amount % 100 === 0) {

                    if (amount <= balance) {
                        balance -= amount;
                        alert("Collect cash: ₹" + amount);
                        alert("Remaining balance: ₹" + balance);
                    } else {
                        alert("Insufficient balance");
                    }

                } else {
                    alert("Amount must be multiple of 100");
                }

            } else {
                alert("Thank you, please visit again");
            }

        } else {
            alert("Enter valid PIN");
        }

    } else {
        alert("Choose English only");
    }

} else {
    alert("Insert the card properly");
}
    alert
}