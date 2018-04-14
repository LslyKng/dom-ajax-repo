fetch("https://api.github.com/repos/Codeyourfuture/js-exercises/pulls")
  .then(function(info) {
    return info.json();
  })
  .then(function(pulls) {
    var pullsList = document.querySelector("#pull-requests-list");

    pulls.forEach(function(pullAll) {
      var PR = document.createElement("a");
      PR.innerText = pullAll.title;

      pullsList.appendChild(PR);
    });
  });

// fetch("https://api.github.com/users/LslyKng/pulls")
//   .then(function(data) {
//     return data.json();
//   })
//   .then(function(pullRequests) {
//     var pullList = document.querySelector(".js-scroll-trigger");

//     pullRequests.forEach(function(PR) {
//       var itemLink = document.createElement("a");
//       itemLink.setAttribute(
//         "href",
//         www.github.com / repos / Codeyourfuture / js - exercises / pulls
//       );
//       itemLink.innerText = PR.name;

//       var listItem = document.createElement("li");
//       listItem.appendChild(itemLink);

//       // pullList.appendChild(pullRequests);
//     });
//   });
