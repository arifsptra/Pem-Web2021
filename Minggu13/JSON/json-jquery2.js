$.getJSON("data.json", function (hasil) {
  $.each(hasil, function (i) {
    document.getElementById("jsonjquery2").innerHTML +=
      "NIM: " +
      hasil.nim +
      "<br>Nama: " +
      hasil[i].nama +
      "<br>Alamat: " +
      hasil[i].alamat +
      "<br>Jurusan: " +
      hasil[i].jurusan +
      "<br>Makul: <br>" +
      hasil[i].makul[i].namaMakul +
      ", Dosen: " +
      hasil[i].makul[i].dosen +
      "<br>" +
      hasil[i].makul[i + 1].namaMakul +
      ", Dosen: " +
      hasil[i].makul[i + 1].dosen +
      "<br>" +
      "<br><br>";
  });
});
