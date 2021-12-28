function loadContentAjax2() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost/Minggu13/AJAX/ajax-1-kode.json";

  xhr.onloadstart = function () {
    document.getElementById("buttonA2").innerHTML = "Loading...";
  };
  xhr.onerror = function () {
    alert("Gagal Mengambil Data");
  };
  xhr.onloadend = function () {
    if (this.responseText !== "") {
      var data = JSON.parse(this.responseText);
      var nama = document.createElement("h4");
      nama.innerHTML = data[1].name;
      var nomor = document.createElement("h4");
      nomor.innerHTML = data[0].Hobi;

      document.getElementById("hasilAjax2").append(nama, nomor);
      document.getElementById("buttonA2").innerHTML = "Done!";

      setTimeout(function () {
        document.getElementById("buttonA2").innerHTML = "Load Lagi";
      }, 3000);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
function resetAjax() {
  document.getElementById("hasilAjax2").innerHTML = "";
}
