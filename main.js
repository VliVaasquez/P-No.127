song_1 = "";
song_2 = "";
leftWristX =0;
leftWristY =0;
rightWristX =0;
rightWristY =0;

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function preload() 
{
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
poseNet = m15.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWirstX = " + leftWristX +" leftWristY = "+ leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWirstX = " + rightWristX +" rightWristY =" + rightWristY);
}
}

function draw() {
    image(video, 0, 0, 600, 500);
}
