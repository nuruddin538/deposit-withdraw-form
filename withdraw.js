//1. add event handler with the withdraw button
// 2. get the withdraw amount from the withdraw input field
// 2.5 also make sure to convert the input into a number by using parseFloat
// 3. Get previous withdraw total
// 4. calculate total withdraw amount
// 4.5 set total withdraw amount
// 5 get the previous total
// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString)
    // step-7:
    withdrawField.value = "";

    if (isNaN(newWithDrawAmount)) {
        alert('Please provide a valid number')
        return;
    }

    // step-3:
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithDrawAmount > previousBalanceTotal) {
        alert('Not enough Balance');
        return;
    }
    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawtotalElement.innerText = currentWithdrawTotal;

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})