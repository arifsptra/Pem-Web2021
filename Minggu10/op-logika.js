var nilaiA = 10;
var nilaiB = 11;

var nilaiBenar = nilaiA < nilaiB;
var nilaiSalah = nilaiA > nilaiB;

// Operator AND
var hasil = nilaiBenar && nilaiSalah;
document.write(`${nilaiBenar} && ${nilaiSalah} = ${hasil} <br>`);

// Operator OR
var hasil = nilaiBenar || nilaiSalah;
document.write(`${nilaiBenar} || ${nilaiSalah} = ${hasil} <br>`);

// Operator NOT
var hasil = !nilaiBenar;
document.write(`!${nilaiBenar} = ${hasil} <br>`);

var hasil = !nilaiSalah;
document.write(`!${nilaiSalah} = ${hasil} <br>`);
