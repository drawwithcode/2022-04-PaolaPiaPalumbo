//variables for color and weight of the stroke
let myColor;
let strokeValue = 3;

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
	let text1 = createElement('h1', "- CHOOSE A COLOR AND DRAW A FACE -");
	text1.addClass("txt");
  	text1.position(0, -6.5);

	//text at the bottom of the page
	let text2 = createElement('h1', "- CHOOSE A COLOR AND DRAW A FACE -");
	text2.addClass("txt");
  	text2.position(0, windowHeight-35);

	//text on the left
	let text3 = createElement('h1', "- SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART");
	text3.addClass("txt2");
	text3.position(-6.5, 0);

	//text on the right
	let text4 = createElement('h1', "-  SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART - SHAKE TO RESTART");
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
	let col1 = createImg("assets/images/ColFour.svg");
    col1.style("width", "25px");
    col1.position(windowWidth-135, 50);
    col1.mouseClicked(changeOne);
	pop(); 

	//second color button
	push();
	let col2 = createImg("assets/images/ColFive.svg");
    col2.style("width", "25px");
    col2.position(windowWidth-100, 50);
    col2.mouseClicked(changeTwo);
	pop(); 

	//third color button
	push();
	let col3 = createImg("assets/images/ColSix.svg");
    col3.style("width", "25px");
    col3.position(windowWidth-65, 50);
	col3.mouseClicked(changeThree);
	pop(); 

	//save button
	push();
    let saveBtn = createImg("assets/images/SaveTwo.svg");
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

	//first color change: when col1 button is clicked, create an ellipse of the selected color
	function changeOne() {
	myColor = ("#0014FF");
	noStroke();
	fill(myColor);
	ellipse(width/2, height/2, 200);
	}

	//second color change: when col2 button is clicked, create an ellipse of the selected color
	function changeTwo() {
	myColor = ("#5F9DF7");
	noStroke();
	fill(myColor);
	ellipse(width/2, height/2, 200);
	}

	//third color change: when col3 button is clicked, create an ellipse of the selected color
	function changeThree() {
	myColor = ("#FF731D");
	noStroke();
	fill(myColor);
	ellipse(width/2, height/2, 200);
	}

	setShakeThreshold(10);
}

//first stroke change: when stroke1 button is clicked, set the strokeValue variable to 3
function strokeOne() {
	strokeValue = 3;
}

//second stroke change: when strokee button is clicked, set the strokeValue variable to 10
function strokeTwo() {
	strokeValue = 10;
}

//third stroke change: when stroke3 button is clicked, set the strokeValue variable to 20
function strokeThree() {
	strokeValue = 20;
}

function draw() {
	//create the line using the mouse position and the variable strokeValue
	if (mouseIsPressed) {
		strokeWeight(strokeValue);
		stroke(0);
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

//when the device is shaken, reload the page from the function setup
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