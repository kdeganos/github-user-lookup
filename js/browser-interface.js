var Lookup = require('./../js/lookup.js').Lookup;

$(document).ready(function() {
  var lookup = new Lookup();

  $('#userNameButton').click(function() {
    var userName = $('#userName').val();
    lookup.getRepos(userName, displayUser, displayRepos);
  });

  var displayUser = function(userName, avatar) {
    document.getElementById("userOutput").innerHTML = "";

    $('#userOutput').append("<img src='" + avatar + "'><br> <h3>User Name: " + userName + "</h3><br>");
  };

  var displayRepos = function(repoName, description) {
    $('#repoOutput').append("<strong>Repository: </strong>" + repoName + "<br> <strong>Description: </strong>" + description + "<br><br>");
  };
});
