let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/img_001.jpg'){
        myImage.setAttribute('src','images/img_002.jpg');
    }else{
        myImage.setAttribute('src','images/img_001.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = '吃了没?' + myName;
}


if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '吃了没?' + storedName;
}
myButton.onclick = function(){
    setUserName();
}