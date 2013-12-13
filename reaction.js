// JavaScript Document

alert("Welcome to the Reaction Game. You have only 30 seconds \n to click the button of the following page. Are you able to \n reach 100 clicks? Note: please refresh the page after if\n you'd like to try again. Good luck!")

var count = 1;

function change() {
	
	
	document.getElementById('clicks').innerHTML = count++;	
	
	var button = document.getElementById("btnattrib");
	var position = document.getElementById("btnstyl");
	var back = document.getElementById("background");
	var color_ary = new Array('F90','60F','6C0','03C','C30','0F0','90F','06F','300','990'); 

	button.style.backgroundColor= '#' + color_ary[ Math.ceil ( Math.random() * color_ary.length ) 
	];;
	button.style.color='#' + color_ary[ Math.ceil ( Math.random() * color_ary.length ) ];;
	button.style.borderColor='#' + color_ary[ Math.ceil ( Math.random() * color_ary.length) ];
	
	position.style.paddingBottom=(Math.random()*101) - 25 + "px";
	position.style.paddingLeft=(Math.random()*801) - 75 + "px";
	position.style.paddingRight=(Math.random()*301) - 50 + "px";
	position.style.paddingTop=(Math.random()*601) - 125 + "px";
	
	background.style.backgroundColor= '#' + color_ary[ Math.ceil ( Math.random() * color_ary.
	length )];;
		
	setInterval(function(){alert("Congratulations. You scored " + document.getElementById('clicks'
	).innerHTML + " clicks.")}, 30000);
	
	
	
	
	
}



