var apiKey = require('./../.env').apiKey;
var parse = require('parse-link-header');

exports.Lookup = function() {

};

exports.Lookup.prototype.getUser = function(userName, displayProfile) {
  //allow for use without apiKey
  var apiUrl;
  if(apiKey){
    apiUrl = "https://api.github.com/users/" + userName + "?access_token=" + apiKey;
  } else{
    apiUrl = "https://api.github.com/users/" + userName;
  }
  $.get(apiUrl).then(function(response){
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
  //allow for use without apiKey
  var apiUrl;
  var linkHeader;
  var pages;

  if(apiKey){
    apiUrl = "https://api.github.com/users/" + userName + "/repos?access_token=" + apiKey;
  } else{
    apiUrl = "https://api.github.com/users/" + userName + "/repos";
  }

  $.ajax({
    url: apiUrl
  }).done(function (data, textStatus, xhr) {
    linkHeader = parse(xhr.getResponseHeader('Link'));
    pages = linkHeader.last.page;
    displayUser(data[0].owner.login, data[0].owner.avatar_url);

    for (var i = 1; i <= pages; i++) {
      var pageUrl = "https://api.github.com/users/" + userName + "/repos?access_token=" + apiKey + "&page=" + i;

      $.get(pageUrl).then(function(response){

        for (var i = 0; i < response.length; i++) {
          var desc = response[i].description;

          if (desc === null || desc === "") {
            desc = "N/A";
          }
          displayRepos(response[i].name, desc, moment(response[i].created_at).format('MMMM Do YYYY, h:mm:ss a'));
        }
      }).fail(function(error){
        $('#userOutput').text(error.responseJSON.message);
      });
    }
  });

};
