img="";
function preload(){
img=loadImage('dog and cat.jpg');
}

function setup(){
    canvas=createCanvas(1000,800);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function draw(){
    image(img,0,0,1000,800);
    fill("darkblue");
    strokeWeight(2.5);
    stroke("darkblue");
    text("Dog", 45, 75);
    noFill();
    rect(30,60,450,350);

    fill("darkgreen");
    strokeWeight(1.5);
    stroke("darkgreen");
    text("Cat", 320, 120);
    noFill();
    rect(300,90,270,320);
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error,results);
    }
    console.log(results);
}