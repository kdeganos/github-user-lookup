var apiKey = require('./../.env').apiKey;

exports.Lookup = function() {

};

exports.Lookup.prototype.getUser = function(userName, displayProfile) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    var fullName = response.name;
    var email = response.email;

    if (fullName === null) {
      fullName = "N/A";
    }
    if (email === null) {
      email = "N/A";
    }

    displayProfile(fullName, response.avatar_url, email, response.followers);
  }).fail(function(error){
    $('#userOutput').text(error.responseJSON.message);
  });
};

exports.Lookup.prototype.getRepos = function(userName, displayUser, displayRepos) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    displayUser(response[0].owner.login, response[0].owner.avatar_url);

    for (var i = 0; i < response.length; i++) {
      var desc = response[i].description;
      if (desc === null || desc === "") {
        desc = "N/A";
      }
      displayRepos(response[i].name, desc);
    }

  }).fail(function(error){
    $('#userOutput').text(error.responseJSON.message);
  });
};
