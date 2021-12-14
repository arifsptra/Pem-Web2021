var ulangi = confirm("Apakah kamu mau mengulang?");
var counter = 0;

do {
  counter++;
  ulangi = confirm("Apakah kamu mau mengulang?");
} while (ulangi);
document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");
