var apiKey = require('./../.env').apiKey;

exports.Lookup = function() {

};

// exports.Lookup.prototype.getUser = function(userName, displayRepos) {
//   $.get('https://api.github.com/users/' + 'kdeganos' + '?access_token=' + apiKey).then(function(response){
//     // console.log(response);
//     displayUser(response[0].owner.login, response[0].owner.avatar_url);
//
//     displayRepos()
//   }).fail(function(error){
//     $('#userOutput').text(error.responseJSON.message);
//   });

exports.Lookup.prototype.getRepos = function(userName, displayUser, displayRepos) {
  $.get('https://api.github.com/users/' + 'kdeganos' + '/repos?access_token=' + apiKey).then(function(response){
    // console.log(response);
    displayUser(response[0].owner.login, response[0].owner.avatar_url);
    console.log(response.length);

    for (var i = 0; i < response.length; i++) {
      displayRepos(response[i].name, response[i].description);
    }
  }).fail(function(error){
    $('#userOutput').text(error.responseJSON.message);
  });
};
