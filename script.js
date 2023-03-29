//your code here
function clock(){
setInterval(()=>{
	document.getElementByClassName("second-hand").style.transform = "rotate(6deg)";
},1000)
}

clock();