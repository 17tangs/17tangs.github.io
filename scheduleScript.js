var n = '${name}';
console.log(n);

function displayDetails(c,d) {
	var classes = document.getElementsByClassName(c);
	for (var i = 0; i < classes.length; i++) {
		var subject = classes[i];
		subject.addEventListener("click", function() {
			var details = document.getElementById(d);
			var background = document.getElementById("background");
			background.style.pointerEvents = "auto";
			details.style.pointerEvents = "auto";
			details.style.visibility = "visible";
			console.log(c + " was clicked!!!");
			console.log("end");
		});
	}
}

for(var i = 1; i <= 5; i++){
	className = "class" + i.toString();
	detailID = "c" + i.toString() + "d";
	displayDetails(className, detailID);
}

var background = document.getElementById("background");
background.addEventListener("click", function() {
	console.log("background clicked");
	var d1 = document.getElementById("c1d");
	d1.style.visibility = "hidden";
	var d2 = document.getElementById("c2d");
	d2.style.visibility = "hidden";
	var d3 = document.getElementById("c3d");
	d3.style.visibility = "hidden";
	var d4 = document.getElementById("c4d");
	d4.style.visibility = "hidden";
	var d5 = document.getElementById("c5d");
	d5.style.visibility = "hidden";
	background.style.pointerEvents = "none";
})

var c1d = document.getElementById("c1d");
c1d.addEventListener("click", function() {
	console.log("details clicked!");
});