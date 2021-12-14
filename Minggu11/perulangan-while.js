var ulangi = confirm("Apakah kamu mau mengulang?");
var counter = 0;

// while (ulangi) {
//   var jawab = confirm("Apakah kamu mau mengulang?");
//   counter++;
//   if (jawab == false) {
//     ulangi = false;
//   }
// }
// document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");

// Script Sederhana
while (ulangi) {
  counter++;
  ulangi = confirm("Apakah kamu mau mengulang?");
}
document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");
