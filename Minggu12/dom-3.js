var paragraph = document.getElementsByClassName("paragraf2");
setInterval(function () {
  paragraph[0].style.backgroundColor = "#0088b9";
  paragraph[1].style.backgroundColor = "red";
  paragraph[2].style.backgroundColor = "green";
  paragraph[3].style.backgroundColor = "gold";

  setTimeout(function () {
    paragraph[0].style.backgroundColor = "gold";
    paragraph[1].style.backgroundColor = "green";
    paragraph[2].style.backgroundColor = "#0088b9";
    paragraph[3].style.backgroundColor = "red";
  }, 1000);
}, 2000);
for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].style.padding = "10px";
  paragraph[i].style.color = "#fff";
}
