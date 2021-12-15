var pembeli = ["Arif", "Uswa", "Dadang", "David"];
document.write(`Daftar Pembeli: <br>`);

// Cara 1
// Menggunakan for
for (let i = 0; i < pembeli.length; i++) {
  document.write(`${i + 1}. ${pembeli[i]}<br>`);
}

// Cara Ke 2
// Menggunakan Metode forEach
pembeli.forEach((data) => {
  document.write(`${data} <br>`);
});
