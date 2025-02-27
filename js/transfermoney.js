document.getElementById('transfer-money-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const account = document.getElementById("transfer-account-number").value;
    const transferPin = getInputValueByID("transfer-pin");
    const amount = getInputValueByID("transfer-amount");
    const mainAmount =getInnerTextByID("balance");
    

    
    
    if(account.length === 11){
        
        if( transferPin === 1234){
            const sum = mainAmount - amount;
            setInnerTextByIDandValue("balance",sum);
            
            const container = document.getElementById("transection-container");
            const div =document.createElement("div");
            div.classList.add("bg-yellow-300")
            div.innerHTML = `
             <h1 class="text-3xl text-red-500 font-bold">Transferd Money</h1>
             <h3> ${amount}taka</h3>
             <p>from ${mainAmount}</p>
             <p>current balance is : ${sum}taka</p>
            
            
            `
            container.appendChild(div);



        }
        else{
            console.log('pin thik nai');
        }
    }
    else{
        console.log('account thik nai');
    }
})