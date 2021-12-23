var bgColor = document.getElementById("bg-color");
var textColor = document.getElementById("text-color");

bgColor.addEventListener("change", (arif) => {
  document.body.style.backgroundColor = bgColor.value;
});

textColor.addEventListener("change", (arif) => {
  document.body.style.color = textColor.value;
});
