document.getElementById("cash-out-btn")
.addEventListener('click',function(event){
 
    event.preventDefault();
const accountNumber = document.getElementById("account-number").value;
const mainAmount =getInnerTextByID("balance");
const pin =getInputValueByID("cash-out-pin");
const amount =getInputValueByID("cash-out-amount");


if(amount > mainAmount){
    alert('amount is not available in your account.');
    return;
}
if( accountNumber.length === 11){
    if(pin === 1234){
        const sum = mainAmount - amount;
        setInnerTextByIDandValue("balance",sum);

        const container = document.getElementById("transection-container");
            
            const div = document.createElement("div");
            div.classList.add("bg-blue-400")
            div.innerHTML = `
            <h1 class="text-red-500 font-bold text-3xl">Cash out</h1> 
            <h3>${amount}taka</h3> 
            <p>from ${accountNumber} account.</p>
            
            `
            container.appendChild(div); 



    }else{
        console.log("pin thik nai");
    }
}
else{
    console.log("account number thik nai");
}

})