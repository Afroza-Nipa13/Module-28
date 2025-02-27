document.getElementById("add-money-btn")
.addEventListener('click',function(event){
    event.preventDefault();
    const amount = getInputValueByID("amount-input");
    const pin =getInputValueByID("pin");
    const account =document.getElementById("account-number").value;
    const mainAmount = getInnerTextByID("balance");
    const SelectABank= document.getElementById("allbank").value;
    // console.log(SelectABank);
    
    if(amount < 0){
        alert('There is no amount given in the box');
        return;
    }

    if(account.length === 11){
        if(pin === 1234){
            const sum = mainAmount + amount;
            // document.getElementById("balance").innerText =sum;
            setInnerTextByIDandValue("balance", sum);

            const container = document.getElementById("transection-container");
            const div = document.createElement("div");
            div.classList.add("bg-blue-400")
            div.innerHTML = `
           <h1 class="text-yellow-300 font-bold">Added Money</h1>
            <h3>${amount}</h3>
            <p>account number:${account} </p>
            
            `
            container.appendChild(div); 





        }else{
            
        }

    }else{
        console.log("account thik nai.")
    }
    
});


































// document.getElementById("cash-out").style.display ="none";
// document.getElementById("add-money-box").addEventListener('click',function(){
//     document.getElementById("cash-out").style.display ="none";
//     document.getElementById("add-money").style.display ="block";
// })

// document.getElementById("cash-out-box").addEventListener('click',function(){
//     document.getElementById("cash-out").style.display ="block";
//     document.getElementById("add-money").style.display ="none";
// })

// document.getElementById("add-money-btn").addEventListener('click',function(event){
//     event.preventDefault();
//     const accountNumber = document.getElementById("account-number").value;
//     const amount =document.getElementById("amount-input").value;
//     const convertedAmount = parseFloat(amount);
//     const pinNumber = document.getElementById("pin").value;
//     const convertedPin = parseInt(pinNumber);
//     const mainAmount =document.getElementById("balance").innerText;
//     const convertedMainAmount = parseFloat(mainAmount);
    
//     if(accountNumber.length === 11){
//         if(convertedPin === 1234){
//             const sum = convertedMainAmount + convertedAmount;
//             document.getElementById("balance").innerText = sum;
            
//         }

//     }else{
//         alert("account thik nai");
//     }

// })