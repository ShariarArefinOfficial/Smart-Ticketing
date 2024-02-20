console.log('connected');

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






