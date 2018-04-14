// Write code here to communicate with Github
fetch("https://api.github.com/users/LslyKng/repos")
  .then(function(data) {
    return data.json();
  })
  .then(function(repos) {
    var reposList = document.querySelector("#repos-list");

    var reposCountItem = document.querySelector("#repos-count");
    reposCountItem.innerText = repos.length;

    repos.forEach(function(repo) {
      var itemLink = document.createElement("a");
      itemLink.setAttribute("href", repo.html_url);
      itemLink.innerText = repo.name;

      var listItem = document.createElement("li");
      listItem.appendChild(itemLink);

      reposList.appendChild(listItem);
    });
  });
