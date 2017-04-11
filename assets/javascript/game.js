window.onload = function (){

//Crystal value randomly generated between 1-12
//Target number randomly generated between 19-120

// DECLARE VARIABLES 

// var targetNumber = 53;

var counter = 0; 
var score = 0; 


// create 4 values and assign them to each crystals with a for statement 


function targetRandom(){

	var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	return targetNumber;
	
}

console.log(targetRandom());

function crystalRandom(){
	var crystalArray = []; 
	for(var i = 0; i < 4; i++){
		var crystalValue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
		crystalArray.push(crystalValue);
	}

	
	return crystalArray; 

}

var target = targetRandom();
var winner = 0;
var loser = 0;
var crystalList = crystalRandom();
console.log(crystalList);

$("#target").text(target);
$("#win").text(winner); 
$("#loss").text(loser); 

$("#score").text(score); 

/*
$("#citrine").on("click",function(){

	console.log(crystalList[0]); 
	score += crystalList[0]; 
	$("#score").text(score); 
	if(score > target){
	counter+=1;
	console.log("lose");  
	alert("You lose!"); 
}
else if(score === target){

}
});
*/

$("img").on("click", function(){

	var alt = $(this).attr("alt");
	console.log(alt);

	if(alt == "citrine")
	{
		score += crystalList[0]; 
	}
	else if(alt == "emerald")
	{
		score += crystalList[1]; 
	}
	else if(alt == "saphire")
	{
		score += crystalList[2]; 
	}
	else if(alt == "ruby")
	{
		score += crystalList[3]; 
	}

	
	$("#score").text(score);
	if(score > target){
		loser+=1;
		$("#loss").text(loser);
		target=targetRandom(); 
		$("#target").text(target);
		crystalList = crystalRandom();


		console.log("lose");  
		alert("You lose!"); 
		score = 0;
		$("#score").text(score);
	}
	else if(score == target)
	{
		winner += 1;
		$("#win").text(winner);
		target=targetRandom(); 
		$("#target").text(target);
		crystalList = crystalRandom();
		console.log("Win");
		alert("You win");
		score = 0;
		$("#score").text(score);

	}
});




















}