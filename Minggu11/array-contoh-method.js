// Method filter
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ambil data yang hanya habis dibagi dua
const filteredArray = angka.filter((item) => item % 2 === 0);
document.write(filteredArray + "<br>");

// Method Includes
var tanaman = ["Padi", "Kacang", "Jagung", "Kedelai"];
var adaKacang = tanaman.includes("Kacang");
document.write(adaKacang + "<br>"); // -> true
var adaBayam = tanaman.includes("Bayam");
document.write(adaBayam + "<br>"); // -> false

//Method Short
var alfabet = ["a", "f", "z", "e", "r", "g"];
// Mengurutkan Huruf Alfabet
document.write(alfabet.sort() + "<br>");

var angka2 = [3, 1, 2, 6, 8, 5];
// Mengurutkan Angka
document.write(angka2.sort() + "<br>");
