var uls = document.getElementById("uls").children;
console.log(uls);

for(var i =0; i<uls.length; i++){
	uls[i].index = i;
	uls[i].onclick = function(){
		for(var j=0; j<uls.length; j++){
			uls[j].className = "";
		}
		this.className = "one";
	}
}