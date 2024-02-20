console.log('connected');

const button=document.querySelectorAll('button');
console.log(button);
let priceTotal=0;
let count=0;
const seatAvailable=document.getElementById('seat-decrease');
let seatDecrease=parseInt(seatAvailable.innerText);
let customID;

console.log(seatDecrease);
for(let i=0;i<button.length;i++){
    const element=button[i];

    element.addEventListener('click',function(){
        //console.log('clicked');
        const click =element.querySelector("span");
        
        //console.log(value);
        let priceShow=550;

        //One Click After This button will be disable
        const buttonId=click.parentNode.id;
        customID=buttonId;
        console.log(customID);

       //seat count
       count=count+1;

       

       const disable=document.getElementById(buttonId);
       disable.setAttribute('disabled',true);

       if(count<=4){
               //color change
               changeColorById(customID);               
               //Seat field
               const value=click.innerText;
              appendElementByID('seat-num',value);
               //Class Name
               const className='Economoy';
               appendElementByID('class-name',className);
               //price field
               appendElementByID('price',priceShow);       
               //total price
               priceTotal=priceShow+priceTotal;
               showTotalById('priceVal',priceTotal);
                //seat count
                showTotalById('seat-count',count);
                //seat availablity      
               seatDecrease=seatDecrease-1;
               showDecreaseById('seat-decrease',seatDecrease);

               if(priceTotal<=2200){
                //Grand Total 
               if(priceTotal<2200){
                showGrandById('grandTotal',priceTotal);
                // setDisable('apply');
                // setDisable('coupon-div'); 
               }
               else if(priceTotal===2200){
                showGrandById('grandTotal',priceTotal);               
                removeDisable('apply'); 
               }
              }
               
               
            }
             else if(count>4){
       
            disable.setAttribute('disabled',true);

             return alert("No more TIcket");
        
            }


        //Next Button Part
            const phoneNumberGetId=document.getElementById('phoneNumber');
            const nextButtonGetId=document.getElementById('next');
            console.log(phoneNumberGetId);
            console.log(nextButtonGetId);
            
            

            phoneNumberGetId.addEventListener('input',function(){
                if(phoneNumberGetId.value !== ""){
                    removeDisable('next');
                    nextButtonGetId.addEventListener('click',function(){
                        console.log("button clicked");
                    }) 
    
                }
            })
            

       




        
    })
}

