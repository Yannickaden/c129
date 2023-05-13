song1="";
song2="";
rwx = 0;
rwy = 0;
lwx = 0;
lwy = 0;
srw = 0;
slw = 0;

function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3")
}

function setup() {
canvas =  createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('model Is loaded');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
srw =  results[0].pose.keypoints[10].score;
slw =  results[0].pose.keypoints[9].score;
console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

  }
}

function draw() {
image(video, 0, 0, 600, 500);
fill("#FF0000");
stroke("#FF0000");
if(srw > 0.2)
{
circle(rightWristX,rightWristY,20);
}
}
function play()
{
song1.play();
song1.setVolume(1);
song1.rate(1);
}
 
function plays()
{
song2.play();
song2.setVolume(1);
song2.rate(1);
}
