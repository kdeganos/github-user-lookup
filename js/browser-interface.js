var Lookup = require('./../js/lookup.js').Lookup;
var userName;
$(document).ready(function() {
  var lookup = new Lookup();
  $('#userNameButton').click(function() {
    document.getElementById("profile").innerHTML = "";
    document.getElementById("links").innerHTML = "";
    document.getElementById("userOutput").innerHTML = "";
    document.getElementById("repoTable").innerHTML = "";

    userName = $('#userName').val();
    lookup.getUser(userName, displayProfile);
  });

  var displayProfile = function(fullName, avatar, email, followers) {
    $('#profile').append("<img src='" + avatar + "'><br> <h3>Name: " + fullName + "</h3><br><h4>Email: " + email + "<br> <h4>Followers: " + followers);
    $('#links').append("<a id='repos'>View Repositories</a>");
  };

  $('#links').click(function() {
    document.getElementById("profile").innerHTML = "";
    document.getElementById("links").innerHTML = "";
    document.getElementById("userOutput").innerHTML = "";
    document.getElementById("repoTable").innerHTML = "";
    $('#repoTable').append("<tr><th>Repository</th><th>Description</th><th>Date Created</th></tr>");
    lookup.getRepos(userName, displayUser, displayRepos);
  });

  var displayUser = function(userName, avatar) {
    $('#userOutput').append("<img src='" + avatar + "'><br> <h3>User Name: " + userName + "</h3><br>");
  };

  var displayRepos = function(repoName, description, date) {
    // $('#repoOutput').append("<strong>Repository: </strong>" + repoName + "<br> <strong>Description: </strong>" + description + "<br><br>");
    $('#repoTable').append("<tr><td>" + repoName + "</td><td>" + description + "</td><td>" + date + "</td></tr>");
  };

});
