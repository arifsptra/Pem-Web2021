var nilai = prompt("Masukkan Nilai Anda: ");
var grade = "";
var hasil = "";

if (nilai >= 95) {
  grade = "A";
} else if (nilai >= 85) {
  grade = "B";
} else if (nilai >= 75) {
  grade = "C";
} else if (nilai >= 65) {
  grade = "D";
} else if (nilai >= 55) {
  grade = "E";
} else {
  grade = "F";
}
alert("Nilai Anda " + nilai + " Anda Mendapatkan Grade " + grade);
if (grade == "A" || grade == "B" || grade == "C") {
  hasil = "LULUS!";
} else if (grade == "D") {
  hasil = "MENGULANG!";
} else {
  hasil = "TIDAK LULUS!";
}
alert("Anda Dinyatakan " + hasil);
