var stage = document.querySelector(".stage");

// document.body.onmousemove = function(event) {
//     var x = event.clientX - stage.offsetLeft - stage.offsetWidth / 2;
//     var y = event.clientY - stage.offsetTop - stage.offsetHeight / 2;

//     document.body.style.perspectiveOrigin = x / 5 + 50 + "%" + (y / 5 + 50) + "%";

//     stage.style.transform = "rotateY(" + -x / 50 + "deg) rotateX(" + (y / 50) + "deg)";
// };



document.body.onclick = function() {
    stage.classList.toggle("active");
};