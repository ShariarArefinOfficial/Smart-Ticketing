console.log('connected');

const button=document.querySelectorAll('button');
console.log(button);
let priceTotal=0;
let count=0;
const seatAvailable=document.getElementById('seat-decrease');
let seatDecrease=parseInt(seatAvailable.innerText);

console.log(seatDecrease);
for(let i=0;i<button.length;i++){
    const element=button[i];

    element.addEventListener('click',function(){
        //console.log('clicked');
        const click =element.querySelector("span");
        const value=click.innerText;
        //console.log(value);
        let priceShow=550;

        //One Click After This button will be disable
        const buttonId=click.parentNode.id;
        

        //color change
        changeColorById(buttonId);               
        //Seat field
       appendElementByID('seat-num',value);
        //Class Name
        const className='Economoy';
        appendElementByID('class-name',className);
        //price field
        appendElementByID('price',priceShow);



        //total price
        priceTotal=priceShow+priceTotal;
        showTotalById('priceVal',priceTotal)

       //seat count
       count=count+1;
       showTotalById('seat-count',count)

       //seat availablity      
       seatDecrease=seatDecrease-1;
       showDecreaseById('seat-decrease',seatDecrease);

       const disable=document.getElementById(buttonId);
       disable.setAttribute('disabled',true);

       if(count<=4){

       }
       else if(count>4){
        const allDisable=document.getElementsByClassName("button");
        //console.log(allDisable);
        allDisable.setAttribute('disabled',true);
        alert("No more TIcket");
       }

       




        
    })
}

