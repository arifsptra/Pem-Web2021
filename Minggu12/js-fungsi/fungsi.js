var dataBarang = ["Beras", "Jagung", "Tela", "Pisang"];
var showBarang = () => {
  var listBarang = document.getElementById("listBarang");
  listBarang.innerHTML = "";
  for (let i = 0; i < dataBarang.length; i++) {
    var btnEdit = "<a href='#' onclick='editBarang(" + i + ")' >Edit</a>";
    var btnDelete = "<a href='#' onclick='deleteBarang(" + i + ")' >Delete</a>";
    listBarang.innerHTML += "<li>" + dataBarang[i] + " [" + btnEdit + " | " + btnDelete + "]</li>";
  }
}
var addBarang = () => {
  var input = document.querySelector("Input[name=barang]");
  dataBarang.push(input.value);
  showBarang();
}
var editBarang = (id) => {
  var newBarang = prompt("Nama Baru ", dataBarang[id]);
  dataBarang[id] = newBarang;
  showBarang();
}
var deleteBarang = (id) => {
  dataBarang.splice(id, 1);
  showBarang();
}
showBarang();
