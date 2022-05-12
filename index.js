var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageName1 = "";
var imageName2 = "";
function getImage(randomNumber){
    if(randomNumber==1){
        imageName = "images/"+"dice"+randomNumber+".png";
    }else if(randomNumber==2){
        imageName = "images/"+"dice"+randomNumber+".png";
    }else if(randomNumber==3){
        imageName = "images/"+"dice"+randomNumber+".png";
    }else if(randomNumber==4){
        imageName = "images/"+"dice"+randomNumber+".png";
    }else if(randomNumber==5){
        imageName = "images/"+"dice"+randomNumber+".png";
    }else if(randomNumber==6){
        imageName = "images/"+"dice"+randomNumber+".png";
    }
    return imageName;
}

var imageName1 = getImage(randomNumber1);
document.querySelector(".img1").setAttribute("src",imageName1);

var imageName2 = getImage(randomNumber2);
document.querySelector(".img2").setAttribute("src",imageName2);

var message = "";
if(randomNumber2>randomNumber1){
    message ="🚩Player 2 Wins!";
}else if(randomNumber2<randomNumber1){
    message ="Player 1 Wins! 🚩";
}else{
    message = "Draw!"
}
document.querySelector("h1").innerHTML=message;