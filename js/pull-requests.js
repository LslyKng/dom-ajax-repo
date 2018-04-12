fetch("https://api.github.com/repos/Codeyourfuture/js-exercises/pulls")
  .then(function(info) {
    return info.json();
  })
  .then(function(pulls) {
    var allPulls = document.querySelector("#pull-requests-list");
    pulls.forEach(function(pullRequests) {
      var PR = document.createElement("li");
      PR.innerText = pullRequests.name;
      allPulls.appendChild(PR);
    });
    console.log(pulls);
  });

//  fetch("https://api.github.com/users/LslyKng/repos")
//   .then(function(data) {
//     return data.json();
//   })
//   .then(function(repos) {
//     var reposList = document.querySelector("#repos-list");
//     var reposCountItem = document.querySelector("#repos-count");

//     reposCountItem.innerText = repos.length;

//     repos.forEach(function(repo) {
//       var itemLink = document.createElement("a");
//       itemLink.setAttribute("href", repo.html_url);
//       itemLink.innerText = repo.name;

//       var listItem = document.createElement("li");
//       listItem.appendChild(itemLink);

//       reposList.appendChild(listItem);
//     });
//   });
