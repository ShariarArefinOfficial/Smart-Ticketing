console.log('connected');

//HIdden a DIv
function hiddenDIv(ElementID){
    const element=document.getElementById(ElementID);
    element.classList.add('hidden');
}


//change color
function changeColorById(elementID){
    const tergatedElement=document.getElementById(elementID);
    tergatedElement.classList.add('seat-selection-button');
}


//Append Value
function appendElementByID(ElementID,valuePress){
    const showElementFIeld=document.getElementById(ElementID);
    const appendName=document.createElement('p');
    appendName.innerText=valuePress;
        showElementFIeld.appendChild(appendName);
}
//Inclreament Value
function showTotalById(ElementID,valuePress){
    const getElement=document.getElementById(ElementID);
    getElement.innerText=valuePress;
}
//decreament Value
function showDecreaseById(ElementID,valuePress){
    const getElement=document.getElementById(ElementID);
    getElement.innerText=valuePress;
}

//coupon Code
function showGrandById(ElementID,valuePress){
    const getElement=document.getElementById(ElementID);
    getElement.innerText=valuePress;
}

function calculateGrandTotalById(ElementID,valuePress){

}





//Set Disable
function setDisable(elementID){
    const element=document.getElementById(elementID);
    element.setAttribute("disabled",true);  
}

//Remove Disable
function removeDisable(elementID){
    const element=document.getElementById(elementID);
    element.removeAttribute("disabled");  
}

//Cuppon apply
function couponApply(){
   // console.log("clicked");
    const coupon1='NEW15';//15% OFF
    const coupon2='Couple 20';//20% OFF
    const desiredCouponId=document.getElementById('coupon');
    const coupon=desiredCouponId.value;
    if(coupon===coupon1){
        console.log('15% discount');
        let discount = 15/100;
        let totalCost=2200;
        let grandTotal=totalCost*discount;
        totalCost=totalCost-grandTotal;
        showGrandById('grandTotal',totalCost);
        hiddenDIv('coupon-div'); 
        let discountSection =document.getElementById('displayDiscount');
        discountSection.classList.remove('hidden');
        let discountValue=document.getElementById('discountVal');
        discountValue.innerText= grandTotal;             

        //return discount;

    }
    else if(coupon===coupon2){
        console.log('20% discount');
       let discount = 20/100;
       let totalCost=2200;
       let grandTotal=totalCost*discount;
       totalCost=totalCost-grandTotal;
       showGrandById('grandTotal',totalCost);
       hiddenDIv('coupon-div');
       let discountSection =document.getElementById('displayDiscount');
        discountSection.classList.remove('hidden');
        let discountValue=document.getElementById('discountVal');
        discountValue.innerText= grandTotal;  
    }
    else{
        let discount = 0;
        let totalCost=2200;
        let grandTotal=totalCost*discount;
        totalCost=totalCost-grandTotal;
        showGrandById('grandTotal',totalCost);
        //setDisable('apply');
        alert("Enter a Valid Coupon");
        //return 0;
    }

}


