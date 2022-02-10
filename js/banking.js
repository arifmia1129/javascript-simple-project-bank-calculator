document.getElementById("deposit-button").addEventListener("click", function () {
    const depositField = document.getElementById("deposit-amount");
    const userDeposit = depositField.value;

    const currentDeposit = document.getElementById("totalDeposit");
    currentDeposit.innerText = parseFloat(currentDeposit.innerText) + parseFloat(userDeposit);
    depositField.value = "";

    const currentBalance = document.getElementById("currentBalance");
    currentBalance.innerText = parseFloat(currentBalance.innerText) + parseFloat(userDeposit);

});

document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawField = document.getElementById("withdraw-amount");
    const userWithdraw = withdrawField.value;

    const currentWithdraw = document.getElementById("totalWithdraw");
    currentWithdraw.innerText = parseFloat(currentWithdraw.innerText) + parseFloat(userWithdraw);
    withdrawField.value = "";

    const currentBalance = document.getElementById("currentBalance");
    currentBalance.innerText = parseFloat(currentBalance.innerText) - parseFloat(userWithdraw);

});
