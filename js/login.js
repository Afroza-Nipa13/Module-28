document.getElementById("login-btn")
.addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber =document.getElementById("nameInput").value;
    const pin = document.getElementById("passwordInput").value;
    const convertedPin = parseInt(pin);
    
    if(accountNumber.length === 11){
        if(convertedPin === 1234){
            window.location.href="main.html";
        }else{
            console.log('pin thik nai')
        }
        
    }
    else{
        console.log('tomar account number thik nai');
    }
})