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
			details.classList.remove("zoomOutDown");
			details.classList.add("animated");
			details.classList.add("zoomInUp");
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
	d1.classList.remove("zoomInUp");
	d1.classList.add("zoomOutDown");
	var d2 = document.getElementById("c2d");
	d2.classList.remove("zoomInUp");
	d2.classList.add("zoomOutDown");
	var d3 = document.getElementById("c3d");
	d3.classList.remove("zoomInUp");
	d3.classList.add("zoomOutDown");
	var d4 = document.getElementById("c4d");
	d4.classList.remove("zoomInUp");
	d4.classList.add("zoomOutDown");
	var d5 = document.getElementById("c5d");
	d5.classList.remove("zoomInUp");
	d5.classList.add("zoomOutDown");
	background.style.pointerEvents = "none";
})


var lo = document.getElementById("logout");
lo.addEventListener("mouseover", function(){
	lo.classList.add("animated");
	lo.classList.add("rubberBand");
});

lo.addEventListener("mouseleave", function(){
	lo.classList.remove("rubberBand");
})

var c1d = document.getElementById("c1d");
c1d.addEventListener("click", function() {
	console.log("details clicked!");
});
