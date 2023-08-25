var randomnNum1= Math.floor(Math.random()*6)+1;
var imageSource="images/dice"+randomnNum1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var randomnNum2=Math.floor(Math.random()*6)+1;
var imageSource2="images/dice"+randomnNum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);
