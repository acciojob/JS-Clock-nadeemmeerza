//your code here
function clock(){
	var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  // Calculate the angle of each hand in radians
	// 30 degrees per hour = pi/6 radians
  var hourAngle = ((hours % 12) + (minutes / 60)) * (Math.PI / 6); 
	// 6 degrees per minute = pi/30 radians
  var minuteAngle = (minutes + (seconds / 60)) * (Math.PI / 30); 
	// 6 degrees per second = pi/30 radians
  var secondAngle = seconds * (Math.PI / 30); 

  // Rotate each hand to the correct angle
  var hourHand = document.getElementsByClassName("hour-hand")[0];
  hourHand.style.transform = "rotate(" + hourAngle + "rad)";

  var minuteHand = document.getElementsByClassName("min-hand")[0];
  minuteHand.style.transform = "rotate(" + minuteAngle + "rad)";

  var secondHand = document.getElementsByClassName("second-hand")[0];
  secondHand.style.transform = "rotate(" + secondAngle + "rad)";
}

setInterval(clock,1000)

// ()=>{
	// var now = new Date();
	// let sec = now.getSeconds();
	// let min = now.getMinutes();
	// let hour = now.getHours();
	// document.getElementsByClassName("hour-hand")[0].style.transform = 
	// 	"rotate("+(((hour % 12) + (min / 60)) * 30)*Math.PI/180+"deg)";
	// document.getElementsByClassName("min-hand")[0].style.transform =
	// 	"rotate("+((min+(sec/60))*6)*Math.PI/180+"deg)";
	// document.getElementsByClassName("second-hand")[0].style.transform = 
	// 	"rotate("+(sec*6)+"deg)";
// }
