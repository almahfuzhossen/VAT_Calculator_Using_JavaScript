const netPrice = document.getElementById('net-price');
const netRate = document.getElementById('vat-rate');
const incAmount = document.getElementById('inc-amount');
const calcBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');

function VATInclusiveAmount(price, rate){
 let totalAmount = price + (price *(rate / 100));
 return totalAmount.toFixed(2);
}

calcBtn.addEventListener('click', function(){
    if (netPrice.value === "" || isNaN (netPrice.value)){
        //show red border for invalid input
        netPrice.style.border = "1px solid red";
        // received red border after 1.5s
        setTimeout(function(){
            netPrice.style.border = "1px solid transparent";
        }, 1500);
        // clearing wrong input
        netPrice.value = "";
    }

    if (netRate.value === "" || isNaN (netRate.value)){
        //show red border for invalid input
        netRate.style.border = "1px solid red";
        // received red border after 1.5s
        setTimeout(function(){
            netRate.style.border = "1px solid transparent";
        }, 1500);
        // clearing wrong input
        netRate.value = "";
    }
})