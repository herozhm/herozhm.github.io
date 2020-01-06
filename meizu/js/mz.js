var slide = document.getElementById("slide").children[0];
// console.log(slide);
var ols = document.getElementById("ols").children;
console.log(ols);

// 建立数组，存储图片
var arr = [
	"img/head.jpg",
	"img/hd1.jpg",
	"img/hd2.jpg",
	"img/hd3.jpg",
	"img/hd4.jpg",
	"img/hd2.jpg",
]

for(var i=0; i<ols.length; i++){
	ols[i].index = i;
	ols[i].onclick = function(){
		for(var j=0 ; j<ols.length; j++){
			ols[j].className = "";
		}
		this.className = "con";
		// 切换背景图
		slide.style.backgroundImage = "url(" + arr[this.index] + ")";
		
	}
	
}