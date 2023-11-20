document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = './index.html';
});

document.getElementById('deposit-btn').addEventListener('click', function(){
    // Deposit Area
    const depositFuild = document.getElementById('deposit-fuild');
    const depositFuildString = depositFuild.value;
    const depositFuildValue = parseFloat(depositFuildString);
    depositFuild.value = '';

    if(isNaN(depositFuildString)){
        alert('Only Number Type')
        return;
    }
    
    const depositTotal = document.getElementById('deposit-total');
    const  depositTotalString = depositTotal.innerText;
    const depositTotalValue = parseFloat(depositTotalString);
    
    depositTotal.innerText = depositTotalValue + depositFuildValue;

    // Balance Total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalValue= parseFloat(balanceTotalString);

    balanceTotal.innerText = balanceTotalValue + depositFuildValue;
});

    // Withdraw Area

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawFuild = document.getElementById('withdraw-fuild');
    const withdrawFuildString = withdrawFuild.value;
    const withdrawFuildValue = parseFloat(withdrawFuildString);

    withdrawFuild.value = '';

    if(isNaN(withdrawFuildString)){
        alert('Only Number Type');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const withdrawTotalValue = parseFloat(withdrawTotalString);



    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalValue= parseFloat(balanceTotalString);

    if(withdrawFuildValue > balanceTotalValue){
        alert("You Don't Have Enough Money")
        return;
    }

    withdrawTotal.innerText = withdrawTotalValue + withdrawFuildValue;

    balanceTotal.innerText = balanceTotalValue - withdrawFuildValue;
})