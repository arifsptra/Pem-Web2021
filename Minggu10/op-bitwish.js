var nilaiX = 10;
var nilaiY = 11;

// Operator Bitwish AND
var hasil = nilaiX & nilaiY;
document.write(`${nilaiX} & ${nilaiY} = ${hasil} <br>`);

// Operator Bitwish OR
var hasil = nilaiX | nilaiY;
document.write(`${nilaiX} | ${nilaiY} = ${hasil} <br>`);

// Operator Bitwish XOR
var hasil = nilaiX ^ nilaiY;
document.write(`${nilaiX} ^ ${nilaiY} = ${hasil} <br>`);

// Operator Bitwish Negasi
var hasil = ~nilaiX;
document.write(`~${nilaiX} = ${hasil} <br>`);

var hasil = ~nilaiY;
document.write(`~${nilaiY} = ${hasil} <br>`);

// Operator Bitwish Right Shift (>>)
var hasil = nilaiX >> nilaiY;
document.write(`${nilaiX} >> ${nilaiY} = ${hasil} <br>`);

var hasil = nilaiY >> nilaiX;
document.write(`${nilaiY} >> ${nilaiX} = ${hasil} <br>`);

// Operator Bitwish Left Shift (<<)
var hasil = nilaiX << nilaiY;
document.write(`${nilaiX} << ${nilaiY} = ${hasil} <br>`);

var hasil = nilaiY << nilaiX;
document.write(`${nilaiY} << ${nilaiX} = ${hasil} <br>`);

// Operator Bitwish Three Right Shift (>>>) (Unsigned)
var hasil = nilaiX >>> nilaiY;
document.write(`${nilaiX} >>> ${nilaiY} = ${hasil} <br>`);

var hasil = nilaiY >> nilaiX;
document.write(`${nilaiY} >>> ${nilaiX} = ${hasil} <br>`);