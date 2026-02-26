// Function to handle checking age
function checkAge() {
    let age = parseInt(document.getElementById("ageInput").value);
    let result = document.getElementById("result");
    if(age<=0){

        result.textContent = "Please enter a valid age.";
    }
    else if (age < 18) {
        result.textContent = "You are a minor.";
    }
    else {
        result.textContent = "You are an adult.";
    }
}
// Function to handle depositing money
let balance = 400000; // Initial balance
function depositMoney() {
    let depositAmount = parseInt(document.getElementById("depositInput").value);
    let bankResult = document.getElementById("bankResult");
    if(depositAmount <= 0) {
        bankResult.textContent = "Please enter a valid deposit amount.";
    } 
    else {
        balance += depositAmount; // Update balance
        bankResult.textContent = `You have successfully deposited ${depositAmount}. Your new balance is ${balance}.`;
    }
}

// Function to handle withdrawing money
function withdrawMoney() {
    let withdrawAmount = parseInt(document.getElementById("withdrawInput").value);
    let bankResult = document.getElementById("bankResult");
    if(withdrawAmount <= 0) {
        bankResult.textContent = "Please enter a valid withdrawal amount.";
    }
    else if (withdrawAmount > balance) {
        bankResult.textContent = `Insufficient funds. Your current balance is ${balance}.`;
    }       
    else {
        balance -=withdrawAmount; // Update balance
        bankResult.textContent = `You have successfully withdrawn ${withdrawAmount}. Your new balance is ${balance}.`;
    }
}