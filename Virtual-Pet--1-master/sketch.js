//Create variables here
var dog, happydog, foodS, foodstock, dogimg, happydogimg
var database
function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(350, 350);
//  food = createSprite(300, 400);
 
 dog.addImage(dogimg);
 dog.scale = 0.2;
database = firebase.database()

foodstock = database.ref("food")
foodstock.on("value", readStock)
}

function draw() {  
background("green");
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happydogimg);
  }

text("press up arrow to feed the dog", 320, 400);
text("food remaining" + foodS, 600,150);

}

function readStock(data){
foodS = data.val()
}

function writeStock(x){

if(x <=0){
 x = 0
 
}
else{
x = x - 1

 }

 database.ref('/').update({
   Food:x
 })

}
