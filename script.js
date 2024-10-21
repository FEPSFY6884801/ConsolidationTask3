var button = document.getElementById("button");
var randomNumberPara= document.getElementById("randomNumber");
function displayRandomNumber(){
    const randomNumber = Math.floor(Math.random()*10)+1;
    randomNumberPara.innerText=randomNumber;
}
button.addEventListener("click", displayRandomNumber);