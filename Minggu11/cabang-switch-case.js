var jawab = prompt("Kamu Beruntung! Silahkan pilih hadiahmu dengan memasukkan angka antara 1 sampai 5");
var hadiah = "";

switch (jawab) {
  case "1":
    hadiah = "Mobil";
    break;
  case "2":
    hadiah = "Motor";
    break;
  case "3":
    hadiah = "Sepeda";
    break;
  case "4":
    hadiah = "Kulkas";
    break;
  case "5":
    hadiah = "Televisi";
    break;
  default:
    document.write("Maaf, anda salah pilih angka!<br>");
}
if (hadiah == "") {
  document.write("Kamu tidak mendapatkan hadiah!");
} else {
  document.write("Selamat, Kamu mendapatkan " + hadiah);
}
