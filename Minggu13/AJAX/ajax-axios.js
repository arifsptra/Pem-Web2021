function loadAxios() {
  document.getElementById("btnAxios").innerHTML = "Loading...";
  document.getElementById("btnAxios").setAttribute("disabled", "true");

  axios
    .get("https://jsonplaceholder.typicode.com/posts/")
    .then(function (response) {
      var template = response.data
        .map((post) => {
          return `<h4>${post.title}</h4>
            <p>${post.body}</p>
            <hr>`;
        })
        .join("");
      document.getElementById("hasilAxios").innerHTML = template;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      document.getElementById("btnAxios").innerHTML = "Done";
      document.getElementById("btnAxios").removeAttribute("disabled");
    });
}
