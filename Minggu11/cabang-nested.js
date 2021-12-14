var username = prompt("username");
var password = prompt("password");

if (username == "PERSIB") {
  if (password == "JUARA") {
    document.write("PERSIB BANDUNG JUARA!");
  } else {
    document.write("Password Salah, Coba Lagi!");
  }
} else {
  document.write(username + " TIDAK JUARA!");
}
