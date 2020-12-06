//Nothing Displaying

var dog, dogHappy
var database
var foodS, foodStock

function preload()
{
	dog1 = loadImage("./images/dogImg.png");
  dogHappy = loadImage("./images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(245,245,10,10);
  dog.addImage(dog1,dogImg.png);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);  
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  
  textSize(20)
  fill();
  stroke()
  text("Note: Press UP_ARROW To Feed the Dog Milk",200,100)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}