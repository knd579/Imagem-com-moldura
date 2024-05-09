function preload(){
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();



}

function draw(){
    image(video, 0, 0, 380, 380);
    let c1 = color(0, 255, 0);
    fill(c1);
    noStroke();
    square(0, 0, 50);
    square(0, 250, 50);
    square(250, 0, 50);
    square(250, 250, 50);

    let c2 = color(179, 179, 255);

    fill(c2);
    noStroke();
    circle(25, 25, 50);
    circle(25, 275, 50);
    circle(275, 275, 50);
    circle(275, 25, 50);
}

function takeSnapshot(){
    save('student_name.png');
}

