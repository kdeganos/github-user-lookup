var apiKey = require('./../.env').apiKey;

exports.Lookup = function() {

};

exports.Lookup.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/kdeganos?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
