document.getElementById("cash-out-btn")
.addEventListener('click',function(event){
 
    event.preventDefault();
const accountNumber = document.getElementById("account-number").value;
const pin =getInputValueByID("cash-out-pin");
const amount =getInputValueByID("cash-out-amount");
const mainAmount =getInnerTextByID("balance");

if(amount > mainAmount){
    alert('amount is not available in your account.');
    return;
}
if( accountNumber.length === 11){
    if(pin === 1234){
        const sum = mainAmount - amount;
        setInnerTextByIDandValue("balance",sum);

        const container = document.getElementById("transection-container");
            const p = document.createElement("p");
            p.innerText = `
            Cash out ${amount}taka from ${accountNumber} account.
            
            `
            container.appendChild(p); 



    }else{
        console.log("pin thik nai");
    }
}
else{
    console.log("account number thik nai");
}

})