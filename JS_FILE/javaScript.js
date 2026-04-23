// Function to handle checking age
function checkAge() {
    const input = document.getElementById("ageInput");
    const result = document.getElementById("result");
    let age = input && input.value ? parseInt(input.value, 10) : NaN;

    // reset classes
    result.classList.remove('error', 'success');

    if (!Number.isFinite(age) || age <= 0) {
        result.textContent = "Please enter a valid age.";
        result.classList.add('error');
        return;
    }

    if (age < 18) {
        result.textContent = "You are a minor.";
        result.classList.add('error');
        return;
    }

    result.textContent = "You are an adult.";
    result.classList.add('success');
}
// Function to handle depositing money
let balance = 400000; // Initial balance
function depositMoney() {
    const el = document.getElementById("depositInput");
    const bankResult = document.getElementById("bankResult");
    const depositAmount = el && el.value ? parseInt(el.value, 10) : NaN;

    bankResult.classList.remove('error','success');

    if (!Number.isFinite(depositAmount) || depositAmount <= 0) {
        bankResult.textContent = "Please enter a valid deposit amount.";
        bankResult.classList.add('error');
        return;
    }

    balance += depositAmount; // Update balance
    updateBalanceDisplay();
    bankResult.textContent = `You have successfully deposited ${depositAmount}. Your new balance is ${balance}.`;
    bankResult.classList.add('success');
}

// Function to handle withdrawing money
function withdrawMoney() {
    const el = document.getElementById("withdrawInput");
    const bankResult = document.getElementById("bankResult");
    const withdrawAmount = el && el.value ? parseInt(el.value, 10) : NaN;

    bankResult.classList.remove('error','success');

    if (!Number.isFinite(withdrawAmount) || withdrawAmount <= 0) {
        bankResult.textContent = "Please enter a valid withdrawal amount.";
        bankResult.classList.add('error');
        return;
    }

    if (withdrawAmount > balance) {
        bankResult.textContent = `Insufficient funds. Your current balance is ${balance}.`;
        bankResult.classList.add('error');
        return;
    }

    balance -= withdrawAmount; // Update balance
    updateBalanceDisplay();
    bankResult.textContent = `You have successfully withdrawn ${withdrawAmount}. Your new balance is ${balance}.`;
    bankResult.classList.add('success');
}

function updateBalanceDisplay(){
    const d = document.getElementById('balanceDisplay');
    if(d) d.textContent = balance.toLocaleString();
}

// Initialize UI
document.addEventListener('DOMContentLoaded', function(){
    updateBalanceDisplay();
});