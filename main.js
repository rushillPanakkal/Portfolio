

nosex = 0;
nosey = 0;

function preload(){
  clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    
    canvas = createCanvas(300, 300); canvas.center(); video = createCapture(VIDEO); video.size(300, 300); video.hide();
    PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses);
  }
  function modelLoaded(){
    console.log("model loaded!");
  }
  function draw(){
    image(video,0,0,300,300);
    image(clown_nose, nosex, nosey, 30, 30);
  }
  function take_snapshot(){
    save('my-filter-image.png');
  }
  function gotPoses(results){
    if(results.length > 0){
      console.log(results);
      nosex = results[0].pose.nose.x-17
      nosey = results[0].pose.nose.y-9;
      
    }
  }
