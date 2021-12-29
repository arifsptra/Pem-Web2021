var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    data.forEach(function (element) {
      document.getElementById("json2").innerHTML +=
        "NIM: " +
        element.nim +
        "<br>Nama: " +
        element.nama +
        "<br>Alamat: " +
        element.alamat +
        "<br>Jurusan: " +
        element.jurusan +
        "<br>Makul: <br>" +
        element.makul[0].namaMakul +
        ", Dosen: " +
        element.makul[0].dosen +
        "<br>" +
        element.makul[1].namaMakul +
        ", Dosen: " +
        element.makul[1].dosen +
        "<br>" +
        element.makul[2].namaMakul +
        ", Dosen: " +
        element.makul[2].dosen +
        "<br><br>";
    });
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();
