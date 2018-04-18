fetch("https://api.github.com/repos/Codeyourfuture/js-exercises/pulls")
  .then(function(info) {
    return info.json();
  })
  .then(function(pull) {
    var pullsList = document.querySelector("#pull-requests-list");

    pull.forEach(function(pullAll) {
      var PR = document.createElement("a");
      PR.setAttribute("href", pullAll.html_url);
      PR.innerText = pullAll.title;
      pullsList.appendChild(PR);

      // var list = document.createElement("li");
      // list.appendChild();
    });
  });
