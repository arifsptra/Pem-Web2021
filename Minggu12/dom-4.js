// getElementsByName()
var names = document.getElementsByName("in")[0];
names.style.backgroundColor = "#0088b9";
names.style.color = "#fff";
names.style.padding = "10px";

// getElementById()
var input = document.getElementById("in");
input.style.padding = "10px";
input.style.border = "none";

// getElementsByTagName()
var uList = document.getElementsByTagName("UL")[0];
var iList = document.getElementsByTagName("LI");
uList.style.listStyle = "none";
uList.style.color = "blue";
uList.style.padding = "0px";

for (var i = 0; i < iList.length; i++) {
  iList[i].style.float = "left";
  iList[i].style.paddingRight = "6px";
}

// getElementsByTagNameNS
function getAllParagraf() {
  var allParagraf = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");

  var jumlah = allParagraf.length;

  alert("Ada " + jumlah + "  Pragraf di Web ini");
}
