var paragraph = document.getElementsByClassName("paragraf");
console.log(paragraph);
paragraph[0].style.backgroundColor = "#0088b9";
paragraph[0].style.color = "#fff";
paragraph[1].style.color = "#0088b9";
paragraph[2].style.backgroundColor = "gold";
paragraph[2].style.color = "#fff";
for (var i = 0; i < paragraph.length; i++) {
  paragraph[i].style.padding = "10px";
}
