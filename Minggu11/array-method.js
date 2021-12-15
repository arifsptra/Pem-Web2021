// variabel awal
var data = ["Arif", "Saputra", "Wander", "Luiz", "Marc", "Klok"];

// join
console.log(data.join(" - ")); // merapikan tampilan

// length
console.log(data.length); // Cek jumlah elemen

// print sesuai index
console.log(data[2]);

// push
data.push("Geofrey", "Castilion"); // Menambahkan elemen baru di belakang

// pop
data.pop(); // Hapus elemen Terakhir
console.log(data.join(" - "));

// unshift
data.unshift("Mohammed", "Rasid"); // Menambahkan elemen baru di depan

// shift
data.shift(); // Hapus eleman Pertama
console.log(data.join(" - "));

// splice(indexAwal, jumlahIndexYangMauDihapus, elemenBaru1, elemenBaru2, ...)
data.splice(3, 0, "Dedi", "Kusnandar"); // Menambahkan elemenbaru ditengah dan juga bisa mengahapus elemen baru
console.log(data.join(" - "));

// slice(awal, akhir) --> awal masuk ke varibel baru, yang terakhir tidak masuk ke variabel baru
var data2 = data.slice(1, 3);
console.log(data2.join(" - "));

// forEach --> seperti pengulangan menggunakan for tetapi lebih simple
// contoh1 forEach
var nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
nomor.forEach(function (z) {
  console.log("Nomor " + z);
});
// contoh2 forEach
var mahasiswa = ["a", "b", "c"];
mahasiswa.forEach(function (e, i) {
  console.log("Mahasiswa ke- " + (i + 1) + " adalah " + e);
});

// map --> seperti forEach, tapi map lebih baik karena map mengembalikan nilai array
var manusia = ["A", "B", "C", "D"];
var manusia2 = manusia.map(function (m) {
  return m + "C";
});
console.log(manusia.join(" - "));
console.log(manusia2.join(" - "));

// sort - mengurutkan
var number = [2, 4, 2, 3, 5, 6, 3, 9, 7, 6, 7, 8, 10, 20, 100];
// mengurutkan nomor paling depan
console.log(number.sort().join(" - "));
// mengurutkan nomor dari yang terkecil
number.sort(function (a, b) {
  return a - b;
});
console.log(number.join(" - "));

// find and filter
var angkaAwal = [19, 23, 24, 25, 46, 63, 43];
// find --> mengembalikan 1 nilai dan bukan array
var angkaFind = angkaAwal.find(function (find) {
  return find > 23;
});
console.log(angkaFind);

// filter --> mengembalikan banyak nilai dan mencadi array
var angkaFilter = angkaAwal.filter(function (filter) {
  return filter > 23;
});
console.log(angkaFilter.join(" - "));
