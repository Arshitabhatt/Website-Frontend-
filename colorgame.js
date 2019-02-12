var numSqaures = 6;
var colors = generateRandomColor(numSqaures);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1  = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for (var i = 0;  i < modeBtns.length; i++) {
	modeBtns[i].addEventListener("click" , function(){
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy"? numSqaures =3: numSqaures = 6;
		reset();
	});
	
}

function reset(){
	colors = generateRandomColor(numSqaures);
	// get a new picked color
	pickedColor = pickColor();
	// change color display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
// loop through all the elemts of square and for first 3 set new color and for other three display none
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	
	}
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click" , function(){
reset();
});

for(var i = 0; i < squares.length; i++){
	// alloted colors
	squares[i].style.backgroundColor = colors[i];
	// get the color of the clicked sqaure

	squares[i].addEventListener("click" , function(){
	   var clickedColor = this.style.backgroundColor;
	   	console.log(clickedColor, pickedColor);
	   // compare with pickedColor
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColor(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?";	
	} else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";

	}
});
		
}
function changeColor(color){
	// loop through all squares
	for( var i = 0; i < squares.length; i++){
		// change the color to picked color
		squares[i].style.backgroundColor = color;
	}
	
}


function pickColor(){
	var num = Math.floor(Math.random()*colors.length );
	return colors[num];
}

function generateRandomColor(num){
	// create an array of required numbers
	var arr = [];
	// loop to get random colors into the array push
	for(var i = 0; i < num; i++){
		// push random rgb color into the array
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor(){
	// generate random numbers for r b/w 0-255
	var r = Math.floor(Math.random()*256 );
	// generate random numbers for g b/w 0-255
	var g = Math.floor(Math.random()*256 );
	// generate random numbers for b b/w 0-255
	var b = Math.floor(Math.random()*256 );
	return "rgb(" + r+ ", "+ g +", "+ b +")";
} 



