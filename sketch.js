var theif,theifImg;
var police,policeImg;
var background;

//game states      


function preload(){
 theifImg= loadImage("coding project Images/theif running.jpg");
 police= loadImage("coding project Images/police car.jpg");
 background=loadImage("coding project Images/background.jpg");
}


function setup(){
 createCanvas(600,600);

 background=createSprite(500,500,100,100);
 background.addImage(background);
 
 theif=createSprite(150,150,20,20);
 theif.addImage(theifImg);
 theif.scale(0.5);
 
 police=createSprite(200,150,25,25)
 police.addImage(policeImg);
 police.scale(0.7);
 

}

function draw(){
drawSprites();
}


