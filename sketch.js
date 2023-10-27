var bkImg,space;
var asteroid
var score=0

function preload(){
bkImg=loadImage("assets/bg.jpg");
spaceImg=loadAnimation("assets/i1.png","assets/i2.png","assets/i3.png","assets/i4.png","assets/i5.png","assets/i6.png","assets/i7.png")
a1Img=loadImage("assets/a1.png")
a2Img=loadImage("assets/a2.png")
a3Img=loadImage("assets/a3.png")
a4Img=loadImage("assets/a4.png")
laserImg=loadImage("assets/laser.png")
blastImg=loadImage("assets/blast.png")
}

function setup(){
createCanvas(1280,675);
space=createSprite(660,600,20,20);
space.addAnimation("space",spaceImg)
space.scale=0.3

asteroidGroup=new Group()
laserGroup=new Group()

}

function draw(){
background(bkImg);


if(keyDown("left_arrow") && space.x>=100){
    space.x=space.x-10
}
if(keyDown("right_arrow") && space.x<=1200){
    space.x=space.x+10
}

if(keyDown("up_arrow")){
    spawnLaser()
}

if(asteroidGroup.collide(laserGroup)){
    handleCollision(asteroidGroup)
}
spawnAstroids()
drawSprites()
textSize(25)
fill("white")
text("score: ",score,700,500)
}

function spawnAstroids(){
    if(frameCount%60===0){
        asteroid=createSprite(random(10,1000),100,20,20)
        asteroid.velocityY=7
        asteroid.scale=0.2
        var r1=Math.round(random(1,4))
        switch(r1){
            case 1:asteroid.addImage(a1Img)
            break
            case 2:asteroid.addImage(a2Img)
            break
            case 3:asteroid.addImage(a3Img)
            break
            case 4:asteroid.addImage(a4Img)
            break

        }
        asteroidGroup.add(asteroid)
    }
}

function spawnLaser (){
    laser=createSprite(space.x,510,20,20)
    laser.addImage(laserImg)
    laser.velocityY=-5
    laser.scale=0.2
    laserGroup.add(laser)
}
 
function handleCollision(asteroidGroup){
blast=createSprite(laser.x+30,laser.y,20,20)
blast.addImage(blastImg)
blast.scale=0.1
blast.lifetime=30
asteroidGroup.destroyEach()
laserGroup.destroyEach()
}