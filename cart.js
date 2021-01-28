function handleAmountQuantityAmount(product, isIncrease) {
    let phoneQuantity = document.getElementById(product + "-quantity").value;
    let phoneQuantityNum = parseInt(phoneQuantity);
    let totalPhoneQuantity = phoneQuantityNum;
    if (isIncrease == true) {
        totalPhoneQuantity = totalPhoneQuantity + 1;
    }
    else {
        if (phoneQuantityNum > 0) {
            totalPhoneQuantity = totalPhoneQuantity - 1;
        }
    }
    let totalPhoneAmount = 0;
    if(product == "product"){
        totalPhoneAmount = totalPhoneQuantity*1219;
    }
    if(product == "case"){
        totalPhoneAmount = totalPhoneQuantity*59;
    }
    document.getElementById(product + "-price").innerText = "$" + totalPhoneAmount;
    document.getElementById(product + "-quantity").value = totalPhoneQuantity;
    totalPrice()
}

function totalPrice(product){
    let phoneCount = productInputValue("product");
    let caseCount = productInputValue("case");

    const totalPrice = phoneCount*1219 + caseCount*59;
    document.getElementById("totalPrice").innerText = totalPrice;
    //get tax html by id
    let tax = parseInt(totalPrice*0.1);
    document.getElementById("tax").innerText = "$" + tax;

    //grand total price 
    let grandTotal = totalPrice + tax;
    document.getElementById("grandAmount").innerText = "$" + grandTotal;
    
}
function productInputValue(product){
    let productInput = document.getElementById(product+"-quantity");
    let productNumber = parseFloat(productInput.value);
    return productNumber;
}




























//handle case count 

/***
 function handleAmountQuantityAmount(isIncrease){
    let phoneQuantity = document.getElementById("quantity").value;
    let phoneQuantityNum = parseInt(phoneQuantity);
    // let  totalPhoneQuantity = phoneQuantityNum -1;
    let totalPhoneQuantity = phoneQuantityNum;
    if(isIncrease == true){
        totalPhoneQuantity = totalPhoneQuantity + 1;
    }
    else{
        if(phoneQuantityNum>0){
            totalPhoneQuantity = totalPhoneQuantity -1;
        }
    }
    let totalPhoneAmount = totalPhoneQuantity*1219;
    document.getElementById("phone-price").innerText = "$" + totalPhoneAmount;
    document.getElementById("quantity").value = totalPhoneQuantity;
}

//handle case count

function handleCaseAmountQuantityAmount(isIncrease){
    let caseQuantity = document.getElementById("case-quantity").value;
    let caseQuantityNum = parseInt(caseQuantity);
    // let  totalPhoneQuantity = phoneQuantityNum -1;
    let totalCaseQuantity = caseQuantityNum;
    if(isIncrease == true){
        totalCaseQuantity = totalCaseQuantity + 1;
    }
    else{
        if(caseQuantityNum>0){
            totalCaseQuantity = totalCaseQuantity -1;
        }
    }
    let totalCaseAmount = totalCaseQuantity*59;
    document.getElementById("case-price").innerText = "$" + totalCaseAmount;
    document.getElementById("case-quantity").value = totalCaseQuantity;
}
 *
 *
 *
 */

// document.getElementById("phone-increase").addEventListener("click", function(){
//     let phoneQuantity = document.getElementById("quantity").value;
//     let phoneQuantityNum = parseInt(phoneQuantity);
//     let totalPhoneQuantity = phoneQuantityNum +1;
//     let totalPhoneAmount = totalPhoneQuantity*1219;
//     document.getElementById("phone-price").innerText = "$" + totalPhoneAmount;
//     document.getElementById("quantity").value = totalPhoneQuantity;

//     //totalamount
//     const totalAmount = document.getElementById("totalAmount").innerText;
//     document.getElementById("totalAmount").innerText = totalPhoneAmount;

// })
// document.getElementById("phone-decrease").addEventListener("click", function(){
//     let phoneQuantity = document.getElementById("quantity").value;
//     let phoneQuantityNum = parseInt(phoneQuantity); 
//     let totalPhoneQuantity = phoneQuantityNum;
//     if(phoneQuantityNum>0){
//         totalPhoneQuantity = phoneQuantityNum -1;
//     }
//     let totalPhoneAmount = totalPhoneQuantity*1219;
//     document.getElementById("phone-price").innerText = "$" + totalPhoneAmount;
//     document.getElementById("quantity").value = totalPhoneQuantity;
// })


