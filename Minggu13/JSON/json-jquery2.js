$.getJSON("data.json", function (hasil) {
  $.each(hasil, function (i) {
    document.getElementById("json2").innerHTML +=
      "NIM: " + hasil.nim + "<br>Nama: " + hasil.nama + "<br>Alamat: " + hasil.alamat + "<br>Jurusan: " + hasil.jurusan + "<br>Makul: <br>" + hasil.makul[i].namaMakul + ", Dosen: " + hasil.makul[i].dosen + "<br>" + "<br><br>";
  });
});
