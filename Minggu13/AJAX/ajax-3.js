function sendData() {
  var xhr = new XMLHttpRequest();
  var url = "https://jsonplaceholder.typicode.com/posts";

  var data = JSON.stringify({
    title: document.getElementById("title").value,
    body: document.getElementById("isi").value,
    userId: 1,
  });

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    console.log(this.responseText);
  };

  xhr.send(data);
  return false;
}
