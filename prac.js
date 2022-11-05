var rndNo = Math.floor(Math.random() * 6) + 1;//no between 1-6

var rndImg="dice"+rndNo+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",rndImg);

var rndNo2 = Math.floor(Math.random() * 6) + 1;

var rndImg2="dice"+rndNo2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",rndImg2);

if(rndNo>rndNo2){
    document.querySelector("h1").innerHTML="Player 1 wins 🥳🎉";
}

else if(rndNo<rndNo2){
    document.querySelector("h1").innerHTML="Player 2 wins 🥳🎉";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}






