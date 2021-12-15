var ulangi = confirm("Apakah kamu mau mengulang?");
var counter = 0;

while (ulangi) {
  counter++;
  var bintang = "*".repeat(counter) + "<br>";
  document.write(counter + " : " + bintang);
  ulangi = confirm("Apakah kamu mau mengulang?");
}
