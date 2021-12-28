var url = "http://localhost/Minggu13/AJAX/ajax-1-kode.json";

var data = {
  name: "Javascript",
  NomorFavorit: 90,
  Hobi: "Makan",
};

$.post(url, data, function (data, status) {
  document.getElementById("nameJS").innerHTML = "Data Berhasil Terkirim";
});

$.get(url, function (data, status) {
  $("#namaSaya").text(data[0].name);
  $("#noFavoritSaya").text(data[0].NomorFavorit);
  $("#hobiSaya").text(data[0].Hobi);
  $("#namaDia").text(data[1].name);
  $("#noFavoritDia").text(data[1].NomorFavorit);
  $("#hobiDia").text(data[1].Hobi);
  $("#nameJS").text(data[2].name);
});
