// querySelector
var putra = document.querySelector(".putra");
putra.style.backgroundColor = "#0088b9";
putra.style.color = "#fff";
putra.style.textAlign = "center";
putra.style.padding = "10px";

// querySelectorAll 
var garuda = document.querySelectorAll(".garuda");
for(var i = 0; i < garuda.length; i++){
    garuda[i].style.padding = "8px";
    garuda[i].style.textAlign = "center";
    garuda[i].style.fontSize = "16px";
}
garuda[0].style.backgroundColor = "red";
garuda[1].style.backgroundColor = "white";
garuda[2].style.backgroundColor = "green";