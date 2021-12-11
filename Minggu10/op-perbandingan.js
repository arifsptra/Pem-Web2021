var nilaiA = 10;
var nilaiB = 11;

// Sama dengan
var hasil = nilaiA == nilaiB;
document.write(`${nilaiA} == ${nilaiB} = ${hasil} <br>`);

// Kurang dari
var hasil = nilaiA < nilaiB;
document.write(`${nilaiA} < ${nilaiB} = ${hasil} <br>`);

// Lebih dari
var hasil = nilaiA > nilaiB;
document.write(`${nilaiA} > ${nilaiB} = ${hasil} <br>`);

// Kurang dari Sama dengan
var hasil = nilaiA <= nilaiB;
document.write(`${nilaiA} <= ${nilaiB} = ${hasil} <br>`);

// Lebih dari Sama dengan
var hasil = nilaiA >= nilaiB;
document.write(`${nilaiA} >= ${nilaiB} = ${hasil} <br>`);

// Tidak sama dengan
var hasil = nilaiA != nilaiB;
document.write(`${nilaiA} != ${nilaiB} = ${hasil} <br>`);

var nilaiC = "11";
// Sama dengan dua (Hanya membandingkan nilainya saja)
var hasil = nilaiB == nilaiC;
document.write(`${nilaiB} == ${nilaiC} = ${hasil} <br>`);

// Sama dengan tiga (Membandingkan Tipe data dan Nilai)
var hasil = nilaiB === nilaiC;
document.write(`${nilaiB} === ${nilaiC} = ${hasil} <br>`);
