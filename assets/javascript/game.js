window.onload = function (){

//Crystal value randomly generated between 1-12
//Target number randomly generated between 19-120

// DECLARE VARIABLES 

// var targetNumber = 53;

var counter = 0; 

// create 4 values and assign them to each crystals with a for statement 


function targetRandom(){

	var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	
}

function crystalRandom(){

	var crystalValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

}





// $("#randomnumber").html(targetNumber); 

// var counter = 0; 

// var numberOptions = [10, 5, 1, 7]; //math.floor


// 	for(var i = 0; i < numberOptions.length; i++){

// 		var imageCrystal = $("<img>");

// 		imageCrystal.addClass("crystal-image");

// 		imageCrystal.attr("source link");

// 		imageCrystal.attr("text",numberOptions[i]);

// 		$("#crystals").append(imageCrystal);

// 	}  

// $("crystal-image").on("click",(function(){ //click function for the crystal

// 	var crystalValue = ($(this).attr("data-crystalValue")); //takes value of crystal in string form
// 	crystalValue = parseInt(crystalValue); //changes from sting to int

// 	counter = crystalValue; 

// 	alert("New Score: " + counter);

// 	if(counter === targeNumber){
// 		alert("YOU WON!!!!!");
// 	}
// 	else if(counter >= targeNumber){
// 		alert("YOU LOSE");
// 	}


// });

















}