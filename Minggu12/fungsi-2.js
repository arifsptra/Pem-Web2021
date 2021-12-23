// Fungsi Dengan Parameter
function kali(a, b) {
  hasilKali = a * b;
  document.write(`Hasil kali ${a} dan ${b} adalah ${hasilKali}`);
}
kali(10, 10);

// Fungsi yang Mengembalikan Nilai
function bagi(c, d) {
  hasilBagi = c / d;
  return hasilBagi;
}
// Memanggil Fungsi
var nilaiC = 10;
var nilaiD = 2;
var hasilPembagian = bagi(nilaiC, nilaiD);
document.write(`<br>Hasil Bagi ${nilaiC} dan ${nilaiD} adalah ${hasilPembagian}`);
