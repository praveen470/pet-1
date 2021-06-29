//Create variables here
var dog,happyDog,food,foodStock,dogImage;
var database;

function preload()
{
  happyDog=loadImage("happy dog.png");
dogImage=loadImage("Dog.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  dog = createSprite(250,350,50,50);
  dog.addImage(dogImage);
  dog.scale=0.3;
 
 
}


function draw() {  
background("green")

if(keyDown(UP_ARROW))
{
  writeStock(food);
  dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
  textSize(13);
  fill("white");
  text("food remaining"+food,150,250);
  textSize(18);
  text("NOTE: press UP arrow key to feed the dog",100,200);


}
function readStock(data){
  food = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}