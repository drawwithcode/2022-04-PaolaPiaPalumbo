//variables
let buttonOne;
let buttonTwo;
let buttonThree;
let myImage;

function preload() {
	//preload image
	myImage = loadImage("./assets/images/Hello.svg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CORNERS);
	
	//create the pattern for the background using a grid of ellipses
	for (let x = 6; x < width; x += 10){
		for (let y = 6; y < height; y += 10){
			fill(0);
			noStroke();
			ellipse(x, y, 2);
		}
	}

	//image for title
	image(myImage, 10, 10, width-10, 110);

	//text
	push();
	textSize(30);
	textStyle(BOLD);
	textAlign(CENTER);
	text("DO YOU WANNA DRAW?", width / 2, height-10);
	pop();

	//button n1 connected with pageOne "Draw a Face"
	push();
    buttonOne = createImg("assets/images/ButtonOne.svg");
    buttonOne.style("width", "100px");
    buttonOne.position(width/8, 2.1*height/4);
    buttonOne.mousePressed(pageOne);
    pop();

	//button n2 connected with pageTwo "Kaleidoscope"
	push();
    buttonTwo = createImg("assets/images/ButtonTwo.svg");
    buttonTwo.style("width", "100px");
    buttonTwo.position(3*width/8, 1.6*height/4);
    buttonTwo.mousePressed(pageTwo);
    pop();

	//button n2 connected with pageThree "Connect the Dots"
	push();
    buttonThree = createImg("assets/images/ButtonThree.svg");
    buttonThree.style("width", "100px");
    buttonThree.position(4.6*width/8, 2.2*height/4);
    buttonThree.mousePressed(pageThree);
    pop();
}

//when buttonOne is clicked go to pageOne
function pageOne() {
	window.open("pageOne.html", "_self");
}

//when buttonTwo is clicked go to pageTwo
function pageTwo() {
	window.open("pageTwo.html", "_self");
}

//when buttonThree is clicked go to pageThree
function pageThree() {
	window.open("pageThree.html", "_self");
}

//prevent dragging screen around
function touchMoved() {
	return false;
}