document.getElementById("cash-out").style.display ="none";
document.getElementById("transection-history").style.display="none";
document.getElementById("transfer-money").style.display= "none";
document.getElementById("add-money-box").addEventListener('click',function(){
// document.getElementById("add-money").style.display='block';
// document.getElementById("cash-out").style.display='none'
handleToggle("cash-out","none");
handleToggle("add-money","block");
handleToggle("transection-history","none");
handleToggle("transfer-money", "none");

})

document.getElementById("cash-out-box").addEventListener('click',function(){
    handleToggle("cash-out","block");
    handleToggle("add-money","none");
    handleToggle("transection-history","none");
    handleToggle("transfer-money", "none");
})

document.getElementById("transfer-money-box").addEventListener('click',function(){
    handleToggle("cash-out","none");
    handleToggle("add-money","none");
    handleToggle("transection-history","none");
    handleToggle("transfer-money", "block");
})


