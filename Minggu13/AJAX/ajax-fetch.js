// fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, cors, *same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//     "Content-Type": "application/json",
//     // "Content-Type": "application/x-www-form-urlencoded",
//     },
//     redirect: "follow", // manual, *follow, error
//     referrer: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//     })
//     .then(response => response.json()); // parses JSON response into native Javascript objects

function loadFetch() {
  var url = "https://jsonplaceholder.typicode.com/posts/";
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      var template = data.map((post) => {
        return `<h4>${post.title}</h4>
            <p>${post.body}</p>
            <hr>`;
      });
      document.getElementById("hasilFetch").innerHTML = template.join("\n");
    })
    .catch(function (e) {
      alert("Gagal Mengambil Data");
    });
}
