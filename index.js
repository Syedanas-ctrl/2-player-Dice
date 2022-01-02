//left hand side image
let randomNumber1 = Math.floor(Math.random()*(6-1+1))+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

//right hand side image
let randomNumber2 = Math.floor(Math.random()*(6-1+1))+1;
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

//logic
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML='Player 1 Won';
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML='Player 2 Won';
}else{
    document.querySelector("h1").innerHTML='Its a Draw!';    
}