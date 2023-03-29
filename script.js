//your code here
function clock(){
setInterval(()=>{
	var now = new Date();
	let sec = now.getSeconds();
	let min = now.getMinutes();
	let hour = now.getHours();
	document.getElementsByClassName("second-hand")[0].style.transform = "rotate("+sec*6+"deg)";
	document.getElementsByClassName("min-hand")[0].style.transform = "rotate("+min*6+"deg)";
	document.getElementsByClassName("hour-hand")[0].style.transform = "rotate("+hour*6+"deg)";
},1000)
}

clock();