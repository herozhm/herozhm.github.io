var wra = document.getElementById("wra").children[0];
var btn = document.getElementById("btn");
var lbtn = btn.children[0];
var rbtn = btn.children[1];
var ols = document.getElementById("ols").children;
console.log(wra);

var arr = [
	"img/head.jpg",
	"img/wra.jpg"
]
var num = 0;
for (var i = 0; i < ols.length; i++) {
	ols[i].index = i;
	ols[i].onclick = function() {
		for (var j = 0; j < ols.length; j++) {
			ols[j].className = "";
		}
		this.className = "con";
		wra.style.backgroundImage = "url(" + arr[this.index] + ")";
		// console.log(wra);
		num = this.index;
	}
}

// 右按钮
rbtn.onclick = function() {
	
	wra.style.backgroundImage = "url(" + arr[num] + ")";

	for (var j = 0; j < ols.length; j++) {
		ols[j].className = "";
	}
	num == 1 ? 1 : num++;
	ols[num].className = "con";
}

// 左按钮
lbtn.onclick = function() {
	wra.style.backgroundImage = "url(" + arr[num] + ")";

	for (var j = 0; j < ols.length; j++) {
		ols[j].className = "";
	}
	num == 0 ? 0 : num--;
	ols[num].className = "con";
}
