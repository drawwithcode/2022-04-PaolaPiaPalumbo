//variables for color and weight of the stroke
let myColor =  ("#00F5FF");
let strokeValue = 24;

function setup() {
	//create and place the canvas
	let myCanvas = createCanvas(windowWidth-50, windowHeight-200);
	myCanvas.position(25, 100);
	background(255);

	angleMode(DEGREES);

	//first div for the external frame
	let div1 = createDiv();
	div1.style("border:1.3px solid");
	div1.size(windowWidth-50, windowHeight-55);
	div1.position(25, 22.5);

	//second div for the frame around the canvas
	let div2 = createDiv();
	div2.style("border:1.3px solid");
	div2.size(windowWidth-50, windowHeight-200);
	div2.position(25, 100);

	//text at the top of the page
	let text1 = createElement('h1', "- SELECT A COLOR AND CONNECT THE DOTS -");
	text1.addClass("txt");
  	text1.position(0, -6.5);

	//text at the bottom of the page
	let text2 = createElement('h1', "- SELECT A COLOR AND CONNECT THE DOTS -");
	text2.addClass("txt");
  	text2.position(0, windowHeight-35);

	//text on the left
	let text3 = createElement('h1', "- SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS");
	text3.addClass("txt2");
	text3.position(-6.5, 0);

	//text on the right
	let text4 = createElement('h1', "- SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS - SHAKE TO CHANGE THE DOTS");
	text4.addClass("txt3");
	text4.position(windowWidth-31.5, 0);

	//back button
	push();
    let btnBack = createImg("assets/images/Back.svg");
    btnBack.style("width", "24px");
    btnBack.position(40, 45);
    btnBack.mouseClicked(backClicked);
    pop();

	//first color button
	push();
	let col1 = createImg("assets/images/ColSeven.svg");
    col1.style("width", "25px");
    col1.position(windowWidth-135, 50);
    col1.mouseClicked(changeOne);
	pop(); 

	//second color button
	push();
	let col2 = createImg("assets/images/ColEight.svg");
    col2.style("width", "25px");
    col2.position(windowWidth-100, 50);
    col2.mouseClicked(changeTwo);
	pop(); 

	//third color button
	push();
	let col3 = createImg("assets/images/ColNine.svg");
    col3.style("width", "25px");
    col3.position(windowWidth-65, 50);
	col3.mouseClicked(changeThree);
	pop(); 

	//save button
	push();
    let saveBtn = createImg("assets/images/SaveThree.svg");
    saveBtn.style("width", "100px");
    saveBtn.position(20, height + 85);
   	saveBtn.mouseClicked(saveFrame);
    pop();  

	//strokeWeight icon - small
	push();
	let stroke1 = createImg("assets/images/pen.svg");
    stroke1.style("width", "18px");
    stroke1.position(windowWidth-145, height + 132);
	stroke1.mouseClicked(strokeOne);
	pop(); 

	//strokeWeight icon - medium
	push();
	let stroke2 = createImg("assets/images/pen.svg");
    stroke2.style("width", "24px");
    stroke2.position(windowWidth-110, height + 126);
	stroke2.mouseClicked(strokeTwo);
	pop();
	
	//strokeWeight icon - large
	push();
	let stroke3 = createImg("assets/images/pen.svg");
    stroke3.style("width", "30px");
    stroke3.position(windowWidth-70, height + 120);
	stroke3.mouseClicked(strokeThree);
	pop(); 

	setShakeThreshold(20);

	//Create the dots in random positions
	const margin = 40;
	noStroke();
	//cyan dots
	fill("#00F5FF");
	ellipse(random(0, width-margin), random(0, height-margin), 30);

	noStroke();
	fill("#00F5FF");
	ellipse(random(0, width-margin), random(0, height-margin), 30);

	//green dots
	noStroke();
	fill("#38E54D");
	ellipse(random(0, width-margin), random(0, height-margin), 30);

	noStroke();
	fill("#38E54D");
	ellipse(random(0, width-margin), random(0, height-margin), 30);

	//yellow dots
	noStroke();
	fill("#FFF95D");
	ellipse(random(0, width-margin), random(0, height-margin), 30);

	noStroke();
	fill("#FFF95D");
	ellipse(random(0, width-margin), random(0, height-margin), 30);

}

//first color change: when col1 button is clicked, change the color variable
function changeOne() {
	myColor = ("#00F5FF");
}

//second color change: when col2 button is clicked, change the color variable
function changeTwo() {
	myColor = ("#38E54D");
}

//third color change: when col3 button is clicked, change the color variable
function changeThree() {
	myColor = ("#FFF95D");
}

//first stroke change: when stroke1 button is clicked, set the strokeValue variable to 4
function strokeOne() {
	strokeValue = 4;
}

//second stroke change: when stroke2 button is clicked, set the strokeValue variable to 12
function strokeTwo() {
	strokeValue = 12;
}

//third stroke change: when stroke3 button is clicked, set the strokeValue variable to 24
function strokeThree() {
	strokeValue = 24;
}

function draw() {
	//create the line using the mouse position and the variable strokeValue and myColor
	if (mouseIsPressed) {
		strokeWeight(strokeValue);
		stroke(myColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	  }
}

//when btnBack is clicked go to page index
function backClicked() {
	window.open("index.html", "_self");
}

//save frame when saveBtn is clicked
function saveFrame() {
    save("myDrawing.png");
}

//when the device is shaken, reload the page from the function setup and create new dots
function deviceShaken() {
	setup();
}

//request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission){
	  DeviceOrientationEvent.requestPermission()
	}
}

//prevent dragging screen around
function touchMoved() {
	return false;
}