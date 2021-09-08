video = "";
status = "";
objects = [];
function preload()
{
video  = createVideo('video.mp4');
video.hide();
}
//function preload ends
function setup()
{
canvas = createCanvas(480 , 380);
canvas.center();
}
//function setup ends here
function draw()
{
image(video , 0 , 0 , 480 , 380);
if(status != "")
{
objectDetector.detect(video , gotResult);
for(v = 0; v < objects.length; v++)
{
document.getElementById("status").innerHTML = "Status : objects detected";
document.getElementById("objects").innerHTML = "Number of objects detected : " + objects.length;
fill("#4287f5");
percent = floor(objects[v].confidence*100);
text(objects[v].label + " " + percent + "%" , objects[v].x + 15 , objects[v].y + 15);
noFill();
stroke("#f70505");
rect(objects[v].x , objects[v].y , objects[v].width , objects[v].height);
}
//for loop ends here
}
//if loop ends here
}
//function draw ends here
function gotResult(error , results)
{
if(error)
{
console.log(error);
}
else
{
console.log(results);
objects = results;
}
//else ends here
//if loop ends here
}
//function gotResult ends here
function Start()
{
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
//function start ends here
function modelLoaded()
{
console.log("Model loaded");
status = true;
video.loop();
video.speed(1);
//change volume here############################################################################################
video.volume(0);
//change volume here############################################################################################
}
//function modelLoaded ends here